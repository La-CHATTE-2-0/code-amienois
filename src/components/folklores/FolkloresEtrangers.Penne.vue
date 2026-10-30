<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/roi belge.jpg",
    alt: "Le roi des Belges coiffé d’une penne, entouré d’étudiants",
    width: 940,
    height: 470,
    legende: "Le roi des Belges portant une penne à Liège",
};

const enBref = [
    { label: "Portée par", text: "Les étudiants baptisés des universités non catholiques, Hautes Écoles et écoles artistiques" },
    { label: "Apparition", text: "Vers 1850 à l’ULB, en 1861 à Liège" },
    { label: "Son nom", text: "Un mot wallon qui signifie « visière »" },
    { label: "Signe distinctif", text: "Sa longue visière, allongée au fil des années 1970" },
];
</script>

<template>
    <FolkloreFiche id="penne" titre="La penne" :image="image" :en-bref="enBref">
        <p>
            La penne est la coiffe traditionnelle et folklorique des étudiants
            belges des universités non catholiques, ainsi que de plusieurs Hautes
            Écoles et écoles artistiques. Si elle est partout considérée comme un
            élément porteur d’une grande charge symbolique, ses traditions et leur
            sens varient de faculté en faculté et d’université en université.
        </p>
        <p>
            La penne est indissociable du baptême et du cercle étudiant qui l’a
            administré, cercle lui-même fortement lié à une faculté ou à une
            section de faculté. Le corps professoral a souvent été baptisé, ou
            baptise à son tour : toutes ces notions se télescopent, et l’on ne
            peut parler de la penne sans parler de cercle, de faculté et de
            baptême estudiantin.
        </p>

        <figure class="folklore-figure">
            <img
                class="folklore-image--detouree"
                src="/images/folklores/Penne_CM.png"
                alt="Penne vue de profil, avec sa longue visière"
                width="728"
                height="343"
                loading="lazy"
            />
        </figure>

        <p>
            Seuls les étudiants baptisés la portent aujourd’hui. Elle apparaît
            vers 1850 à l’ULB (Université libre de Bruxelles) et en 1861 à
            Liège, où elle aurait d’abord été appelée « crapuleuse » avant de
            prendre le nom de penne après 1918. On la décrit alors comme une
            casquette étroite en drap, à visière de toile cirée, et verte, couleur
            de l’ULB : il faudra attendre vingt ans pour que les couleurs se
            diversifient. Sa forme rappelle la coiffe estudiantine allemande, et
            sa visière s’est progressivement allongée jusqu’à ses dimensions
            actuelles au cours des années 1970.
        </p>
        <p>
            Son origine et sa signification font l’objet de plusieurs
            interprétations. Pour certains, la casquette, emblème des gens du
            peuple à l’époque, permettait à l’étudiant de marquer son
            indépendance vis-à-vis de la bourgeoisie, dont il était pourtant bien
            souvent issu. D’autres affirment que, la penne ayant été créée en
            opposition à <a href="#calotte">la calotte</a>, sa longue visière
            protège les yeux du regard de Dieu ; une lecture contestée, puisque
            les étudiants pennés étaient souvent athées, voire anticléricaux.
        </p>
    </FolkloreFiche>
</template>
