<script setup lang="ts">
import "../../sass/base/_circulaires.scss";
import "../../sass/base/_insignes.scss";
import { QuizQuestion } from "../../types/quizTypes";

defineProps<{
    round: QuizQuestion;
    size: number;
}>();

// Bande unie, en deux ou en trois couleurs, comme dans l'article 6
const containerOf = (count: number) => (count === 3 ? "tiers" : count === 2 ? "demi" : "");
</script>

<template>
    <div
        v-if="round.circulaire"
        data-fal-table="circu"
        class="quiz-visual-circu"
        :style="{ width: `${size * 2}px` }"
    >
        <div
            v-for="(couleur, i) in round.circulaire.couleurs"
            :key="i"
            :data-fal-circu-container="containerOf(round.circulaire.couleurs.length)"
            :data-fal-circu-color="couleur"
        >
            <div :data-fal-circu="round.circulaire.matiere"></div>
        </div>
    </div>
    <img
        v-else-if="round.image"
        class="quiz-visual-image"
        :class="{ [`bg-ruban-${round.imageRuban}`]: round.imageRuban }"
        :src="round.image"
        :style="round.imageRotate ? { rotate: `${round.imageRotate}deg` } : undefined"
        alt=""
        :width="size"
        :height="size"
    />
</template>

<style scoped>
.quiz-visual-image {
    object-fit: contain;
    border-radius: 5px;
}

.quiz-visual-circu {
    max-width: 100%;
}
</style>
