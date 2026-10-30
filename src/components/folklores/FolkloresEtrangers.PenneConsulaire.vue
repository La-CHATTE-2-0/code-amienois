<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/Penne_Consulaire.png",
    alt: "Penne consulaire à visière courte et bande rouge et blanche",
    width: 393,
    height: 296,
};

const enBref = [
    { label: "Portée par", text: "Les étudiants des Facultés universitaires catholiques de Mons (FUCaM)" },
    { label: "Forme", text: "Une visière courte sur un calot de calotte" },
    { label: "Couleurs", text: "Rouge et blanc, celles de la ville de Mons" },
    { label: "Origine", text: "Allemande" },
];
</script>

<template>
    <FolkloreFiche id="penne-consulaire" titre="La penne consulaire" :image="image" :en-bref="enBref">
        <p>
            Considérée comme une « calotte pennée », la penne consulaire est une
            penne à visière courte dont le calot reprend la configuration de
            <a href="#calotte">la calotte</a>. Elle est portée par les étudiants
            des Facultés universitaires catholiques de Mons (FUCaM), et les
            couleurs rouge et blanche de sa bande rappellent celles de la ville.
            Elle est d’origine allemande.
        </p>
    </FolkloreFiche>
</template>
