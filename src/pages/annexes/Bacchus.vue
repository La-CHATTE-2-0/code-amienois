<script setup lang="ts">
import pages from "../../core/page";

const attributions = [
    "Vin",
    "Vigne",
    "Festivités",
    "Danse",
    "Végétation",
    "Plaisirs",
    "Débordements",
];

const representations = [
    { label: "Sur la tête", text: "Des cornes, ou une couronne de vigne ou de lierre" },
    { label: "Assis", text: "Sur un tonneau ou sur un char" },
    { label: "D’une main", text: "Le thyrse, une sorte de sceptre" },
    { label: "De l’autre", text: "Une corne d’abondance ou une simple grappe de raisin" },
];
</script>

<template>
    <v-container>
        <article data-fal-article>
            <img
                class="bacchus-hero"
                src="/images/other/bacchusorgies.webp"
                alt="Bacchanale en forêt : banquet, satyres et nymphes qui boivent et dansent"
                width="2250"
                height="1542"
            />

            <p class="bacchus-lead">
                Dieu du vin, des fêtes et des débordements, Bacchus a donné son
                nom à l’un des insignes les plus difficiles à obtenir sur la
                faluche.
                <router-link :to="`${pages.code.url}#article-8`">Voir les règles du port du Bacchus</router-link>.
            </p>

            <h2 class="mt-8">La vie de Bacchus</h2>
            <p>
                Bacchus est le fils que Jupiter (Zeus chez les Grecs) a eu avec
                sa maîtresse, <strong>Sémélé</strong>. Fille du roi de Thèbes,
                elle n’en reste pas moins une simple mortelle.
            </p>
            <p>
                La femme de Jupiter, la déesse <strong>Junon</strong>, n’apprécie
                pas d’avoir été trompée et décide de se venger. Elle convainc
                Sémélé de demander à Jupiter de se montrer sous sa forme divine,
                ce qui entraîne la mort de la mère de Bacchus.
            </p>
            <p>
                Voulant sauver son enfant, Jupiter l’enlève du ventre de Sémélé
                et le place dans <strong>sa cuisse</strong> jusqu’à sa naissance.
            </p>
            <p>
                Mais Junon est rancunière et veut à tout prix tuer Bacchus, le
                fruit de la tromperie de son mari. Elle envoie les
                <strong>Titans</strong>, qui trouvent l’enfant et le font
                bouillir dans un chaudron.
            </p>
            <p>
                Heureusement, Bacchus est sauvé. Les versions divergent sur ses
                sauveurs, mais toutes s’accordent sur un point : il est placé
                sous la protection des <strong>Nymphes de Nysa</strong>. Il
                grandit dans une grotte protégée par une vigne, dont il se
                nourrit pour devenir le dieu du vin que l’on connaît.
            </p>

            <h3 class="bacchus-subtitle">Ses attributions</h3>
            <div class="bacchus-chips">
                <v-chip
                    v-for="attribution in attributions"
                    :key="attribution"
                    variant="outlined"
                    size="small"
                >
                    {{ attribution }}
                </v-chip>
            </div>

            <h2 class="mt-8">Représentations</h2>
            <div class="bacchus-representations">
                <img
                    class="bacchus-portrait"
                    src="/images/other/bacchus.jpg"
                    alt="Bacchus enfant assis sur un tonneau, versant du vin dans une coupe"
                    width="811"
                    height="1260"
                    loading="lazy"
                />
                <dl class="bacchus-list">
                    <div v-for="item in representations" :key="item.label">
                        <dt>{{ item.label }}</dt>
                        <dd>{{ item.text }}</dd>
                    </div>
                </dl>
            </div>

            <h2 class="mt-8">Les fêtes</h2>
            <p>
                De nombreuses fêtes lui étaient dédiées, dont les plus connues
                sont les orgies, ou <strong>bacchanales</strong>.
            </p>
            <p>
                Elles étaient d’abord célébrées uniquement par les femmes, de
                façon très mystérieuse, au milieu des bois. Petit à petit, les
                hommes y furent également accueillis, ce qui entraîna beaucoup
                de désordres !
            </p>
            <v-alert
                class="bacchus-alert"
                icon="mdi-information-outline"
                variant="tonal"
                density="compact"
                border="start"
            >
                À Rome, on parlait des fêtes « Libérales », où Romains et
                Romaines se lançaient dans des discussions souvent bien
                indécentes. Le Sénat a même tenté d’interdire ces cérémonies par
                un décret en 186 av. J.-C., sans grand effet.
            </v-alert>
        </article>
    </v-container>
</template>

<style scoped>
article p {
    margin-top: 0.75rem;
}

/* Images : même arrondi que les cadres, liseré pour le mode sombre */
.bacchus-hero,
.bacchus-portrait {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.14);
    outline-offset: -1px;
}

.bacchus-hero {
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.bacchus-lead {
    margin-top: 1rem;
    font-size: 1.05rem;
}

.bacchus-subtitle {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
}

.bacchus-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

/* Portrait au-dessus de la liste sur mobile, à côté à partir de md */
.bacchus-representations {
    display: grid;
    gap: 16px;
    margin-top: 0.75rem;
}

.bacchus-portrait {
    max-height: 60vh;
    object-fit: cover;
    object-position: top;
}

@media (min-width: 960px) {
    .bacchus-representations {
        grid-template-columns: 280px 1fr;
        align-items: start;
    }

    .bacchus-portrait {
        max-height: none;
    }
}

/* Même cadre que les listes de la checklist */
.bacchus-list {
    margin: 0;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.bacchus-list > div {
    padding: 12px 16px;
}

.bacchus-list > div + div {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.bacchus-list dt {
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.bacchus-list dd {
    margin: 0;
}

.bacchus-alert {
    margin-top: 1rem;
}
</style>
