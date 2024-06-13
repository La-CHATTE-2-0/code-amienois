<script setup lang="ts">
import "../../sass/base/_tables.scss";
import "../../sass/base/_insignes.scss";
import Article8Spé from "./Article8Spé.vue";
</script>

<template>
    <article data-fal-article="8">
        <h2>Article 8:</h2>
        <p>Le velours peut comporter:</p>
        <ul class="ml-4">
            <li>
                Les insignes:
                <ul class="ml-4">
                    <li>Des associations étudiantes</li>
                    <li>
                        Des congrès auxquels vous avez participé, à condition
                        que ceux-ci soient constitués de matériaux nobles
                    </li>
                    <li>
                        Des villes où vous avez séjourné pour motifs étudiants
                    </li>
                    <li>
                        Des établissements scolaires auxquels vous avez
                        appartenu
                    </li>
                    <li>
                        Des clubs auxquels vous avez appartenu ou appartenez
                    </li>
                </ul>
            </li>
            <li>
                Votre devise:
                <div>
                    En grec, en latin, en français, en hébreu, en langue
                    régionale, en patois, elle s'inscrit en toutes lettres dans
                    la langue correspondante, sur le velours du frontal à
                    l'occipital à la gauche du ruban de province natale.
                </div>
            </li>
            <li>Vos armes personnelles</li>
            <li>Les symboles:</li>
        </ul>
        <v-table class="table align-middle mt-2" data-fal-table="insigne">
            <caption class="d-none">
                Insignes
            </caption>
            <thead>
                <tr>
                    <th scope="col">Insigne</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <td colspan="3">
                        <h3>Les symboles</h3>
                    </td>
                </tr>
                <tr>
                    <td>Abeille</td>
                    <td>Cursus parfait (fin du circulaire)</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/abeille.png"
                            alt="Abeille"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Aigle</td>
                    <td>Amour de l'aviation</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/aigle.png"
                            alt="Aigle"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Ancre</td>
                    <td>Amour de la mer</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/ancre.png"
                            alt="Ancre"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Bacchus troué</td>
                    <td>Personne abstème</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/bacchus_troue.png"
                            alt="Bacchus troué"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Cornue et ballon</td>
                    <td>Travail en laboratoire</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/ballon_et_cornu.png"
                            alt="Cornue et ballon"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Chameau</td>
                    <td>
                        <div>À l'endroit: célibataire</div>
                        <div>À l'envers: en couple</div>
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/chameau.png"
                            alt="Chameau"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Choppe de bière</td>
                    <td>Amour de la bonne bière</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/chope_de_biere.png"
                            alt="Choppe de bière"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Chouette</td>
                    <td>Oiseau de nuit</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/chouette.png"
                            alt="Chouette"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Cochon</td>
                    <td>
                        <div>À l'endroit: n'a pas été intégré(e)</div>
                        <div>À l'envers: a été intégré(e)</div>
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cochon.png"
                            alt="Cochon"
                        />
                        <img
                            style="rotate: 180deg"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cochon.png"
                            alt="Cochon"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Cocotte en papier</td>
                    <td>Sécheur de cours</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cocotte_en_papier.png"
                            alt="Cocotte en papier"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Cupidon</td>
                    <td>Fiancé</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cupidon.png"
                            alt="Cupidon"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Ecureuil</td>
                    <td>Junior d'entreprise</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/ecureuil.png"
                            alt="Ecureuil"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Épi de blé</td>
                    <td>Radin</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/epi_de_ble.png"
                            alt="Epi de blé"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Épi de blé croisé faucille</td>
                    <td>Chanceux aux examens</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/epi_de_ble_croise_faucille.png"
                            alt="Chanceux aux examens"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Étoile et foudre</td>
                    <td>Amour des nouvelles technologies, de l'informatique</td>
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
                    <td>Fer à cheval</td>
                    <td>Chanceux</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fer_a_cheval.png"
                            alt="Fer à cheval"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Feuille de vigne</td>
                    <td>Perte de virginité (masculine)</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/feuille_de_vigne.png"
                            alt="Feuille de vigne"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Fleur de Lys</td>
                    <td>Scout</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fleur_de_lys.png"
                            alt="Fleur de Lys"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Fourchette</td>
                    <td>Amour des plaisirs de la table</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fourchette.png"
                            alt="Fourchette"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Fourchettes croisées</td>
                    <td>Mange comme un porc</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fourchettes_croisees.png"
                            alt="Fourchettes"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Fraise</td>
                    <td>Femme enceinte</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fraise.png"
                            alt="Fraise"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Grappe de raisin</td>
                    <td>Amour du bon vin</td>
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
                    <td>Lyre</td>
                    <td>Amour des arts musicaux</td>
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
                    <td>Marteau et maillet</td>
                    <td>Bricoleur</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/marteau_maillet.png"
                            alt="Marteau et maillet"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Masque de comédie</td>
                    <td>Amour des arts de la scène et du cinéma</td>
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
                    <td>Nounours</td>
                    <td>Gros dormeur</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/nounours.png"
                            alt="Nounours"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Lacet de cuir</td>
                    <td>Sado-maso</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lacet_de_cuir.png"
                            alt="Lacet de cuir"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Lune</td>
                    <td>Grand Chambellan à la retraite</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lune.png"
                            alt="Lune"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Palette vernie</td>
                    <td>Amour des arts plastiques</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/palette_vernie.png"
                            alt="Palette vernie"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Pendu</td>
                    <td>Marié(e) ou Pacsé(e)</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/pendu.png"
                            alt="Pendu"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Plume</td>
                    <td>Amour des arts littéraires</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/plume.png"
                            alt="Plume"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Rose</td>
                    <td>Perte de virginté (féminine)</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/rose.png"
                            alt="Rose"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Raquette ou Ballon de foot</td>
                    <td>Amour du sport</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/raquette_tennis_ballon_football.png"
                            alt="Raquette"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Skis</td>
                    <td>Amour de la montagne</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/skis.png"
                            alt="Skis"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Soleil</td>
                    <td>Grand-Maître à la retraite</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/soleil.png"
                            alt="Soleil"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Squelette</td>
                    <td>À l’endroit : Amour de l’anatomie</td>
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
                <tr>
                    <td>Tête de sphinx</td>
                    <td>Polyglotte</td>
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
                    <td>Tête de taureau</td>
                    <td>
                        Géniteur (ruban rose pour une fille, et bleu pour un
                        garçon)
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/tete_de_taureau.png"
                            alt="Tête de taureau"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Voilier</td>
                    <td>Amour de la navigation</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/voilier.png"
                            alt="Voilier"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <h3>Les insignes décernés par le/la partenaire</h3>
                    </td>
                </tr>
                <tr>
                    <td>Épee</td>
                    <td>Fin Baiseur</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/epee.png"
                            alt="Epée"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Flèche</td>
                    <td>Ejaculateur précoce</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fleche.png"
                            alt="Flèche"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Lime</td>
                    <td>Acte laborieux et difficile</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lime.png"
                            alt="Lime"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Pensée</td>
                    <td>Fine baiseuse</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/pensee.png"
                            alt="Pensée"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Escargot</td>
                    <td>Lent à la tâche</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/escargot.png"
                            alt="Escargot"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <h3>Les insignes décernés par un Grand-Maître</h3>
                    </td>
                </tr>
                <tr>
                    <td>Abeille</td>
                    <td>
                        Minutie dans le travail associatif (sur le ruban
                        d'association)
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/abeille.png"
                            alt="Abeille"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Anneaux Olympiques</td>
                    <td>Excellence sportive universitaire</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/anneaux_olympiques.png"
                            alt="Anneaux Olympiques"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Bacchus</td>
                    <td>
                        Dignité dans l'ivresse (retournable ou retirable si
                        perte de dignité)
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/bacchus.png"
                            alt="Bacchus"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Bouteille de Bordeaux</td>
                    <td>Cuite certifiée</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/bouteille_de_bordeaux.png"
                            alt="Bouteille de Bordeaux"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Bouteille de Champagne</td>
                    <td>Coma éthylique certifié</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/bouteille_de_champagne.png"
                            alt="Bouteille de Bordeaux"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Chauve-souris</td>
                    <td>Nuit blanche pour motif associatif</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/chauve_souris.png"
                            alt="Chauve-souris"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Clé de sol</td>
                    <td>Digne chanteur de paillardes</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cle_de_sol.png"
                            alt="Chouette"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Coq</td>
                    <td>Grande gueule sachant l'ouvrir</td>
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
                    <td>Cor de chasse</td>
                    <td>Chasseur devant l'éternel</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cor_de_chasse.png"
                            alt="Cor de chasse"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Fourchette + ruban bleu</td>
                    <td>Cordon bleu</td>
                    <td data-fal-insigne>
                        <img
                            class="bg-ruban-bleu"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fourchette.png"
                            alt="Fourchette"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Hache</td>
                    <td>
                        Prise de guerre (à ne pas confondre avec vandalisme)
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/hache.png"
                            alt="Hache"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Homard</td>
                    <td>Mène un grand train de vie</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/homard.png"
                            alt="Homard"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Lime + ruban noir</td>
                    <td>Non respect à Grand-Maître</td>
                    <td data-fal-insigne>
                        <img
                            class="bg-ruban-noir"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lime.png"
                            alt="Lime sur ruban noir"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Mammouth</td>
                    <td>Gardien des traditions</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/mammouth.png"
                            alt="Mammouth"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Pachyderme</td>
                    <td>Personne lourde</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/pachyderme.png"
                            alt="Pachyderme"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Parapluie</td>
                    <td>
                        <div>A vomi sur sa faluche : ouvert à l'endroit</div>
                        <div>A vomi dans sa faluche : fermé à l'endroit</div>
                        <div>S'il remet sur la tête : fermé et à l'envers</div>
                    </td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/parapluie_ouvert.png"
                            alt="Parapluie"
                        />
                        <img
                            style="rotate: 180deg"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/parapluie_ferme_a_l_envers.png"
                            alt="Parapluie"
                        />
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/parapluie_ferme_a_l_envers.png"
                            alt="Parapluie"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Poule</td>
                    <td>Personne chaude</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/poule.png"
                            alt="Poule"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Epingle à nourrice + ruban noir</td>
                    <td>Blâme</td>
                    <td data-fal-insigne>
                        <img
                            class="bg-ruban-noir"
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/epingle.png"
                            alt="Epingle"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Singe</td>
                    <td>Quémandeur d'insignes</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/singe.png"
                            alt="Singe"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Sou troué</td>
                    <td>Nuit passée au poste pour motif estudiantin</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/sou_troue.png"
                            alt="Sou troué"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Volant</td>
                    <td>Conducteur de fin de soirée (SAM)</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/volant.png"
                            alt="Volant"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <h3>Les insignes régionaux</h3>
                    </td>
                </tr>
                <tr>
                    <td>Abeille</td>
                    <td>Ville impériale</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/abeille.png"
                            alt="Abeille"
                        />
                    </td>
                </tr>
                <!-- <tr>
            <td>Âne</td>
            <td>Berrichon</td>
            <td data-fal-insigne>
              <img loading="lazy" width="100" height="100" src="/images/insigne/ane.png" alt="Âne" />
            </td>
          </tr> -->
                <tr>
                    <td>Chardon</td>
                    <td>Lorrain</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/chardon.png"
                            alt="Chardon"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Cigale</td>
                    <td>Provencal</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cigale.png"
                            alt="Cigale"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Cigogne</td>
                    <td>Alsacien</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/cigogne.png"
                            alt="Cigogne"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Fleur de Lys</td>
                    <td>Ville royale</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/fleur_de_lys.png"
                            alt="Fleur de Lys"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Hermine</td>
                    <td>Breton</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/hermine.png"
                            alt="Hermine"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Houe</td>
                    <td>Limousin</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/houe.png"
                            alt="Houe"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Lion rampant (dressé)</td>
                    <td>Lyonnais</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lion_dresse.png"
                            alt="Lion dressé"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Léopard ou lion passant (lion héraldique)</td>
                    <td>Normand</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/lion_heraldique.png"
                            alt="Lion héraldique"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Sabot</td>
                    <td>Breton monté à Paris</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/sabot.png"
                            alt="Sabot"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Sanglier</td>
                    <td>Ardennais</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/sanglier.png"
                            alt="Sanglier"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Taste-vin</td>
                    <td>Bourguignon</td>
                    <td data-fal-insigne>
                        <img
                            loading="lazy"
                            width="100"
                            height="100"
                            src="/images/insigne/taste_de_vin.png"
                            alt="Sanglier"
                        />
                    </td>
                </tr>
            </tbody>
        </v-table>

        <v-expansion-panels class="mt-4">
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <v-icon icon="mdi-information-variant"></v-icon>
                    A propos du Singe
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p>
                        <strong>N.B :</strong> Lorsqu’un Faluchard est
                        sanctionné par un singe, il doit retirer de sa Faluche
                        tous les insignes présents sur la partie officielle de
                        la Faluche à l’exception du singe, pour une durée
                        déterminée par le Grand Maître (ou un de ses
                        représentants légitimes).
                    </p>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <v-icon icon="mdi-information-variant"></v-icon>
                    A propos du Bacchus
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="text-justify">
                        <strong>NB : </strong>Parmi les plus glorieux, le
                        Bacchus reste le plus difficile à obtenir. Il faudra un
                        minimum de 6 mois au faluchard pour justifier son mérite
                        envers le Dieu du vin. Sous l’œil attentif du GM, il ne
                        devra jamais faillir au règlement strict du port du
                        Bacchus. Après ce délai, avant concertation pour obtenir
                        un Bacchus, il faudra se comporter avec dignité et
                        surtout avoir toujours un minimum de présence d’esprit
                        pour ne pas le perdre rapidement.
                    </p>
                    <br />
                    <p class="text-justify">
                        En effet, pour qu’il y ait un Bacchus, il faut qu’il y
                        ait ivresse (cela est clair, donc les bouteilles de
                        Bordeaux sont compatibles avec cet insigne), mais la
                        dignité doit rester toute entière et se définit de la
                        sorte :
                    </p>
                    <ol class="ml-5">
                        <li>
                            Avoir la présence de se faire vomir (avec discrétion
                            pour éviter le zéro) en étant ivre pour ne pas
                            sombrer
                        </li>
                        <li>
                            Demander à ce que l’on vous ramène votre voiture est
                            une preuve de lucidité et de responsabilité
                        </li>
                    </ol>
                    <br />
                    <p class="text-justify">
                        Tout acte dégradant, commis en état d’ivresse (vomir en
                        public, tomber inanimé, vouloir conduire quoiqu’il
                        arrive sa voiture, tenir des propos incohérents,
                        dégrader des lieux publics sous l’emprise de l’alcool,
                        etc.) entraînera une sanction :
                    </p>
                    <ol class="ml-5">
                        <li>
                            Dans un premier temps, le faluchard se verra
                            retourner son Bacchus
                        </li>
                        <li>S’il récidive, il lui sera retiré.</li>
                    </ol>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <div class="table-warning-fal">
            <h3 class="pl-3 pt-2 mt-4">
                <v-icon icon="mdi-alert-box-outline"></v-icon>
                Spécifités Amiénoises
            </h3>
            <Article8Spé class="table-warning-fal"></Article8Spé>
        </div>
    </article>
</template>

<style scoped>
.no-border {
    border: none !important;
}

.no-border-bottom {
    td {
        border: none !important;
    }
}
</style>
