<script setup lang="ts">
import {
    sciences,
    droits,
    pharmaciens,
    medecines,
    sagefemmes,
    intervelours,
} from "../core/historique_croix";
</script>

<template>
    <v-container>
        <h2>Sciences</h2>
        <v-card class="pl-4">
            <v-timeline density="compact" side="end" align="start">
                <v-timeline-item
                    v-for="science in sciences"
                    class="mb-4"
                    dot-color="purple"
                    size="small"
                >
                    <div class="text-h6">{{ science.surname }}</div>
                    <p>
                        {{ science.year }}
                    </p>
                </v-timeline-item>
            </v-timeline>
        </v-card>

        <h2>Droits</h2>
        <v-card class="pl-4">
            <v-timeline density="compact" side="end" align="start">
                <v-timeline-item
                    v-for="droit in droits"
                    class="mb-4"
                    dot-color="red"
                    size="small"
                >
                    <div class="text-h6">{{ droit.surname }}</div>
                    <p>
                        {{ droit.year }}
                    </p>
                </v-timeline-item>
            </v-timeline>
        </v-card>

        <h2>Sage-Femmes</h2>
        <v-card class="pl-4">
            <v-timeline density="compact" side="end" align="start">
                <v-timeline-item
                    v-for="sagefemme in sagefemmes"
                    class="mb-4"
                    dot-color="pink-darken-4"
                    size="small"
                >
                    <div class="text-h6">{{ sagefemme.surname }}</div>
                    <p v-if="sagefemme.year">
                        {{ sagefemme.year }}
                    </p>
                </v-timeline-item>
            </v-timeline>
        </v-card>

        <h2>Inter-Velours</h2>
        <v-card class="pl-4">
            <v-timeline density="compact" side="end" align="start">
                <template v-for="iv in intervelours">
                    <v-timeline-item
                        class="mb-4"
                        :dot-color="iv.color"
                        size="small"
                    >
                        <div class="text-h6">{{ iv.surname }}</div>
                        <p v-if="iv.year">
                            {{ iv.year }}
                        </p>
                    </v-timeline-item>
                </template>
            </v-timeline>
        </v-card>

        <h2>Pharmaciens</h2>
        <v-card class="pl-4">
            <v-timeline density="compact" side="end" align="start">
                <v-timeline-item
                    v-for="pharmacien in pharmaciens"
                    class="mb-4"
                    dot-color="green-darken-4"
                    size="small"
                >
                    <div class="text-h6">{{ pharmacien.surname }}</div>
                    <p v-if="pharmacien.year">
                        {{ pharmacien.year }}
                    </p>
                </v-timeline-item>
            </v-timeline>
        </v-card>

        <h2>Medecines</h2>
        <v-card class="pl-4">
            <v-timeline density="compact" side="end" align="start">
                <v-timeline-item
                    v-for="medecine in medecines"
                    class="mb-4"
                    dot-color="red-darken-4"
                    size="small"
                >
                    <div class="text-h6">{{ medecine.surname }}</div>
                    <p v-if="medecine.year">
                        {{ medecine.year }}
                    </p>
                </v-timeline-item>
            </v-timeline>
        </v-card>

        <p class="mt-8">
            Il a existé d'autres Grands-Maitres dans la ville (chez les jaunes
            et les IUTs). Je les ajouterai si je trouve assez d'information
            dessus.
        </p>
    </v-container>
</template>
