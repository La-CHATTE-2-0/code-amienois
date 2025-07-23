<script setup lang="ts">
import ImageFalSvg from './SchemaSvg.vue'
</script>

<template>
    <v-container>
        <h2>Les parties de la faluches</h2>

        <ImageFalSvg></ImageFalSvg>
        
        <p>
            Il existe plusieurs parties sur la faluches pour les insignes et les pin's. Selon l'endroit où le
            pin's/l'insigne est placé, il peut gagner en signification
        </p>
            <ol class="ml-6">
                <li>Officielle</li>
                <li>Personnelle</li>
                <li>Voyages estudiantins</li>
                <li>Évènements estudiantins</li>
                <li>Échanges</li>
                <li>Associations</li>
            </ol>
    </v-container>
</template>

<style lang="css" scoped>
svg {
    fill: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity)) !important;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
}
</style>