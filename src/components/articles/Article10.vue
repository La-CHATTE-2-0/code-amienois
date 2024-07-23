<script setup lang="ts">
import Article10Spé from "../../components/articles/Article10Spé.vue";
import pages from "../../core/page";
</script>

<template>
    <article data-fal-article="10">
        <h2>Article 10:</h2>
        <div>
            Sur le velours figurent les rubans supérieurs. De gauche à droite :
            <ol type="1" class="ml-4">
                <li>
                    <b>Le ruban de ville d'étude :</b> Ruban aux couleurs de la
                    ville d'étude, surmonté d'un écusson brodé en toile.
                    L'étudiant changeant de ville de faculté (France ou
                    étranger) placera parallèlement et en arrière du précédent,
                    un ruban surmonté d'un écusson, aux couleurs de sa nouvelle
                    ville universitaire, et l'année de changement en chiffres.
                </li>
                <li>
                    <b>Le ruban d'association :</b> Ruban aux couleurs de
                    l'association, précisant la place occupée par l'étudiant et
                    les années passées au sein de celle-ci. Selon le poste,
                    l'étudiant placer devant l'année une broche correspondant à
                    son poste (président, vice-président général, secrétaire ou
                    trésorier), une étoile dorée pour un rôle au sein du bureau,
                    et argentée pour un membre actif ou chargé de mission.
                    <div>
                        <img
                            loading="lazy"
                            width="80"
                            height="40"
                            alt="Président"
                            src="/images/insigne/president.png"
                        />
                        <img
                            loading="lazy"
                            width="80"
                            height="40"
                            alt="Vice-Président"
                            src="/images/insigne/vice_president.png"
                        />
                        <img
                            loading="lazy"
                            width="80"
                            height="40"
                            alt="Secrétaire"
                            src="/images/insigne/secretaire.png"
                        />
                        <img
                            loading="lazy"
                            width="80"
                            height="40"
                            alt="Trésorier"
                            src="/images/insigne/tresorier.png"
                        />
                        <img
                            loading="lazy"
                            width="40"
                            height="40"
                            alt="Trésorier"
                            src="/images/insigne/etoile_doree.png"
                        />
                        <img
                            loading="lazy"
                            width="40"
                            height="40"
                            alt="Trésorier"
                            src="/images/insigne/etoile_argentee.png"
                        />
                    </div>
                </li>
                <li>
                    Pour les représentants d'association de ville ou
                    mono-disciplinaire :
                    <ol type="a" class="ml-4">
                        <li>
                            Pour les membres du Conseil d'Administration et du
                            bureau d'association régionale : un ruban aux
                            couleurs de la ville d'élection.
                        </li>
                        <li>
                            Pour les élus et délégués au plan national :
                            <ul>
                                <li>
                                    Pour les membres du conseil d'administration
                                    des associations, unions, fédérations
                                    nationales : un ruban tricolore
                                </li>
                                <li>
                                    Pour les membres de bureau : un ruban
                                    tricolore avec un filet blanc de chaque côté
                                </li>
                                <li>
                                    Pour le président : un ruban tricolore avec
                                    une bande blanche de chaque côté
                                </li>
                            </ul>
                        </li>
                        <li>
                            Pour les élus ou délégués au plan européen : un
                            ruban aux couleurs de l'Europe.
                        </li>
                        <li>
                            Pour les élus ou délégués au plan international : un
                            ruban aux couleurs de l'O.N.U (le délégué placera le
                            ruban de plus haut grade).
                        </li>
                    </ol>
                </li>
                <li>
                    <b>Le ruban d'élu :</b> Ruban de couleur jaune dont
                    l'extrémité occipitale sera laissée libre. Sur ce pendentif
                    seront placés par mandat :
                    <ol type="a" class="ml-4">
                        <li>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Étoile dorée"
                                src="/images/insigne/etoile_doree.png"
                            />
                            Une étoile dorée pour les VP étudiants d'université
                        </li>
                        <li>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Étoile argentée"
                                src="/images/insigne/etoile_argentee.png"
                            />
                            Une étoile argentée pour les VP étudiants d'UFR ou
                            de CA d'IUT
                        </li>
                        <li>
                            <img
                                class="bg-ruban-bleu"
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Étoile dorée sur ruban bleu"
                                src="/images/insigne/etoile_doree.png"
                            />
                            Une étoile dorée sur ruban bleu pour les délégués
                            mutualistes
                        </li>
                        <li>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Glaive et balance"
                                src="/images/insigne/glaive_et_balance.png"
                            />
                            Un glaive et balance pour les élus au conseil
                            disciplinaire
                        </li>
                        <li>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Grenouille dorée"
                                src="/images/insigne/grenouille_doree.png"
                            />
                            Une grenouille dorée pour les élus au conseil
                            d'université
                        </li>
                        <li>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Grenouille argentée"
                                src="/images/insigne/grenouille_argentee.png"
                            />
                            Une grenouille argentée pour les élus au conseil
                            d'UFR
                        </li>
                        <li>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Tortue dorée"
                                src="/images/insigne/tortue_doree.png"
                            />
                            Une tortue dorée pour les élus au CNOUS
                        </li>
                        <li>
                            <img
                                loading="lazy"
                                width="40"
                                height="40"
                                alt="Tortue argentée"
                                src="/images/insigne/tortue_argentee.png"
                            />
                            Une tortue argentée pour les élus au CROUS
                        </li>
                        <li>
                            Les initiales des autres conseils (CNESER, OVE,
                            COMUE, ...)
                        </li>
                    </ol>
                </li>
                <li>
                    <b>Les rubans de province et de ville de naissance :</b>
                    Surmontés des écussons en toile correspondants.
                </li>
            </ol>
            <div style="text-align: center">
                <img
                    style="width: 100%; max-width: 500px"
                    loading="lazy"
                    alt="Placement"
                    src="/images/other/placement.png"
                />
            </div>
            <p class="text-center">
                <a :href="pages.couleurs_rubans.url">
                    <v-icon icon="mdi-information-variant"></v-icon>
                    Couleurs des villes et provinces communes
                </a>
            </p>

            <p>
                Pour les Pharmaciens d'Amiens les angles des rubans doivent être
                visibles
            </p>

            <div class="table-warning-fal">
                <h3 class="pl-3 pt-2 mt-4">
                    <v-icon icon="mdi-alert-box-outline"></v-icon>
                    Spécifité Amiénoise
                </h3>
                <Article10Spé class="table-warning-fal px-4 py-2">
                </Article10Spé>
            </div>
        </div>
    </article>
</template>
