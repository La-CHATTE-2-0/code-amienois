<script setup lang="ts">
import { computed, useId } from "vue";
import type { RubanResolu } from "../../core/falucheConfig";
import { VELOURS_COLOR } from "../../core/falucheConfig";
import { ZONES } from "./falucheZones";

const props = defineProps<{
    etudes?: RubanResolu | null;
    etudesSuivante?: RubanResolu | null;
    anneeChangement?: string;
    province?: RubanResolu | null;
    naissance?: RubanResolu | null;
}>();

const uid = useId();
const id = (name: string) => `${uid}-${name}`;
const url = (name: string) => `url(#${id(name)})`;

// Le dessus reprend le contour du schéma des parties (cercle de centre 399,5 ; 398,5)
const CX = 399.5;
const CY = 398.5;
const R = 371;

type ZoneName = keyof typeof ZONES;
/** Centre de la forme d'écusson et inclinaison du blason (en degrés, sens horaire) */
type Pose = { cx: number; cy: number; angle: number };

/**
 * Chaque ruban suit les zones du schéma des parties : une partie droite depuis
 * l'arrière jusqu'à l'écusson, puis une diagonale vers le bord. Les couleurs se
 * partagent la largeur, la première à gauche. Le ruban de ville de naissance n'a
 * que sa diagonale : il part de son écusson, posé sur le ruban de province.
 */
type Emplacement = {
    key: "etudes" | "province" | "naissance";
    droit: ZoneName[];
    droitX: [number, number];
    diagonale: [ZoneName, ZoneName];
    ecusson: ZoneName;
    pose: Pose;
};

const EMPLACEMENTS: Emplacement[] = [
    {
        key: "etudes",
        droit: ["etudesGauche", "etudesDroite"],
        droitX: [190, 295.5],
        diagonale: ["diagEtudes1", "diagEtudes2"],
        ecusson: "ecussonEtudes",
        pose: { cx: 212, cy: 528, angle: 45 },
    },
    {
        key: "province",
        // Même largeur que la ville d'études : les deux bandes droites du schéma,
        // et le morceau visible entre l'écusson de naissance et celui de province
        droit: ["provinceGauche", "provinceDroite", "provinceSousEcusson"],
        droitX: [503.5, 609],
        diagonale: ["diagProvince1", "diagProvince2"],
        ecusson: "ecussonProvince",
        pose: { cx: 586, cy: 529, angle: -45 },
    },
    {
        key: "naissance",
        droit: [],
        droitX: [0, 0],
        diagonale: ["diagNaissance1", "diagNaissance2"],
        ecusson: "ecussonNaissance",
        pose: { cx: 637, cy: 347, angle: -45 },
    },
];

// Les écussons sont des images carrées dont le blason n'occupe qu'environ 70 % de la
// largeur et 95 % de la hauteur. Une fois redressée, la forme du schéma mesure environ
// 157 × 198 : l'image est agrandie pour la remplir, inclinée comme elle, puis découpée.
const ECUSSON_SIZE = 215;
function placeEcusson({ cx, cy, angle }: Pose) {
    return {
        x: cx - ECUSSON_SIZE / 2,
        y: cy - ECUSSON_SIZE / 2,
        width: ECUSSON_SIZE,
        height: ECUSSON_SIZE,
        cx,
        cy,
        transform: `rotate(${angle} ${cx} ${cy})`,
    };
}

function stripesOf(couleurs: string[], [x0, x1]: [number, number]) {
    const w = (x1 - x0) / Math.max(couleurs.length, 1);
    return couleurs.map((color, i) => ({ color, x: x0 + i * w, w }));
}

const rubans = computed(() =>
    EMPLACEMENTS.map((e) => {
        const ruban = props[e.key] ?? null;
        const couleurs = ruban?.couleurs ?? [];
        return {
            ...e,
            ruban,
            stripes: stripesOf(couleurs, e.droitX),
            diagonaleColors: [couleurs[0], couleurs[1] ?? couleurs[0]],
            ecussonImage: placeEcusson(e.pose),
            zones: [...e.droit, ...e.diagonale],
        };
    })
);

// Nouvelle ville d'études : parallèle à la première, du côté extérieur
const SUIVANTE_X: [number, number] = [134, 186];
const SUIVANTE_MID = (SUIVANTE_X[0] + SUIVANTE_X[1]) / 2;
const suivante = computed(() => stripesOf(props.etudesSuivante?.couleurs ?? [], SUIVANTE_X));

// Rubans d'association et d'élu : place gardée au centre, en pointillés
const PLACES = [
    { key: "association", x: 320 },
    { key: "elu", x: 420 },
];
const PLACE_W = 56;

const initiale = (nom: string) => nom.trim().charAt(0).toUpperCase();

const description = computed(() => {
    const parts = ["Dessus de faluche en velours noir"];
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

const viewBox = `${CX - R - 20} ${CY - R - 20} ${2 * R + 40} ${2 * R + 40}`;
</script>

<template>
    <svg
        class="faluche-schema"
        :viewBox="viewBox"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        :aria-labelledby="`${id('titre')} ${id('desc')}`"
    >
        <title :id="id('titre')">Schéma de ma faluche, vue de dessus</title>
        <desc :id="id('desc')">{{ description }}</desc>

        <defs>
            <!-- Grain du velours : un bruit fin posé sur la couleur -->
            <filter :id="id('grain')" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="7" result="noise" />
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
            <!-- Volume : plus clair au sommet, plus sombre sur les bords -->
            <radialGradient :id="id('volume')" cx="45%" cy="40%" r="60%">
                <stop offset="0" stop-color="#fff" stop-opacity="0.14" />
                <stop offset="0.7" stop-color="#fff" stop-opacity="0" />
                <stop offset="1" stop-color="#000" stop-opacity="0.35" />
            </radialGradient>
            <clipPath :id="id('dessus')">
                <path :d="ZONES.contour" />
            </clipPath>
            <clipPath v-for="(d, name) in ZONES" :id="id(`zone-${name}`)" :key="name">
                <path :d="d" />
            </clipPath>
        </defs>

        <!-- Ombre portée -->
        <circle :cx="CX + 5" :cy="CY + 8" :r="R + 3" fill="#000" opacity="0.12" />

        <!-- Velours du dessus -->
        <path data-faluche="velours" :d="ZONES.contour" :fill="VELOURS_COLOR" :filter="url('grain')" />

        <g :clip-path="url('dessus')">
            <!-- Places gardées pour l'association et l'élu -->
            <rect
                v-for="place in PLACES"
                :key="place.key"
                :x="place.x"
                y="0"
                :width="PLACE_W"
                height="800"
                fill="none"
                stroke="#fff"
                stroke-opacity="0.3"
                stroke-width="2"
                stroke-dasharray="8 8"
                :data-faluche="`emplacement-${place.key}`"
            />

            <!-- Nouvelle ville d'études, parallèle à la première -->
            <g v-if="suivante.length" :clip-path="url('zone-veloursGauche')" data-faluche="ruban-etudes-suivante">
                <rect
                    v-for="(stripe, i) in suivante"
                    :key="i"
                    :x="stripe.x"
                    y="0"
                    :width="stripe.w + 0.5"
                    height="470"
                    :fill="stripe.color"
                />
                <rect
                    :x="SUIVANTE_X[0]"
                    y="0"
                    :width="SUIVANTE_X[1] - SUIVANTE_X[0]"
                    height="470"
                    fill="none"
                    stroke="#000"
                    stroke-opacity="0.4"
                    stroke-width="1.5"
                />
                <text
                    v-if="anneeChangement"
                    :x="SUIVANTE_MID"
                    y="330"
                    :transform="`rotate(-90 ${SUIVANTE_MID} 330)`"
                    text-anchor="middle"
                    dominant-baseline="central"
                    font-family="system-ui, sans-serif"
                    font-size="28"
                    font-weight="700"
                    fill="#fff"
                    stroke="#000"
                    stroke-width="5"
                    paint-order="stroke"
                >
                    {{ anneeChangement }}
                </text>
            </g>

            <!-- Rubans : partie droite, puis diagonale vers le bord -->
            <template v-for="r in rubans" :key="r.key">
                <g v-if="r.ruban" :data-faluche="`ruban-${r.key}`">
                    <g v-for="zone in r.droit" :key="zone" :clip-path="url(`zone-${zone}`)">
                        <rect
                            v-for="(stripe, i) in r.stripes"
                            :key="i"
                            :x="stripe.x"
                            y="0"
                            :width="stripe.w + 0.5"
                            height="800"
                            :fill="stripe.color"
                        />
                    </g>
                    <path v-for="(zone, i) in r.diagonale" :key="zone" :d="ZONES[zone]" :fill="r.diagonaleColors[i]" />
                    <path
                        v-for="zone in r.zones"
                        :key="`trait-${zone}`"
                        :d="ZONES[zone]"
                        fill="none"
                        stroke="#000"
                        stroke-opacity="0.4"
                        stroke-width="1.5"
                    />
                </g>
                <g
                    v-else
                    fill="none"
                    stroke="#fff"
                    stroke-opacity="0.3"
                    stroke-width="2"
                    stroke-dasharray="8 8"
                    :data-faluche="`emplacement-${r.key}`"
                >
                    <path v-for="zone in r.zones" :key="zone" :d="ZONES[zone]" />
                </g>
            </template>

            <!-- Volume du velours, par-dessus les rubans cousus -->
            <path :d="ZONES.contour" :fill="url('volume')" />
        </g>

        <!-- Écussons, à la cassure des rubans -->
        <template v-for="r in rubans" :key="`ecusson-${r.key}`">
            <g v-if="r.ruban" :data-faluche="`ecusson-${r.key}`">
                <!-- Fond brodé noir, comme le fond des écussons -->
                <path :d="ZONES[r.ecusson]" fill="#141214" />
                <!-- Découpe sur un groupe non pivoté : la forme reste celle du schéma -->
                <g v-if="r.ruban.ecusson" :clip-path="url(`zone-${r.ecusson}`)">
                    <image
                        :href="r.ruban.ecusson"
                        :x="r.ecussonImage.x"
                        :y="r.ecussonImage.y"
                        :width="r.ecussonImage.width"
                        :height="r.ecussonImage.height"
                        :transform="r.ecussonImage.transform"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </g>
                <text
                    v-else
                    :x="r.ecussonImage.cx"
                    :y="r.ecussonImage.cy"
                    :transform="r.ecussonImage.transform"
                    text-anchor="middle"
                    dominant-baseline="central"
                    font-family="system-ui, sans-serif"
                    font-size="64"
                    font-weight="700"
                    fill="#d8b24a"
                >
                    {{ initiale(r.ruban.nom) }}
                </text>
                <!-- Liseré noir, par-dessus l'image découpée -->
                <path :d="ZONES[r.ecusson]" fill="none" stroke="#000" stroke-width="5" />
            </g>
            <path
                v-else
                :d="ZONES[r.ecusson]"
                fill="none"
                stroke="#fff"
                stroke-opacity="0.3"
                stroke-width="2"
                stroke-dasharray="8 8"
            />
        </template>

        <!-- Contours, dans le style du schéma des parties -->
        <path :d="ZONES.contour" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="4" />
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
