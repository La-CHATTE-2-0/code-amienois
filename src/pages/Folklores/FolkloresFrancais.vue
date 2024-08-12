<script setup lang="ts">
import FolkloresFrancaisKhalots from "./FolkloresFrancais.Khalots.vue";
import FolkloresFrancaisGadzart from "./FolkloresFrancais.Gadzarts.vue";
import FolkloresFrancaisBitards from "./FolkloresFrancais.Bitards.vue";
</script>

<template>
    <v-container>
        <p class="text-justify">
            Il existe d'autres folklores étudiants autre que les faluchards en
            France, en voici quelques exemples:
        </p>

        <FolkloresFrancaisKhalots></FolkloresFrancaisKhalots>
        <FolkloresFrancaisGadzart></FolkloresFrancaisGadzart>
        <FolkloresFrancaisBitards></FolkloresFrancaisBitards>

        <span class="text-caption">Crédits: Code Valenciennois</span>
    </v-container>
</template>
