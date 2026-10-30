<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/une_prepa_litteraire_a_stanislas.jpg",
    alt: "Élèves d’une prépa littéraire du lycée Stanislas coiffés de leur khâlot, sur un toit de Paris",
    width: 1190,
    height: 669,
    legende: "Une prépa littéraire à Stanislas",
};

const enBref = [
    { label: "Porté par", text: "Les élèves de classes préparatoires" },
    { label: "Forme", text: "Un « bonnet de police », comme le calot militaire" },
    { label: "Couleur", text: "Différente selon la filière" },
    { label: "Origine", text: "L’imitation des aînés partis dans les écoles militaires" },
];
</script>

<template>
    <FolkloreFiche id="khalot" titre="Le khâlot" :niveau="2" :image="image" :en-bref="enBref">
        <p>
            Le khâlot (ou calot) est la coiffe traditionnelle des élèves de
            classes préparatoires. C’est un « bonnet de police » dont la couleur
            varie selon la filière. Le porter, c’est afficher sa vie d’étudiant
            et l’intérêt qu’on porte à la vie et aux traditions de son lycée.
        </p>
        <p>
            À l’origine, les prépas scientifiques préparaient leurs élèves aux
            écoles militaires (Saint-Cyr, Polytechnique…). Le calot militaire a
            donc d’abord été porté par imitation des aînés, avant de s’enrichir
            peu à peu de couleurs, d’insignes et de rubans.
        </p>

        <figure class="folklore-figure">
            <img
                src="/images/folklores/57419533.jpg"
                alt="Khâlot bleu marine orné d’étoiles, d’un lion, de lettres dorées et d’un ruban rouge et jaune"
                width="800"
                height="450"
                loading="lazy"
            />
            <figcaption>Un khâlot couvert d’insignes et de rubans</figcaption>
        </figure>
    </FolkloreFiche>
</template>
