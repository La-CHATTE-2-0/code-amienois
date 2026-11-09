<script setup lang="ts">
const dossier = "/images/secu/";

// Dimensions réelles des photos : le navigateur réserve leur place avant le chargement
const images = {
    couverture: { alt: "Faluche reliée à sa sécu’ par une chaîne", width: 1200, height: 900 },
    sangle: { alt: "Exemple d’une sangle à l'intérieur du circu", width: 686, height: 687 },
    oeillet: { alt: "Exemple d’un oeillet dans le circulaire", width: 657, height: 606 },
    oeilletArrache: { alt: "Exemple d’oeillet arraché qui fragilise la faluche", width: 900, height: 1200 },
    secuSacADos: { alt: "Exemple de sécu “Sac à Dos”", width: 1200, height: 516 },
    maillonRapide: { alt: "Maillon rapide", width: 200, height: 200 },
    mousqueton: { alt: "Mousqueton vissable", width: 477, height: 879 },
    anneauPorteCles: { alt: "Anneau de porte clés", width: 458, height: 458 },
    anneauFragile: { alt: "Anneau fragile qui perd sa forme", width: 900, height: 1200 },
    apresBapteme: { alt: "Faluche sans attache à l’arrière, après le baptême", width: 1200, height: 900 },
    serrurerie: { alt: "Serrurerie du centre, 2 Rue Gresset, 80000 Amiens", width: 927, height: 430 },
    oeilletFaluche: { alt: "Oeillet", width: 680, height: 907 },
    mrBricolage: { alt: "Mr. Bricolage, 15 Rue du Maréchal de Lattre de Tassigny, 80000 Amiens", width: 552, height: 223 },
    schemaSacADos: { alt: "Schéma de la sécu’ sac à dos", width: 900, height: 1200 },
};

const src = (fichier: string) => `${dossier}${fichier}.jpeg`;
</script>

<template>
    <v-container class="secu">
        <article data-fal-article>
            <p class="secu__auteurs">Les Croix Sciences d’Amiens</p>
            <p class="secu__version">Juin 2022 - MAJ Février 2024 - Version 1.2.0</p>

            <div class="secu__intro">
                <figure class="secu__figure secu__couverture">
                    <img :src="src('couverture')" v-bind="images.couverture" />
                </figure>

                <v-alert
                    class="secu__remarque"
                    icon="mdi-information-outline"
                    variant="tonal"
                    density="compact"
                    title="Remarque:"
                >
                    Ce document n’a pas pour prétention d’être la solution
                    optimale, mais peut cependant aider en donnant quelques
                    conseils aux plus novices. Il est conçu initialement pour les
                    Amiénois, donc ce document ne reflète pas forcément les
                    habitudes des autres villes (cordes, chaînes, …).
                </v-alert>
            </div>

            <section aria-labelledby="secu-sangle">
                <h2 id="secu-sangle">Sangle/Oeillet</h2>
                <p>
                    Il existe deux principaux types d’attaches à l’arrière des
                    faluches: la sangle ou l'œillet. L’oeillet est, de nos jours,
                    très majoritaire sur Amiens comparé à la sangle, du fait de la
                    simplicité à faire dans n’importe quelle cordonnerie, et de
                    son faible coût.
                </p>
                <p>
                    Il n’est cependant pas forcément le plus résistant et peut
                    fragiliser la faluche (moins problématique chez nous comme
                    nous sommes avec un circulaire rigide mais le circulaire peut
                    s’arracher quand même).
                </p>

                <div class="secu__galerie">
                    <figure class="secu__figure">
                        <img loading="lazy" :src="src('sangle')" v-bind="images.sangle" />
                        <figcaption><em>{{ images.sangle.alt }}</em></figcaption>
                    </figure>
                    <figure class="secu__figure">
                        <img loading="lazy" :src="src('oeillet')" v-bind="images.oeillet" />
                        <figcaption><em>{{ images.oeillet.alt }}</em></figcaption>
                    </figure>
                </div>

                <p>
                    La sangle, bien que peu plus onéreuse, reste alors une
                    meilleure alternative que le trou avec l'œillet au vue de la
                    solidité mais aussi de l’esthétisme, si vous cousez la sangle
                    dans l’intérieur, le circulaire ne sera pas recouvert et
                    n'interrompera pas votre cursus si vous en avez un assez long.
                </p>
                <p>
                    Evidemment l’anneau mis dans les deux doit être aussi de bonne
                    qualité et ne pas se déformer quand on tire dessus.
                </p>
                <p>
                    Pour l'œillet, n’importe quelle cordonnerie sera en mesure de
                    la faire, ce qui est moins vrai pour la sangle. Celle à côté
                    de l'hôtel de Ville fait des sangles comme sur la photo
                    (environ 10 euros là bas).
                </p>
                <p>
                    Si vous choisissez l'œillet, plus il sera grand plus la
                    faluche sera fragilisée, et veillez à ne pas le faire trop
                    près du bord, cela peut endommager le circulaire plus
                    facilement.
                </p>

                <figure class="secu__figure">
                    <img loading="lazy" :src="src('oeillet-arrache')" v-bind="images.oeilletArrache" />
                    <figcaption>{{ images.oeilletArrache.alt }}</figcaption>
                </figure>
            </section>

            <section aria-labelledby="secu-chaine">
                <h2 id="secu-chaine">Chaîne/Corde</h2>
                <p>
                    Par tradition à Amiens nous mettons des chaînes métalliques.
                    La meilleure technique antivol pour la chaine est la méthode
                    “sac à dos”, qui consiste à faire une boucle en laissant
                    quelques maillons pour remonter jusqu'à la faluche.
                </p>

                <figure class="secu__figure secu__figure--large">
                    <img loading="lazy" :src="src('secu-sac-a-dos')" v-bind="images.secuSacADos" />
                    <figcaption>{{ images.secuSacADos.alt }}</figcaption>
                </figure>

                <p>
                    Pour fermer la boucle de la chaîne ou relier la faluche à la
                    sécu’, plusieurs possibilités:
                </p>

                <div class="secu__galerie secu__galerie--trois">
                    <figure class="secu__figure">
                        <img loading="lazy" :src="src('maillon-rapide')" v-bind="images.maillonRapide" />
                        <figcaption>{{ images.maillonRapide.alt }}</figcaption>
                    </figure>
                    <figure class="secu__figure">
                        <img loading="lazy" :src="src('mousqueton')" v-bind="images.mousqueton" />
                        <figcaption>{{ images.mousqueton.alt }}</figcaption>
                    </figure>
                    <figure class="secu__figure">
                        <img loading="lazy" :src="src('anneau-porte-cles')" v-bind="images.anneauPorteCles" />
                        <figcaption>{{ images.anneauPorteCles.alt }}</figcaption>
                    </figure>
                </div>

                <p>
                    Attention aux anneaux bas de gammes qui perdent leurs formes
                    quand ils sont forcés et qui ne jouent plus leurs rôles en
                    redevant droit. Voici un exemple d’un anneau qui commence à
                    perdre sa forme:
                </p>

                <figure class="secu__figure">
                    <img loading="lazy" :src="src('anneau-fragile')" v-bind="images.anneauFragile" />
                    <figcaption><em>{{ images.anneauFragile.alt }}</em></figcaption>
                </figure>
            </section>

            <section aria-labelledby="secu-etapes">
                <h2 id="secu-etapes">Étapes par étapes</h2>
                <p>
                    Il est fortement recommandé d’être accompagné par un
                    faluchard lors de vos achats pour simplifier les achats et
                    avoir un exemple pour les vendeurs.
                </p>

                <h3>Après le baptême</h3>
                <figure class="secu__figure">
                    <img loading="lazy" :src="src('apres-bapteme')" v-bind="images.apresBapteme" />
                </figure>
                <p>
                    Après ton baptême, normalement tu n’as pas encore de quoi
                    accrocher ta sécu’ à ta faluche, dans les étapes suivantes tu
                    verras des différentes étapes à la confection de la sécurité.
                </p>

                <h3>Faire la sangle ou l'oeillet</h3>
                <p>
                    Tous les cordonniers/serruriers sont en mesure de faire un
                    œillet, mais il m’est arrivé d’en avoir qui ne font pas les
                    sangles en cuir. Par habitude je prends celle ci car je sais
                    qu’ici il font la sangle rapidement, mais il doit sans doute y
                    en avoir d’autres tout aussi bien.
                </p>
                <figure class="secu__figure secu__figure--large">
                    <img loading="lazy" :src="src('serrurerie')" v-bind="images.serrurerie" />
                    <figcaption><em>{{ images.serrurerie.alt }}</em></figcaption>
                </figure>
                <p>En sortant de la cordonnerie vous devriez avoir votre faluche comme ceci</p>
                <div class="secu__galerie">
                    <figure class="secu__figure">
                        <img loading="lazy" :src="src('sangle')" v-bind="images.sangle" />
                        <figcaption><em>Sangle</em></figcaption>
                    </figure>
                    <figure class="secu__figure">
                        <img loading="lazy" :src="src('oeillet-faluche')" v-bind="images.oeilletFaluche" />
                        <figcaption><em>{{ images.oeilletFaluche.alt }}</em></figcaption>
                    </figure>
                </div>

                <h3>Faire la chaine</h3>
                <p>
                    Pour acheter des chaînes, il suffit d’aller dans n’importe
                    quel magasin de bricolage, ici pour l’exemple le Mr. Bricolage
                    du centre ville, qui est proche de plusieurs cordonniers et
                    facultés:
                </p>
                <figure class="secu__figure secu__figure--large">
                    <img loading="lazy" :src="src('mr-bricolage')" v-bind="images.mrBricolage" />
                    <figcaption><em>{{ images.mrBricolage.alt }}</em></figcaption>
                </figure>
                <p>
                    Rendez vous au rayon chaînes de votre magasin (à l’étage pour
                    Mr. Bricolage) et choisis un modèle. Les gros maillons sont
                    plus solides mais plus lourds aussi, donc le mieux est de
                    prendre un intermédiaire assez solide mais pas trop lourd.
                </p>
                <p>
                    Tirez sur la chaine et à l’aide de maillons rapides, fermez la
                    boucle en laissant quelques centimètres pour accrocher la
                    faluche. Ajustez la longueur selon votre morphologie (c’est
                    plus simple de faire ça à 2, sinon essayez la sécu, et bougez
                    le maillon pour ajuster).
                </p>
                <p>
                    Une fois la bonne taille, repérez le maillon à couper et
                    appelez un vendeur.
                </p>
                <figure class="secu__figure">
                    <img loading="lazy" :src="src('schema-sac-a-dos')" v-bind="images.schemaSacADos" />
                    <figcaption><em>{{ images.schemaSacADos.alt }}</em></figcaption>
                </figure>
            </section>
        </article>
    </v-container>
</template>

<style scoped>
.secu__auteurs {
    font-weight: 600;
}

.secu__version {
    margin-bottom: 1rem;
    font-size: 0.8125rem;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

/* Remarque et photo d'ouverture côte à côte sur grand écran */
.secu__intro {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .secu__intro {
        flex-direction: row;
        align-items: flex-start;
    }

    .secu__remarque {
        flex: 1;
    }

    .secu__couverture {
        flex: none;
        order: 2;
    }
}

.secu__remarque :deep(.v-alert-title) {
    font-size: 1rem;
    font-weight: 600;
}

.secu__figure.secu__couverture img {
    max-height: 320px;
}

.secu h2 {
    margin-top: 2rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    font-size: 1.25rem;
    font-weight: 600;
}

.secu h3 {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
}

.secu p {
    margin-top: 0.75rem;
}

.secu__figure {
    margin: 1rem 0;
    text-align: center;
}

.secu__figure img {
    display: block;
    width: auto;
    height: auto;
    max-width: min(100%, 420px);
    max-height: 420px;
    margin-inline: auto;
    border-radius: 12px;
}

.secu__figure--large img {
    max-width: min(100%, 560px);
}

.secu__figure figcaption {
    margin-top: 0.5rem;
    font-size: 0.8125rem;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

/* Photos comparées côte à côte */
.secu__galerie {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    align-items: end;
}

.secu__galerie--trois {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.secu__galerie .secu__figure {
    margin: 0;
}

.secu__galerie img {
    max-height: 240px;
}
</style>
