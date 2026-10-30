<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/13-3-7954763.avif",
    alt: "Jeunes diplômés finlandais coiffés de l’ylioppilaslakki blanche",
};

const enBref = [
    { label: "Portée par", text: "Les bacheliers qui entrent dans l’enseignement supérieur" },
    { label: "Son rôle", text: "Distinguer les premières années des anciens" },
    { label: "Le rite", text: "Les anciens peignent le nez des nouveaux en jaune" },
];
</script>

<template>
    <FolkloreFiche id="ylioppilaslakki" titre="L’ylioppilaslakki" :image="image" :en-bref="enBref">
        <p>
            L’ylioppilaslakki est portée par les diplômés du second cycle qui
            entrent à l’université ou dans d’autres études supérieures. Elle
            distingue les premières années des étudiants plus anciens, vêtus de
            leur <a href="#haalari">haalari</a>. À cette occasion, les anciens
            peignent en jaune le nez de chaque nouvel arrivant.
        </p>

        <v-alert icon="mdi-information-outline" variant="tonal" density="compact" border="start">
            Chez nous, ce nez jaune rappelle le « béjaune », terme de
            fauconnerie que certains étudiants français emploient encore pour
            désigner les bizuths.
        </v-alert>

        <figure class="folklore-figure">
            <img
                src="/images/folklores/First_of_May_in_Helsinki,_student_culture_01.jpg"
                alt="Foule d’étudiants en haalari et ylioppilaslakki dans les rues d’Helsinki le 1er mai"
                width="1195"
                height="918"
                loading="lazy"
            />
            <figcaption>Le 1er mai à Helsinki</figcaption>
        </figure>
    </FolkloreFiche>
</template>
