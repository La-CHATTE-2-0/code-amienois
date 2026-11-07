<script setup lang="ts">
import { computed, ref, watch } from "vue";
import quiz from "../../core/quiz.json";
import QuizCard from "../../components/quiz/QuizCard.vue";
import QuizScoreBar from "../../components/quiz/QuizScoreBar.vue";
import QuizVisual from "../../components/quiz/QuizVisual.vue";
import { addSession } from "../../core/quizHistory";
import { IMAGES_THEME, imageQuestionCount, imageQuestions } from "../../core/quizImages";
import { QuizQuestion, QuizRound, QuizTheme } from "../../types/quizTypes";

const ALL = "tout";
const SURVIVOR = "survivor";
// 0 : toutes les questions du thème
const COUNT_OPTIONS = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 0, label: "Toutes" },
];

const modes: QuizTheme[] = [
    {
        id: ALL,
        label: "Tout mélanger",
        description: "Des questions au hasard sur l'ensemble du Code.",
        icon: "mdi-shuffle-variant",
    },
    {
        id: IMAGES_THEME,
        label: "Quiz en images",
        description: "Insignes, emblèmes et couleurs de circulaire à reconnaître.",
        icon: "mdi-image-outline",
    },
    {
        id: SURVIVOR,
        label: "Survivor",
        description: "Toutes les questions, la partie s'arrête à la première erreur.",
        icon: "mdi-skull-outline",
    },
];
const themes: QuizTheme[] = [...quiz.themes, ...modes];
const groups = [
    { id: "themes", title: "", items: quiz.themes },
    { id: "modes", title: "Autres modes", items: modes },
];
const questions: QuizQuestion[] = quiz.questions;

const countOf = (themeId: string) => {
    if (themeId === IMAGES_THEME) return imageQuestionCount;
    return themeId === ALL || themeId === SURVIVOR
        ? questions.length : questions.filter((q) => q.theme === themeId).length;
};

// Nombre de questions par partie, retenu sur l'appareil
const savedCount = Number(localStorage.getItem("quiz-count") ?? 20);
const questionCount = ref(
    COUNT_OPTIONS.some((o) => o.value === savedCount) ? savedCount : 20
);
watch(questionCount, (n) => localStorage.setItem("quiz-count", String(n)));

const gameSize = (themeId: string) =>
    themeId === SURVIVOR || questionCount.value === 0
        ? countOf(themeId)
        : Math.min(countOf(themeId), questionCount.value);

// Meilleur score par thème et par nombre de questions, conservé sur l'appareil
const bestKey = (themeId: string, count: number) =>
    themeId === SURVIVOR ? `quiz-best-${SURVIVOR}` : `quiz-best-${themeId}-${count || "toutes"}`;
const records = ref<Record<string, number>>(
    Object.fromEntries(
        themes.flatMap((t) =>
            COUNT_OPTIONS.map((o) => {
                const key = bestKey(t.id, o.value);
                // Les records d'avant le choix du nombre de questions comptent pour 20
                const legacy = o.value === 20 ? localStorage.getItem(`quiz-best-${t.id}`) : null;
                return [key, Number(localStorage.getItem(key) ?? legacy ?? -1)];
            })
        )
    )
);
const bestOf = (themeId: string) => records.value[bestKey(themeId, questionCount.value)];

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
const startedAt = ref(new Date());

const survivor = computed(() => theme.value?.id === SURVIVOR);
const current = computed(() => rounds.value[index.value]);
// En survivor, la partie peut s'arrêter avant la dernière question
const played = computed(() => rounds.value.slice(0, index.value + 1));
const score = computed(
    () => played.value.filter((r, i) => answers.value[i] === r.correct).length
);
const missed = computed(() =>
    played.value.filter((r, i) => answers.value[i] !== r.correct)
);
// Compté dès le clic, sans attendre la question suivante
const wrong = computed(
    () => played.value.filter((r, i) => answers.value[i] && answers.value[i] !== r.correct).length
);
const isLast = computed(
    () =>
        index.value === rounds.value.length - 1 ||
        (survivor.value && answers.value[index.value] !== current.value.correct)
);

function start(selectedTheme: QuizTheme) {
    let pool: QuizQuestion[];
    if (selectedTheme.id === IMAGES_THEME) {
        // Mauvaises réponses retirées au sort à chaque partie
        pool = imageQuestions();
    } else {
        pool =
            selectedTheme.id === ALL || selectedTheme.id === SURVIVOR
                ? questions
                : questions.filter((q) => q.theme === selectedTheme.id);
    }
    theme.value = selectedTheme;
    rounds.value = shuffle(pool)
        .slice(0, gameSize(selectedTheme.id))
        .map((q) => ({ ...q, correct: q.answers[0], choices: shuffle(q.answers) }));
    answers.value = rounds.value.map(() => null);
    index.value = 0;
    finished.value = false;
    startedAt.value = new Date();
    window.scrollTo({ top: 0 });
}

function next() {
    if (!isLast.value) {
        index.value++;
        return;
    }
    finished.value = true;
    // Seules les parties menées au bout entrent dans l'historique
    addSession({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        startedAt: startedAt.value.toISOString(),
        endedAt: new Date().toISOString(),
        theme: theme.value!.id,
        count: questionCount.value,
        total: rounds.value.length,
        correct: score.value,
        wrong: wrong.value,
        missed: theme.value!.id === IMAGES_THEME ? [] : missed.value.map((r) => r.id),
    });
    const key = bestKey(theme.value!.id, questionCount.value);
    if (score.value > records.value[key]) {
        records.value[key] = score.value;
        localStorage.setItem(key, String(score.value));
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
                amiénoises : choisis le nombre de questions, puis un thème. Il peut
                y avoir des erreurs, n'hésite pas à les signaler (Claude Code n'est
                pas parfait).
            </p>
            <div class="quiz-count">
                <span id="quiz-count-label" class="quiz-count__label">
                    Questions par partie
                </span>
                <v-btn-toggle
                    v-model="questionCount"
                    mandatory
                    divided
                    density="compact"
                    variant="outlined"
                    color="primary"
                    aria-labelledby="quiz-count-label"
                >
                    <v-btn v-for="o in COUNT_OPTIONS" :key="o.value" :value="o.value">
                        {{ o.label }}
                    </v-btn>
                </v-btn-toggle>
            </div>
            <template v-for="g in groups" :key="g.id">
                <h2 v-if="g.title" class="quiz-section-title mt-6">{{ g.title }}</h2>
                <ul class="quiz-themes">
                    <li v-for="t in g.items" :key="t.id">
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
                                <span v-if="bestOf(t.id) >= 0">
                                    Record : {{ bestOf(t.id) }}
                                    <template v-if="t.id !== SURVIVOR">
                                        / {{ gameSize(t.id) }}
                                    </template>
                                </span>
                            </span>
                        </button>
                    </li>
                </ul>
            </template>
        </template>

        <!-- Partie en cours -->
        <template v-else-if="!finished">
            <QuizScoreBar
                :label="theme.label"
                :correct="score"
                :wrong="wrong"
                :total="rounds.length"
                :position="index + 1"
                :survivor="survivor"
            />

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
                    {{ isLast ? "Voir le résultat" : "Suivante" }}
                </v-btn>
            </div>
        </template>

        <!-- Résultat -->
        <template v-else>
            <section class="quiz-result">
                <p class="quiz-result__score">
                    {{ score }}<template v-if="!survivor"> / {{ rounds.length }}</template>
                </p>
                <p class="text-medium-emphasis">
                    {{ theme.label }}
                    <template v-if="!survivor">
                        · {{ Math.round((score / rounds.length) * 100) }} % de réussite
                    </template>
                    <template v-else>
                        : {{ score > 1 ? "bonnes réponses" : "bonne réponse" }} d'affilée
                        sur {{ rounds.length }}
                    </template>
                </p>
            </section>

            <section v-if="missed.length" class="mt-6" aria-labelledby="quiz-missed">
                <h2 id="quiz-missed" class="quiz-section-title">À revoir</h2>
                <ul class="quiz-missed">
                    <li v-for="r in missed" :key="r.id">
                        <div v-if="r.image || r.circulaire" class="quiz-missed__image">
                            <QuizVisual :round="r" :size="56" />
                        </div>
                        <p class="quiz-missed__question">{{ r.question }}</p>
                        <p>
                            <v-icon icon="mdi-check-circle" size="small" color="success" />
                            <template v-if="r.imageName">
                                <strong>{{ r.imageName }}</strong> :
                            </template>
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

.quiz-count {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px 16px;
    margin-bottom: 1rem;
}

.quiz-count__label {
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
