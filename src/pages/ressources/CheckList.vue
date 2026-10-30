<script setup lang="ts">
import { computed, reactive } from "vue";
import { incontournable, fringues, pratique, delires } from "../../core/checklist";
import TableItemDialog from "../../components/shared/TableItemDialog.vue";

const sections = [
    { id: "incontournables", title: "Les incontournables à emmener", items: incontournable },
    { id: "vetements", title: "Vêtements à prendre (en fonction de la météo)", items: fringues },
    { id: "pratique", title: "Bien pratique en congrès", items: pratique },
    { id: "delires", title: "Si c'est ton délire", items: delires },
];
const allItems = sections.flatMap((section) => section.items);

// Une clé localStorage par élément (inchangées : les listes déjà cochées sont conservées)
const checked = reactive<Record<string, boolean>>(
    Object.fromEntries(
        allItems.map((item) => [item.id, JSON.parse(localStorage.getItem(item.id) ?? "false")])
    )
);

function setChecked(id: string, value: boolean) {
    checked[id] = value;
    localStorage.setItem(id, JSON.stringify(value));
}

const doneIn = (items: typeof allItems) => items.filter((item) => checked[item.id]).length;
const done = computed(() => doneIn(allItems));
const progress = computed(() => Math.round((done.value / allItems.length) * 100));

function handleReset() {
    if (!window.confirm("Décocher toute la liste ?")) return;
    allItems.forEach((item) => setChecked(item.id, false));
}
</script>

<template>
    <v-container>
        <section class="table-warning-fal check-callout" aria-labelledby="check-avant">
            <h2 id="check-avant" class="check-callout__title">
                <v-icon icon="mdi-alert-box-outline" size="small" />
                Avant de partir en congrès
            </h2>
            <ol>
                <li>
                    Assure-toi en premier lieu que ton
                    <strong>dossier pour le congrès soit complet</strong> sur la
                    liste de l’évènement (fiche, paiement, chèques de caution,
                    attestation sur l’honneur…).
                </li>
                <li>
                    Ensuite, trouve-toi une <strong>place dans un covoit</strong>
                    qui part pour le congrès. Tu peux toi-même proposer d’en
                    organiser un.
                </li>
                <li>
                    Il faut impérativement se renseigner sur les
                    <strong>conditions météo</strong> prévues lors du week-end (de
                    journée comme de nuit !). Cela permettra d’adapter au mieux
                    les recommandations suivantes aux besoins réels sur place.
                </li>
                <li>
                    <strong>Sécurise tes insignes et tes pin’s.</strong> Ta fal
                    risque d’être pas mal ballottée durant le week-end.
                </li>
            </ol>
        </section>

        <div class="check-progress" aria-live="polite">
            <div class="check-progress__label">
                <span>Ta valise</span>
                <span>{{ done }} / {{ allItems.length }}</span>
            </div>
            <v-progress-linear
                :model-value="progress"
                color="primary"
                height="6"
                rounded
                :aria-label="`${done} éléments prêts sur ${allItems.length}`"
            />
        </div>

        <section
            v-for="section in sections"
            :key="section.id"
            class="check-section"
            :aria-labelledby="`check-${section.id}`"
        >
            <h2 :id="`check-${section.id}`" class="check-section__title">
                <span>{{ section.title }}</span>
                <span class="check-section__count">
                    {{ doneIn(section.items) }} / {{ section.items.length }}
                </span>
            </h2>
            <ul class="check-list">
                <TableItemDialog
                    v-for="item in section.items"
                    :key="item.id"
                    :item="item"
                    :checked="checked[item.id]"
                    @update:checked="setChecked(item.id, $event)"
                />
            </ul>
        </section>

        <section class="table-warning-fal check-callout" aria-labelledby="check-pendant">
            <h2 id="check-pendant" class="check-callout__title">
                <v-icon icon="mdi-alert-box-outline" size="small" />
                Lors du congrès
            </h2>
            <ol>
                <li>
                    À l’arrivée, <strong>va voir l’orga</strong> (généralement
                    située à l’entrée du site) pour pointer et récupérer ton
                    welcome pack (tu y trouveras un pin’s, un écocup, le CD du
                    congrès et d’autres goodies).
                </li>
                <li>
                    Il n’est pas conseillé de garder son téléphone portable sur
                    soi pendant l’évènement pour ne pas le perdre lors de
                    quelques péripéties.
                </li>
                <li>
                    <strong>Interdiction formelle de prendre des photos lorsque
                    des gens sont nus !</strong> (Ça arrivera plus d’une fois xD).
                </li>
                <li>
                    Si vous avez le moindre problème pendant le week-end,
                    n’hésitez pas à aller voir vos anciens ou l’orga qui
                    essayeront de vous aider autant qu’ils le peuvent. De plus,
                    des <strong>secouristes</strong> sont généralement présents
                    pendant les soirées pour prendre en charge ceux qui en ont
                    besoin.
                </li>
            </ol>
        </section>

        <p class="check-credit">
            D'après Nicolas “FéeS’EL Picarde” T., ex-GC Sciences Amiens
        </p>

        <img
            src="/images/other/pommo_2023.jpg"
            class="check-photo"
            alt="Amiénois à la Pommo 2023"
            loading="lazy"
        />

        <v-btn
            variant="outlined"
            color="primary"
            prepend-icon="mdi-restore"
            block
            class="mt-4"
            @click="handleReset"
        >
            Réinitialiser la liste
        </v-btn>
    </v-container>
</template>

<style scoped>
/* Encadrés « Avant de partir » / « Lors du congrès » : style des spécificités amiénoises */
.check-callout {
    padding: 12px 16px;
}

.check-callout__title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.check-callout ol {
    padding-inline-start: 1.25rem;
}

.check-callout li + li {
    margin-top: 0.5rem;
}

/* Progression globale */
.check-progress {
    margin-block: 1.5rem;
}

.check-progress__label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 0.875rem;
    font-weight: 600;
}

/* Sections de la liste : même cadre que les tableaux */
.check-section {
    margin-bottom: 1.5rem;
}

.check-section__title {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.check-section__count {
    flex: none;
    font-size: 0.8125rem;
    font-weight: 400;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.check-list {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

/* Pas de séparateur au-dessus du premier élément (le cadre suffit) */
.check-list > :deep(.check-item:first-child) {
    border-top: none;
}

.check-credit {
    margin-top: 0.75rem;
    font-size: 0.8125rem;
    font-style: italic;
    text-align: right;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.check-photo {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 1.5rem;
    border-radius: 12px;
}
</style>
