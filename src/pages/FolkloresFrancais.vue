<script setup lang="ts">
import FolkloresFrancaisKhalots from "../components/folklores/FolkloresFrancais.Khalots.vue";
import FolkloresFrancaisGadzart from "../components/folklores/FolkloresFrancais.Gadzarts.vue";
import FolkloresFrancaisBitards from "../components/folklores/FolkloresFrancais.Bitards.vue";
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
