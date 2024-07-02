<script setup lang="ts">
import "../../sass/base/_circulaires.scss";
import Article6Spé from "./Article6Spé.vue";
</script>

<template>
    <article data-fal-article="6">
        <h2>Article 6:</h2>
        <p class="text-justify">
            Le ruban circulaire est à la couleur de la discipline principale.
            Pour les disciplines secondaires (double cursus), on placera, sur le
            bord supérieur du ruban de la discipline principale, un ruban plus
            mince aux couleurs de cette (ou ces) discipline(s) annexe(s).
        </p>
        <p class="text-justify">
            Voici les couleurs nationalement adoptées, basées à l’origine sur
            celles des toges doctorales et professorales des universités
            Françaises :
        </p>

        <v-table class="mt-4" data-fal-table="circu">
            <caption class="d-none">
                Couleurs circulaires
            </caption>
            <thead>
                <tr>
                    <th scope="col">
                        <strong>Discipline</strong>
                    </th>
                    <th scope="col" colspan="2">
                        <strong>Circulaire</strong>
                    </th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <td data-filliere>Classes préparatoires (santé)</td>
                    <td data-matiere>Velours marron</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="marron"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Dentaire</td>
                    <td data-matiere>Velours violet</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="violet"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Medecine</td>
                    <td data-matiere>Velours rouge</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="rouge"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Ostéopathie</td>
                    <td data-matiere>Velours bleu</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="bleuroy"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Paramédical</td>
                    <td data-matiere>Velours rose</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="rose"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Pharmacie / Préparateur en pharmacie</td>
                    <td data-matiere>Velours vert</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="vertfonce"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Sage-Femme</td>
                    <td data-matiere>Velours fushia</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="fuschia"
                        >
                            <div data-fal-circu="velours"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Vétérinaire</td>
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
                    <td>DU</td>
                    <td colspan="2">
                        Matière et couleur(s) suivant de l'UFR de rattachement
                    </td>
                </tr>
                <tr>
                    <td>A.E.S</td>
                    <td>Satin vert clair</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="vertclair"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Arts</td>
                    <td>Satin bleu roy</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="bleuroy"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Archéologie</td>
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
                    <td>Architecture</td>
                    <td>Satin bleu roy</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="bleuroy"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>BTS</td>
                    <td>Satin blanc</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="blanc"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-filliere>Classes préparatoires</td>
                    <td data-matiere>Satin marron</td>
                    <td data-matiere-img>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="marron"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Cinéma</td>
                    <td>Satin bleu roy</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="bleuroy"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Commerce</td>
                    <td>Satin rouge et vert</td>
                    <td>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="rouge"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="vert"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Communication, Journalisme</td>
                    <td colspan="2">
                        Satin aux couleurs de l'UFR de rattachement
                    </td>
                </tr>
                <tr>
                    <td>Droit</td>
                    <td>Satin rouge</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="rouge"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>MEEF (1er degré)</td>
                    <td>Satin gris</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="gris"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>MEEF (2nd degré)</td>
                    <td colspan="2">
                        Satin aux couleurs de la discipline étudiée
                    </td>
                </tr>
                <tr>
                    <td>Géographie</td>
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
                    <td>Histoire</td>
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
                    <td>IAE</td>
                    <td>Satin orange</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="orange"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Ingénieur</td>
                    <td>Satin bleu roy et noir</td>
                    <td>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="bleuroy"
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
                    <td>IUT</td>
                    <td>Satin blanc</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="blanc"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Langues, Lettres</td>
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
                    <td>Millitaire</td>
                    <td>Satin tricolore</td>
                    <td>
                        <div
                            data-fal-circu-container="tiers"
                            data-fal-circu-color="bleuroy"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                        <div
                            data-fal-circu-container="tiers"
                            data-fal-circu-color="blanc"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                        <div
                            data-fal-circu-container="tiers"
                            data-fal-circu-color="rouge"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Musicologie</td>
                    <td>Satin argenté</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="argente"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Notariat</td>
                    <td>Satin rouge et noir</td>
                    <td>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="rouge"
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
                    <td>Oenologie</td>
                    <td>Satin saumon</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="saumon"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Philosophie</td>
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
                    <td>Psychologie</td>
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
                    <td>Sciences</td>
                    <td>Satin violet</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="violet"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Sciences économique, Gestion</td>
                    <td>Satin orange</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="orange"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Sciences politiques</td>
                    <td>Satin rouge et bleu</td>
                    <td>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="rouge"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="bleu"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Sociologie</td>
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
                    <td>Fillière sportive (STAPS)</td>
                    <td>Satin vert foncé</td>
                    <td>
                        <div
                            data-fal-circu-container
                            data-fal-circu-color="vert"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Thanatologie</td>
                    <td colspan="2">
                        Satin blanc (sauf si école avec concours: velours blanc)
                    </td>
                </tr>
                <tr>
                    <td>Théologie</td>
                    <td>Satin blanc et rouge</td>
                    <td>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="blanc"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                        <div
                            data-fal-circu-container="demi"
                            data-fal-circu-color="rouge"
                        >
                            <div data-fal-circu="satin"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </v-table>

        <div class="table-warning-fal">
            <h3 class="pl-3 pt-2 mt-4">
                <v-icon icon="mdi-alert-box-outline"></v-icon>
                Spécifités Amiénoises
            </h3>
            <Article6Spé class="table-warning-fal"></Article6Spé>
        </div>
    </article>
</template>
