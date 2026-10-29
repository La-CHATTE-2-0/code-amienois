<script setup lang="ts">
import { computed, ref } from "vue";
import { LIcon, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import type { Aperal, Place } from "../../../types/aperalTypes.ts";
import { aperalStatuses, getAperalStatus } from "../../../services/aperalServices.ts";
import AperalPopupContent from "./AperalPopupContent.vue";

const props = defineProps<{
    aperal: Aperal;
    place: Place;
}>();

const marker = ref<InstanceType<typeof LMarker>>();
const status = computed(() => aperalStatuses[getAperalStatus(props.aperal)]);

defineExpose({
    openPopup: () => marker.value?.leafletObject?.openPopup(),
});
</script>

<template>
    <l-marker
        v-if="place.latlong"
        ref="marker"
        :lat-lng="place.latlong"
        :title="aperal.city"
    >
        <l-icon
            class-name="aperal-pin-anchor"
            :icon-size="[32, 32]"
            :icon-anchor="[16, 32]"
            :popup-anchor="[0, -30]"
        >
            <div class="aperal-pin" :style="{ '--pin-color': status.color }">
                <i :class="['mdi', status.icon]" />
            </div>
        </l-icon>
        <l-popup :options="{ maxWidth: 300 }">
            <AperalPopupContent :aperal="aperal" :place="place" />
        </l-popup>
    </l-marker>
</template>

<style>
/* Non scopé : le HTML de l'icône est recopié par Leaflet hors de l'arbre Vue. */
.aperal-pin-anchor {
    background: none;
    border: none;
}

.aperal-pin {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    background: var(--pin-color);
    border: 2px solid #fff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35);
    transition: transform 150ms ease;
}

.aperal-pin:hover {
    transform: rotate(-45deg) scale(1.12);
}

.aperal-pin .mdi {
    transform: rotate(45deg);
    color: #fff;
    font-size: 16px;
    line-height: 1;
}
</style>
