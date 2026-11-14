<script setup lang="ts">
import { computed, useId } from "vue";

const props = withDefaults(
    defineProps<{
        colors?: [string, string, string];
        label?: string;
        thin?: boolean;
    }>(),
    {
        colors: () => ["#f6f5ef", "#12633b", "#171717"],
        label: "Tresse à trois brins",
        thin: false,
    },
);

const uid = useId();

// Tresse à trois brins : les mèches alternent haut / bas et chaque mèche
// recouvre la précédente, d'où le motif en chevrons. Les couleurs défilent
// dans l'ordre des brins.
const CENTER_Y = 75;
const STEP = 22;
const OFFSET_Y = 14;
const LENGTH = 70;
const THICKNESS = 34;
const ANGLE = 34;

// Tresse fine : même dessin sur une longueur 1,5 fois plus grande. Rendue à la
// même largeur, elle est donc moins haute, avec plus de mèches.
const width = computed(() => (props.thin ? 1080 : 720));

const strands = computed(() =>
    Array.from({ length: Math.ceil((width.value + 80) / STEP) + 1 }, (_, index) => {
        const top = index % 2 === 0;
        const cx = index * STEP - 40;
        const cy = top ? CENTER_Y - OFFSET_Y : CENTER_Y + OFFSET_Y;

        return {
            color: props.colors[index % props.colors.length],
            x: cx - LENGTH / 2,
            y: cy - THICKNESS / 2,
            transform: `rotate(${top ? -ANGLE : ANGLE} ${cx} ${cy})`,
        };
    }),
);
</script>

<template>
    <svg
        class="plaited-ribbon"
        :viewBox="`0 0 ${width} 150`"
        role="img"
        :aria-labelledby="`${uid}-title`"
        preserveAspectRatio="xMidYMid meet"
    >
        <title :id="`${uid}-title`">{{ label }}</title>
        <defs>
            <filter :id="`${uid}-velvet`" x="-5%" y="-25%" width="110%" height="150%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".5 .05"
                    numOctaves="3"
                    seed="41"
                    result="fibres"
                />
                <feColorMatrix
                    in="fibres"
                    values=".45 0 0 0 .18  0 .45 0 0 .18  0 0 .45 0 .18  0 0 0 .16 0"
                    result="grain-doux"
                />
                <feComposite in="grain-doux" in2="SourceGraphic" operator="in" result="grain" />
                <feBlend in="SourceGraphic" in2="grain" mode="soft-light" />
            </filter>

            <filter :id="`${uid}-shadow`" x="-5%" y="-30%" width="110%" height="170%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity=".35" />
            </filter>

            <!-- Volume d'une mèche : bords sombres, milieu légèrement éclairé. -->
            <linearGradient :id="`${uid}-volume`" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#000" stop-opacity=".35" />
                <stop offset=".4" stop-color="#fff" stop-opacity=".1" />
                <stop offset=".6" stop-color="#fff" stop-opacity=".05" />
                <stop offset="1" stop-color="#000" stop-opacity=".4" />
            </linearGradient>

            <clipPath :id="`${uid}-frame`">
                <rect x="0" y="0" :width="width" height="150" />
            </clipPath>
        </defs>

        <g :clip-path="`url(#${uid}-frame)`">
            <g :filter="`url(#${uid}-shadow)`">
                <g v-for="(strand, index) in strands" :key="index" :transform="strand.transform">
                    <rect
                        class="plaited-ribbon__strand"
                        :x="strand.x"
                        :y="strand.y"
                        :width="LENGTH"
                        :height="THICKNESS"
                        :rx="THICKNESS / 2"
                        :fill="strand.color"
                        :filter="`url(#${uid}-velvet)`"
                    />
                    <rect
                        class="plaited-ribbon__light"
                        :x="strand.x"
                        :y="strand.y"
                        :width="LENGTH"
                        :height="THICKNESS"
                        :rx="THICKNESS / 2"
                        :fill="`url(#${uid}-volume)`"
                    />
                </g>
            </g>
        </g>
    </svg>
</template>

<style scoped>
.plaited-ribbon {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
}

.plaited-ribbon__strand {
    stroke: rgba(0, 0, 0, 0.55);
    stroke-width: 2.5;
}

.plaited-ribbon__light {
    pointer-events: none;
    mix-blend-mode: soft-light;
}
</style>
