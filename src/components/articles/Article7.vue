<script setup lang="ts">
import "../../sass/base/_insignes.scss";
import "../../sass/base/_tables.scss";
import Article7SpéBac from "./Article7SpéBac.vue";
import Article7SpéFilière from "./Article7SpéFilière.vue";
</script>

<template>
    <article data-fal-article="7">
        <h2>Article 7:</h2>
        <p>Sur le ruban circulaire doivent figurer :</p>
        <ul class="ml-4">
            <li>Les initiales</li>
            <li>Le baccalauréat:</li>
        </ul>
        <v-table class="table align-middle" data-fal-table="insigne">
            <caption class="d-none">
                Insignes Baccalauréat
            </caption>
            <thead>
                <tr>
                    <th scope="col">Baccalauréat</th>
                    <th scope="col">Insigne</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <td colspan="3">
                        <h3>Anciens baccalauréats</h3>
                    </td>
                </tr>
                <tr>
                    <td>Economique et Social</td>
                    <td>Beta β</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/beta.png"
                            alt="Beta"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Littéraire</td>
                    <td>Phi φ</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/phi.png"
                            alt="Phi"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Scientifique</td>
                    <td>Epsilon ε</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/epsilon.png"
                            alt="Epsilon"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <h3>Nouveaux baccalauréats (depuis 2021)</h3>
                    </td>
                </tr>
                <tr>
                    <td>Général</td>
                    <td>Gamma γ</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/gamma.png"
                            alt="Gamma"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <h3>Autres</h3>
                    </td>
                </tr>
                <tr>
                    <td>DAEU (Diplôme accès aux études universitaires)</td>
                    <td>Lettre DAEU</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettres_daeu.png"
                            alt="Gamma"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Capacitaire</td>
                    <td>Lettre "C" après le bac</td>
                    <td data-fal-insigne="mini">
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettre_c.png"
                            alt="Lettre C"
                        />
                    </td>
                </tr>
                <tr>
                    <td>International</td>
                    <td>Lettre "I" après le bac</td>
                    <td data-fal-insigne="mini">
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettre_i.png"
                            alt="Lettre I"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Autres bacs</td>
                    <td>Initiale du bac (ex: STMG, STI2D, ..;)</td>
                    <td data-fal-insigne="mini">
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/initiales_bacs.png"
                            alt="Bacs"
                        />
                    </td>
                </tr>
            </tbody>
        </v-table>

        <div class="table-warning-fal">
            <h3 class="pl-3 pt-2 mt-4">
                <v-icon icon="mdi-alert-box-outline"></v-icon>
                Spécifité d'Amiens
            </h3>
            <Article7SpéBac class="table-warning-fal"></Article7SpéBac>
        </div>

        <ul class="mt-4 ml-4">
            <li>L'emblème de la discipline</li>
        </ul>
        <v-table class="table align-middle" data-fal-table="insigne">
            <caption class="d-none">
                Insignes fillières
            </caption>
            <thead>
                <tr>
                    <th scope="col">Discipline</th>
                    <th scope="col">Insigne</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <td>Dentaire</td>
                    <td>Molaire supérieure</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/molaire.png"
                            alt="Molaire"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Infirmier</td>
                    <td>Caducée infirmier</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/caducee_infirmier.png"
                            alt="Caducée Infirmier"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Kiné</td>
                    <td>Caducée de Mercure</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/caducee_mercure.png"
                            alt="Caducée de Mercure"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Médecine</td>
                    <td>Caducée Médecine</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/caducee_medecine.png"
                            alt="Caducée médecine"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Ostéopathie</td>
                    <td>Sphénoide</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/sphenoide.png"
                            alt="Sphénoide"
                        />
                    </td>
                </tr>
                <tr>
                    <td>PACES/PASS</td>
                    <td>Tête de mort sur fémurs croisés</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/tete_de_mort_sur_femurs_croises.png"
                            alt="Tête de mort du fémurs croisés"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Paramédical (sauf Kiné et Inf)</td>
                    <td>Ciseaux</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/ciseaux.png"
                            alt="Ciseaux"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Pharmacie</td>
                    <td>Caducée Pharmacie</td>
                    <td data-fal-insigne>
                        <img
                            id="ea-cad-pharma"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/caducee_pharma.png"
                            alt="Caducée Pharmacie"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Préparateur en pharmacie</td>
                    <td>Mortier et pilon</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/mortier_et_pilon.png"
                            alt="Mortier et pilon"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Sage-Femme</td>
                    <td>Ânkh</td>
                    <td data-fal-insigne>
                        <img
                            id="ea-sf"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/croix_dankh.png"
                            alt="Ânkh"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Vétérinaire</td>
                    <td>Tête de cheval</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/tete_de_cheval.png"
                            alt="Tête de cheval"
                        />
                    </td>
                </tr>
                <tr>
                    <td>AES</td>
                    <td>Lettres AES</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettres_aes.png"
                            alt="Lettre AES"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Arts</td>
                    <td>Palette & Pinceau</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/palette_vernie.png"
                            alt="Palette et Pinceau"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Arts numériques</td>
                    <td>Arobase @</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/arobase.png"
                            alt="@"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Archéologie</td>
                    <td>Tête de sphinx</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/tete_de_sphinx.png"
                            alt="Tête de sphinx"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Architecture</td>
                    <td>Equerre et compas</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/equerre_et_compas.png"
                            alt="Equerre et compas"
                        />
                    </td>
                </tr>
                <tr>
                    <td>BTS</td>
                    <td>Lettres BTS</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettres_bts.png"
                            alt="tete_de_cheval"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Cinéma</td>
                    <td>Clap de cinéma</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/clap_de_cinema.png"
                            alt="tete_de_cheval"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Classes préparatoires (non santé)</td>
                    <td class="pr-0">
                        Insigne de la discipline préparée
                        <ul style="padding-left: 0">
                            <li>Chouette bicéphale : Khâgne (Littéraire)</li>
                            <li>
                                Palme de chêne et laurier : Taupe (Scientifique)
                            </li>
                            <li>Étoile et foudre (Ingénieur)</li>
                            <li>Epi de blé (Agronomie)</li>
                            <li>Caducée de Mercure (Commerce)</li>
                            <li>Palette vernie (Artistique)</li>
                        </ul>
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="75"
                            height="75"
                            src="/images/insigne/chouette_bicephale.png"
                            alt="Chouette bicéphale"
                        />
                        <img
                            loading="lazy"
                            width="75"
                            height="75"
                            src="/images/insigne/palme_sciences.png"
                            alt="Palme de chêne et laurier"
                        />
                        <img
                            loading="lazy"
                            width="100"
                            height="75"
                            src="/images/insigne/etoile_et_foudre.png"
                            alt="Etoile et foudre"
                        />
                        <img
                            loading="lazy"
                            width="75"
                            height="100"
                            src="/images/insigne/epi_de_ble.png"
                            alt="Epi de blé"
                        />
                        <img
                            loading="lazy"
                            width="75"
                            height="75"
                            src="/images/insigne/caducee_mercure.png"
                            alt="Caducée de Mercure"
                        />
                        <img
                            loading="lazy"
                            width="75"
                            height="75"
                            src="/images/insigne/palette_vernie.png"
                            alt="Palette"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Commerce</td>
                    <td>Caducée de Mercure</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/caducee_mercure.png"
                            alt="Caducée de Mercure"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Communication, Journalisme</td>
                    <td>Caducée de Mercure</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/caducee_mercure.png"
                            alt="Caducée de Mercure"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Droit</td>
                    <td>Glaive et balance</td>
                    <td data-fal-insigne>
                        <img
                            id="ea-droits"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/glaive_et_balance.png"
                            alt="Glaive et balance"
                        />
                    </td>
                </tr>
                <tr>
                    <td>DU</td>
                    <td>Lettres DU</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettres_du.png"
                            alt="Lettres DU"
                        />
                    </td>
                </tr>
                <tr>
                    <td>MEEF (INSPE, ex ESPE, ex IUFM)</td>
                    <td>Lettres MEEF</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettres_inspe.png"
                            alt="Lettres MEEF"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Geographie</td>
                    <td>Globe terrestre</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/globe_terrestre.png"
                            alt="Globe terrestre"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Histoire</td>
                    <td>Casque de Périclès</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/casque_pericles.png"
                            alt="Casque de péricles"
                        />
                    </td>
                </tr>
                <tr>
                    <td>IAE</td>
                    <td>Lettres IAE</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettres_iae.png"
                            alt="IAE"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Ingénieur</td>
                    <td>Étoile et foudre</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/etoile_et_foudre.png"
                            alt="Étoile et foudre"
                        />
                    </td>
                </tr>
                <tr>
                    <td>IUT</td>
                    <td>Lettres IUT</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettres_iut.png"
                            alt="Lettres IUT"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Langues, Lettres</td>
                    <td>Livre ouvert et plume</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/livre_ouvert_et_plume.png"
                            alt="Livre ouvert et plume"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Millitaire</td>
                    <td colspan="2">Initiales du régiment</td>
                </tr>
                <tr>
                    <td>Musicologie</td>
                    <td>Lyre</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lyre.png"
                            alt="Lyre"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Notariat</td>
                    <td>Glaive et balance</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/glaive_et_balance.png"
                            alt="Glaive et balance"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Oenologie</td>
                    <td>Grappe de raisin</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/grappe_de_raisin.png"
                            alt="Grappe de raisin"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Philosophie</td>
                    <td>Phi φ</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/phi.png"
                            alt="Lettre Phi"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Psychologie</td>
                    <td>Psi Ψ</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/psi.png"
                            alt="Lettre Psi"
                        />
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/psi_maj.png"
                            alt="Lettre Psi"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Sciences</td>
                    <td>Palme croisée de chêne et laurier</td>
                    <td data-fal-insigne>
                        <img
                            id="ea-palmeSciences"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/palme_sciences.png"
                            alt="Palme croisée de chêne et laurier"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Science économiques, Gestion</td>
                    <td>Caducée de Mercure</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/caducee_mercure.png"
                            alt="Caducée de Mercure"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Science politique</td>
                    <td>Parapluie fermé horizontal</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/parapluie_ferme_a_l_horizontale.png"
                            alt="Parapluie"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Sociologie</td>
                    <td>Grenouille</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/grenouille_doree.png"
                            alt="Grenouille"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Fillière sportive (STAPS)</td>
                    <td>Coq</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/coq.png"
                            alt="Coq"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Arts du spectacle</td>
                    <td>Masque de comédie</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/masques_de_comedie.png"
                            alt="Masque de comédie"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Théologie</td>
                    <td>
                        Insigne de la religion étudiée
                        <ul style="padding-left: 0">
                            <li>Croix latine: Catholique</li>
                            <li>Croix huguenote: Protestant</li>
                            <li>Étoile de David: Juive</li>
                            <li>Main de Fatma: Islam</li>
                        </ul>
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/theology.png"
                            alt="Théologie"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Thanatologie</td>
                    <td>Squelette</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/squelette.png"
                            alt="Squelette"
                        />
                    </td>
                </tr>
            </tbody>
        </v-table>

        <div class="table-warning-fal">
            <h3 class="pl-3 pt-2 mt-4">
                <v-icon icon="mdi-alert-box-outline"></v-icon>
                Spécifités d'Amiens
            </h3>
            <Article7SpéFilière></Article7SpéFilière>
        </div>

        <!--Pass lass -->
        <v-expansion-panels class="mt-4">
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    Réforme PASS/LAS
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <div class="accordion-body">
                        <img
                            alt="PASS/LAS"
                            style="max-width: 100%"
                            loading="lazy"
                            src="/images/other/passlas.png"
                        />
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <ul class="mt-4 ml-4">
            <li>Les étoiles et palmes</li>
        </ul>
        <v-table class="table align-middle" data-fal-table="insigne">
            <caption class="d-none">
                Insignes circu
            </caption>
            <thead>
                <tr>
                    <th scope="col">Insigne</th>
                    <th scope="col" colspan="2">Signication</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/etoile_doree.png"
                            alt="Étoile dorée"
                        />
                    </td>
                    <td>Étoile dorée</td>
                    <td>Année débutée</td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/etoile_argentee.png"
                            alt="Étoile argentée"
                        />
                    </td>
                    <td>Étoile argentée</td>
                    <td>Année redoublée</td>
                </tr>
                <tr>
                    <td colspan="3">
                        <span>
                            Les étoiles de cursus secondaires sont plus petites
                        </span>
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/drapeaux.png"
                            alt="Drapeaux"
                        />
                    </td>
                    <td colspan="2">
                        Un <strong>drapeau du pays</strong> sera placé sous
                        l'étoile de l'année d'étude si elle se déroule à
                        l'étranger
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne="mini">
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettre_e.png"
                            alt="Lettre E"
                        />
                    </td>
                    <td colspan="2">
                        Les années validées par équivalence seront marquées par
                        une
                        <strong>petite lettre "E"</strong> remplaçant l'étoile
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne="mini">
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lettre_a.png"
                            alt="Lettre A"
                        />
                    </td>
                    <td colspan="2">
                        Les années passées en alternance seront marquées par une
                        <strong>petite lettre "A"</strong> sous l'étoile
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne="moivre">
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/moivre.png"
                            alt="Moivre bleu"
                        />
                    </td>
                    <td colspan="2">
                        La première étoile sera placée sur un
                        <strong> petit ruban disposé de biais (moivre)</strong>, de
                        couleur <strong>bleue</strong> pour les facultés ou
                        établissements d'État, <strong>blanche</strong> pour les
                        facultés catholiques, écoles ou instituts privés. En cas
                        de changement d'établissement du public vers le privé ou
                        inversement, on placera un nouveau ruban sous l'étoile
                        de l'année de changement
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/large_palme.png"
                            alt="Large palme"
                        />
                    </td>
                    <td>Large palme (à coté de l'étoile de l'année)</td>
                    <td>Major de promotion</td>
                </tr>
                <tr>
                    <td data-fal-insigne="mini">
                        <img
                            loading="lazy"
                            width="50"
                            height="50"
                            src="/images/insigne/simple_palme.png"
                            alt="Simple palme"
                        />
                    </td>
                    <td>Simple palme (à coté de l'étoile de l'année)</td>
                    <td>
                        Fin de cycle (s'il n'y a pas de diplômes correspondant)
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/tete_de_vache.png"
                            alt="Tête de vache"
                        />
                    </td>
                    <td>Tête de vache</td>
                    <td>Année obtenue aux rattrapages</td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/tete_de_mort.png"
                            alt="Tête de mort"
                        />
                    </td>
                    <td>Tête de mort</td>
                    <td>Abandon de fillière</td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/double_palme.png"
                            alt="Double palmes"
                        />
                    </td>
                    <td>Double palmes</td>
                    <td>Diplôme obtenu</td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/petit_zero.png"
                            alt="Chiffre 0"
                        />
                    </td>
                    <td colspan="2">
                        Une année sabbatique sera sanctionnée par un
                        <strong>petit chiffre "0"</strong>.
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/etoile_noir.png"
                            alt="Étoile + ruban noir"
                        />
                    </td>
                    <td colspan="2">
                        Un <strong>ruban noir</strong> sera placé sous l'étoile
                        de l'année de perte ou vol de la faluche.
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        À la fin du cursus pourront figurer un petit « a » pour
                        l’agrégation et/ou un petit « c » pour le CAPES, suivi
                        d’une petite palme.
                    </td>
                </tr>
                <tr>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/quille.png"
                            alt="Quille"
                        />
                    </td>
                    <td colspan="2">
                        Une <strong>quille</strong> pendra du ruban à l’endroit
                        du cursus où aura été effectué le
                        <strong>service militaire</strong> ou le
                        <strong>service civique</strong>.
                    </td>
                </tr>
            </tbody>
        </v-table>
    </article>
</template>
