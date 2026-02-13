<script setup lang="ts">
import type { Aperal, Place } from "../../../core/aperals.ts";
import { LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import AperalIcon from "./AperalIcon.vue";
import AperalModalContent from "./AperalModalContent.vue";

defineProps<{
    aperal: Aperal
    place: Place
}>()
</script>

<template>
    <l-marker v-if="place.latlong" :lat-lng="place.latlong">
        <AperalIcon :aperal="aperal" />
        <l-popup>
            <AperalModalContent :aperal="aperal" :place="place" />
        </l-popup>
    </l-marker>
</template>