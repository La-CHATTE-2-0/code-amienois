<script setup lang="ts">
import { computed, ref } from "vue";
import { useTheme } from "vuetify";
import FalucheSchema from "../../components/schemas/FalucheSchema.vue";
import RubanChoix, { type RubanOption } from "../../components/faluche/RubanChoix.vue";
import { circuColors, circulaires, findCirculaire } from "../../core/circulaires";
import { cityRef, provinceRef, resolveRuban, useFalucheConfig } from "../../core/falucheConfig";
import { renderPng, serializeSchema, shareOrDownload } from "../../core/falucheImage";
import { cities, provinces, swatch } from "../../core/villes";
import pages from "../../core/page";

const { config, reset } = useFalucheConfig();

const cityOptions: RubanOption[] = cities.map((c) => ({
    title: c.name,
    value: cityRef(c.name),
    subtitle: c.colors,
    colors: swatch(c.colors),
}));

const provinceOptions: RubanOption[] = provinces.map((p) => ({
    title: p.name,
    value: provinceRef(p.id),
    subtitle: p.colors,
    colors: swatch(p.colors),
}));

const filiereItems = circulaires.map((c) => ({
    title: c.filiere,
    value: c.filiere,
    subtitle: `${c.matiere === "velours" ? "Velours" : "Satin"}${c.amiens ? " · spécificité amiénoise" : ""}`,
    colors: c.couleurs.map((name) => circuColors[name]),
}));

const circulaire = computed(() => findCirculaire(config.value.filiere));
const etudes = computed(() => resolveRuban(config.value.etudes));
const etudesSuivante = computed(() => resolveRuban(config.value.etudesSuivante));
const province = computed(() => resolveRuban(config.value.province));
const naissance = computed(() => resolveRuban(config.value.naissance));

const changementVille = computed({
    get: () => config.value.etudesSuivante !== null,
    set: (on: boolean) => {
        config.value.etudesSuivante = on ? { ref: cityRef("Amiens") } : null;
        if (!on) config.value.anneeChangement = "";
    },
});

function setAnnee(value: string) {
    config.value.anneeChangement = (value ?? "").replace(/\D/g, "").slice(0, 4);
}

// Légende sous le schéma, dans l'ordre des rubans de gauche à droite
const legende = computed(() =>
    [
        { label: "Circulaire", value: circulaire.value ? `${circulaire.value.filiere} (${circulaire.value.matiere})` : null },
        {
            label: "Ville d'études",
            value: [etudes.value?.nom, etudesSuivante.value?.nom].filter(Boolean).join(" puis ") || null,
        },
        { label: "Province", value: province.value?.nom ?? null },
        { label: "Ville de naissance", value: naissance.value?.nom ?? null },
    ].filter((item) => item.value)
);

// ---- Image ----

const schemaRef = ref<{ $el: SVGSVGElement } | null>(null);
const theme = useTheme();
const exporting = ref(false);
const message = ref("");

async function exportImage() {
    const svg = schemaRef.value?.$el;
    if (!svg) return;
    exporting.value = true;
    message.value = "";
    try {
        const dark = theme.global.current.value.dark;
        const markup = await serializeSchema(svg, dark ? "#f1ece2" : "#2b2522");
        const caption = circulaire.value ? `Ma faluche · ${circulaire.value.filiere}` : "Ma faluche";
        const blob = await renderPng(markup, dark ? "#1b1718" : "#faf7f2", caption);
        const result = await shareOrDownload(blob, "Ma faluche");
        if (result === "downloaded") message.value = "Image téléchargée.";
    } catch {
        message.value = "L'image n'a pas pu être créée sur cet appareil.";
    } finally {
        exporting.value = false;
    }
}

function handleReset() {
    if (!window.confirm("Repartir d'une faluche vierge ?")) return;
    reset();
}
</script>

<template>
    <v-container>
        <article data-fal-article class="ma-faluche">
            <p class="mb-6">
                Compose ta faluche : choisis ton velours, ta filière pour le
                circulaire et les rubans de tes villes. Elle est retenue sur cet
                appareil et tu peux l'enregistrer en image pour la montrer à tes
                parrain et marraine.
            </p>

            <div class="ma-faluche__layout">
                <figure class="ma-faluche__schema">
                    <FalucheSchema
                        ref="schemaRef"
                        :velours="config.velours"
                        :circulaire="circulaire"
                        :etudes="etudes"
                        :etudes-suivante="etudesSuivante"
                        :annee-changement="config.anneeChangement"
                        :province="province"
                        :naissance="naissance"
                    />
                    <figcaption>
                        <dl v-if="legende.length" class="ma-faluche__legende">
                            <template v-for="item in legende" :key="item.label">
                                <dt>{{ item.label }}</dt>
                                <dd>{{ item.value }}</dd>
                            </template>
                        </dl>
                        <p class="text-medium-emphasis text-caption mt-2">
                            Vue de dessus, l'avant de la faluche en bas. Les
                            pointillés marquent la place des rubans d'association
                            et d'élu.
                        </p>
                    </figcaption>
                    <div class="ma-faluche__actions d-print-none">
                        <v-btn
                            color="primary"
                            variant="flat"
                            prepend-icon="mdi-image-outline"
                            :loading="exporting"
                            @click="exportImage"
                        >
                            Enregistrer en image
                        </v-btn>
                        <v-btn variant="text" prepend-icon="mdi-restore" @click="handleReset">
                            Recommencer
                        </v-btn>
                    </div>
                    <p v-if="message" class="text-caption mt-2" role="status">{{ message }}</p>
                </figure>

                <div class="ma-faluche__form">
                    <section aria-labelledby="mf-velours">
                        <h2 id="mf-velours">Velours</h2>
                        <v-btn-toggle
                            v-model="config.velours"
                            mandatory
                            divided
                            density="comfortable"
                            variant="outlined"
                            color="primary"
                            aria-labelledby="mf-velours"
                        >
                            <v-btn value="noir">Noir</v-btn>
                            <v-btn value="amarante">Amarante</v-btn>
                        </v-btn-toggle>
                    </section>

                    <section aria-labelledby="mf-circulaire">
                        <h2 id="mf-circulaire">Circulaire</h2>
                        <v-autocomplete
                            id="mf-filiere"
                            v-model="config.filiere"
                            label="Filière"
                            :items="filiereItems"
                            clearable
                            density="comfortable"
                            variant="outlined"
                            hide-details
                            auto-select-first
                        >
                            <template #item="{ props: itemProps, item }">
                                <v-list-item v-bind="itemProps" :subtitle="item.subtitle">
                                    <template #prepend>
                                        <span class="ma-faluche__swatch" aria-hidden="true">
                                            <span
                                                v-for="(c, i) in item.colors"
                                                :key="i"
                                                :style="{ backgroundColor: c }"
                                            />
                                        </span>
                                    </template>
                                </v-list-item>
                            </template>
                        </v-autocomplete>
                        <p class="text-caption text-medium-emphasis mt-2">
                            Couleurs et matières de l'<a href="/#article-6">article 6</a>.
                        </p>
                    </section>

                    <section aria-labelledby="mf-etudes">
                        <h2 id="mf-etudes">Ville d'études</h2>
                        <RubanChoix id="mf-ville-etudes" v-model="config.etudes" label="Ville d'études" :options="cityOptions" />
                        <v-switch
                            v-model="changementVille"
                            class="mt-2"
                            color="primary"
                            density="compact"
                            hide-details
                            label="J'ai changé de ville d'études"
                        />
                        <div v-if="changementVille" class="ma-faluche__changement">
                            <RubanChoix
                                id="mf-ville-suivante"
                                v-model="config.etudesSuivante"
                                label="Nouvelle ville d'études"
                                :options="cityOptions"
                            />
                            <v-text-field
                                :model-value="config.anneeChangement"
                                label="Année du changement"
                                inputmode="numeric"
                                maxlength="4"
                                density="comfortable"
                                variant="outlined"
                                hide-details
                                @update:model-value="setAnnee"
                            />
                        </div>
                    </section>

                    <section aria-labelledby="mf-origines">
                        <h2 id="mf-origines">Province et ville de naissance</h2>
                        <div class="ma-faluche__origines">
                            <RubanChoix id="mf-province" v-model="config.province" label="Province" :options="provinceOptions" />
                            <RubanChoix
                                id="mf-naissance"
                                v-model="config.naissance"
                                label="Ville de naissance"
                                :options="cityOptions"
                            />
                        </div>
                        <p class="text-caption text-medium-emphasis mt-2">
                            Ta ville n'est pas dans la liste ? Choisis « Autre… »
                            et vérifie ses couleurs auprès de tes croix, ou sur la
                            page <router-link :to="pages.couleurs_rubans.url">{{ pages.couleurs_rubans.name }}</router-link>.
                        </p>
                    </section>
                </div>
            </div>
        </article>
    </v-container>
</template>

<style scoped>
.ma-faluche__layout {
    display: grid;
    gap: 24px;
}

@media (min-width: 960px) {
    .ma-faluche__layout {
        grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
        align-items: start;
    }

    .ma-faluche__schema {
        position: sticky;
        top: 80px;
    }
}

.ma-faluche__schema {
    margin: 0;
    max-width: 520px;
    justify-self: center;
    width: 100%;
}

.ma-faluche__legende {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 4px 16px;
    margin-top: 12px;
    padding: 10px 14px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.ma-faluche__legende dt {
    font-weight: 600;
}

.ma-faluche__legende dd {
    margin: 0;
}

.ma-faluche__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
}

.ma-faluche__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.ma-faluche__form section {
    padding: 14px 16px 16px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-left: 3px solid rgb(var(--v-theme-primary));
    border-radius: 12px;
}

.ma-faluche__form h2 {
    margin: 0 0 12px;
    font-size: 1.1rem;
    font-weight: 600;
}

.ma-faluche__changement,
.ma-faluche__origines {
    display: grid;
    gap: 12px;
    margin-top: 12px;
}

.ma-faluche__origines {
    margin-top: 0;
}

.ma-faluche__swatch {
    display: inline-flex;
    flex-direction: column;
    width: 28px;
    height: 16px;
    margin-right: 12px;
    overflow: hidden;
    border-radius: 3px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.2);
}

.ma-faluche__swatch span {
    flex: 1;
}
</style>
