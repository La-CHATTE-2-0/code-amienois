<script setup lang="ts">
import "../../sass/base/_tables.scss";
</script>

<template>
    <div>
        <v-table data-fal-table="circu">
            <caption class="d-none">
                Couleurs circulaires spé Amiens
            </caption>
            <tbody>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">Assistante sociale</div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            N'existe pas au code national (ou en satin dans
                            d'autres villes)
                        </div>
                    </td>
                    <td data-matiere>Velours jaune</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="jaune"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">Medecine</div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            Velours rouge au code national
                        </div>
                    </td>
                    <td data-matiere>Velours bordeaux</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="bordeaux"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">Sage-Femme</div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            Velours fushia pas au code national
                        </div>
                    </td>
                    <td data-matiere>Velours fiolet</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="fiolet"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">Arts / Architecture / Théatre</div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            Bleu roy au code national
                        </div>
                    </td>
                    <td>Satin jaune et bleu roy</td>
                    <td>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="jaune"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="bleuroy"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">Cinéma</div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            Bleu roy au code national
                        </div>
                    </td>
                    <td>Satin blanc et noir</td>
                    <td>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="blanc"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="noir"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">
                            Communication, Journalisme <br />(rattaché à l'UFR
                            des lettres)
                        </div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            Aux couleurs de l'UFR de ratachement (peut changer
                            du jaune dans d'autres villes)
                        </div>
                    </td>
                    <td>Satin jaune</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="jaune"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">IUT (sauf GMP)</div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            Satin blanc au code national
                        </div>
                    </td>
                    <td>Satin rose</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="rose"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>
                        <div class="pt-2">Science de l'éducation</div>
                        <div class="py-2">
                            <v-icon icon="mdi-repeat"></v-icon>
                            N'existe pas au code national
                        </div>
                    </td>
                    <td>Satin jaune</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="jaune"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>
