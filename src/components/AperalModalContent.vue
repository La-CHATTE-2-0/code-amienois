<script setup lang="ts">
import type { Aperal, Place } from "../core/aperals.ts";

defineProps<{
  aperal: Aperal
  place: Place
}>()
</script>

<template>
    <div class="aperal-popup">
        <h3>{{ aperal.city }}
            <template v-if="place.name"> - {{ place.name }}</template>
        </h3>
        <p v-if="aperal.frequency">
            {{ aperal.frequency }}
        </p>
        <p v-if="aperal.description">
            {{ aperal.description }}
        </p>
        <p v-if="place.address">
            {{ place.address }}
        </p>
        <p v-if="aperal.contactUrl" class="mt-4">
            <v-btn
                color="blue-lighten-2"
                text="En savoir plus"
                variant="tonal"
                block
                target="_blank"
                :href="aperal.contactUrl"
            />
        </p>
    </div>
</template>

<style scoped>
.aperal-popup h3 {
    margin: 0 0 6px 0;
    font-size: 1rem;
}
.aperal-popup p {
    margin: 4px 0;
}
</style>
