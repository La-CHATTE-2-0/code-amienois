<script setup lang="ts">
import { computed, ref } from "vue";
import BraidedRibbon from "../../components/shared/BraidedRibbon.vue";
import CenteredStripeRibbon from "../../components/shared/CenteredStripeRibbon.vue";
import CrossedRibbon from "../../components/shared/CrossedRibbon.vue";

type AssociationBase = {
    name: string;
    description: string;
};

type BraidedAssociation = AssociationBase & {
    type: "braid";
    colors: [string, string] | [string, string, string];
    inverse?: boolean;
    thin?: boolean;
};

type FlatAssociation = AssociationBase & {
    type: "flat";
    baseColor: string;
    secondBaseColor?: string;
    stripeColor?: string;
    stripeMaterial?: "satin" | "velvet";
};

type CrossedAssociation = AssociationBase & {
    type: "crossed";
};

type Association = BraidedAssociation | FlatAssociation | CrossedAssociation;

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
        description: "Velours violet torsadé de velours rouge",
        type: "braid",
        colors: [colors.purple, colors.red],
    },
    {
        name: "AEMIA",
        description: "Velours jaune et bande centrale de velours vert",
        type: "flat",
        baseColor: colors.yellow,
        stripeColor: colors.green,
        stripeMaterial: "velvet",
    },
    {
        name: "AEPA",
        description: "Velours vert foncé",
        type: "flat",
        baseColor: colors.darkGreen,
    },
    {
        name: "AESA",
        description: "Velours violet et bande centrale de satin violet",
        type: "flat",
        baseColor: colors.purple,
        stripeColor: "#a943cc",
        stripeMaterial: "satin",
    },
    {
        name: "AESFA",
        description: "Velours fuchsia",
        type: "flat",
        baseColor: colors.fuchsia,
    },
    {
        name: "ALEA / CEA ?",
        description: "Velours jaune torsadé en sens inverse de velours bleu foncé",
        type: "braid",
        colors: [colors.yellow, colors.darkBlue],
        inverse: true,
    },
    {
        name: "ASA / ADESA ?",
        description: "Velours blanc torsadé de velours rouge",
        type: "braid",
        colors: [colors.white, colors.red],
    },
    {
        name: "ASHPA",
        description: "Fine tresse de velours noir, blanc et vert foncé",
        type: "braid",
        colors: [colors.black, colors.white, colors.darkGreen],
        thin: true,
    },
    {
        name: "ASKA",
        description: "Velours rose torsadé de velours rouge",
        type: "braid",
        colors: [colors.pink, colors.red],
    },
    {
        name: "Bacchanales de Socrate",
        description: "Velours blanc",
        type: "flat",
        baseColor: colors.white,
    },
    {
        name: "BED",
        description: "Velours rouge",
        type: "flat",
        baseColor: colors.red,
    },
    {
        name: "Biomecitec PVIA",
        description: "Velours vert foncé et blanc, avec une bande centrale en satin violet",
        type: "flat",
        baseColor: colors.darkGreen,
        secondBaseColor: colors.white,
        stripeColor: colors.purple,
        stripeMaterial: "satin",
    },
    {
        name: "BNA",
        description: "Velours jaune torsadé de velours bleu et blanc",
        type: "braid",
        colors: [colors.yellow, colors.blue, colors.white],
    },
    {
        name: "CéIA",
        description: "Velours rose clair torsadé de velours bleu foncé",
        type: "braid",
        colors: [colors.lightPink, colors.darkBlue],
    },
    {
        name: "CHATTE 2.0",
        description: "Velours bleu foncé torsadé de velours rouge",
        type: "braid",
        colors: [colors.red, colors.darkBlue],
    },
    {
        name: "CMA",
        description: "Velours rouge",
        type: "flat",
        baseColor: colors.red,
    },
    {
        name: "FAEP",
        description: "Velours vert foncé torsadé de velours blanc",
        type: "braid",
        colors: [colors.darkGreen, colors.white],
    },
    {
        name: "GEPETO",
        description: "Velours rose clair torsadé de velours bleu et blanc",
        type: "braid",
        colors: [colors.lightPink, colors.blue, colors.white],
    },
    {
        name: "GUILDE",
        description: "Tresse de velours bleu foncé, vert foncé et rouge",
        type: "braid",
        colors: [colors.darkBlue, colors.darkGreen, colors.red],
    },
    {
        name: "H2",
        description: "Velours rouge torsadé de velours jaune",
        type: "braid",
        colors: [colors.red, colors.yellow],
    },
    {
        name: "InfoContact",
        description: "Velours blanc et bande centrale de velours noir",
        type: "flat",
        baseColor: colors.white,
        stripeColor: colors.black,
        stripeMaterial: "velvet",
    },
    {
        name: "MIAGE PLUS",
        description: "Velours violet et bande centrale de satin orange",
        type: "flat",
        baseColor: colors.purple,
        stripeColor: colors.orange,
        stripeMaterial: "satin",
    },
    {
        name: "BDE ESIEE ULSA",
        description: "Large bande de velours bleu foncé, fine bande noire et deux bandes blanches en travers",
        type: "crossed",
    },
    {
        name: "BDS ESIEE ULSA",
        description: "Tresse de velours bleu foncé, noir et vert foncé",
        type: "braid",
        colors: [colors.darkBlue, colors.black, colors.darkGreen],
    },
    {
        name: "CNAM",
        description: "Fine tresse de velours bleu foncé, noir et rouge",
        type: "braid",
        colors: [colors.darkBlue, colors.black, colors.red],
        thin: true,
    },
];

const query = ref("");

function normalize(value: string) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("fr");
}

const filteredAssociations = computed(() => {
    const search = normalize(query.value.trim());
    if (!search) return associations;

    return associations.filter((association) =>
        normalize(`${association.name} ${association.description}`).includes(search),
    );
});
</script>

<template>
    <v-container>
        <article data-fal-article>
            <header class="catalog-header">
                <div>
                    <p class="catalog-header__eyebrow">Amiens · Vie étudiante</p>
                    <h2>Rubans des associations</h2>
                    <p>
                        Recherche une association par son nom, une couleur ou une matière.
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

            <div v-if="filteredAssociations.length" class="association-grid">
                <section
                    v-for="association in filteredAssociations"
                    :key="association.name"
                    class="catalog-card"
                >
                    <div class="catalog-card__heading">
                        <h3>{{ association.name }}</h3>
                        <p>{{ association.description }}</p>
                    </div>

                    <figure
                        class="catalog-card__visual"
                        :class="{ 'catalog-card__visual--thin': association.type === 'braid' && association.thin }"
                    >
                        <BraidedRibbon
                            v-if="association.type === 'braid'"
                            :colors="association.colors"
                            :inverse="association.inverse"
                            :label="`Ruban de ${association.name} : ${association.description}`"
                        />
                        <CenteredStripeRibbon
                            v-else-if="association.type === 'flat'"
                            :velvet-color="association.baseColor"
                            :second-velvet-color="association.secondBaseColor"
                            :satin-color="association.stripeColor ?? association.baseColor"
                            :stripe-material="association.stripeMaterial"
                            :show-stripe="Boolean(association.stripeColor)"
                            :label="`Ruban de ${association.name} : ${association.description}`"
                        />
                        <CrossedRibbon
                            v-else
                            :label="`Ruban de ${association.name} : ${association.description}`"
                        />
                    </figure>
                </section>
            </div>

            <v-alert
                v-else
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

.catalog-card__heading h3 {
    margin-bottom: 5px;
    font-size: 1.08rem;
    line-height: 1.25;
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

.catalog-card__visual--thin {
    padding-block: 18px 24px;
    padding-inline: 54px;
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
