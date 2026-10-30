<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/osc.jpg",
    alt: "Groupe d’étudiants belges coiffés de calottes",
    width: 2048,
    height: 1365,
};

const enBref = [
    { label: "Portée par", text: "Les étudiants catholiques des universités francophones, et à Gand" },
    { label: "Apparition", text: "Imaginée vers 1890, adoptée en 1895 par la SGBEC" },
    { label: "Inspiration", text: "Le talpack des zouaves pontificaux" },
    { label: "Son nom", text: "Une reprise ironique de « calotin »" },
];
</script>

<template>
    <FolkloreFiche id="calotte" titre="La calotte" :image="image" :en-bref="enBref">
        <p>
            La calotte est le couvre-chef caractéristique des étudiants
            universitaires francophones (et gantois) de confession catholique
            en Belgique. Imaginée au début des années 1890 par Armand Thiéry,
            étudiant puis professeur à Louvain, elle est choisie en 1895 par la
            SGBEC (Société générale bruxelloise des étudiants catholiques) comme
            couvre-chef des étudiants catholiques.
        </p>
        <p>
            Thiéry s’était inspiré du talpack de grande tenue des zouaves
            pontificaux pour symboliser l’idéal et l’engagement des jeunes
            universitaires catholiques. La toque fut largement diffusée grâce au
            périodique estudiantin L’Escholier et à l’énergie de ses fondateurs,
            Thomas Braun et Edmond Carton de Wiart, étudiants en droit à Louvain
            vers 1896. C’est ce dernier qui proposa de la baptiser « calotte »,
            en reprenant ironiquement le terme de « calotin » dont les libéraux
            (les « gueux ») affublaient les étudiants catholiques. Au XIXe
            siècle, les bagarres entre les deux camps étaient légion.
        </p>

        <figure class="folklore-figure">
            <img
                src="/images/folklores/calotte.png"
                alt="Calotte vue de face, avec son ruban et ses insignes"
                width="500"
                height="500"
                loading="lazy"
            />
        </figure>

        <p>
            La calotte est restée le signe distinctif des étudiants catholiques.
            La fin des années 1960 aurait pu sonner sa fin à l’UCL (Université
            catholique de Louvain), avec les courants de pensée hérités de Mai 68
            et la scission entre l’UCL et la KUL. Tombée en léthargie, elle a été
            préservée par les Ordres (corporations étudiantes) et quelques
            régionales, qui firent office de conservatoire et permirent son
            renouveau au début des années 1980.
        </p>

        <v-alert icon="mdi-information-outline" variant="tonal" density="compact" border="start">
            Face aux « calotins », les étudiants des universités libres portent
            <a href="#penne">la penne</a>.
        </v-alert>
    </FolkloreFiche>
</template>
