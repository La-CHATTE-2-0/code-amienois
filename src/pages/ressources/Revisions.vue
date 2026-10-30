<script setup lang="ts">
import { computed, ref } from "vue";
import quiz from "../../core/quiz.json";
import QuizCard from "../../components/quiz/QuizCard.vue";
import { QuizQuestion, QuizRound, QuizTheme } from "../../types/quizTypes";

const QUESTIONS_PER_GAME = 10;
const ALL = "tout";

const themes: QuizTheme[] = [
    ...quiz.themes,
    {
        id: ALL,
        label: "Tout mélanger",
        description: "Des questions au hasard sur l'ensemble du Code.",
        icon: "mdi-shuffle-variant",
    },
];
const questions: QuizQuestion[] = quiz.questions;

const countOf = (themeId: string) =>
    themeId === ALL ? questions.length : questions.filter((q) => q.theme === themeId).length;

// Meilleur score par thème, conservé sur l'appareil
const bestKey = (themeId: string) => `quiz-best-${themeId}`;
const best = ref<Record<string, number>>(
    Object.fromEntries(
        themes.map((t) => [t.id, Number(localStorage.getItem(bestKey(t.id)) ?? -1)])
    )
);

function shuffle<T>(items: T[]): T[] {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const theme = ref<QuizTheme | null>(null);
const rounds = ref<QuizRound[]>([]);
const answers = ref<(string | null)[]>([]);
const index = ref(0);
const finished = ref(false);

const current = computed(() => rounds.value[index.value]);
const score = computed(
    () => rounds.value.filter((r, i) => answers.value[i] === r.correct).length
);
const missed = computed(() =>
    rounds.value.filter((r, i) => answers.value[i] !== r.correct)
);

function start(selectedTheme: QuizTheme) {
    const pool =
        selectedTheme.id === ALL
            ? questions
            : questions.filter((q) => q.theme === selectedTheme.id);
    theme.value = selectedTheme;
    rounds.value = shuffle(pool)
        .slice(0, QUESTIONS_PER_GAME)
        .map((q) => ({ ...q, correct: q.answers[0], choices: shuffle(q.answers) }));
    answers.value = rounds.value.map(() => null);
    index.value = 0;
    finished.value = false;
    window.scrollTo({ top: 0 });
}

function next() {
    if (index.value < rounds.value.length - 1) {
        index.value++;
        return;
    }
    finished.value = true;
    const id = theme.value!.id;
    if (score.value > best.value[id]) {
        best.value[id] = score.value;
        localStorage.setItem(bestKey(id), String(score.value));
    }
}

function backToThemes() {
    theme.value = null;
}
</script>

<template>
    <v-container class="quiz">
        <!-- Choix du thème -->
        <template v-if="!theme">
            <p class="mb-4">
                Teste tes connaissances sur le Code et les spécificités
                amiénoises : {{ QUESTIONS_PER_GAME }} questions tirées au hasard
                par partie. Il peut y avoir des erreurs, n'hésite pas à les signaler
                (Claude Code n'est pas parfait).
            </p>
            <ul class="quiz-themes">
                <li v-for="t in themes" :key="t.id">
                    <button type="button" class="quiz-theme" @click="start(t)">
                        <v-icon :icon="t.icon" class="quiz-theme__icon" />
                        <span class="quiz-theme__text">
                            <span class="quiz-theme__label">{{ t.label }}</span>
                            <span class="quiz-theme__description">
                                {{ t.description }}
                            </span>
                        </span>
                        <span class="quiz-theme__meta">
                            <span>{{ countOf(t.id) }} questions</span>
                            <span v-if="best[t.id] >= 0">
                                Record : {{ best[t.id] }} / {{ QUESTIONS_PER_GAME }}
                            </span>
                        </span>
                    </button>
                </li>
            </ul>
        </template>

        <!-- Partie en cours -->
        <template v-else-if="!finished">
            <div class="quiz-progress" aria-live="polite">
                <div class="quiz-progress__label">
                    <span>{{ theme.label }}</span>
                    <span>{{ index + 1 }} / {{ rounds.length }}</span>
                </div>
                <v-progress-linear
                    :model-value="((index + (answers[index] ? 1 : 0)) / rounds.length) * 100"
                    color="primary"
                    height="6"
                    rounded
                    :aria-label="`Question ${index + 1} sur ${rounds.length}`"
                />
            </div>

            <QuizCard
                :key="current.id"
                :round="current"
                v-model:selected="answers[index]"
            />

            <div class="quiz-actions">
                <v-btn variant="text" @click="backToThemes">Abandonner</v-btn>
                <v-btn
                    color="primary"
                    :disabled="!answers[index]"
                    append-icon="mdi-chevron-right"
                    @click="next"
                >
                    {{ index < rounds.length - 1 ? "Suivante" : "Voir le résultat" }}
                </v-btn>
            </div>
        </template>

        <!-- Résultat -->
        <template v-else>
            <section class="quiz-result">
                <p class="quiz-result__score">{{ score }} / {{ rounds.length }}</p>
                <p class="text-medium-emphasis">{{ theme.label }}</p>
            </section>

            <section v-if="missed.length" class="mt-6" aria-labelledby="quiz-missed">
                <h2 id="quiz-missed" class="quiz-section-title">À revoir</h2>
                <ul class="quiz-missed">
                    <li v-for="r in missed" :key="r.id">
                        <img
                            v-if="r.image"
                            class="quiz-missed__image"
                            :src="r.image"
                            alt=""
                            width="56"
                            height="56"
                        />
                        <p class="quiz-missed__question">{{ r.question }}</p>
                        <p>
                            <v-icon icon="mdi-check-circle" size="small" color="success" />
                            {{ r.correct }}
                        </p>
                        <router-link :to="r.source" class="quiz-missed__source">
                            Revoir dans le Code
                        </router-link>
                    </li>
                </ul>
            </section>

            <div class="quiz-actions">
                <v-btn variant="text" @click="backToThemes">Changer de thème</v-btn>
                <v-btn color="primary" prepend-icon="mdi-refresh" @click="start(theme)">
                    Rejouer
                </v-btn>
            </div>
        </template>
    </v-container>
</template>

<style scoped>
.quiz {
    max-width: 720px;
}

/* Thèmes : même cadre que les listes de la checklist */
.quiz-themes,
.quiz-missed {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.quiz-themes li + li,
.quiz-missed li + li {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.quiz-theme {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 14px 16px;
    border: none;
    background: none;
    font: inherit;
    text-align: left;
    color: inherit;
    cursor: pointer;
    transition: background-color 180ms ease;
}

.quiz-theme:hover,
.quiz-theme:focus-visible {
    background-color: rgba(var(--v-theme-on-surface), 0.06);
}

.quiz-theme__icon {
    flex: none;
    color: rgb(var(--v-theme-primary));
}

.quiz-theme__text {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.quiz-theme__label {
    font-weight: 600;
}

.quiz-theme__description,
.quiz-theme__meta {
    font-size: 0.8125rem;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

.quiz-theme__meta {
    display: flex;
    flex: none;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
}

.quiz-progress {
    margin-bottom: 1.5rem;
}

.quiz-progress__label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 0.875rem;
    font-weight: 600;
}

.quiz-actions {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 1.5rem;
}

.quiz-result {
    padding: 24px 16px;
    text-align: center;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.quiz-result__score {
    font-size: 2.5rem;
    font-weight: 600;
}

.quiz-section-title {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.quiz-missed li {
    display: flow-root;
    padding: 12px 16px;
}

.quiz-missed__image {
    float: right;
    margin-left: 12px;
    object-fit: contain;
    border-radius: 5px;
}

.quiz-missed__question {
    font-weight: 600;
}

.quiz-missed__source {
    font-size: 0.875rem;
    color: rgb(var(--v-theme-primary));
}

@media (max-width: 599px) {
    .quiz-theme__meta {
        display: none;
    }
}
</style>
