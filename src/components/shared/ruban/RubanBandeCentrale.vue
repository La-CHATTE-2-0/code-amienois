<script setup lang="ts">
import { useId } from "vue";

withDefaults(
    defineProps<{
        velvetColor?: string;
        secondVelvetColor?: string;
        satinColor?: string;
        stripeMaterial?: "satin" | "velvet";
        showStripe?: boolean;
        label?: string;
    }>(),
    {
        velvetColor: "#6f178f",
        secondVelvetColor: "",
        satinColor: "#9b35c4",
        stripeMaterial: "satin",
        showStripe: true,
        label: "Ruban de velours avec bande centrale en satin",
    },
);

const uid = useId();
</script>

<template>
    <svg
        class="striped-ribbon"
        viewBox="0 0 720 140"
        role="img"
        :aria-labelledby="`${uid}-title`"
        preserveAspectRatio="xMidYMid meet"
    >
        <title :id="`${uid}-title`">{{ label }}</title>
        <defs>
            <filter :id="`${uid}-velvet`" x="-8%" y="-25%" width="116%" height="150%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".012 .76"
                    numOctaves="3"
                    seed="23"
                    result="fibres"
                />
                <feGaussianBlur in="fibres" stdDeviation=".28 .08" result="fibres-fines" />
                <feColorMatrix
                    in="fibres-fines"
                    values=".45 0 0 0 .18  0 .45 0 0 .18  0 0 .45 0 .18  0 0 0 .14 0"
                    result="grain-doux"
                />
                <feComposite
                    in="grain-doux"
                    in2="SourceGraphic"
                    operator="in"
                    result="grain-clipped"
                />
                <feBlend in="SourceGraphic" in2="grain-clipped" mode="soft-light" />
            </filter>

            <filter :id="`${uid}-shadow`" x="-5%" y="-30%" width="110%" height="170%">
                <feDropShadow dx="0" dy="5" stdDeviation="5" flood-opacity=".3" />
            </filter>

            <linearGradient :id="`${uid}-velvet-light`" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#000" stop-opacity=".2" />
                <stop offset=".24" stop-color="#fff" stop-opacity=".05" />
                <stop offset="1" stop-color="#000" stop-opacity=".24" />
            </linearGradient>

            <linearGradient :id="`${uid}-satin-light`" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#000" stop-opacity=".18" />
                <stop offset=".3" stop-color="#fff" stop-opacity=".08" />
                <stop offset=".48" stop-color="#fff" stop-opacity=".25" />
                <stop offset=".7" stop-color="#fff" stop-opacity=".05" />
                <stop offset="1" stop-color="#000" stop-opacity=".2" />
            </linearGradient>

            <clipPath :id="`${uid}-ribbon-shape`">
                <rect x="8" y="25" width="704" height="90" rx="6" />
            </clipPath>
        </defs>

        <g :filter="`url(#${uid}-shadow)`" :clip-path="`url(#${uid}-ribbon-shape)`">
            <template v-if="secondVelvetColor">
                <rect
                    x="8"
                    y="25"
                    width="704"
                    height="45"
                    :fill="velvetColor"
                    :filter="`url(#${uid}-velvet)`"
                />
                <rect
                    x="8"
                    y="70"
                    width="704"
                    height="45"
                    :fill="secondVelvetColor"
                    :filter="`url(#${uid}-velvet)`"
                />
            </template>
            <rect
                v-else
                x="8"
                y="25"
                width="704"
                height="90"
                :fill="velvetColor"
                :filter="`url(#${uid}-velvet)`"
            />
            <rect
                x="8"
                y="25"
                width="704"
                height="90"
                :fill="`url(#${uid}-velvet-light)`"
                class="striped-ribbon__light"
            />

            <!-- 30 sur 90 : la bande centrale occupe exactement un tiers du ruban. -->
            <g v-if="showStripe">
                <rect
                    x="8"
                    y="55"
                    width="704"
                    height="30"
                    :fill="satinColor"
                    :filter="stripeMaterial === 'velvet' ? `url(#${uid}-velvet)` : undefined"
                />
                <rect
                    x="8"
                    y="55"
                    width="704"
                    height="30"
                    :fill="`url(#${uid}-${stripeMaterial === 'satin' ? 'satin' : 'velvet'}-light)`"
                    class="striped-ribbon__light"
                />
                <path class="striped-ribbon__seam" d="M8 55H712 M8 85H712" />
            </g>
        </g>
        <rect class="striped-ribbon__edge" x="8" y="25" width="704" height="90" rx="6" />
    </svg>
</template>

<style scoped>
.striped-ribbon {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
}

.striped-ribbon__light {
    pointer-events: none;
    mix-blend-mode: soft-light;
}

.striped-ribbon__seam {
    fill: none;
    stroke: rgba(30, 0, 42, 0.35);
    stroke-width: 1.5;
}

.striped-ribbon__edge {
    fill: none;
    stroke: rgba(0, 0, 0, 0.48);
    stroke-width: 3;
}
</style>
