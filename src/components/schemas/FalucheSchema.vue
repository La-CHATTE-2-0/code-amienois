<script setup lang="ts">
import { computed, useId } from "vue";
import type { Circulaire } from "../../core/circulaires";
import { circuColors } from "../../core/circulaires";
import type { RubanResolu, Velours } from "../../core/falucheConfig";
import { VELOURS_COLORS } from "../../core/falucheConfig";

const props = defineProps<{
    velours: Velours;
    circulaire?: Circulaire;
    etudes?: RubanResolu | null;
    etudesSuivante?: RubanResolu | null;
    anneeChangement?: string;
    province?: RubanResolu | null;
    naissance?: RubanResolu | null;
}>();

const veloursColor = computed(() => VELOURS_COLORS[props.velours]);

const uid = useId();
const id = (name: string) => `${uid}-${name}`;
const url = (name: string) => `url(#${id(name)})`;

// Vue de dessus : le circulaire fait le tour, le velours occupe le centre
const C = 200;
const R_OUT = 190;
const R_IN = 160;
const RING = R_OUT - R_IN;

// Bandes concentriques du circulaire, la première couleur à l'extérieur
const bandes = computed(() => {
    const couleurs = props.circulaire?.couleurs ?? [];
    const width = RING / Math.max(couleurs.length, 1);
    return couleurs.map((name, i) => ({
        color: circuColors[name] ?? "transparent",
        r: R_OUT - width * (i + 0.5),
        width,
    }));
});

// Rubans supérieurs, de gauche à droite comme à l'article 10 ; les emplacements
// d'association et d'élu restent marqués en pointillés
const RUBAN_W = 22;
const RUBAN_TOP = 30;
const RUBAN_BOTTOM = 188;

type Slot = { key: string; x: number; ruban?: RubanResolu | null; annee?: string };

const slots = computed<Slot[]>(() => [
    { key: "etudes-suivante", x: 96, ruban: props.etudesSuivante, annee: props.anneeChangement },
    { key: "etudes", x: 124, ruban: props.etudes },
    { key: "association", x: 168 },
    { key: "elu", x: 204 },
    { key: "province", x: 256, ruban: props.province },
    { key: "naissance", x: 284, ruban: props.naissance },
]);

const filled = computed(() => slots.value.filter((s) => s.ruban));
const placeholders = computed(() => slots.value.filter((s) => s.key === "association" || s.key === "elu"));

// Bandes en long : la première couleur à gauche du ruban
const stripes = (slot: Slot) => {
    const couleurs = slot.ruban?.couleurs ?? [];
    const w = RUBAN_W / Math.max(couleurs.length, 1);
    return couleurs.map((color, i) => ({ color, x: slot.x - RUBAN_W / 2 + i * w, w }));
};

const initiale = (nom: string) => nom.trim().charAt(0).toUpperCase();

const description = computed(() => {
    const parts = [`Faluche de velours ${props.velours}`];
    if (props.circulaire) parts.push(`circulaire ${props.circulaire.matiere} de la filière ${props.circulaire.filiere}`);
    for (const [label, ruban] of [
        ["ville d'études", props.etudes],
        ["nouvelle ville d'études", props.etudesSuivante],
        ["province", props.province],
        ["ville de naissance", props.naissance],
    ] as const) {
        if (ruban) parts.push(`ruban de ${label} : ${ruban.nom}`);
    }
    return parts.join(", ");
});
</script>

<template>
    <svg
        class="faluche-schema"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        :aria-labelledby="`${id('titre')} ${id('desc')}`"
    >
        <title :id="id('titre')">Schéma de ma faluche, vue de dessus</title>
        <desc :id="id('desc')">{{ description }}</desc>

        <defs>
            <!-- Grain du velours : un bruit fin posé sur la couleur -->
            <filter :id="id('grain')" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="7" result="noise" />
                <feColorMatrix
                    in="noise"
                    type="matrix"
                    values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
                    result="grain"
                />
                <feComposite in="grain" in2="SourceGraphic" operator="in" result="grainIn" />
                <feMerge>
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode in="grainIn" />
                </feMerge>
            </filter>
            <!-- Volume du velours : plus clair au sommet, plus sombre sur les bords -->
            <radialGradient :id="id('volume')" cx="45%" cy="40%" r="60%">
                <stop offset="0" stop-color="#fff" stop-opacity="0.16" />
                <stop offset="0.7" stop-color="#fff" stop-opacity="0" />
                <stop offset="1" stop-color="#000" stop-opacity="0.35" />
            </radialGradient>
            <!-- Reflets du satin -->
            <linearGradient :id="id('satin')" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#fff" stop-opacity="0" />
                <stop offset="0.22" stop-color="#fff" stop-opacity="0.45" />
                <stop offset="0.4" stop-color="#fff" stop-opacity="0" />
                <stop offset="0.62" stop-color="#000" stop-opacity="0.18" />
                <stop offset="0.8" stop-color="#fff" stop-opacity="0.3" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <linearGradient :id="id('ruban')" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#000" stop-opacity="0.25" />
                <stop offset="0.5" stop-color="#fff" stop-opacity="0.12" />
                <stop offset="1" stop-color="#000" stop-opacity="0.25" />
            </linearGradient>
            <clipPath :id="id('dessus')">
                <circle :cx="C" :cy="C" :r="R_IN" />
            </clipPath>
        </defs>

        <!-- Ombre portée -->
        <circle :cx="C + 3" :cy="C + 5" :r="R_OUT + 2" fill="#000" opacity="0.12" />

        <!-- Circulaire -->
        <g data-faluche="circulaire" :data-matiere="circulaire?.matiere">
            <circle
                v-if="!bandes.length"
                :cx="C"
                :cy="C"
                :r="R_OUT - RING / 2"
                fill="none"
                stroke="#9a9a9a"
                stroke-opacity="0.35"
                :stroke-width="RING"
            />
            <circle
                v-for="(bande, i) in bandes"
                :key="i"
                :cx="C"
                :cy="C"
                :r="bande.r"
                fill="none"
                :stroke="bande.color"
                :stroke-width="bande.width + 0.4"
                :filter="circulaire?.matiere === 'velours' ? url('grain') : undefined"
                data-faluche="bande"
            />
            <circle
                v-if="circulaire?.matiere === 'satin'"
                :cx="C"
                :cy="C"
                :r="R_OUT - RING / 2"
                fill="none"
                :stroke="url('satin')"
                :stroke-width="RING"
            />
            <circle
                v-else-if="circulaire"
                :cx="C"
                :cy="C"
                :r="R_OUT - RING / 2"
                fill="none"
                :stroke="url('volume')"
                :stroke-width="RING"
            />
        </g>

        <!-- Velours du dessus -->
        <g data-faluche="velours">
            <circle :cx="C" :cy="C" :r="R_IN" :fill="veloursColor" :filter="url('grain')" />
            <circle :cx="C" :cy="C" :r="R_IN" :fill="url('volume')" />
        </g>

        <!-- Rubans supérieurs -->
        <g :clip-path="url('dessus')">
            <rect
                v-for="slot in placeholders"
                :key="slot.key"
                :x="slot.x - RUBAN_W / 2"
                :y="RUBAN_TOP - 20"
                :width="RUBAN_W"
                :height="RUBAN_BOTTOM - RUBAN_TOP + 20"
                fill="none"
                stroke="#fff"
                stroke-opacity="0.35"
                stroke-dasharray="4 4"
                :data-faluche="`emplacement-${slot.key}`"
            />
            <g v-for="slot in filled" :key="slot.key" :data-faluche="`ruban-${slot.key}`">
                <rect
                    v-for="(stripe, i) in stripes(slot)"
                    :key="i"
                    :x="stripe.x"
                    :y="RUBAN_TOP - 20"
                    :width="stripe.w + 0.3"
                    :height="RUBAN_BOTTOM - RUBAN_TOP + 20"
                    :fill="stripe.color"
                />
                <rect
                    :x="slot.x - RUBAN_W / 2"
                    :y="RUBAN_TOP - 20"
                    :width="RUBAN_W"
                    :height="RUBAN_BOTTOM - RUBAN_TOP + 20"
                    :fill="url('ruban')"
                    stroke="#000"
                    stroke-opacity="0.35"
                    stroke-width="0.8"
                />
                <text
                    v-if="slot.annee"
                    :x="slot.x"
                    :y="RUBAN_BOTTOM - 40"
                    :transform="`rotate(-90 ${slot.x} ${RUBAN_BOTTOM - 40})`"
                    text-anchor="middle"
                    dominant-baseline="central"
                    font-family="system-ui, sans-serif"
                    font-size="12"
                    font-weight="700"
                    fill="#fff"
                    stroke="#000"
                    stroke-width="2.4"
                    paint-order="stroke"
                >
                    {{ slot.annee }}
                </text>
            </g>
        </g>

        <!-- Écussons en tête de ruban -->
        <g v-for="slot in filled" :key="`ecusson-${slot.key}`" :data-faluche="`ecusson-${slot.key}`">
            <image
                v-if="slot.ruban?.ecusson"
                :href="slot.ruban.ecusson"
                :x="slot.x - 15"
                :y="RUBAN_BOTTOM - 8"
                width="30"
                height="34"
                preserveAspectRatio="xMidYMid meet"
            />
            <g v-else-if="slot.ruban">
                <path
                    :d="`M ${slot.x - 12} ${RUBAN_BOTTOM - 6} h 24 v 14 q 0 12 -12 18 q -12 -6 -12 -18 z`"
                    fill="#f4efe4"
                    stroke="#6b5a3a"
                    stroke-width="1.2"
                />
                <text
                    :x="slot.x"
                    :y="RUBAN_BOTTOM + 8"
                    text-anchor="middle"
                    dominant-baseline="central"
                    font-family="system-ui, sans-serif"
                    font-size="12"
                    font-weight="700"
                    fill="#3a2f1c"
                >
                    {{ initiale(slot.ruban.nom) }}
                </text>
            </g>
        </g>

        <!-- Contours, dans le style du schéma des parties -->
        <g fill="none" stroke="currentColor" stroke-opacity="0.55">
            <circle :cx="C" :cy="C" :r="R_OUT" stroke-width="2" />
            <circle :cx="C" :cy="C" :r="R_IN" stroke-width="1.4" />
        </g>
    </svg>
</template>

<style scoped>
.faluche-schema {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    color: rgb(var(--v-theme-on-background));
}
</style>
