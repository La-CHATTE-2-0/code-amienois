<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/normal_rv691.jpg",
    alt: "Étudiants en combinaisons colorées couvertes de patchs",
    width: 900,
    height: 574,
};

const enBref = [
    { label: "Son nom", text: "Opiskelijahaalari, « combinaison étudiante »" },
    { label: "Portée par", text: "Les étudiants finlandais et suédois" },
    { label: "Ses couleurs", text: "Propres à chaque école et programme d’études" },
    { label: "Signe distinctif", text: "Signatures, badges, patchs et porte-clés ajoutés par son porteur" },
];
</script>

<template>
    <FolkloreFiche id="haalari" titre="L’opiskelijahaalari" :image="image" :en-bref="enBref">
        <p>
            L’opiskelijahaalari, ou simplement haalari, est une salopette ou
            combinaison propre à chaque école et programme d’études. Chaque
            étudiant la personnalise à sa guise : signatures des copains, noms
            de sponsors, badges, photos, porte-clés, dessins…
        </p>

        <v-alert icon="mdi-information-outline" variant="tonal" density="compact" border="start">
            Chez nous, on pense aux combinaisons agrémentées de patchs et aux
            bracelets d’évènements.
        </v-alert>
    </FolkloreFiche>
</template>
