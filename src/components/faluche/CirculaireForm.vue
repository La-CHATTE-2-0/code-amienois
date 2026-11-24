<script setup lang="ts">
import { computed } from "vue";
import { circuColors, circulaires } from "../../core/circulaires";
import {
    BACS,
    EMBLEMES,
    MARQUES,
    MAX_ANNEES,
    STATUTS,
    type Annee,
    type CirculaireConfig,
    digits,
    emblemeDeFiliere,
    letters,
    nouvelleAnnee,
} from "../../core/circulaireConfig";

const model = defineModel<CirculaireConfig>({ required: true });

const filiereItems = circulaires.map((c) => ({
    title: c.filiere,
    value: c.filiere,
    subtitle: `${c.matiere === "velours" ? "Velours" : "Satin"}${c.amiens ? " · spécificité amiénoise" : ""}`,
    colors: c.couleurs.map((name) => circuColors[name]),
}));

const bacItems = BACS.map((b) => ({ title: b.label, value: b.id }));
const emblemeItems = EMBLEMES.map((e) => ({ title: e.filiere, value: e.name, subtitle: e.name, image: e.image }));
const statutItems = STATUTS.map((s) => ({ title: s.label, value: s.id }));
const marqueItems = MARQUES.map((m) => ({ title: m.label, value: m.id }));

// L'emblème suit la filière tant qu'on ne l'a pas choisi soi-même
function setFiliere(filiere: string | null) {
    const before = emblemeDeFiliere(model.value.filiere);
    model.value.filiere = filiere;
    if (!model.value.embleme || model.value.embleme === before) model.value.embleme = emblemeDeFiliere(filiere);
}

const setInitiales = (v: string) => (model.value.initiales = letters(v ?? "", 4));
const setBacAutre = (v: string) => (model.value.bacAutre = letters(v ?? "", 6));
const setAnneeBac = (v: string) => (model.value.anneeBac = digits(v ?? "", 2));

const canAdd = computed(() => model.value.annees.length < MAX_ANNEES);

function addAnnee() {
    if (canAdd.value) model.value.annees.push(nouvelleAnnee());
}

function removeAnnee(index: number) {
    model.value.annees.splice(index, 1);
}

// Marques posées sous ou contre l'étoile, à cocher pour chaque année
const OPTIONS: { key: keyof Pick<Annee, "etranger" | "alternance" | "perte" | "changement" | "quille">; label: string }[] = [
    { key: "etranger", label: "À l'étranger" },
    { key: "alternance", label: "En alternance" },
    { key: "perte", label: "Faluche perdue ou volée" },
    { key: "changement", label: "Changement public / privé" },
    { key: "quille", label: "Service militaire ou civique" },
];
</script>

<template>
    <div class="circulaire-form">
        <section aria-labelledby="cf-filiere">
            <h3 id="cf-filiere">Filière</h3>
            <v-autocomplete
                id="cf-filiere-choix"
                :model-value="model.filiere"
                label="Filière"
                :items="filiereItems"
                clearable
                density="comfortable"
                variant="outlined"
                hide-details
                auto-select-first
                @update:model-value="setFiliere"
            >
                <template #item="{ props: itemProps, item }">
                    <v-list-item v-bind="itemProps" :subtitle="item.subtitle">
                        <template #prepend>
                            <span class="circulaire-form__swatch" aria-hidden="true">
                                <span v-for="(c, i) in item.colors" :key="i" :style="{ backgroundColor: c }" />
                            </span>
                        </template>
                    </v-list-item>
                </template>
            </v-autocomplete>
            <p class="text-caption text-medium-emphasis mt-2">
                Couleur et matière de l'<a href="/#article-6">article 6</a>, insignes de
                l'<a href="/#article-7">article 7</a>.
            </p>
        </section>

        <section aria-labelledby="cf-identite">
            <h3 id="cf-identite">Initiales et baccalauréat</h3>
            <div class="circulaire-form__grid">
                <v-text-field
                    id="cf-initiales"
                    :model-value="model.initiales"
                    label="Initiales"
                    maxlength="4"
                    density="comfortable"
                    variant="outlined"
                    hide-details
                    @update:model-value="setInitiales"
                />
                <v-select
                    id="cf-bac"
                    v-model="model.bac"
                    label="Baccalauréat"
                    :items="bacItems"
                    clearable
                    density="comfortable"
                    variant="outlined"
                    hide-details
                />
                <v-text-field
                    v-if="model.bac === 'autre'"
                    id="cf-bac-autre"
                    :model-value="model.bacAutre"
                    label="Initiales du bac"
                    maxlength="6"
                    density="comfortable"
                    variant="outlined"
                    hide-details
                    @update:model-value="setBacAutre"
                />
                <v-text-field
                    id="cf-annee-bac"
                    :model-value="model.anneeBac"
                    label="Année du bac (2 chiffres)"
                    inputmode="numeric"
                    maxlength="2"
                    density="comfortable"
                    variant="outlined"
                    hide-details
                    @update:model-value="setAnneeBac"
                />
            </div>
            <div class="circulaire-form__checks">
                <v-checkbox v-model="model.capacitaire" label="Capacitaire (« C »)" density="compact" hide-details />
                <v-checkbox v-model="model.international" label="International (« I »)" density="compact" hide-details />
            </div>
        </section>

        <section aria-labelledby="cf-embleme">
            <h3 id="cf-embleme">Emblème de la discipline</h3>
            <v-autocomplete
                id="cf-embleme-choix"
                v-model="model.embleme"
                label="Emblème"
                :items="emblemeItems"
                clearable
                density="comfortable"
                variant="outlined"
                hide-details
                auto-select-first
            >
                <template #item="{ props: itemProps, item }">
                    <v-list-item v-bind="itemProps" :subtitle="item.subtitle">
                        <template #prepend>
                            <img class="circulaire-form__insigne" :src="item.image" alt="" />
                        </template>
                    </v-list-item>
                </template>
            </v-autocomplete>
        </section>

        <section aria-labelledby="cf-annees">
            <h3 id="cf-annees">Années d'études</h3>
            <v-btn-toggle
                v-model="model.prive"
                mandatory
                divided
                density="comfortable"
                variant="outlined"
                color="primary"
                aria-label="Établissement de la première année"
                class="mb-3"
            >
                <v-btn :value="false">Public (moivre bleu)</v-btn>
                <v-btn :value="true">Privé (moivre blanc)</v-btn>
            </v-btn-toggle>

            <ol class="circulaire-form__annees">
                <li v-for="(annee, i) in model.annees" :key="i" class="circulaire-form__annee" :data-annee="i">
                    <div class="circulaire-form__annee-head">
                        <strong>Année {{ i + 1 }}</strong>
                        <v-btn
                            icon="mdi-delete-outline"
                            variant="text"
                            density="comfortable"
                            size="small"
                            :aria-label="`Retirer l'année ${i + 1}`"
                            @click="removeAnnee(i)"
                        />
                    </div>
                    <div class="circulaire-form__grid">
                        <v-select
                            v-model="annee.statut"
                            label="Étoile"
                            :items="statutItems"
                            density="comfortable"
                            variant="outlined"
                            hide-details
                        />
                        <v-select
                            v-model="annee.marque"
                            label="À côté de l'étoile"
                            :items="marqueItems"
                            clearable
                            density="comfortable"
                            variant="outlined"
                            hide-details
                        />
                    </div>
                    <div class="circulaire-form__checks">
                        <v-checkbox
                            v-for="option in OPTIONS.filter((o) => i > 0 || o.key !== 'changement')"
                            :key="option.key"
                            v-model="annee[option.key]"
                            :label="option.label"
                            density="compact"
                            hide-details
                        />
                    </div>
                </li>
            </ol>
            <v-btn
                variant="tonal"
                prepend-icon="mdi-plus"
                :disabled="!canAdd"
                @click="addAnnee"
            >
                Ajouter une année
            </v-btn>
        </section>

        <section aria-labelledby="cf-fin">
            <h3 id="cf-fin">Fin de cursus</h3>
            <div class="circulaire-form__checks">
                <v-checkbox v-model="model.agregation" label="Agrégation (« a » et petite palme)" density="compact" hide-details />
                <v-checkbox v-model="model.capes" label="CAPES (« c » et petite palme)" density="compact" hide-details />
                <v-checkbox v-model="model.abeille" label="Cursus parfait (abeille)" density="compact" hide-details />
            </div>
        </section>
    </div>
</template>

<style scoped>
.circulaire-form {
    display: grid;
    gap: 16px;
}

@media (min-width: 960px) {
    .circulaire-form {
        grid-template-columns: 1fr 1fr;
        align-items: start;
    }

    .circulaire-form section[aria-labelledby="cf-annees"] {
        grid-row: span 3;
    }
}

.circulaire-form section {
    padding: 14px 16px 16px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-left: 3px solid rgb(var(--v-theme-primary));
    border-radius: 12px;
}

.circulaire-form h3 {
    margin: 0 0 12px;
    font-size: 1.05rem;
    font-weight: 600;
}

.circulaire-form__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
}

.circulaire-form__checks {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    margin-top: 4px;
}

.circulaire-form__annees {
    display: grid;
    gap: 12px;
    margin: 0 0 12px;
    padding: 0;
    list-style: none;
}

.circulaire-form__annee {
    padding: 10px 12px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 10px;
}

.circulaire-form__annee-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.circulaire-form__swatch {
    display: inline-flex;
    flex-direction: column;
    width: 28px;
    height: 16px;
    margin-right: 12px;
    overflow: hidden;
    border-radius: 3px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.2);
}

.circulaire-form__swatch span {
    flex: 1;
}

.circulaire-form__insigne {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    object-fit: contain;
}
</style>
