<script setup lang="ts">
import pages from "../../core/page";
// Contenu adapté de la page Rabelais de l'Ordre Rabelaisien de Belgique
import { facettes, enBref, paradoxes, biographie, philosophie, livres } from "../../core/rabelais.json";

const SOURCE_URL = "https://ordrerabelaisien.be/rabelais";
</script>

<template>
    <v-container>
        <article data-fal-article>
            <div class="fiche-intro">
                <img
                    class="fiche-image fiche-portrait"
                    src="/images/other/rabelais-portrait.jpg"
                    alt="Portrait de François Rabelais"
                    width="1000"
                    height="1237"
                />
                <div>
                    <p class="fiche-lead rabelais-lead">
                        Figure de proue de l’Humanisme de la Renaissance
                        française, François Rabelais est le maître à penser des
                        faluchards : un bon vivant érudit qui a fait du rire et
                        de la bonne chère une façon d’apprendre.
                    </p>
                    <div class="fiche-chips rabelais-chips">
                        <v-chip
                            v-for="facette in facettes"
                            :key="facette"
                            variant="outlined"
                            size="small"
                        >
                            {{ facette }}
                        </v-chip>
                    </div>
                    <dl class="fiche-cadre fiche-list rabelais-list">
                        <div v-for="item in enBref" :key="item.label">
                            <dt>{{ item.label }}</dt>
                            <dd>{{ item.text }}</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <h2 class="mt-8">Un esprit libre</h2>
            <p>
                Issu de la haute bourgeoisie, passionné de langues anciennes, il
                découvre le grec au couvent franciscain de Fontenay-le-Comte,
                alors que la Sorbonne en proscrit l’étude. Avide de savoir, il
                rejoint les Bénédictins, plus ouverts à la culture profane, puis
                quitte la vie monastique pour la médecine, où il excelle grâce à
                sa connaissance des textes des médecins grecs de l’Antiquité.
            </p>
            <p>
                Savant et médecin reconnu de son vivant, c’est pourtant son
                œuvre romanesque qui l’a fait passer à la postérité. Sa
                <strong>saga des Géants</strong>, en cinq romans, mêle figures
                médiévales et populaires à un regard résolument moderne et
                humain sur le monde : humour, satire, personnages hauts en
                couleur et situations grotesques à la limite de l’absurde. Il y
                montre l’influence de l’<em>Utopie</em> de Thomas More et
                d’Érasme, dont il était un grand admirateur.
            </p>
            <p>
                Souvent censuré pour ses positions évangélistes et ses critiques
                du clergé, il publie d’abord sous le pseudonyme
                <strong>Alcofribas Nasier</strong>. Le succès venu, la
                protection de <strong>François Ier</strong>, grand mécène de la
                Renaissance, lui permet de signer de son vrai nom.
            </p>

            <h3 class="fiche-subtitle">Un personnage pétri de paradoxes</h3>
            <div class="rabelais-paradoxes">
                <div v-for="item in paradoxes" :key="item.text" class="fiche-cadre rabelais-paradoxe">
                    <v-icon :icon="item.icon" color="secondary" size="28" />
                    <span>{{ item.text }}</span>
                </div>
            </div>

            <h2 class="mt-8">Sa vie en dates</h2>
            <v-timeline density="compact" side="end" class="rabelais-timeline" truncate-line="both">
                <v-timeline-item
                    v-for="etape in biographie"
                    :key="etape.date"
                    :dot-color="etape.livre ? 'secondary' : 'primary'"
                    :icon="etape.livre ? 'mdi-book-open-variant' : undefined"
                    :size="etape.livre ? 'small' : 'x-small'"
                    fill-dot
                >
                    <div class="rabelais-etape">
                        <div class="rabelais-date">{{ etape.date }}</div>
                        <div class="rabelais-etape-titre">{{ etape.titre }}</div>
                        <p>{{ etape.texte }}</p>
                    </div>
                </v-timeline-item>
            </v-timeline>

            <h2 class="mt-8">Sa philosophie</h2>
            <div class="rabelais-grille">
                <div v-for="idee in philosophie" :key="idee.titre" class="fiche-cadre rabelais-idee">
                    <div class="rabelais-idee-titre">
                        <v-icon :icon="idee.icon" color="primary" />
                        <span>{{ idee.titre }}</span>
                    </div>
                    <p>{{ idee.texte }}</p>
                </div>
            </div>

            <h2 class="mt-8">Son œuvre : la saga des Géants</h2>
            <p>
                Cinq romans qui suivent les géants Gargantua et Pantagruel. Les
                pages de titre reprennent l’orthographe d’époque.
            </p>
            <div class="rabelais-livres">
                <div
                    v-for="livre in livres"
                    :key="livre.titre"
                    class="rabelais-livre"
                    :style="{ '--livre-couleur': livre.couleur }"
                >
                    <div class="rabelais-livre-entete">
                        <span>{{ livre.numero }}</span>
                        <span>{{ livre.annee }}</span>
                    </div>
                    <div class="rabelais-livre-page">
                        <div class="rabelais-livre-titre">{{ livre.titre }}</div>
                        <div class="rabelais-livre-sous-titre">{{ livre.sousTitre }}</div>
                        <div class="rabelais-livre-auteur">{{ livre.auteur }}</div>
                        <div v-if="livre.note" class="rabelais-livre-note">« {{ livre.note }} »</div>
                    </div>
                </div>
            </div>

            <h2 class="mt-8">Et la faluche dans tout ça ?</h2>
            <figure class="rabelais-citation">
                <blockquote>
                    « Si désirez être bons Pantagruélistes (c’est-à-dire vivre en
                    paix, joie, santé, faisant toujours grande chère), ne vous
                    fiez jamais en gens qui regardent par un pertuis. »
                </blockquote>
                <figcaption>François Rabelais, <cite>Pantagruel</cite></figcaption>
            </figure>
            <p>
                Festoyons, rions et chantons dans le respect de son œuvre, mais
                souvenons-nous que Pantagruel et Gargantua étaient des géants :
                adaptons notre consommation à notre morphologie.
                <router-link :to="pages.code.url">Retour au Code</router-link>
            </p>

            <p class="rabelais-source">
                Source :
                <a :href="SOURCE_URL" target="_blank" rel="noopener">{{ SOURCE_URL }}</a>
            </p>
            <p class="fiche-voir-aussi">
                Voir aussi :
                <router-link :to="pages.bacchus.url">Bacchus</router-link> ·
                <router-link :to="pages.gambrinus.url">Gambrinus</router-link>
            </p>
        </article>
    </v-container>
</template>

<style scoped>
article p {
    margin-top: 0.75rem;
}

.fiche-intro .rabelais-lead {
    margin-top: 0;
}

.rabelais-chips,
.rabelais-list {
    margin-top: 1rem;
}

.rabelais-date {
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgb(var(--v-theme-secondary));
    letter-spacing: 0.02em;
}

.rabelais-paradoxes {
    display: grid;
    gap: 12px;
}

@media (min-width: 600px) {
    .rabelais-paradoxes {
        grid-template-columns: repeat(3, 1fr);
    }
}

.rabelais-paradoxe {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    font-weight: 500;
}

/* Frise */
.rabelais-timeline {
    margin-top: 1rem;
}

.rabelais-timeline :deep(.v-timeline-item__body) {
    padding-bottom: 8px;
}

.rabelais-etape-titre {
    font-weight: 600;
    font-size: 1.05rem;
}

.rabelais-etape p {
    margin-top: 0.25rem;
}

/* Philosophie */
.rabelais-grille {
    display: grid;
    gap: 12px;
    margin-top: 1rem;
}

@media (min-width: 960px) {
    .rabelais-grille {
        grid-template-columns: repeat(2, 1fr);
    }
}

.rabelais-idee {
    padding: 16px;
}

.rabelais-idee-titre {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
}

.rabelais-idee p {
    margin-top: 0.5rem;
}

/* Livres : une couverture colorée par roman, page de titre en papier ancien */
.rabelais-livres {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 1rem;
}

.rabelais-livre {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 4px 12px 12px 4px;
    border-left: 10px solid var(--livre-couleur);
    background: var(--livre-couleur);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.rabelais-livre-entete {
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #f3ead2;
}

.rabelais-livre-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 18px 14px;
    text-align: center;
    background: #eeeedd;
    color: #2b2116;
    font-family: Georgia, "Times New Roman", serif;
}

.rabelais-livre-titre {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--livre-couleur);
}

.rabelais-livre-sous-titre {
    font-size: 0.9rem;
    font-style: italic;
}

.rabelais-livre-auteur {
    margin-top: auto;
    font-size: 0.8rem;
    font-variant: small-caps;
}

.rabelais-livre-note {
    font-size: 0.75rem;
    opacity: 0.8;
}

/* Citation */
.rabelais-citation {
    margin: 1rem 0 0;
    padding: 16px 20px;
    border-left: 4px solid rgb(var(--v-theme-secondary));
    border-radius: 0 12px 12px 0;
    background: rgba(var(--v-theme-secondary), 0.08);
}

.rabelais-citation blockquote {
    font-size: 1.1rem;
    font-style: italic;
}

.rabelais-citation figcaption {
    margin-top: 8px;
    font-size: 0.875rem;
    text-align: end;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.rabelais-source {
    margin-top: 2rem;
    font-size: 0.875rem;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
