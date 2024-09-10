<template>
    <v-container>
        <article data-fal-article>
            <div class="my-4 text-center">
                <img
                    loading="lazy"
                    class="w-100"
                    style="max-width: 500px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Armoiries_Amiens%2C_France_%2880%29.svg/756px-Armoiries_Amiens%2C_France_%2880%29.svg.png"
                    alt="blason d'Amiens"
                />

                <p class="text-center font-italic">
                    "De gueules au lierre d'argent ; au chef d'azur semé de
                    fleurs de lis d'or (au chef de France ancien)."
                </p>
                <p class="text-justify my-2">
                    Les couleurs d'Amiens sont donc:
                    <strong>Rouge</strong> (de gueules) et
                    <strong>Bleu roy</strong> (azur).
                </p>
            </div>

            <h2 class="mt-4 mb-2">Les villes proches</h2>
            <v-table class="table align-middle">
                <thead>
                    <tr>
                        <th scope="col">Blason</th>
                        <th scope="col">Ville</th>
                        <th scope="col">Couleurs</th>
                        <th scope="col">Province</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Abbeville"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/abbeville.png"
                            />
                        </td>
                        <td>Abbeville</td>
                        <td>Bleu roi et rouge</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Amiens"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/amiens.png"
                            />
                        </td>
                        <td>Amiens</td>
                        <td>Rouge et bleu roi</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Arras"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/arras.png"
                            />
                        </td>
                        <td>Arras</td>
                        <td>Rouge et or</td>
                        <td data-fal-insigne>
                            <a href="#artois">
                                <img
                                    alt="Artois"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/artois.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Beauvais"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/beauvais.png"
                            />
                        </td>
                        <td>Beauvais</td>
                        <td>Rouge et blanc</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Compiègne"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/compiègne.png"
                            />
                        </td>
                        <td>Compiègne</td>
                        <td>Bleu roi et or</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Creil"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/creil.png"
                            />
                        </td>
                        <td>Creil</td>
                        <td>Bleu roi et or</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Doullens"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/doullens.png"
                            />
                        </td>
                        <td>Doullens</td>
                        <td>Bleu roi et or</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Hirson"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/hirson.png"
                            />
                        </td>
                        <td>Hirson</td>
                        <td>Bleu et blanc</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Laon"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/laon.png"
                            />
                        </td>
                        <td>Laon</td>
                        <td>Bleu et blanc</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Lille"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/lille.png"
                            />
                        </td>
                        <td>Lille</td>
                        <td>Rouge et blanc</td>
                        <td data-fal-insigne>
                            <a href="#flandres">
                                <img
                                    alt="Flandres"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/flandres.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Noyon"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/noyon.png"
                            />
                        </td>
                        <td>Noyon</td>
                        <td>Rouge et blanc</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Paris"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/paris.png"
                            />
                        </td>
                        <td>Paris</td>
                        <td>Bleu roi et rouge</td>
                        <td data-fal-insigne>
                            <a href="#iledefrance">
                                <img
                                    alt="Ile de France"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/ile de france.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Reims"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/reims.png"
                            />
                        </td>
                        <td>Reims</td>
                        <td>Bleu et blanc</td>
                        <td data-fal-insigne>
                            <a href="#champagne">
                                <img
                                    alt="Champagne"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/champagne.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Rouen"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/rouen.png"
                            />
                        </td>
                        <td>Rouen</td>
                        <td>Bleu roi et rouge</td>
                        <td data-fal-insigne>
                            <a href="#normandie">
                                <img
                                    alt="Normandie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/normandie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Saint-Quentin"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/saint-quentin.png"
                            />
                        </td>
                        <td>Saint-Quentin</td>
                        <td>Blanc et bleu</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Senlis"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/senlis.png"
                            />
                        </td>
                        <td>Senlis</td>
                        <td>Rouge et or</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Soissons"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/soissons.png"
                            />
                        </td>
                        <td>Soissons</td>
                        <td>Bleu et blanc</td>
                        <td data-fal-insigne>
                            <a href="#picardie">
                                <img
                                    alt="Picardie"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/picardie.png"
                                />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-fal-insigne>
                            <img
                                alt="Valenciennes"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/valenciennes.png"
                            />
                        </td>
                        <td>Valenciennes</td>
                        <td>Rouge et or</td>
                        <td data-fal-insigne>
                            <a href="#flandres">
                                <img
                                    alt="Flandres"
                                    loading="lazy"
                                    height="50"
                                    width="75"
                                    src="/images/ecussons/flandres.png"
                                />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </v-table>

            <p class="text-justify mt-4">
                Si ta ville n'apparait pas dans cette liste et/ou que tu as un
                doute, tu peux te rapprocher de tes croix pour avoir
                confirmation des couleurs ou regarder sur
                <a
                    href="https://docs.google.com/spreadsheets/d/1Oz60XGBvhm0gqI7uOo2EhSypW6SWo52tup6Bw4wPb_E/edit?usp=sharing"
                >
                    cette liste faite par le collectif des archivistes.
                </a>
            </p>

            <h2 class="mt-4">Les provinces</h2>
            <v-table class="table align-middle">
                <thead>
                    <tr>
                        <td>Blason</td>
                        <td>Province</td>
                        <td>Couleurs</td>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr id="artois">
                        <td data-fal-insigne>
                            <img
                                alt="Artois"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/artois.png"
                            />
                        </td>
                        <td>Artois</td>
                        <td>Bleu roi et or</td>
                    </tr>
                    <tr id="champagne">
                        <td data-fal-insigne>
                            <img
                                alt="Champagne"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/champagne.png"
                            />
                        </td>
                        <td>Champagne</td>
                        <td>Bleu et blanc</td>
                    </tr>
                    <tr id="flandres">
                        <td data-fal-insigne>
                            <img
                                alt="Flandres"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/flandres.png"
                            />
                        </td>
                        <td>Flandres</td>
                        <td>Jaune et noir</td>
                    </tr>
                    <tr id="iledefrance">
                        <td data-fal-insigne>
                            <img
                                alt="Ile de France"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/ile de france.png"
                            />
                        </td>
                        <td>Ile de France</td>
                        <td>Bleu roi et or</td>
                    </tr>
                    <tr id="normandie">
                        <td data-fal-insigne>
                            <img
                                alt="Normandie"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/normandie.png"
                            />
                        </td>
                        <td>Normandie</td>
                        <td>Rouge et or</td>
                    </tr>
                    <tr id="picardie">
                        <td data-fal-insigne>
                            <img
                                alt="Picardie"
                                loading="lazy"
                                height="50"
                                width="75"
                                src="/images/ecussons/picardie.png"
                            />
                        </td>
                        <td>Picardie</td>
                        <td>Bleu et blanc</td>
                    </tr>
                </tbody>
            </v-table>
        </article>
    </v-container>
</template>

<style scoped lang="scss">
tbody tr td {
    //Avoid horizontal scroll
    padding: 0 5px !important;
}
</style>
