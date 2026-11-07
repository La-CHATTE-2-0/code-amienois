<script setup lang="ts">
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
import { clearHistory, history } from "../../core/quizHistory";
import { QuizSession, QuizTheme } from "../../types/quizTypes";

const props = defineProps<{
    themes: QuizTheme[];
    survivorId: string;
}>();

const open = defineModel<boolean>({ default: false });

const { smAndDown } = useDisplay();

const ALL = "";
const filter = ref(ALL);
const confirmClear = ref(false);

const themeOf = (id: string) =>
    props.themes.find((t) => t.id === id) ?? { id, label: id, description: "", icon: "mdi-help-circle-outline" };

// Seuls les thèmes déjà joués sont proposés dans le filtre
const playedThemes = computed(() =>
    props.themes.filter((t) => history.value.some((s) => s.theme === t.id))
);
const sessions = computed(() =>
    filter.value === ALL ? history.value : history.value.filter((s) => s.theme === filter.value)
);

const isSurvivor = (s: QuizSession) => s.theme === props.survivorId;
const scored = computed(() => sessions.value.filter((s) => !isSurvivor(s)));
const average = computed(() => {
    const total = scored.value.reduce((sum, s) => sum + s.total, 0);
    const correct = scored.value.reduce((sum, s) => sum + s.correct, 0);
    return total ? Math.round((correct / total) * 100) : null;
});
const bestStreak = computed(() => {
    const streaks = sessions.value.filter(isSurvivor).map((s) => s.correct);
    return streaks.length ? Math.max(...streaks) : null;
});

const dayKey = (iso: string) => new Date(iso).toDateString();
function dayLabel(iso: string) {
    const date = new Date(iso);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString()) return "Aujourd'hui";
    if (date.toDateString() === yesterday.toDateString()) return "Hier";
    return date.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: date.getFullYear() === today.getFullYear() ? undefined : "numeric",
    });
}
const timeLabel = (iso: string) =>
    new Date(iso).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

// Parties regroupées par jour, dans l'ordre de l'historique (plus récent d'abord)
const days = computed(() => {
    const groups: { key: string; label: string; sessions: QuizSession[] }[] = [];
    for (const s of sessions.value) {
        const key = dayKey(s.endedAt);
        let last = groups[groups.length - 1];
        if (last?.key !== key) {
            last = { key, label: dayLabel(s.endedAt), sessions: [] };
            groups.push(last);
        }
        last.sessions.push(s);
    }
    return groups;
});

const scoreLabel = (s: QuizSession) =>
    isSurvivor(s)
        ? `Série ${s.correct}`
        : `${Math.round((s.correct / s.total) * 100)} %`;

function clear() {
    clearHistory();
    filter.value = ALL;
    confirmClear.value = false;
}
</script>

<template>
    <v-dialog v-model="open" :fullscreen="smAndDown" max-width="600" scrollable>
        <v-card>
            <v-toolbar color="transparent" density="comfortable">
                <v-toolbar-title>Historique des parties</v-toolbar-title>
                <v-btn icon="mdi-close" aria-label="Fermer" @click="open = false" />
            </v-toolbar>

            <v-card-text class="quiz-history">
                <p v-if="!history.length" class="text-medium-emphasis">
                    Aucune partie terminée pour l'instant.
                </p>
                <template v-else>
                    <v-chip-group
                        v-model="filter"
                        mandatory
                        selected-class="text-primary"
                        aria-label="Filtrer par thème"
                    >
                        <v-chip :value="ALL" variant="outlined">Tous</v-chip>
                        <v-chip
                            v-for="t in playedThemes"
                            :key="t.id"
                            :value="t.id"
                            :prepend-icon="t.icon"
                            variant="outlined"
                        >
                            {{ t.label }}
                        </v-chip>
                    </v-chip-group>

                    <dl class="quiz-history__summary">
                        <div>
                            <dt>Parties</dt>
                            <dd>{{ sessions.length }}</dd>
                        </div>
                        <div v-if="average !== null">
                            <dt>Réussite moyenne</dt>
                            <dd>{{ average }} %</dd>
                        </div>
                        <div v-if="bestStreak !== null">
                            <dt>Meilleure série</dt>
                            <dd>{{ bestStreak }}</dd>
                        </div>
                    </dl>

                    <section v-for="day in days" :key="day.key" class="mt-4">
                        <h3 class="quiz-history__day">{{ day.label }}</h3>
                        <ul class="quiz-history__list">
                            <li v-for="s in day.sessions" :key="s.id" class="quiz-history__item">
                                <v-icon :icon="themeOf(s.theme).icon" class="quiz-history__icon" />
                                <span class="quiz-history__text">
                                    <span class="quiz-history__label">
                                        {{ themeOf(s.theme).label }}
                                        <v-chip v-if="s.replay" size="x-small" class="ml-1">
                                            Erreurs
                                        </v-chip>
                                    </span>
                                    <span class="quiz-history__meta">
                                        {{ timeLabel(s.endedAt) }} ·
                                        <v-icon icon="mdi-check-circle" size="x-small" color="success" />
                                        {{ s.correct }}
                                        <v-icon icon="mdi-close-circle" size="x-small" color="error" />
                                        {{ s.wrong }}
                                        <template v-if="!isSurvivor(s)">· {{ s.total }} questions</template>
                                    </span>
                                </span>
                                <span class="quiz-history__score">{{ scoreLabel(s) }}</span>
                            </li>
                        </ul>
                    </section>
                </template>
            </v-card-text>

            <v-card-actions v-if="history.length">
                <v-btn
                    color="error"
                    variant="text"
                    prepend-icon="mdi-delete-outline"
                    @click="confirmClear = true"
                >
                    Effacer l'historique
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog v-model="confirmClear" max-width="400">
            <v-card title="Effacer l'historique ?">
                <v-card-text>
                    Toutes les parties enregistrées sur cet appareil seront supprimées.
                    Tes records sont conservés.
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn variant="text" @click="confirmClear = false">Annuler</v-btn>
                    <v-btn color="error" @click="clear">Effacer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-dialog>
</template>

<style scoped>
.quiz-history__summary {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 24px;
    margin-top: 8px;
}

.quiz-history__summary dt {
    font-size: 0.8125rem;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

.quiz-history__summary dd {
    font-size: 1.25rem;
    font-weight: 600;
}

.quiz-history__day {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.quiz-history__day::first-letter {
    text-transform: uppercase;
}

/* Même cadre que les listes de la page Révisions */
.quiz-history__list {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.quiz-history__list li + li {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.quiz-history__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
}

.quiz-history__icon {
    flex: none;
    color: rgb(var(--v-theme-primary));
}

.quiz-history__text {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
}

.quiz-history__label {
    font-weight: 600;
}

.quiz-history__meta {
    font-size: 0.8125rem;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

.quiz-history__score {
    flex: none;
    font-weight: 600;
}
</style>
