<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/goliarda-cappello.jpg",
    alt: "Membres de la Goliardia coiffés de felucas décorées",
    width: 1000,
    height: 563,
};

const enBref = [
    { label: "Portée par", text: "Les membres des ordres goliardiques" },
    { label: "Apparition", text: "En 1891 à Sienne, généralisée l’année suivante à Padoue" },
    { label: "Autres noms", text: "Goliardo, pileo, berretto universitario" },
    { label: "Signe distinctif", text: "Sa couleur, qui indique les études suivies" },
];

const couleurs = [
    { couleur: "#c62828", nom: "Rouge", etudes: "Médecine" },
    { couleur: "#1565c0", nom: "Bleu", etudes: "Droit" },
    { couleur: "#ffffff", nom: "Blanc", etudes: "Lettres" },
    { couleur: "#2e7d32", nom: "Vert", etudes: "Sciences" },
    { couleur: "#f9a825", nom: "Jaune", etudes: "Économie" },
    { couleur: "#000000", nom: "Noir", etudes: "Ingénieurs" },
];
</script>

<template>
    <FolkloreFiche id="feluca" titre="La feluca" :image="image" :en-bref="enBref">
        <p>
            La Goliardia est le nom usuel des ordres goliardiques (ordini
            goliardici), les sociétés festives et carnavalesques traditionnelles
            des étudiants italiens. Son nom renvoie aux goliards, les clercs
            itinérants de l’ancien temps.
        </p>
        <p>
            La première coiffe goliardique, l’orsina, est imaginée par Guido
            Podrecca en 1888 d’après un modèle du XVe siècle. Elle se décline
            déjà en quatre couleurs, une par faculté : droit, médecine, sciences
            et lettres. Pise a aussi eu la sienne, le zucchetto.
        </p>

        <figure class="folklore-figure">
            <img
                src="/images/folklores/feluche.jpg"
                alt="Plusieurs felucas de différentes couleurs, ornées d’insignes"
                width="1000"
                height="750"
                loading="lazy"
            />
        </figure>

        <p>
            En 1891, la Goliardia de Sienne adopte, pour la fête des nouveaux
            inscrits, un chapeau à la Robin des Bois baptisé Boccaccio. L’année
            suivante, lors des célébrations galiléennes de Padoue, les Padouans
            le généralisent à toute la Goliardia, où il supplante l’orsina et le
            zucchetto. C’est la feluca, aujourd’hui encore emblème de la
            Goliardia. Sa couleur indique les études de celui ou celle qui la
            porte, avec, comme en France, des particularités selon les villes.
        </p>

        <ul class="folklore-cadre folklore-couleurs">
            <li v-for="item in couleurs" :key="item.nom">
                <span class="folklore-pastille" :style="{ background: item.couleur }" aria-hidden="true"></span>
                <span class="folklore-couleur-nom">{{ item.nom }}</span>
                <span>{{ item.etudes }}</span>
            </li>
        </ul>

        <p>
            La tenue peut aussi comporter une placca (plaque) portant l’emblème
            de l’ordre auquel appartient son porteur.
        </p>
    </FolkloreFiche>
</template>

<style scoped>
.folklore-couleurs {
    margin-top: 1rem;
    list-style: none;
}

.folklore-couleurs li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
}

.folklore-pastille {
    flex: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid rgba(var(--v-theme-on-surface), 0.3);
}

.folklore-couleur-nom {
    min-width: 4.5rem;
    font-weight: 600;
}
</style>
