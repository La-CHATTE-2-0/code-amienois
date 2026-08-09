<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { loadAperals } from "../../services/aperalServices.ts";
import { type Aperal } from "../../types/aperalTypes.ts";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import AperalMarker from "../../components/shared/map/AperalMarker.vue";

let zoom = ref(6);
let center = ref([49.895102, 2.307152]);
const aperals = ref<Aperal[]>([]);

onMounted(async () => {
    aperals.value = await loadAperals();
});

const weekDays = [
    { label: "Lun", value: "lundi" },
    { label: "Mar", value: "mardi" },
    { label: "Mer", value: "mercredi" },
    { label: "Jeu", value: "jeudi" },
    { label: "Ven", value: "vendredi" },
];

const selectedDays = ref<string[]>([]);

const filteredAperals = computed(() => {
    if (selectedDays.value.length === 0) {
        return aperals.value;
    }

    return aperals.value.filter((aperal) =>
        aperal.days?.some((day) => selectedDays.value.includes(day)),
    );
});
</script>

<template>
    <div id="map-container">
        <v-card class="filters pa-3" rounded="lg" elevation="2">
            <div class="d-flex flex-wrap align-center justify-center mb-2">
                <v-chip-group
                    v-model="selectedDays"
                    multiple
                    selected-class="text-primary"
                >
                    <v-chip
                        class="mr-0"
                        v-for="day in weekDays"
                        :key="day.value"
                        :value="day.value"
                        filter
                    >
                        {{ day.label }}
                    </v-chip>
                </v-chip-group>
            </div>
        </v-card>

        <div id="map">
            <ClientOnly>
                <l-map
                    ref="map"
                    v-model:zoom="zoom"
                    v-model:center="center"
                    :useGlobalLeaflet="false"
                >
                    <l-tile-layer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        layer-type="base"
                        name="Carte de France des apérals"
                    />

                    <template v-for="aperal in filteredAperals" :key="aperal.city">
                        <template
                            v-for="place in aperal.places"
                            :key="place.latlong?.join(',')"
                        >
                            <AperalMarker :place="place" :aperal="aperal" />
                        </template>
                    </template>
                </l-map>
            </ClientOnly>
        </div>
    </div>
</template>

<style>
#map-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
}
#map {
    height: 100%;
}

.filters {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
}
</style>
