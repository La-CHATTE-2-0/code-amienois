<script setup lang="ts">
import FolkloresEtrangersCalottes from "../components/folklores/FolkloresEtrangers.Calottes.vue";
import FolkloresEtrangersPenne from "../components/folklores/FolkloresEtrangers.Penne.vue";
import FolkloresEtrangersPenneConsulaire from "../components/folklores/FolkloresEtrangers.PenneConsulaire.vue";
</script>

<template>
    <v-container>
        <p class="text-justify">
            Il existe d'autres folklores étudiants dans les pays étrangers, en
            voici une liste non exhaustive:
        </p>

        <FolkloresEtrangersCalottes></FolkloresEtrangersCalottes>
        <FolkloresEtrangersPenne></FolkloresEtrangersPenne>
        <FolkloresEtrangersPenneConsulaire></FolkloresEtrangersPenneConsulaire>

        <span class="text-caption">Crédits: Code Valenciennois</span>
    </v-container>
</template>
