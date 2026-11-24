<script setup lang="ts">
import { computed } from "vue";
import { AUTRE, type ChoixRuban } from "../../core/falucheConfig";
import { swatchColors } from "../../core/villes";

export type RubanOption = { title: string; value: string; subtitle?: string; colors?: string[] };

const props = defineProps<{
    label: string;
    options: RubanOption[];
    id: string;
}>();

const model = defineModel<ChoixRuban | null>({ required: true });

const items = computed(() => [
    ...props.options,
    { title: "Autre…", value: AUTRE, subtitle: "Nom et couleurs à saisir" },
]);

const selected = computed({
    get: () => model.value?.ref ?? null,
    set: (ref: string | null) => {
        if (!ref) model.value = null;
        else if (ref === AUTRE) model.value = { ref: AUTRE, nom: "", couleurs: ["rouge", "blanc"] };
        else model.value = { ref };
    },
});

const custom = computed(() => (model.value && "nom" in model.value ? model.value : null));

const palette = Object.keys(swatchColors).map((name) => ({
    title: name.charAt(0).toUpperCase() + name.slice(1),
    value: name,
}));

function setNom(nom: string) {
    if (custom.value) model.value = { ...custom.value, nom };
}

function setCouleur(index: number, couleur: string | null) {
    if (!custom.value) return;
    const couleurs = [...custom.value.couleurs];
    if (couleur) couleurs[index] = couleur;
    else couleurs.splice(index, 1);
    model.value = { ...custom.value, couleurs: couleurs.filter(Boolean) };
}
</script>

<template>
    <div class="ruban-choix">
        <v-autocomplete
            v-model="selected"
            :id="id"
            :label="label"
            :items="items"
            item-title="title"
            item-value="value"
            clearable
            density="comfortable"
            variant="outlined"
            hide-details
            auto-select-first
        >
            <template #item="{ props: itemProps, item }">
                <v-list-item v-bind="itemProps" :subtitle="item.subtitle">
                    <template v-if="item.colors" #prepend>
                        <span class="ruban-choix__swatch" aria-hidden="true">
                            <span v-for="(c, i) in item.colors" :key="i" :style="{ backgroundColor: c }" />
                        </span>
                    </template>
                </v-list-item>
            </template>
        </v-autocomplete>

        <div v-if="custom" class="ruban-choix__custom">
            <v-text-field
                :model-value="custom.nom"
                label="Nom"
                density="compact"
                variant="outlined"
                hide-details
                maxlength="40"
                @update:model-value="setNom"
            />
            <v-select
                v-for="i in [0, 1]"
                :key="i"
                :model-value="custom.couleurs[i] ?? null"
                :label="i === 0 ? 'Première couleur' : 'Seconde couleur'"
                :items="palette"
                density="compact"
                variant="outlined"
                hide-details
                :clearable="i === 1"
                @update:model-value="(value: string | null) => setCouleur(i, value)"
            >
                <template #prepend-inner>
                    <span
                        v-if="custom.couleurs[i]"
                        class="ruban-choix__dot"
                        :style="{ backgroundColor: swatchColors[custom.couleurs[i]] }"
                        aria-hidden="true"
                    />
                </template>
            </v-select>
        </div>
    </div>
</template>

<style scoped>
.ruban-choix__custom {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-top: 8px;
    padding-left: 12px;
    border-left: 2px solid rgba(var(--v-theme-primary), 0.5);
}

@media (min-width: 600px) {
    .ruban-choix__custom {
        grid-template-columns: 2fr 1fr 1fr;
    }
}

.ruban-choix__swatch {
    display: inline-flex;
    flex-direction: column;
    width: 28px;
    height: 16px;
    margin-right: 12px;
    overflow: hidden;
    border-radius: 3px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.2);
}

.ruban-choix__swatch span {
    flex: 1;
}

.ruban-choix__dot {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.3);
}
</style>
