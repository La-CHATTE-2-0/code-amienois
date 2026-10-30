<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/blouse-gadzart.jpg",
    alt: "Gadzarts de dos, vêtus de blouses couvertes de dessins et d’inscriptions colorés",
    width: 800,
    height: 533,
};

const enBref = [
    { label: "Qui", text: "Les élèves et anciens élèves des Arts et Métiers (ENSAM)" },
    { label: "Leur nom", text: "La contraction de « Gars des Arts »" },
    { label: "Leur tenue", text: "La blouse, grise les premières années, blanche la dernière" },
    { label: "Leurs valeurs", text: "Entraide, fraternité et tutoiement de rigueur" },
];

const lexique = [
    { label: "Biaude", text: "La blouse, en argad’z, la langue des Gadzarts" },
    { label: "Surn’s", text: "Le surnom reçu en devenant Gadzarts, gardé à vie" },
    { label: "Bucque", text: "La signature graphique du surn’s" },
    { label: "Ancien", text: "Le parrain, élève de la promotion précédente" },
    { label: "Fam’s", text: "La lignée de parrainages qui relie les promotions" },
];
</script>

<template>
    <FolkloreFiche id="gadzarts" titre="Les Gadzarts" :niveau="2" :image="image" :en-bref="enBref">
        <p>
            Gadz’Arts, ou Gadzarts, est le surnom des élèves et anciens élèves de
            l’École nationale supérieure d’arts et métiers (ENSAM, ou Arts et
            Métiers ParisTech). C’est la contraction de « Gars des Arts », « les
            Arts » ou « les Arts et Métiers » étant le diminutif de l’École.
        </p>

        <figure class="folklore-figure">
            <img
                src="/images/folklores/defile_gadzart.jpg"
                alt="Défilé de Gadzarts en blouses grises dans une rue pavée, suivis d’autres en uniforme et casquette"
                width="1600"
                height="1066"
                loading="lazy"
            />
        </figure>

        <p>
            La communauté revendique fièrement ses traditions, fondées sur
            l’entraide et la fraternité, et sur une mémoire orale riche
            d’anecdotes et de chants liés à l’histoire de l’école fondée par
            François-Alexandre-Frédéric de La Rochefoucauld-Liancourt. Dans les
            Écoles, les élèves portent une blouse, la biaude, traditionnellement
            grise en première et deuxième années, puis blanche en dernière année.
            Les blouses de première année restent assez sobres ; celles des
            années suivantes deviennent le support de motifs et de dessins
            colorés souvent très travaillés.
        </p>
        <p>
            Devenu Gadzarts, chaque élève reçoit un surnom qu’il garde ensuite
            avec tous les élèves et anciens élèves. Chacun devient aussi le
            parrain d’un élève de la promotion suivante : ces parrainages
            successifs tissent des liens qui durent bien au-delà de la
            scolarité. Et une règle de savoir-vivre veut que tous les Gadzarts
            se tutoient.
        </p>

        <h3>Petit lexique</h3>
        <dl class="folklore-cadre folklore-list">
            <div v-for="item in lexique" :key="item.label">
                <dt>{{ item.label }}</dt>
                <dd>{{ item.text }}</dd>
            </div>
        </dl>

        <figure class="folklore-figure">
            <img
                src="/images/folklores/image-3-1024x682.png"
                alt="Trois Gadzarts barbus et souriants en uniforme bleu marine à boutons dorés et casquette"
                width="1024"
                height="682"
                loading="lazy"
            />
        </figure>
    </FolkloreFiche>
</template>
