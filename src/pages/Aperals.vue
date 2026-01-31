<script setup lang="ts">
import { ref } from "vue";
import { aperals_list } from "../core/aperals.ts";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import AperalModalContent from "../components/AperalModalContent.vue";

let zoom = ref(6);
let center = ref([49.895102, 2.307152]);
</script>

<template>
    <div id="map">
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
            >
            </l-tile-layer>
            <template v-for="aperal in aperals_list">
                <template v-for="place in aperal.places">
                    <l-marker v-if="place.latlong" :lat-lng="place.latlong">
                        <l-popup>
                            <AperalModalContent
                                :aperal="aperal"
                                :place="place"
                            />
                        </l-popup>
                    </l-marker>
                </template>
            </template>
        </l-map>
    </div>
</template>

<style>
#map {
    height: 100vh;
    width: auto;
}
</style>
