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
            <p>
                Gambrinus habitait à Fresnes-sur-Escaut, une petite ville des
                Flandres françaises, où il exerçait le métier de carillonneur. Il
                était amoureux de Flandrine, la fille de son maître, qui était
                verrier ; mais Flandrine n’était pas amoureuse de lui. Il se mit à
                trembler, au point de ne plus pouvoir jouer, et les habitants de
                Fresnes le mirent en prison pour tapage nocturne après l’avoir
                insulté et roué de coups. Quand il fut libéré un mois plus tard, il
                voulut se suicider, mais le diable lui proposa d’oublier Flandrine
                en échange de son âme, qu’il viendrait chercher trente ans plus
                tard. Gambrinus accepta le pacte. Il s’enrichit par des jeux
                d’argent, mais il n’avait toujours pas oublié la fille du verrier.
            </p>
            <p>
                Il rencontra de nouveau le diable, qui lui donna des graines pour
                planter du houblon et lui montra comment fabriquer un carillon
                auquel nul ne pourrait résister. Gambrinus organisa alors une fête
                où tous étaient conviés. Les habitants de Fresnes trouvèrent la
                bière fort amère. Gambrinus commença alors à jouer du carillon et
                tout le monde dansa jusqu’à épuisement. La vengeance de Gambrinus
                était accomplie. Mais les habitants se précipitèrent sur la bière
                pour se rafraîchir et se rendirent compte que plus on en buvait,
                plus elle était douce.
            </p>
            <p>
                La boisson se fit connaître au-delà des frontières du pays et le roi
                des Flandres, pour récompenser Gambrinus de ce succès, le nomma duc,
                comte et seigneur. Mais il préféra le titre de « Roi de la bière »
                que lui avaient donné les habitants de Fresnes. Peu de temps après,
                Flandrine se décida à lui parler, mais il ne l’avait pas reconnue et
                lui offrit à boire… il l’avait oubliée.
            </p>
            <p>
                Lorsque les trente années furent passées et que le diable revint,
                Gambrinus joua du carillon jusqu’à ce que le diable trouve cela
                insupportable et disparaisse sans demander son reste. Gambrinus
                vécut heureux cent ans encore, tout en continuant à boire de la
                bière et à jouer du carillon. Lorsqu’il mourut, on retrouva à sa
                place un tonneau de bière : c’est pourquoi il n’a pas de tombe.
            </p>

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

/* Récit de la légende */
h2 ~ p {
    margin-top: 0.75rem;
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
