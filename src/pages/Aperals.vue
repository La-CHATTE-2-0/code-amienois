<script setup>
import { ref } from 'vue'
import { aperals_list } from '../core/aperals.ts'
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet"


let zoom = ref(6)
let center = ref([49.895102, 2.307152])
</script>

<template>
<div id="map">
    <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
        <l-tile-layer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="Carte de France des apérals">
        </l-tile-layer>
        <l-marker v-for="aperal in aperals_list" :lat-lng="aperal.latlong">
            <l-popup>
                {{ aperal.address }}<br>
                <a :href="aperal.contactUrl">Contact</a>
            </l-popup>
        </l-marker>
    </l-map>
</div>
</template>

<style>
#map { 
    height: 600px; 
    width: auto;
}
</style>