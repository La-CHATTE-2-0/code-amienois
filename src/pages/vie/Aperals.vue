<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watch } from "vue";
import { useDisplay, useTheme } from "vuetify";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import AperalFilters from "../../components/shared/map/AperalFilters.vue";
import AperalMarker from "../../components/shared/map/AperalMarker.vue";
import {
    aperalStatuses,
    getAperalStatus,
    loadAperals,
    weekDays,
} from "../../services/aperalServices.ts";
import type { Aperal, AperalStatus, WeekDay } from "../../types/aperalTypes.ts";

type LatLng = [number, number];
type MarkerHandle = { openPopup: () => void };
/* Sous-ensemble de L.Map utilisé ici (pas de @types/leaflet dans le projet) */
type LeafletMap = {
    fitBounds: (bounds: LatLng[], options?: object) => void;
    setView: (center: LatLng, zoom: number) => void;
    flyTo: (center: LatLng, zoom: number, options?: object) => void;
    once: (event: string, handler: () => void) => void;
};

const FRANCE_CENTER: LatLng = [46.6, 2.4];
const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
/* Sur téléphone, les filtres flottent en bas de la carte, à portée de pouce */
const { xs } = useDisplay();

/* Données */
const aperals = ref<Aperal[]>([]);
const loading = ref(true);
const error = ref(false);

async function fetchAperals() {
    loading.value = true;
    error.value = false;
    try {
        aperals.value = await loadAperals();
    } catch {
        error.value = true;
    } finally {
        loading.value = false;
    }
}

onMounted(fetchAperals);

/* Filtres (une sélection vide = pas de filtre) */
const search = ref("");
const selectedDays = ref<WeekDay[]>([]);
const selectedStatuses = ref<AperalStatus[]>([]);

const normalize = (value: string) =>
    value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

const filteredAperals = computed(() => {
    const query = normalize(search.value.trim());

    return aperals.value.filter((aperal) => {
        const matchesSearch =
            !query ||
            normalize(aperal.city).includes(query) ||
            aperal.places.some((place) => place.name && normalize(place.name).includes(query));
        const matchesDays =
            !selectedDays.value.length ||
            aperal.days?.some((day) => selectedDays.value.includes(day));
        const matchesStatus =
            !selectedStatuses.value.length ||
            selectedStatuses.value.includes(getAperalStatus(aperal));

        return matchesSearch && matchesDays && matchesStatus;
    });
});

const dayCounts = computed(
    () =>
        Object.fromEntries(
            weekDays.map(({ value }) => [
                value,
                aperals.value.filter((aperal) => aperal.days?.includes(value)).length,
            ]),
        ) as Record<WeekDay, number>,
);

const statusCounts = computed(() => {
    const counts: Record<AperalStatus, number> = { active: 0, irregular: 0, inactive: 0 };
    aperals.value.forEach((aperal) => counts[getAperalStatus(aperal)]++);
    return counts;
});

const hasFilters = computed(
    () => !!search.value || !!selectedDays.value.length || !!selectedStatuses.value.length,
);

function resetFilters() {
    search.value = "";
    selectedDays.value = [];
    selectedStatuses.value = [];
}

/* Carte */
const map = shallowRef<LeafletMap>();
const mapSection = ref<HTMLElement>();
const markerHandles = new Map<string, MarkerHandle>();

const markers = computed(() =>
    filteredAperals.value.flatMap((aperal) =>
        aperal.places
            .filter((place) => place.latlong)
            .map((place, index) => ({ key: `${aperal.city}-${index}`, aperal, place })),
    ),
);

function registerMarker(key: string, handle: unknown) {
    if (handle) markerHandles.set(key, handle as MarkerHandle);
    else markerHandles.delete(key);
}

function fitToMarkers() {
    if (!map.value) return;
    const points = markers.value.map(({ place }) => place.latlong!);

    if (points.length) {
        map.value.fitBounds(points, {
            paddingTopLeft: [40, 40],
            // Laisse la place au panneau de filtres flottant sur mobile
            paddingBottomRight: [40, xs.value ? 130 : 40],
            maxZoom: 12,
        });
    } else {
        map.value.setView(FRANCE_CENTER, 5);
    }
}

function focusAperal(aperal: Aperal) {
    const target = markers.value.find((marker) => marker.aperal === aperal);
    if (!map.value || !target) return;

    mapSection.value?.scrollIntoView({ behavior: "smooth", block: "center" });
    map.value.once("moveend", () => markerHandles.get(target.key)?.openPopup());
    map.value.flyTo(target.place.latlong!, 13, { duration: 0.8 });
}

function onMapReady(instance: LeafletMap) {
    map.value = instance;
    fitToMarkers();
}

watch(filteredAperals, fitToMarkers);
</script>

<template>
    <v-container class="aperals">
        <div class="aperals__filters mb-4">
            <v-text-field
                v-model="search"
                placeholder="Rechercher une ville ou un bar"
                prepend-inner-icon="mdi-magnify"
                variant="solo-filled"
                density="comfortable"
                rounded="lg"
                flat
                clearable
                hide-details
            />

            <AperalFilters
                v-if="!xs"
                v-model:days="selectedDays"
                v-model:statuses="selectedStatuses"
                :day-counts="dayCounts"
                :status-counts="statusCounts"
            />
        </div>

        <div
            ref="mapSection"
            class="aperals__map"
            :class="{ 'aperals__map--dark': isDark }"
        >
            <l-map
                :zoom="5"
                :center="FRANCE_CENTER"
                :min-zoom="4"
                :options="{ zoomSnap: 0.5 }"
                :use-global-leaflet="false"
                @ready="onMapReady"
            >
                <l-tile-layer
                    :url="TILE_URL"
                    :attribution="TILE_ATTRIBUTION"
                    layer-type="base"
                    name="Carte de France des apérals"
                />
                <AperalMarker
                    v-for="marker in markers"
                    :key="marker.key"
                    :ref="(handle) => registerMarker(marker.key, handle)"
                    :aperal="marker.aperal"
                    :place="marker.place"
                />
            </l-map>

            <AperalFilters
                v-if="xs"
                v-model:days="selectedDays"
                v-model:statuses="selectedStatuses"
                :day-counts="dayCounts"
                :status-counts="statusCounts"
                class="aperals__floating-filters"
                compact
            />

            <v-btn
                class="aperals__recenter"
                icon="mdi-crosshairs-gps"
                size="small"
                title="Recentrer la carte"
                @click="fitToMarkers"
            />

            <v-overlay
                :model-value="loading"
                contained
                persistent
                class="align-center justify-center"
            >
                <v-progress-circular indeterminate color="primary" />
            </v-overlay>
        </div>

        <v-alert
            v-if="error"
            type="error"
            variant="tonal"
            class="mt-4"
            text="Impossible de charger les apérals."
        >
            <template #append>
                <v-btn variant="text" text="Réessayer" @click="fetchAperals" />
            </template>
        </v-alert>

        <section v-else-if="!loading" class="mt-8">
            <div class="d-flex align-center justify-space-between mb-2">
                <h2 class="text-h6">
                    {{ filteredAperals.length }}
                    {{ filteredAperals.length > 1 ? "villes" : "ville" }}
                </h2>
                <v-btn
                    v-if="hasFilters"
                    variant="text"
                    size="small"
                    prepend-icon="mdi-filter-remove-outline"
                    text="Réinitialiser"
                    @click="resetFilters"
                />
            </div>

            <v-sheet v-if="filteredAperals.length" rounded="lg" class="overflow-hidden">
                <v-list lines="two" bg-color="transparent">
                    <v-list-item
                        v-for="aperal in filteredAperals"
                        :key="aperal.city"
                        @click="focusAperal(aperal)"
                    >
                        <template #prepend>
                            <v-avatar
                                :color="aperalStatuses[getAperalStatus(aperal)].color"
                                size="36"
                            >
                                <v-icon
                                    :icon="aperalStatuses[getAperalStatus(aperal)].icon"
                                    color="white"
                                    size="18"
                                />
                            </v-avatar>
                        </template>

                        <v-list-item-title class="font-weight-medium">
                            {{ aperal.city }}
                            <span
                                v-if="aperal.places.some((place) => place.name)"
                                class="text-medium-emphasis font-weight-regular"
                            >
                                ·
                                {{ aperal.places.map((place) => place.name).filter(Boolean).join(", ") }}
                            </span>
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ aperal.frequency }}</v-list-item-subtitle>

                        <template #append>
                            <v-icon icon="mdi-map-marker-right-outline" size="20" class="text-medium-emphasis" />
                        </template>
                    </v-list-item>
                </v-list>
            </v-sheet>

            <div v-else class="text-center text-medium-emphasis py-8">
                <v-icon icon="mdi-glass-mug-off" size="40" class="mb-2" />
                <p>Aucun apéral ne correspond à ces filtres.</p>
            </div>
        </section>
    </v-container>
</template>

<style scoped>
.aperals__filters {
    display: grid;
    gap: 8px;
}

.aperals__map {
    position: relative;
    height: clamp(360px, 65vh, 600px);
    border-radius: var(--app-radius);
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    isolation: isolate;
}

.aperals__recenter {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1000;
}

.aperals__floating-filters {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 24px;
    z-index: 1000;
    padding: 4px 8px;
    border-radius: 14px;
    background: rgba(var(--v-theme-surface), 0.92);
    backdrop-filter: blur(6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 599px) {
    .aperals__map {
        height: 72vh;
    }
}

/* Pas de fond sombre libre chez OSM : on inverse les tuiles claires */
.aperals__map--dark :deep(.leaflet-tile-pane) {
    filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.9) saturate(0.5);
}

/* Popups et contrôles Leaflet aux couleurs du thème Vuetify */
.aperals__map :deep(.leaflet-container) {
    font: inherit;
    background: rgb(var(--v-theme-surface));
}

.aperals__map :deep(.leaflet-popup-content-wrapper),
.aperals__map :deep(.leaflet-popup-tip) {
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-on-surface));
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.aperals__map :deep(.leaflet-popup-content-wrapper) {
    border-radius: 14px;
}

.aperals__map :deep(.leaflet-popup-content) {
    margin: 14px 16px;
}

.aperals__map :deep(.leaflet-popup-close-button) {
    color: rgb(var(--v-theme-on-surface));
}

.aperals__map :deep(.leaflet-bar a) {
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-on-surface));
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
}

.aperals__map :deep(.leaflet-control-attribution) {
    background: rgba(var(--v-theme-surface), 0.8);
    color: rgba(var(--v-theme-on-surface), 0.7);
}

.aperals__map :deep(.leaflet-control-attribution a) {
    color: inherit;
}
</style>
