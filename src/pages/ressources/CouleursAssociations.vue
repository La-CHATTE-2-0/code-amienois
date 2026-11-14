<script setup lang="ts">
import { computed, ref } from "vue";
import RubanTorsadeDouble from "../../components/shared/ruban/RubanTorsadeDouble.vue";
import RubanBandeCentrale from "../../components/shared/ruban/RubanBandeCentrale.vue";
import RubanCroise from "../../components/shared/ruban/RubanCroise.vue";
import RubanTresse from "../../components/shared/ruban/RubanTresse.vue";

type AssociationBase = {
    name: string;
    filiere: string;
    description: string;
    /** Ruban confirmé par l'association. Les autres ne s'affichent qu'en local et en recette. */
    verified?: boolean;
};

/**
 * Rendu par RubanTorsadeDouble : un ou deux rubans enroulés autour d'un ruban central.
 * La dernière couleur de `colors` est le ruban central, les autres s'enroulent autour.
 */
type BraidedAssociation = AssociationBase & {
    type: "braid";
    colors: [string, string] | [string, string, string];
    inverse?: boolean;
    thin?: boolean;
};

/**
 * Rendu par RubanBandeCentrale : velours uni (ou deux moitiés avec `secondBaseColor`),
 * avec une bande centrale facultative en satin ou en velours.
 */
type FlatAssociation = AssociationBase & {
    type: "flat";
    baseColor: string;
    secondBaseColor?: string;
    stripeColor?: string;
    stripeMaterial?: "satin" | "velvet";
};

/**
 * Rendu par RubanCroise : bande centrale et deux bandes en travers.
 * Les couleurs sont pour l'instant celles par défaut du composant.
 */
type CrossedAssociation = AssociationBase & {
    type: "crossed";
};

/** Rendu par RubanTresse : tresse à trois brins, les couleurs suivent l'ordre des brins. */
type PlaitedAssociation = AssociationBase & {
    type: "plait";
    colors: [string, string, string];
    thin?: boolean;
};

type Association =
    | BraidedAssociation
    | FlatAssociation
    | CrossedAssociation
    | PlaitedAssociation;

const colors = {
    black: "#171717",
    blue: "#155cc8",
    darkBlue: "#123a9b",
    darkGreen: "#12633b",
    fuchsia: "#e6007e",
    green: "#2a9b54",
    lightPink: "#f4a7c5",
    orange: "#f58220",
    pink: "#ec6fa5",
    purple: "#78249a",
    red: "#ed1c2e",
    white: "#f6f5ef",
    yellow: "#f0cf24",
} as const;

const associations: Association[] = [
    {
        name: "AADEIS",
        filiere: "Sciences",
        verified: true,
        description: "Velours rouge  torsadé de velours violet",
        type: "braid",
        colors: [colors.purple, colors.red],
    },
    {
        name: "AEMIA",
        filiere: "IUT GMP",
        verified: true,
        description: "Velours jaune et bande centrale de velours vert",
        type: "flat",
        baseColor: colors.yellow,
        stripeColor: colors.green,
        stripeMaterial: "velvet",
    },
    {
        name: "AEPA",
        filiere: "Pharmacie",
        verified: true,
        description: "Velours vert foncé",
        type: "flat",
        baseColor: colors.darkGreen,
    },
    {
        name: "AESA",
        filiere: "Sciences",
        verified: true,
        description: "Velours violet et bande centrale de satin violet",
        type: "flat",
        baseColor: colors.purple,
        stripeColor: "#a943cc",
        stripeMaterial: "satin",
    },
    {
        name: "AESFA",
        filiere: "Sage-femme",
        verified: true,
        description: "Velours fuchsia",
        type: "flat",
        baseColor: colors.fuchsia,
    },
    {
        name: "ALEA / CEA ?",
        filiere: "Arts",
        verified: true,
        description: "Velours bleu foncé torsadé de velours jaune en sens inverse",
        type: "braid",
        colors: [colors.yellow, colors.darkBlue],
        inverse: true,
    },
    {
        name: "ASA / ADESA ?",
        filiere: "STAPS",
        verified: true,
        description: "Velours blanc torsadé de velours rouge",
        type: "braid",
        colors: [colors.red, colors.white],
    },
    {
        name: "ASHPA",
        filiere: "Pharmacie",
        verified: true,
        description: "Fine tresse de velours noir, blanc et vert foncé",
        type: "plait",
        colors: [colors.black, colors.white, colors.darkGreen],
        thin: true,
    },
    {
        name: "ASKA",
        filiere: "Kiné",
        description: "Velours rose torsadé de velours rouge",
        type: "braid",
        colors: [colors.pink, colors.red],
    },
    {
        name: "Bacchanales de Socrate",
        filiere: "Sages-femme",
        verified: true,
        description: "Velours blanc",
        type: "flat",
        baseColor: colors.white,
    },
    {
        name: "BED",
        filiere: "Droit",
        verified: true,
        description: "Velours rouge",
        type: "flat",
        baseColor: colors.red,
    },
    {
        name: "Biomecitec PVIA",
        filiere: "Sciences",
        verified: true,
        description: "Velours vert foncé et blanc, avec une bande centrale en satin violet",
        type: "flat",
        baseColor: colors.darkGreen,
        secondBaseColor: colors.white,
        stripeColor: colors.purple,
        stripeMaterial: "satin",
    },
    {
        name: "BNA",
        filiere: "Psychologie",
        description: "Velours jaune torsadé de velours bleu et blanc",
        type: "braid",
        colors: [colors.yellow, colors.blue, colors.white],
    },
    {
        name: "CéIA",
        filiere: "Infirmier",
        verified: true,
        description: "Velours rose clair torsadé de velours bleu foncé",
        type: "braid",
        colors: [colors.darkBlue, colors.lightPink],
    },
    {
        name: "CHATTE 2.0",
        filiere: "Asso de ville",
        verified: true,
        description: "Velours bleu foncé torsadé de velours rouge",
        type: "braid",
        colors: [colors.red, colors.darkBlue],
    },
    {
        name: "CMA",
        filiere: "Médecine",
        verified: true,
        description: "Velours rouge",
        type: "flat",
        baseColor: colors.red,
    },
    {
        name: "FAEP",
        filiere: "Asso de ville",
        verified: true,
        description: "Velours blanc torsadé de velours vert foncé",
        type: "braid",
        colors: [colors.darkGreen, colors.white],
    },
    {
        name: "GEPETO",
        filiere: "Orthophonie",
        description: "Velours rose clair torsadé de velours bleu et blanc",
        type: "braid",
        colors: [colors.lightPink, colors.blue, colors.white],
    },
    {
        name: "GUILDE",
        filiere: "Pharmacie",
        description: "Tresse de velours bleu foncé, vert foncé et rouge",
        type: "braid",
        colors: [colors.darkBlue, colors.darkGreen, colors.red],
    },
    {
        name: "Histoire De",
        filiere: "Histoire",
        verified: true,
        description: "Velours jaune torsadé de velours  rouge",
        type: "braid",
        colors: [colors.red, colors.yellow],
    },
    {
        name: "InfoContact",
        filiere: "IUT Info",
        verified: true,
        description: "Velours blanc et bande centrale de velours noir",
        type: "flat",
        baseColor: colors.white,
        stripeColor: colors.black,
        stripeMaterial: "velvet",
    },
    {
        name: "MIAGE PLUS",
        filiere: "Sciences",
        verified: true,
        description: "Velours violet et bande centrale de satin orange",
        type: "flat",
        baseColor: colors.purple,
        stripeColor: colors.orange,
        stripeMaterial: "satin",
    },
    {
        name: "BDE ESIEE ULSA",
        filiere: "Ingénieur",
        description: "Large bande de velours bleu foncé, fine bande noire et deux bandes blanches en travers",
        type: "crossed",
    },
    {
        name: "BDS ESIEE ULSA",
        filiere: "Ingénieur",
        description: "Tresse de velours bleu foncé, noir et vert foncé",
        type: "braid",
        colors: [colors.darkBlue, colors.black, colors.darkGreen],
    },
    {
        name: "CNAM",
        filiere: "Ingénieur",
        description: "Fine tresse de velours bleu foncé, noir et rouge",
        type: "braid",
        colors: [colors.darkBlue, colors.black, colors.red],
        thin: true,
    },
];

// VITE_RECETTE est défini par le workflow de la branche release.
const showUnverified = import.meta.env.DEV || import.meta.env.VITE_RECETTE === "true";

const visibleAssociations = showUnverified
    ? associations
    : associations.filter((association) => association.verified);

const query = ref("");

function normalize(value: string) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("fr");
}

const filteredAssociations = computed(() => {
    const search = normalize(query.value.trim());
    if (!search) return visibleAssociations;

    return visibleAssociations.filter((association) =>
        normalize(
            `${association.name} ${association.filiere} ${association.description}`,
        ).includes(search),
    );
});

const groups = computed(() =>
    [
        {
            id: "verifiees",
            title: "Rubans vérifiés",
            hint: "",
            associations: filteredAssociations.value.filter((association) => association.verified),
        },
        {
            id: "non-verifiees",
            title: "Rubans non vérifiés",
            hint: "Visible uniquement en local et sur le site de recette.",
            associations: filteredAssociations.value.filter((association) => !association.verified),
        },
    ].filter((group) => group.associations.length),
);
</script>

<template>
    <v-container>
        <article data-fal-article>
            <header class="catalog-header">
                <div>
                    <p class="catalog-header__eyebrow">Amiens · Vie étudiante</p>
                    <h2>Rubans des associations</h2>
                    <p>
                        Recherche une association par son nom, sa filière, une couleur ou une matière.
                    </p>
                </div>
                <v-text-field
                    v-model="query"
                    class="catalog-search"
                    label="Rechercher une association"
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    density="comfortable"
                    clearable
                    hide-details
                />
            </header>

            <p class="catalog-count" aria-live="polite">
                {{ filteredAssociations.length }}
                {{ filteredAssociations.length > 1 ? "associations" : "association" }}
            </p>

            <section
                v-for="group in groups"
                :key="group.id"
                class="catalog-group"
                :aria-labelledby="`groupe-${group.id}`"
            >
                <header class="catalog-group__header">
                    <h3 :id="`groupe-${group.id}`">
                        {{ group.title }}
                        <span class="catalog-group__count">{{ group.associations.length }}</span>
                    </h3>
                    <p v-if="group.hint">{{ group.hint }}</p>
                </header>

                <div class="association-grid">
                    <section
                        v-for="association in group.associations"
                        :key="association.name"
                        class="catalog-card"
                    >
                        <div class="catalog-card__heading">
                            <p class="catalog-card__filiere">{{ association.filiere }}</p>
                            <h4>{{ association.name }}</h4>
                            <p>{{ association.description }}</p>
                        </div>

                        <figure class="catalog-card__visual">
                            <RubanTorsadeDouble
                                v-if="association.type === 'braid'"
                                :colors="association.colors"
                                :inverse="association.inverse"
                                :thin="association.thin"
                                :label="`Ruban de ${association.name} : ${association.description}`"
                            />
                            <RubanBandeCentrale
                                v-else-if="association.type === 'flat'"
                                :velvet-color="association.baseColor"
                                :second-velvet-color="association.secondBaseColor"
                                :satin-color="association.stripeColor ?? association.baseColor"
                                :stripe-material="association.stripeMaterial"
                                :show-stripe="Boolean(association.stripeColor)"
                                :label="`Ruban de ${association.name} : ${association.description}`"
                            />
                            <RubanTresse
                                v-else-if="association.type === 'plait'"
                                :colors="association.colors"
                                :thin="association.thin"
                                :label="`Ruban de ${association.name} : ${association.description}`"
                            />
                            <RubanCroise
                                v-else
                                :label="`Ruban de ${association.name} : ${association.description}`"
                            />
                        </figure>
                    </section>
                </div>
            </section>

            <v-alert
                v-if="!groups.length"
                class="mt-5"
                type="info"
                variant="tonal"
                density="comfortable"
            >
                Aucune association ne correspond à « {{ query }} ».
            </v-alert>
        </article>
    </v-container>
</template>

<style scoped>
.catalog-header {
    display: grid;
    grid-template-columns: 1fr minmax(280px, 0.8fr);
    align-items: end;
    gap: 28px;
    padding: clamp(24px, 5vw, 46px);
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 22px;
    background:
        radial-gradient(circle at 0 0, rgba(var(--v-theme-primary), 0.16), transparent 42%),
        rgb(var(--v-theme-surface));
}

.catalog-header__eyebrow {
    color: rgb(var(--v-theme-primary));
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

.catalog-header h2 {
    margin: 2px 0 8px;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.05;
    letter-spacing: -0.035em;
}

.catalog-count {
    margin: 22px 2px 10px;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.catalog-group + .catalog-group {
    margin-top: 36px;
}

.catalog-group__header {
    margin: 0 2px 14px;
}

.catalog-group__header h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.3rem;
    line-height: 1.3;
}

.catalog-group__header p {
    margin-top: 2px;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    font-size: 0.88rem;
}

.catalog-group__count {
    padding: 1px 9px;
    border-radius: 999px;
    background: rgba(var(--v-theme-on-surface), 0.08);
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    font-size: 0.8rem;
    font-weight: 700;
}

.association-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
}

.catalog-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 16px;
    background: rgb(var(--v-theme-surface));
}

.catalog-card__heading {
    flex: 1;
    padding: 20px 20px 4px;
}

.catalog-card__heading h4 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1.08rem;
    line-height: 1.25;
}

.catalog-card__heading .catalog-card__filiere {
    margin-bottom: 2px;
    color: rgb(var(--v-theme-primary));
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.catalog-card__heading p {
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    font-size: 0.88rem;
    line-height: 1.45;
}

.catalog-card__visual {
    width: 100%;
    margin: auto 0 0;
    padding: 6px 14px 12px;
}

@media (max-width: 720px) {
    .catalog-header {
        grid-template-columns: 1fr;
        align-items: stretch;
        gap: 20px;
        padding: 24px 18px;
        border-radius: 18px;
    }

    .association-grid {
        grid-template-columns: 1fr;
    }
}
</style>
