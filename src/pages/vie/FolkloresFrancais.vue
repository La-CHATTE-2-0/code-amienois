<script setup lang="ts">
import pages from "../../core/page";
import FolkloresFrancaisKhalots from "../../components/folklores/FolkloresFrancais.Khalots.vue";
import FolkloresFrancaisGadzart from "../../components/folklores/FolkloresFrancais.Gadzarts.vue";
import FolkloresFrancaisBitards from "../../components/folklores/FolkloresFrancais.Bitards.vue";

const traditions = [
    { id: "khalot", nom: "Khâlot" },
    { id: "gadzarts", nom: "Gadzarts" },
    { id: "bitard", nom: "Ordre du Bitard" },
];

function allerA(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
    <v-container>
        <article data-fal-article>
            <p class="folklore-lead">
                Les faluchards ne sont pas les seuls à faire vivre un folklore
                étudiant en France. Des classes prépas aux Arts et Métiers, en
                passant par Poitiers, en voici quelques exemples.
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

            <FolkloresFrancaisKhalots />
            <FolkloresFrancaisGadzart />
            <FolkloresFrancaisBitards />

            <p class="folklore-pied">
                Voir aussi :
                <router-link :to="pages.folklore_etranger.url">les folklores étudiants étrangers</router-link>
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
    margin: 1rem 0 2.5rem;
}

.folklore-pied {
    margin-top: 2.5rem;
    font-size: 0.875rem;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
