<script setup lang="ts">
import { useId } from "vue";

withDefaults(
    defineProps<{
        baseColor?: string;
        centerColor?: string;
        crossColor?: string;
        label?: string;
    }>(),
    {
        baseColor: "#123a9b",
        centerColor: "#171717",
        crossColor: "#f7f7f2",
        label: "Ruban à bandes centrales et transversales",
    },
);

const uid = useId();
</script>

<template>
    <svg
        class="crossed-ribbon"
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
                    seed="31"
                    result="fibres"
                />
                <feGaussianBlur in="fibres" stdDeviation=".28 .08" result="fibres-fines" />
                <feColorMatrix
                    in="fibres-fines"
                    values=".45 0 0 0 .18  0 .45 0 0 .18  0 0 .45 0 .18  0 0 0 .14 0"
                    result="grain-doux"
                />
                <feComposite in="grain-doux" in2="SourceGraphic" operator="in" result="grain" />
                <feBlend in="SourceGraphic" in2="grain" mode="soft-light" />
            </filter>

            <filter :id="`${uid}-shadow`" x="-5%" y="-30%" width="110%" height="170%">
                <feDropShadow dx="0" dy="5" stdDeviation="5" flood-opacity=".3" />
            </filter>

            <clipPath :id="`${uid}-shape`">
                <rect x="8" y="25" width="704" height="90" rx="6" />
            </clipPath>
        </defs>

        <g :filter="`url(#${uid}-shadow)`">
            <g :clip-path="`url(#${uid}-shape)`">
                <rect
                    x="8"
                    y="25"
                    width="704"
                    height="90"
                    :fill="baseColor"
                    :filter="`url(#${uid}-velvet)`"
                />
                <rect
                    x="8"
                    y="61"
                    width="704"
                    height="18"
                    :fill="centerColor"
                    :filter="`url(#${uid}-velvet)`"
                />
                <rect
                    x="226"
                    y="25"
                    width="34"
                    height="90"
                    :fill="crossColor"
                    :filter="`url(#${uid}-velvet)`"
                />
                <rect
                    x="460"
                    y="25"
                    width="34"
                    height="90"
                    :fill="crossColor"
                    :filter="`url(#${uid}-velvet)`"
                />
            </g>
        </g>
        <rect class="crossed-ribbon__edge" x="8" y="25" width="704" height="90" rx="6" />
    </svg>
</template>

<style scoped>
.crossed-ribbon {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
}

.crossed-ribbon__edge {
    fill: none;
    stroke: rgba(0, 0, 0, 0.48);
    stroke-width: 3;
}
</style>
