<script setup lang="ts">
// Commandements regroupés par moment ; la numérotation reste continue (1 à 14)
const groups = [
    {
        title: "Ton rôle",
        items: [
            "De tout temps, toujours d’être Parrain ou Marraine un Honneur tu feras.",
            "Toujours ton rôle au sérieux tu prendras et un devoir tu en feras. Tout est affaire de responsabilité. N’acceptez donc jamais d’être Parrain si vous ne vous en sentez pas capable.",
            "Toujours de ton Code tu te souviendras et à chaque filleul tu l’enseigneras. Nous estimons que chaque personne qui a le Désir de rentrer dans la Faluche s’intéresse à ses traditions et c’est à chaque Parrain de lui transmettre ces Traditions.",
            "Toujours le respect des autres et des traditions tu lui inculqueras.",
        ],
    },
    {
        title: "Avant le baptême",
        items: [
            "Toujours avec ton filleul le baptême tu prépareras, sa personnalité tu apprendras, un gage adapté tu donneras et sa chanson sur le bout des doigts tu connaîtras.",
        ],
    },
    {
        title: "Le soir du baptême",
        items: [
            "Toujours pendant le baptême ton filleul tu soutiendras.",
            "Est-il besoin de rappeler que s’il a du mal à boire, toi et toi seul l’aideras.",
            "Le reste de la soirée, de ton filleul tu t’occuperas.",
            "Jamais le soir de son baptême la gueule tu ne te saouleras.",
        ],
    },
    {
        title: "Ensuite",
        items: [
            "Les semaines suivantes, de chaque baptême amiénois ton filleul tu informeras.",
            "A chaque faluchard que tu connais ton filleul tu présenteras.",
            "Toujours sur ton filleul un œil tu garderas.",
            "Tout écart de conduite tu lui signaleras.",
            "Et enfin toujours j’espère avec ton filleul des relations privilégiées tu garderas.",
        ],
    },
];

// Numéro du premier commandement de chaque groupe
const starts = groups.map((_, i) =>
    groups.slice(0, i).reduce((total, group) => total + group.items.length, 1)
);
</script>

<template>
    <v-container>
        <article data-fal-article>
            <h2>À propos du parrain et de la marraine</h2>
            <p>
                Le parrain ou la marraine est
                <strong>responsable de l’état de son filleul avant, pendant et
                après le baptême</strong> (état de santé et également les
                allergies dont souffrent son fillot et son état moral). Il est
                donc opportun de s’assurer de l’état du filleul avant de
                procéder au baptême, quitte à le reporter si son état le
                justifie.
            </p>
            <v-alert
                class="pm-alert"
                icon="mdi-information-outline"
                variant="tonal"
                density="compact"
            >
                Le critère de report d’un baptême est le suivant : le jeune
                baptisé doit se souvenir de l’avant baptême et du baptême.
            </v-alert>
            <p>
                Le rôle du parrain ou de la marraine n'est pas uniquement
                logistique, c'est à lui de transmettre l'ébauche de l'esprit
                faluchard au futur baptisé.
            </p>
            <p>
                Il est donc naturel qu'un parrain ou une marraine ait un
                <strong>minimum de 6 mois de baptême</strong> avant de parrainer
                à son tour, afin qu'il ou elle puisse acquérir assez
                d'expérience.
            </p>
        </article>

        <section class="pm-commandements" aria-labelledby="pm-commandements-titre">
            <h2 id="pm-commandements-titre">Les commandements du parrain</h2>

            <div class="pm-liste">
                <template v-for="(group, g) in groups" :key="group.title">
                    <h3 class="pm-liste__groupe">{{ group.title }}</h3>
                    <ol class="pm-liste__items" :start="starts[g]">
                        <li v-for="(item, i) in group.items" :key="item">
                            <span class="pm-num" aria-hidden="true">{{ starts[g] + i }}</span>
                            <span>{{ item }}</span>
                        </li>
                    </ol>
                </template>
            </div>
        </section>

        <p class="pm-credit">D'après Gala (Paris)</p>
    </v-container>
</template>

<style scoped>
article p {
    margin-top: 0.75rem;
}

.pm-alert {
    margin-top: 1rem;
}

.pm-commandements {
    margin-top: 2rem;
}

.pm-commandements h2 {
    margin-bottom: 0.75rem;
}

/* Cadre commun aux tableaux et aux étapes du guide couture */
.pm-liste {
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.pm-liste__groupe {
    margin: 0;
    padding: 8px 16px;
    font-size: 0.875rem;
    font-weight: 600;
    background: rgba(var(--v-theme-on-surface), 0.06);
}

.pm-liste__groupe:not(:first-child) {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.pm-liste__items {
    margin: 0;
    padding: 0;
    list-style: none;
}

.pm-liste__items li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 12px 16px;
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

/* Numéro dans un cercle, comme les étapes du guide couture */
.pm-num {
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

.pm-credit {
    margin-top: 1.5rem;
    font-size: 0.8125rem;
    font-style: italic;
    text-align: right;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
