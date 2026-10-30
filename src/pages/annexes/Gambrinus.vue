<script setup lang="ts">
import pages from "../../core/page";

const portrait = {
    src: "https://www.museesgrandest.org/wp-content/uploads/2018/11/1721-1721.jpg",
    alt: "Gambrinus couronné, assis sur un tonneau, levant une chope de bière mousseuse",
};

const gravure = {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-Cxf8Uh-5aVKcNtf1KTM4aQ9r1kD9LDSS-oqilWqT_eeGzKFD0e5ZkrlLzj76SVjwczW4DIUVpLuSFk-3JIeL8Ubb-UF-Xcq7O866LqkbGHrTWreMJfLOx0yJ-ZQo7E7sFcOQHCqaqDTq/s1600/Gambrinus+avec+sa+biere.jpg",
    alt: "Gravure de Gambrinus entouré de houblon, une chope levée, adossé à un tonneau",
};

const enBref = [
    { label: "Sa ville", text: "Fresnes-sur-Escaut, dans les Flandres françaises" },
    { label: "Son métier", text: "Carillonneur" },
    { label: "Son amour", text: "Flandrine, la fille de son maître verrier" },
    { label: "Son titre", text: "Roi de la bière" },
    { label: "Sa tombe", text: "Aucune : on retrouva un tonneau de bière à sa place" },
];
</script>

<template>
    <v-container>
        <article data-fal-article>
            <div class="gambrinus-intro">
                <img
                    class="gambrinus-image gambrinus-portrait"
                    :src="portrait.src"
                    :alt="portrait.alt"
                    width="682"
                    height="1024"
                />
                <div>
                    <p class="gambrinus-lead">
                        Carillonneur éconduit devenu « Roi de la bière »,
                        Gambrinus est la figure légendaire des Flandres que les
                        faluchards célèbrent à chaque chope levée.
                    </p>
                    <dl class="gambrinus-cadre gambrinus-list">
                        <div v-for="item in enBref" :key="item.label">
                            <dt>{{ item.label }}</dt>
                            <dd>{{ item.text }}</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <h2 class="mt-8">La légende</h2>
            <ol class="gambrinus-cadre gambrinus-etapes">
                <li>
                    <span class="gambrinus-num" aria-hidden="true">1</span>
                    <div>
                        <h3>Le carillonneur éconduit</h3>
                        <p>
                            Gambrinus est amoureux de Flandrine, la fille de son
                            maître verrier, mais elle ne l’aime pas. Il se met à
                            trembler au point de ne plus pouvoir jouer, et les
                            habitants de Fresnes, après l’avoir insulté et roué
                            de coups, le jettent en prison pour tapage nocturne.
                        </p>
                    </div>
                </li>
                <li>
                    <span class="gambrinus-num" aria-hidden="true">2</span>
                    <div>
                        <h3>Le pacte avec le diable</h3>
                        <p>
                            Libéré un mois plus tard, il veut en finir. Le diable
                            lui propose alors d’oublier Flandrine en échange de
                            son âme, qu’il viendra chercher trente ans plus tard.
                            Gambrinus accepte et s’enrichit aux jeux d’argent…
                            sans parvenir à oublier la fille du verrier.
                        </p>
                    </div>
                </li>
                <li>
                    <span class="gambrinus-num" aria-hidden="true">3</span>
                    <div>
                        <h3>Le houblon et le carillon</h3>
                        <p>
                            Le diable revient avec des graines de houblon et lui
                            apprend à fabriquer un carillon auquel nul ne résiste.
                            Gambrinus convie tout Fresnes à une fête : la bière
                            paraît bien amère, mais au son du carillon chacun
                            danse jusqu’à l’épuisement. Assoiffés, les habitants
                            se jettent sur la bière et découvrent que plus on en
                            boit, plus elle est douce.
                        </p>
                    </div>
                </li>
                <li>
                    <span class="gambrinus-num" aria-hidden="true">4</span>
                    <div>
                        <h3>Le roi de la bière</h3>
                        <p>
                            La boisson se fait connaître au-delà des frontières.
                            Le roi des Flandres le nomme duc, comte et seigneur,
                            mais Gambrinus préfère le titre que lui ont donné les
                            habitants : « Roi de la bière ». Quand Flandrine se
                            décide enfin à lui parler, il ne la reconnaît pas et
                            lui offre à boire… il l’a oubliée.
                        </p>
                    </div>
                </li>
                <li>
                    <span class="gambrinus-num" aria-hidden="true">5</span>
                    <div>
                        <h3>Le diable berné</h3>
                        <p>
                            Trente ans plus tard, le diable revient chercher son
                            dû. Gambrinus joue du carillon jusqu’à ce que le
                            diable, n’y tenant plus, disparaisse sans demander
                            son reste. Il vit encore cent ans heureux, entre
                            bière et carillon. À sa mort, on ne retrouve à sa
                            place qu’un tonneau de bière : c’est pourquoi il n’a
                            pas de tombe.
                        </p>
                    </div>
                </li>
            </ol>

            <v-alert
                class="gambrinus-alert"
                icon="mdi-information-outline"
                variant="tonal"
                density="compact"
                border="start"
            >
                Dans une autre version, Gambrinus fait tellement boire le diable
                venu chercher son âme que celui-ci repart ivre… en l’oubliant.
            </v-alert>

            <figure class="gambrinus-figure">
                <img
                    class="gambrinus-image"
                    :src="gravure.src"
                    :alt="gravure.alt"
                    width="443"
                    height="521"
                    loading="lazy"
                />
            </figure>

            <p class="gambrinus-voir-aussi">
                Voir aussi :
                <router-link :to="pages.bacchus.url">Bacchus, dieu du vin et des fêtes</router-link>
            </p>
        </article>
    </v-container>
</template>

<style scoped>
/* Images : même arrondi que les cadres, liseré pour le mode sombre */
.gambrinus-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.14);
    outline-offset: -1px;
}

/* Portrait au-dessus du texte sur mobile, à côté à partir de md */
.gambrinus-intro {
    display: grid;
    gap: 16px;
}

.gambrinus-portrait {
    max-height: 60vh;
    object-fit: cover;
    object-position: top;
}

@media (min-width: 960px) {
    .gambrinus-intro {
        grid-template-columns: 280px 1fr;
        align-items: start;
    }

    .gambrinus-portrait {
        max-height: none;
    }
}

.gambrinus-lead {
    margin-bottom: 1rem;
    font-size: 1.05rem;
}

/* Même cadre que les listes de la checklist */
.gambrinus-cadre {
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.gambrinus-cadre > * + * {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.gambrinus-list > div {
    padding: 12px 16px;
}

.gambrinus-list dt {
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.gambrinus-list dd {
    margin: 0;
}

.gambrinus-etapes {
    margin-top: 0.75rem;
    list-style: none;
}

.gambrinus-etapes li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 12px 16px;
}

.gambrinus-etapes h3 {
    font-size: 1rem;
    font-weight: 600;
}

.gambrinus-etapes p {
    margin-top: 0.25rem;
}

/* Numéro dans un cercle, comme les commandements des Notes aux PMs */
.gambrinus-num {
    flex: none;
    display: inline-grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 600;
}

.gambrinus-alert {
    margin-top: 1rem;
}

.gambrinus-figure {
    max-width: 320px;
    margin: 1.5rem auto 0;
}

.gambrinus-voir-aussi {
    margin-top: 1.5rem;
    font-size: 0.875rem;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
