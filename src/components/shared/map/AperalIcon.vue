<script setup lang="ts">
import { AperalColor, type Aperal } from "../../../core/aperals.ts";
import { LIcon } from "@vue-leaflet/vue-leaflet";

defineProps<{
    aperal: Aperal
}>()

function getUrl(aperal: Aperal) {
    let color = aperal.color;

    if (!color)
        color = AperalColor.Green;

  return `/images/map/marker-icon-2x-${color}.png`;
}

</script>

<template>
    <l-icon
        :icon-url="getUrl(aperal)"
        :iconSize="[25, 41]" 
        :iconAnchor="[12, 41]" 
        :popupAnchor="[1, -34]" 
        :shadowSize="[41, 41]" />
</template>