<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/czapka_studencka_bx.jpg",
    alt: "Étudiants polonais coiffés de la czapka studencka, en délégation à Bruxelles",
    width: 733,
    height: 550,
    legende: "Délégation d’étudiants polonais à Bruxelles",
};

const enBref = [
    { label: "Son nom", text: "Czapka studencka, « casquette étudiante »" },
    { label: "Portée par", text: "Les étudiants polonais" },
];
</script>

<template>
    <FolkloreFiche id="czapka" titre="La czapka studencka" :image="image" :en-bref="enBref" />
</template>
