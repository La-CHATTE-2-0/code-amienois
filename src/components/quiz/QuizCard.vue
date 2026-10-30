<script setup lang="ts">
import { computed } from "vue";
import { QuizRound } from "../../types/quizTypes";

const props = defineProps<{
    round: QuizRound;
}>();

// Réponse choisie, gérée par la page (score)
const selected = defineModel<string | null>("selected", { default: null });

const answered = computed(() => selected.value !== null);

function stateOf(choice: string) {
    if (!answered.value) return "";
    if (choice === props.round.correct) return "quiz-choice--correct";
    if (choice === selected.value) return "quiz-choice--wrong";
    return "quiz-choice--idle";
}
</script>

<template>
    <div class="quiz-card">
        <img
            v-if="round.image"
            class="quiz-card__image"
            :src="round.image"
            alt=""
            width="120"
            height="120"
        />
        <p class="quiz-card__question">{{ round.question }}</p>

        <ul class="quiz-choices">
            <li v-for="choice in round.choices" :key="choice">
                <button
                    type="button"
                    class="quiz-choice"
                    :class="stateOf(choice)"
                    :disabled="answered"
                    @click="selected = choice"
                >
                    <span>{{ choice }}</span>
                    <v-icon
                        v-if="answered && choice === round.correct"
                        icon="mdi-check-circle"
                        size="small"
                    />
                    <v-icon
                        v-else-if="answered && choice === selected"
                        icon="mdi-close-circle"
                        size="small"
                    />
                </button>
            </li>
        </ul>

        <div v-if="answered" class="quiz-feedback" aria-live="polite">
            <p class="quiz-feedback__verdict">
                {{ selected === round.correct ? "Bonne réponse !" : "Raté…" }}
            </p>
            <p v-if="round.explanation">{{ round.explanation }}</p>
            <router-link :to="round.source" class="quiz-feedback__source">
                Revoir dans le Code
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.quiz-card__image {
    display: block;
    margin: 0 auto 12px;
    object-fit: contain;
}

.quiz-card__question {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.quiz-choices {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.quiz-choices li + li {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.quiz-choice {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    padding: 12px 16px;
    border: none;
    background: none;
    font: inherit;
    text-align: left;
    color: inherit;
    cursor: pointer;
    transition: background-color 180ms ease;
}

.quiz-choice:not(:disabled):hover,
.quiz-choice:focus-visible {
    background-color: rgba(var(--v-theme-on-surface), 0.06);
}

.quiz-choice:disabled {
    cursor: default;
}

/* Liseré à gauche pour la correction */
.quiz-choice--correct {
    box-shadow: inset 4px 0 rgb(var(--v-theme-success));
    background-color: rgba(var(--v-theme-success), 0.12);
}

.quiz-choice--wrong {
    box-shadow: inset 4px 0 rgb(var(--v-theme-error));
    background-color: rgba(var(--v-theme-error), 0.12);
}

.quiz-choice--idle {
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

.quiz-feedback {
    margin-top: 1rem;
    padding: 12px 16px;
    border-left: 4px solid rgb(var(--v-theme-primary));
    border-radius: 4px;
    background-color: rgba(var(--v-theme-on-surface), 0.04);
}

.quiz-feedback__verdict {
    font-weight: 600;
}

.quiz-feedback__source {
    display: inline-block;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: rgb(var(--v-theme-primary));
}
</style>
