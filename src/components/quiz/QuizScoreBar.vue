<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    label: string;
    correct: number;
    wrong: number;
    total: number;
    // Question affichée (1, 2…), pour le repère « n / total »
    position: number;
    // En survivor, une seule erreur termine la partie : on montre la série
    survivor?: boolean;
}>();

const percent = (n: number) => (props.total ? (n / props.total) * 100 : 0);
const summary = computed(() =>
    props.survivor
        ? `Série de ${props.correct}`
        : `${props.correct} ${props.correct > 1 ? "bonnes" : "bonne"}, ` +
          `${props.wrong} ${props.wrong > 1 ? "fausses" : "fausse"}, ` +
          `question ${props.position} sur ${props.total}`
);
</script>

<template>
    <div class="quiz-score" aria-live="polite" :aria-label="summary" role="status">
        <div class="quiz-score__label" aria-hidden="true">
            <span class="quiz-score__theme">{{ label }}</span>
            <span v-if="survivor">Série : {{ correct }}</span>
            <span v-else class="quiz-score__counts">
                <span class="quiz-score__count quiz-score__count--correct">
                    <v-icon icon="mdi-check-circle" size="small" />{{ correct }}
                </span>
                <span class="quiz-score__count quiz-score__count--wrong">
                    <v-icon icon="mdi-close-circle" size="small" />{{ wrong }}
                </span>
                <span class="quiz-score__position">{{ position }} / {{ total }}</span>
            </span>
        </div>
        <div class="quiz-score__bar" aria-hidden="true">
            <div
                class="quiz-score__segment quiz-score__segment--correct"
                :style="{ width: `${percent(correct)}%` }"
            />
            <div
                class="quiz-score__segment quiz-score__segment--wrong"
                :style="{ width: `${percent(wrong)}%` }"
            />
        </div>
    </div>
</template>

<style scoped>
.quiz-score {
    margin-bottom: 1.5rem;
}

.quiz-score__label {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 6px;
    font-size: 0.875rem;
    font-weight: 600;
}

.quiz-score__theme {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.quiz-score__counts {
    display: flex;
    flex: none;
    align-items: center;
    gap: 12px;
}

.quiz-score__count {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.quiz-score__count--correct .v-icon {
    color: rgb(var(--v-theme-success));
}

.quiz-score__count--wrong .v-icon {
    color: rgb(var(--v-theme-error));
}

.quiz-score__position {
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

/* Bonnes réponses en vert, fausses en rouge, le reste à jouer en fond */
.quiz-score__bar {
    display: flex;
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background-color: rgba(var(--v-theme-on-surface), 0.12);
}

.quiz-score__segment {
    transition: width 240ms ease;
}

.quiz-score__segment--correct {
    background-color: rgb(var(--v-theme-success));
}

.quiz-score__segment--wrong {
    background-color: rgb(var(--v-theme-error));
}
</style>
