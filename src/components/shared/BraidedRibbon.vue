<script setup lang="ts">
import { computed, useId } from "vue";

const props = withDefaults(
    defineProps<{
        colors?: [string, string] | [string, string, string];
        label?: string;
        inverse?: boolean;
    }>(),
    {
        colors: () => ["#f21f2f", "#154cff"],
        label: "Ruban tressé",
        inverse: false,
    },
);

const uid = useId();
const coreColor = computed(() => props.colors[props.colors.length - 1] ?? "#0914bc");
const wrapColors = computed(() => props.colors.slice(0, -1));

const turns = computed(() =>
    Array.from({ length: 6 }, (_, index) => {
        const x = index * 164 - 164;
        const color = wrapColors.value[index % wrapColors.value.length] ?? "#bc1212";

        return {
            color,
            // Le pan montant est derrière le ruban central, le pan descendant passe devant.
            back: `${x + 64},116 ${x + 146},116 ${x + 246},34 ${x + 164},34`,
            front: `${x},34 ${x + 82},34 ${x + 146},116 ${x + 64},116`,
        };
    }),
);
</script>

<template>
    <svg
        class="braided-ribbon"
        viewBox="0 0 720 150"
        role="img"
        :aria-labelledby="`${uid}-title`"
        preserveAspectRatio="xMidYMid meet"
    >
        <title :id="`${uid}-title`">{{ label }}</title>
        <defs>
            <!-- Fibres mates et directionnelles : pas de reflet blanc spéculaire. -->
            <filter :id="`${uid}-velvet`" x="-12%" y="-25%" width="124%" height="150%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".012 .78"
                    numOctaves="3"
                    seed="17"
                    result="fibres"
                />
                <feGaussianBlur in="fibres" stdDeviation=".3 .08" result="fibres-fines" />
                <feColorMatrix
                    in="fibres-fines"
                    values=".45 0 0 0 .18  0 .45 0 0 .18  0 0 .45 0 .18  0 0 0 .14 0"
                    result="grain-doux"
                />
                <feComposite
                    in="grain-doux"
                    in2="SourceGraphic"
                    operator="in"
                    result="fibres-clipped"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="fibres-clipped"
                    mode="soft-light"
                    result="velours-mat"
                />
                <feColorMatrix in="velours-mat" type="saturate" values="1.12" />
            </filter>

            <filter :id="`${uid}-front-shadow`" x="-20%" y="-30%" width="140%" height="170%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity=".42" />
            </filter>

            <linearGradient :id="`${uid}-core-light`" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#000" stop-opacity=".18" />
                <stop offset=".22" stop-color="#fff" stop-opacity=".07" />
                <stop offset=".58" stop-color="#fff" stop-opacity=".03" />
                <stop offset="1" stop-color="#000" stop-opacity=".24" />
            </linearGradient>

            <linearGradient :id="`${uid}-fold-light`" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#fff" stop-opacity=".07" />
                <stop offset=".48" stop-color="#fff" stop-opacity=".02" />
                <stop offset="1" stop-color="#000" stop-opacity=".18" />
            </linearGradient>

            <clipPath :id="`${uid}-frame`">
                <rect x="0" y="20" width="720" height="110" rx="8" />
            </clipPath>
        </defs>

        <g
            :clip-path="`url(#${uid}-frame)`"
            :transform="inverse ? 'translate(720 0) scale(-1 1)' : undefined"
        >
            <!-- Retours du ruban enveloppant : ils disparaissent derrière le ruban bleu. -->
            <g class="braided-ribbon__back">
                <polygon
                    v-for="(turn, index) in turns"
                    :key="`back-${index}`"
                    :points="turn.back"
                    :fill="turn.color"
                    :filter="`url(#${uid}-velvet)`"
                />
            </g>

            <rect
                class="braided-ribbon__core-edge"
                x="-8"
                y="40"
                width="736"
                height="70"
            />
            <rect
                x="-8"
                y="43"
                width="736"
                height="64"
                :fill="coreColor"
                :filter="`url(#${uid}-velvet)`"
            />
            <rect
                x="-8"
                y="43"
                width="736"
                height="64"
                :fill="`url(#${uid}-core-light)`"
                class="braided-ribbon__light"
            />

            <!-- Pans visibles : leurs intervalles laissent apparaître des parallélogrammes bleus. -->
            <g :filter="`url(#${uid}-front-shadow)`">
                <g v-for="(turn, index) in turns" :key="`front-${index}`">
                    <polygon class="braided-ribbon__front-edge" :points="turn.front" />
                    <polygon
                        :points="turn.front"
                        :fill="turn.color"
                        :filter="`url(#${uid}-velvet)`"
                    />
                    <polygon
                        :points="turn.front"
                        :fill="`url(#${uid}-fold-light)`"
                        class="braided-ribbon__light"
                    />
                </g>
            </g>
        </g>
    </svg>
</template>

<style scoped>
.braided-ribbon {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
}

.braided-ribbon__back {
    opacity: 0.84;
}

.braided-ribbon__back polygon {
    stroke: rgba(0, 0, 0, 0.45);
    stroke-width: 5;
    stroke-linejoin: round;
}

.braided-ribbon__core-edge {
    fill: rgba(0, 0, 0, 0.62);
}

.braided-ribbon__front-edge {
    fill: rgba(0, 0, 0, 0.65);
    stroke: rgba(0, 0, 0, 0.65);
    stroke-width: 7;
    stroke-linejoin: round;
}

.braided-ribbon__light {
    pointer-events: none;
    mix-blend-mode: soft-light;
}
</style>
