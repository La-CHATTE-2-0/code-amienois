<script setup lang="ts">
import { computed, useId } from "vue";
import type { CirculaireConfig } from "../../core/circulaireConfig";
import { buildFrise, RUBAN_H } from "../../core/circulaireFrise";

const props = defineProps<{ circulaire: CirculaireConfig }>();

const frise = computed(() => buildFrise(props.circulaire));

// Affiché un peu plus petit qu'en vrai : le ruban défile en largeur sur téléphone
const DISPLAY_SCALE = 0.8;

const uid = useId();
const id = (name: string) => `${uid}-${name}`;
const url = (name: string) => `url(#${id(name)})`;

// Bandes horizontales du ruban, la première couleur en haut (comme l'article 6)
const bandes = computed(() => {
    const couleurs = frise.value.couleurs;
    const h = RUBAN_H / Math.max(couleurs.length, 1);
    return couleurs.map((color, i) => ({ color, y: i * h, h }));
});

const texture = computed(() =>
    frise.value.matiere === "velours" ? "/images/circu/velours.webp" : "/images/circu/satin.webp"
);

const description = computed(() => {
    const etoiles = props.circulaire.annees.length;
    return [
        frise.value.matiere ? `Ruban circulaire en ${frise.value.matiere}` : "Ruban circulaire sans filière choisie",
        props.circulaire.initiales && `initiales ${props.circulaire.initiales}`,
        etoiles && `${etoiles} année${etoiles > 1 ? "s" : ""}`,
    ]
        .filter(Boolean)
        .join(", ");
});
</script>

<template>
    <svg
        class="circulaire-ruban"
        :viewBox="`0 0 ${frise.width} ${frise.height}`"
        :width="frise.width"
        :height="frise.height"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        :aria-labelledby="`${id('titre')} ${id('desc')}`"
        :data-matiere="frise.matiere ?? undefined"
        :style="{ height: `${frise.height * DISPLAY_SCALE}px` }"
    >
        <title :id="id('titre')">Mon ruban circulaire, à plat</title>
        <desc :id="id('desc')">{{ description }}</desc>

        <defs>
            <!-- Texture satin ou velours répétée le long du ruban -->
            <pattern :id="id('texture')" patternUnits="userSpaceOnUse" :width="RUBAN_H * 2" :height="RUBAN_H">
                <image :href="texture" :width="RUBAN_H * 2" :height="RUBAN_H" preserveAspectRatio="xMidYMid slice" />
            </pattern>
            <!-- Fil d'or des lettres brodées -->
            <linearGradient :id="id('or')" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#fbeaa6" />
                <stop offset="0.45" stop-color="#d9b24a" />
                <stop offset="1" stop-color="#8f6b16" />
            </linearGradient>
            <!-- Arrondi et ombre des bords -->
            <linearGradient :id="id('relief')" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#000" stop-opacity="0.22" />
                <stop offset="0.12" stop-color="#fff" stop-opacity="0.08" />
                <stop offset="0.88" stop-color="#000" stop-opacity="0" />
                <stop offset="1" stop-color="#000" stop-opacity="0.28" />
            </linearGradient>
            <clipPath :id="id('ruban')">
                <rect x="0" y="0" :width="frise.width" :height="RUBAN_H" />
            </clipPath>
        </defs>

        <!-- Ruban -->
        <g data-circulaire="ruban">
            <rect
                v-if="!bandes.length"
                x="0"
                y="0"
                :width="frise.width"
                :height="RUBAN_H"
                fill="#9a9a9a"
                fill-opacity="0.35"
            />
            <rect
                v-for="(bande, i) in bandes"
                :key="i"
                x="0"
                :y="bande.y"
                :width="frise.width"
                :height="bande.h + 0.5"
                :fill="bande.color"
                data-circulaire="bande"
            />
            <rect x="0" y="0" :width="frise.width" :height="RUBAN_H" :fill="url('texture')" />
        </g>

        <!-- Bandes de biais (moivre, ruban noir), sous les étoiles -->
        <g :clip-path="url('ruban')">
            <polygon
                v-for="(band, i) in frise.elements.filter((e) => e.kind === 'band')"
                :key="`band-${i}`"
                :points="band.kind === 'band' ? band.points : ''"
                :fill="band.kind === 'band' ? band.color : ''"
                :data-circulaire="band.role"
                stroke="#000"
                stroke-opacity="0.15"
            />
        </g>
        <rect x="0" y="0" :width="frise.width" :height="RUBAN_H" :fill="url('relief')" />

        <!-- Lettres et insignes -->
        <template v-for="(el, i) in frise.elements" :key="i">
            <text
                v-if="el.kind === 'text'"
                :x="el.x"
                :y="el.y"
                dominant-baseline="central"
                font-family="system-ui, sans-serif"
                font-weight="800"
                :font-size="el.size"
                :fill="url('or')"
                stroke="#6b4e0c"
                stroke-width="1.5"
                paint-order="stroke"
                :data-circulaire="el.role"
            >
                {{ el.text }}
            </text>
            <image
                v-else-if="el.kind === 'image'"
                :href="el.href"
                :x="el.x"
                :y="el.y"
                :width="el.w"
                :height="el.h"
                :transform="el.rotate ? `rotate(${el.rotate} ${el.x + el.w / 2} ${el.y + el.h / 2})` : undefined"
                preserveAspectRatio="xMidYMid meet"
                :data-circulaire="el.role"
            />
        </template>
    </svg>
</template>

<style scoped>
.circulaire-ruban {
    display: block;
    width: auto;
    max-width: none;
}
</style>
