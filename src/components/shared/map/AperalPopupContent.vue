<script setup lang="ts">
import { computed } from "vue";
import type { Aperal, Place } from "../../../types/aperalTypes.ts";
import {
    aperalStatuses,
    getAperalStatus,
    getDirectionsUrl,
} from "../../../services/aperalServices.ts";

const props = defineProps<{
    aperal: Aperal;
    place: Place;
}>();

const status = computed(() => aperalStatuses[getAperalStatus(props.aperal)]);
const directionsUrl = computed(() => getDirectionsUrl(props.place));
</script>

<template>
    <div class="aperal-popup">
        <div class="d-flex align-start ga-2 mb-2">
            <div class="flex-grow-1">
                <div class="text-subtitle-1 font-weight-bold">{{ aperal.city }}</div>
                <div v-if="place.name" class="text-body-2 text-medium-emphasis">
                    {{ place.name }}
                </div>
            </div>
            <v-chip size="x-small" :color="status.color" variant="flat" label>
                {{ status.label }}
            </v-chip>
        </div>

        <ul class="aperal-popup__infos">
            <li v-if="aperal.frequency">
                <v-icon icon="mdi-calendar-clock" size="16" />
                <span>{{ aperal.frequency }}</span>
            </li>
            <li v-if="place.address">
                <v-icon icon="mdi-map-marker-outline" size="16" />
                <span>{{ place.address }}</span>
            </li>
            <li v-if="aperal.description">
                <v-icon icon="mdi-information-outline" size="16" />
                <span>{{ aperal.description }}</span>
            </li>
        </ul>

        <div class="d-flex ga-2 mt-3">
            <v-btn
                v-if="directionsUrl"
                :href="directionsUrl"
                target="_blank"
                rel="noopener"
                prepend-icon="mdi-directions"
                variant="tonal"
                size="small"
                class="flex-grow-1"
                text="Itinéraire"
            />
            <v-btn
                v-if="aperal.contactUrl"
                :href="aperal.contactUrl"
                target="_blank"
                rel="noopener"
                prepend-icon="mdi-open-in-new"
                color="primary"
                variant="tonal"
                size="small"
                class="flex-grow-1"
                text="Contact"
            />
        </div>
    </div>
</template>

<style scoped>
.aperal-popup {
    min-width: 220px;
    max-width: 280px;
}

.aperal-popup__infos {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 6px;
}

.aperal-popup__infos li {
    display: grid;
    grid-template-columns: 16px 1fr;
    gap: 8px;
    align-items: start;
    font-size: 0.85rem;
    line-height: 1.35;
}

.aperal-popup__infos .v-icon {
    margin-top: 1px;
    opacity: 0.7;
}
</style>
