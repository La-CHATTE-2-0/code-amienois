<script setup lang="ts">
const dossier = "/images/hommebouee/";

const triptyque = {
    src: `${dossier}L'homme à la bouée-fi31641270x470.jpg`,
    alt: "Les trois statues du triptyque : l’homme à la chemise rouge contre un mur, l’homme sur sa bouée au milieu de la Somme, la femme à la robe verte contre un mur de briques",
};

const enBref = [
    { label: "Son nom", text: "L’Homme sur sa bouée" },
    { label: "L’artiste", text: "Stephan Balkenhol" },
    { label: "Où", text: "Sur la Somme, au pont de la Dodane, quartier Saint-Leu" },
    { label: "Installé", text: "En 1993, dans le cadre d’une commande publique" },
    { label: "Aujourd’hui", text: "En aluminium peint depuis 2019 ; l’original en chêne est au Musée de Picardie" },
];
</script>

<template>
    <v-container>
        <article data-fal-article>
            <p class="bouee-lead">
                Planté au milieu de la Somme, à Saint-Leu, l’Homme sur sa bouée
                est la statue que les étudiants amiénois aiment habiller… quitte
                à traverser la rivière à la nage.
            </p>

            <div class="bouee-intro">
                <figure class="bouee-figure-intro">
                    <img
                        class="bouee-image"
                        :src="triptyque.src"
                        :alt="triptyque.alt"
                        width="500"
                        height="309"
                    />
                    <figcaption>Le triptyque de Stephan Balkenhol</figcaption>
                </figure>

                <dl class="bouee-cadre bouee-list">
                    <div v-for="item in enBref" :key="item.label">
                        <dt>{{ item.label }}</dt>
                        <dd>{{ item.text }}</dd>
                    </div>
                </dl>
            </div>

            <h2 class="mt-8">Le triptyque de Saint-Leu</h2>
            <p>
                Dans le quartier Saint-Leu, trois statues en chêne se répondent.
                La Femme à la robe verte et l’Homme à la chemise rouge sont
                adossés chacun au mur d’une maison, tandis que l’Homme sur sa
                bouée flotte sur la Somme, au pont de la Dodane, en les
                regardant. Réalisé et installé en 1993 dans le cadre d’une
                commande publique, ce triptyque évoque les liens de la ville avec
                l’eau.
            </p>

            <h2 class="mt-8">Une statue qu’on habille</h2>
            <figure class="bouee-figure">
                <img
                    class="bouee-image"
                    :src="`${dossier}Amiens-l'Homme_à_la_Bouée_(Stephan_Balkenhol).jpg`"
                    alt="L’Homme sur sa bouée vêtu d’un t-shirt rouge, debout sur son socle au milieu de la Somme"
                    width="1900"
                    height="1066"
                    loading="lazy"
                />
                <figcaption>Avec le t-shirt de l’école d’ingénieurs du CNAM</figcaption>
            </figure>
            <p>
                L’Homme sur sa bouée est devenu une figure très populaire
                d’Amiens : régulièrement, des jeunes gens audacieux traversent à
                la nage le bras de la Somme où il se dresse pour l’habiller de
                t-shirts, souvent aux couleurs d’associations étudiantes ou
                d’équipes sportives.
            </p>

            <h2 class="mt-8">Dégradé, puis remplacé</h2>
            <p>
                Le 13 mai 2018, après un match, des rugbymen de
                Marcq-en-Barœul dégradent la statue. Très endommagée au niveau du
                socle et des pieds, l’œuvre est restaurée par l’artiste, puis
                confiée au Musée de Picardie, où elle est désormais conservée.
            </p>

            <div class="bouee-paire">
                <figure>
                    <img
                        class="bouee-image"
                        :src="`${dossier}1200x680_fullsizerender_29.jpg`"
                        alt="La statue en bois arrachée de son socle, couchée sur les marches du quai"
                        width="1200"
                        height="680"
                        loading="lazy"
                    />
                    <figcaption>Arrachée de son socle, le 13 mai 2018</figcaption>
                </figure>
                <figure>
                    <img
                        class="bouee-image"
                        :src="`${dossier}50810443496_8bdccff187_z.jpg`"
                        alt="La statue originale en chêne, restaurée, exposée dans une salle du Musée de Picardie"
                        width="427"
                        height="639"
                        loading="lazy"
                    />
                    <figcaption>L’original, au Musée de Picardie</figcaption>
                </figure>
            </div>

            <p>
                Pour rendre les trois œuvres à leur site, Stephan Balkenhol a
                réalisé un nouvel Homme sur sa bouée, cette fois en aluminium
                peint, et restauré les deux statues murales. Le triptyque a
                retrouvé sa place les 23 et 24 mai 2019.
            </p>

            <h2 class="mt-8">Coiffé d’une faluche</h2>
            <figure class="bouee-figure bouee-figure--etroite">
                <img
                    class="bouee-image"
                    :src="`${dossier}faluche_hb.jpg`"
                    alt="De nuit, l’Homme sur sa bouée coiffé d’une faluche, au milieu de la Somme"
                    width="1536"
                    height="2048"
                    loading="lazy"
                />
                <figcaption>
                    Faluche Sciences posée par TouxDouX (IPP) et |🦊TrhOtteur|
                    (Med IF Rouen), pour les 10 ans de la croix Sciences, le
                    6 septembre 2025
                </figcaption>
            </figure>
        </article>
    </v-container>
</template>

<style scoped>
/* Images : même arrondi que les cadres, liseré pour le mode sombre */
.bouee-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.14);
    outline-offset: -1px;
}

figure {
    margin: 0;
}

figcaption {
    margin-top: 6px;
    font-size: 0.8125rem;
    font-style: italic;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.bouee-lead {
    margin-bottom: 1rem;
    font-size: 1.05rem;
}

/* Photo au-dessus de l'encadré sur mobile, à côté à partir de md */
.bouee-intro {
    display: grid;
    gap: 16px;
}

@media (min-width: 960px) {
    .bouee-intro {
        grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
        align-items: start;
    }
}

/* Même cadre que l'encadré « En bref » de Gambrinus */
.bouee-cadre {
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.bouee-cadre > * + * {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.bouee-list > div {
    padding: 12px 16px;
}

.bouee-list dt {
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.bouee-list dd {
    margin: 0;
}

/* Récit */
h2 ~ p {
    margin-top: 0.75rem;
}

.bouee-figure {
    margin-top: 1rem;
}

.bouee-figure--etroite {
    max-width: 360px;
    margin-inline: auto;
}

/* Deux photos à la même hauteur : colonnes au prorata de leur format */
.bouee-paire {
    display: grid;
    gap: 16px;
    margin-top: 1.25rem;
}

@media (min-width: 600px) {
    .bouee-paire {
        grid-template-columns: 1.765fr 0.668fr;
    }
}
</style>
