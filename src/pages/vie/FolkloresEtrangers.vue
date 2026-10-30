<script setup lang="ts">
import pages from "../../core/page";
import FolkloresEtrangersCalottes from "../../components/folklores/FolkloresEtrangers.Calottes.vue";
import FolkloresEtrangersPenne from "../../components/folklores/FolkloresEtrangers.Penne.vue";
import FolkloresEtrangersPenneConsulaire from "../../components/folklores/FolkloresEtrangers.PenneConsulaire.vue";
import FolkloresEtrangersCzapka from "../../components/folklores/FolkloresEtrangers.Czapka.vue";
import FolkloresEtrangersFeluca from "../../components/folklores/FolkloresEtrangers.Feluca.vue";
import FolkloresEtrangersYlioppilaslakki from "../../components/folklores/FolkloresEtrangers.Ylioppilaslakki.vue";
import FolkloresEtrangersOpiskelijahaalari from "../../components/folklores/FolkloresEtrangers.Opiskelijahaalari.vue";

const traditions = [
    { id: "calotte", nom: "Calotte" },
    { id: "penne", nom: "Penne" },
    { id: "penne-consulaire", nom: "Penne consulaire" },
    { id: "czapka", nom: "Czapka" },
    { id: "feluca", nom: "Feluca" },
    { id: "ylioppilaslakki", nom: "Ylioppilaslakki" },
    { id: "haalari", nom: "Haalari" },
];

function allerA(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
    <v-container>
        <article data-fal-article>
            <p class="folklore-lead">
                La faluche n'est pas la seule coiffe étudiante d'Europe. De la
                Belgique à la Finlande, d'autres folklores ont leurs couvre-chefs,
                leurs couleurs et leurs rites : en voici une sélection, non
                exhaustive.
            </p>

            <nav class="folklore-sommaire" aria-label="Traditions présentées">
                <v-chip
                    v-for="tradition in traditions"
                    :key="tradition.id"
                    :href="`#${tradition.id}`"
                    variant="outlined"
                    @click.prevent="allerA(tradition.id)"
                >
                    {{ tradition.nom }}
                </v-chip>
            </nav>

            <h2>Belgique</h2>
            <FolkloresEtrangersCalottes />
            <FolkloresEtrangersPenne />
            <FolkloresEtrangersPenneConsulaire />

            <h2>Pologne</h2>
            <FolkloresEtrangersCzapka />

            <h2>Italie</h2>
            <FolkloresEtrangersFeluca />

            <h2>Finlande et Suède</h2>
            <FolkloresEtrangersYlioppilaslakki />
            <FolkloresEtrangersOpiskelijahaalari />

            <p class="folklore-pied">
                Voir aussi :
                <router-link :to="pages.folklore_francais.url">les autres folklores français</router-link>
                <br />
                Crédits : Code Valenciennois
            </p>
        </article>
    </v-container>
</template>

<style scoped>
.folklore-lead {
    font-size: 1.05rem;
}

.folklore-sommaire {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 1rem;
}

/* Un liseré sépare chaque pays du précédent */
h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.folklore-pied {
    margin-top: 2.5rem;
    font-size: 0.875rem;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
