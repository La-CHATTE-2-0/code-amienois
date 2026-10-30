<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

// Étapes ouvertes (plusieurs possibles) : la première à l'arrivée sur la page
const openSteps = ref([0]);

const getImageUrl = function (aImageName: string) {
    return `images/couture/${aImageName}-${theme.global.current.value.dark ? "dark" : "light"}.jpeg`;
};

// Dimensions réelles des schémas : le navigateur réserve leur place avant le chargement
const images: Record<string, { alt: string; width: number; height: number }> = {
    "point-droit": { alt: "Schéma du point avant", width: 1600, height: 606 },
    "point-arriere": { alt: "Schéma du point arrière", width: 1600, height: 606 },
    "alignement-point": { alt: "Alignement des points", width: 1600, height: 606 },
    "point-au-travers": { alt: "Point passé au travers du tissu", width: 1600, height: 606 },
    ruban: { alt: "Couture de deux rubans ensemble", width: 873, height: 446 },
    "symetrie-et-zones": { alt: "Symétrie et zones de la faluche", width: 1600, height: 1600 },
    "angle-blason": { alt: "Pli du ruban à 120° au niveau du blason", width: 970, height: 970 },
    "placement-ruban": { alt: "Placement du ruban sur le velours", width: 917, height: 1600 },
    "bords-faluche": { alt: "Couture des bords arrondis de la faluche", width: 1241, height: 1175 },
    "secu-bas-ruban": { alt: "Sécurisation du bas du ruban", width: 733, height: 554 },
    "epingle-blason": { alt: "Épinglage du blason", width: 842, height: 733 },
    blason: { alt: "Couture du blason", width: 842, height: 733 },
    moivre: { alt: "Couture du moivre", width: 1600, height: 482 },
    "secu-insignes": { alt: "Sécurisation des insignes au fil", width: 808, height: 349 },
};
</script>

<template>
    <v-container class="guide">
        <p class="guide__intro">
            Ce guide accompagne la couture d'une faluche, étape par étape : des
            points de base jusqu'au circulaire. Suivez les étapes dans l'ordre.
        </p>

        <section class="guide__materiel" aria-labelledby="guide-materiel">
            <h2 id="guide-materiel" class="guide__label">Matériel</h2>
            <ul>
                <li>Aiguille et fil</li>
                <li>Épingles</li>
                <li>Pinces, pour mettre les insignes en place</li>
                <li>Un briquet, pour faire fondre l'extrémité des rubans</li>
            </ul>
        </section>

        <v-expansion-panels v-model="openSteps" multiple class="guide__steps">
            <!-- 1. Les bases -->
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <span class="guide__num" aria-hidden="true">1</span>
                    <span class="guide__heading">
                        <span class="guide__title">Les bases</span>
                        <span class="guide__summary">Points, espacement, nœud d'arrêt</span>
                    </span>
                </v-expansion-panel-title>
                <v-expansion-panel-text eager>
                    <p>
                        On désigne par le terme “point” une piqûre du tissu à
                        l'aide d'une aiguille enchâssée d'un fil. Le premier point
                        de couture doit être fait avec un nœud au bout du fil
                        piqué de sorte que le nœud ne soit pas visible. Avant de
                        démarrer la couture d'une faluche, il est utile de
                        connaître au moins deux méthodes de couture à la main.
                    </p>

                    <h3>Le point avant</h3>
                    <p>
                        Une méthode de couture <strong>rapide mais peu solide</strong>.
                        Elle consiste à piquer de part et d'autre du tissu en
                        avançant à chaque point. Le rendu visible suite à la
                        couture est une ligne en pointillé.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('point-droit')" v-bind="images['point-droit']" />
                        <figcaption>{{ images["point-droit"].alt }}</figcaption>
                    </figure>

                    <h3>Le point arrière</h3>
                    <p>
                        Une méthode de couture <strong>lente mais très solide</strong>.
                        Elle consiste à piquer d'un point vers l'arrière du côté
                        extérieur du tissu puis de deux points vers l'avant du
                        côté intérieur du tissu. Le rendu visible suite à la
                        couture est une ligne continue.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('point-arriere')" v-bind="images['point-arriere']" />
                        <figcaption>{{ images["point-arriere"].alt }}</figcaption>
                    </figure>

                    <h3>Espacement des points</h3>
                    <p>
                        La solidité d'une faluche est vérifiée en tirant sur les
                        rubans et en essayant de passer une dent de clé entre deux
                        points de couture. Afin de réussir la vérification, il est
                        recommandé d'<strong>espacer chaque point de moins de 2 mm</strong>.
                        Il est cependant tout à fait possible de varier entre 1 mm
                        et 3 mm en fonction de l'accessibilité de la zone afin de
                        privilégier la qualité des points à leur rapprochement.
                    </p>

                    <h3>Qualité d'un point</h3>
                    <p>
                        Un point de bonne qualité est solide et ne crée pas de pli
                        sur le tissu. Pour cela, <strong>la longueur du fil utilisé
                        pour un point doit être égale à l'espacement entre deux
                        points</strong>. Pour des points espacés de 2 mm, 2 mm de fil
                        doivent être utilisés entre chaque point. Il ne faut pas
                        utiliser moins et tirer dessus ni utiliser plus car le
                        point serait moins solide. Les points doivent également
                        être réguliers.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('alignement-point')" v-bind="images['alignement-point']" />
                        <figcaption>{{ images["alignement-point"].alt }}</figcaption>
                    </figure>
                    <p>
                        Pour un point reliant deux rubans entre eux, aucune
                        distance ne doit être parcourue par le fil entre les
                        rubans. Si l'aiguille est plantée à 10 mm du bord des deux
                        rubans, elle doit ressortir exactement à 10 mm.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('point-au-travers')" v-bind="images['point-au-travers']" />
                        <figcaption>{{ images["point-au-travers"].alt }}</figcaption>
                    </figure>
                    <v-alert
                        class="guide__note"
                        icon="mdi-information-outline"
                        variant="tonal"
                        density="compact"
                    >
                        Il est possible de gagner en solidité en cousant à l'aide
                        de deux fils simultanément ; cependant, ce n'est pas sans
                        risque. Il est plus difficile de gérer la tension de deux
                        fils et le rendu après la couture est souvent moins propre
                        lorsque deux fils sont utilisés. Si la couture en double
                        fil n'est pas maîtrisée, il est donc fortement déconseillé
                        de l'utiliser. Dans ce cas, il est préférable de ne coudre
                        qu'avec un fil et de repasser une seconde fois si besoin.
                    </v-alert>

                    <h3>Finir un point</h3>
                    <p>
                        La méthode la plus simple pour finir un point est de faire
                        un <strong>double nœud du côté intérieur du tissu</strong>. Des
                        « points d'arrêt » existent mais il n'est pas nécessaire
                        d'en utiliser pour la couture d'une faluche. Pour un bon
                        nœud d'arrêt :
                    </p>
                    <ol class="guide__steps-list">
                        <li>Faire une boucle</li>
                        <li>Passer le bout du fil dedans</li>
                        <li>Faire glisser la boucle pour la rapprocher le plus possible du tissu</li>
                        <li>Placer le doigt sur la boucle pour la garder en place</li>
                        <li>Tirer le bout du fil pour la refermer</li>
                    </ol>
                    <p>
                        Une fois qu'un nœud a été fait, il suffit de coincer la
                        boucle derrière le nœud puis de la refermer sur le
                        précédent nœud afin de le consolider. Il est préférable
                        d'effectuer des nœuds régulièrement afin de pouvoir
                        recommencer plus facilement des portions de couture
                        insatisfaisantes.
                    </p>
                    <v-alert
                        class="guide__note"
                        icon="mdi-information-outline"
                        variant="tonal"
                        density="compact"
                    >
                        Pour éviter qu'un ruban ne s'effiloche, il faut faire
                        fondre l'extrémité du ruban. Attention, cette technique
                        n'est pas possible avec tous les types de tissus mais
                        c'est le cas pour le satin et le velours utilisés à
                        Amiens.
                    </v-alert>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 2. Coudre deux rubans ensemble -->
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <span class="guide__num" aria-hidden="true">2</span>
                    <span class="guide__heading">
                        <span class="guide__title">Coudre deux rubans ensemble</span>
                        <span class="guide__summary">Rubans bicolores de ville, province et naissance</span>
                    </span>
                </v-expansion-panel-title>
                <v-expansion-panel-text eager>
                    <div class="table-warning-fal guide__warning">
                        <v-icon icon="mdi-alert-box-outline" size="small" />
                        Attention, les rubans ne sont pas cousus ensemble en pharmacie.
                    </div>
                    <p>
                        À Amiens, les rubans bicolores de ville, province et
                        naissance sont cousus ensemble avant d'être cousus sur la
                        faluche.
                    </p>
                    <p>
                        Pour coudre deux rubans ensemble, il faut tout d'abord
                        poser un ruban aligné sur l'autre, <strong>face extérieure
                        contre face extérieure</strong>. Dans le cas d'un ruban de
                        velours pour une faluche, la face extérieure correspond à
                        la partie veloutée. Une fois les rubans alignés l'un à
                        l'autre, ils sont cousus ensemble en traçant une ligne
                        parallèle à la bordure du ruban, placée à
                        <strong>1 ou 2 mm du bord</strong>, dépendant du ruban. Si la
                        bordure d'un ruban est boursouflée, comme c'est le cas
                        pour le velours, il ne faut pas coudre directement sur la
                        boursouflure mais directement en dessous.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('ruban')" v-bind="images['ruban']" />
                        <figcaption>{{ images["ruban"].alt }}</figcaption>
                    </figure>
                    <p>
                        Cette partie étant simple à coudre, il faut maintenir des
                        points serrés et réguliers, de préférence en
                        <strong>point arrière</strong>.
                    </p>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 3. Le placement -->
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <span class="guide__num" aria-hidden="true">3</span>
                    <span class="guide__heading">
                        <span class="guide__title">Le placement</span>
                        <span class="guide__summary">Symétrie et pli au niveau du blason</span>
                    </span>
                </v-expansion-panel-title>
                <v-expansion-panel-text eager>
                    <p>
                        Les rubans sont traditionnellement placés sur la faluche
                        par les parrains et marraines. Pour ce faire, la faluche
                        doit être mise à plat de sorte qu'elle soit le plus ronde
                        possible vue du dessus. Après cela, l'axe de symétrie
                        central de la faluche doit être marqué, du frontal à
                        l'occipital, à l'aide d'un ruban ou d'épingles. Les rubans
                        de ville d'étude et de province doivent être
                        <strong>placés de manière symétrique</strong>, la distance avec
                        l'axe central pouvant varier d'un faluchard à l'autre
                        dépendant de l'espace souhaité pour les différentes parties
                        de la faluche.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('symetrie-et-zones')" v-bind="images['symetrie-et-zones']" />
                        <figcaption>{{ images["symetrie-et-zones"].alt }}</figcaption>
                    </figure>
                    <p>
                        Il faut tout d'abord fixer la partie occipitale des rubans
                        de ville d'étude et de province à l'aide d'épingles,
                        jusqu'au niveau du blason. Ensuite, <strong>plier le ruban à
                        120°</strong> et le fixer de nouveau à l'aide d'épingles.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('angle-blason')" v-bind="images['angle-blason']" />
                        <figcaption>{{ images["angle-blason"].alt }}</figcaption>
                    </figure>
                    <div class="table-warning-fal guide__warning">
                        <v-icon icon="mdi-alert-box-outline" size="small" />
                        Attention, les angles en pharmacie sont visibles.
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 4. Coudre un ruban sur le velours -->
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <span class="guide__num" aria-hidden="true">4</span>
                    <span class="guide__heading">
                        <span class="guide__title">Coudre un ruban sur le velours</span>
                        <span class="guide__summary">Couture droite, arrondis, sécurisation</span>
                    </span>
                </v-expansion-panel-title>
                <v-expansion-panel-text eager>
                    <p>
                        Pour coudre droit et sans pli, il faut que le ruban épouse
                        la forme de la faluche. Cela peut se faire en mettant une
                        main à l'intérieur de la faluche pour lui donner une forme
                        “normale”, c'est-à-dire légèrement bombée, et non à plat.
                        Il est plus simple de <strong>coudre un ruban à la fois</strong>
                        et de commencer par la plus longue ligne droite à coudre
                        sur le ruban. Dans le cadre des rubans de ville et de
                        province, on commence la couture juste au-dessus du pli
                        qui accueillera le blason puis on trace une ligne droite
                        reliant ce pli à l'avant puis on fait la même chose pour
                        l'autre côté du ruban. Le ruban doit toujours être bien
                        aplati sur la faluche durant la couture. Dans le cas d'un
                        double ruban, chaque côté du ruban doit être espacé de
                        sorte que le ruban soit bien à plat, comme si les deux
                        parties du ruban étaient placées l'une à côté de l'autre
                        sur la faluche.
                    </p>
                    <p>
                        Il est possible de commencer la couture directement à
                        partir des aiguilles utilisées pour le placement des
                        rubans sur la faluche mais il peut être utile d'ajouter
                        une étape avant la couture au propre. En effet, il est
                        plus simple pour certaines personnes de coudre une
                        première fois en point droit avec un espacement de 1 cm
                        pour pouvoir bien fixer le ruban sur toute sa longueur
                        puis retirer les aiguilles. Le fil utilisé pour cette
                        étape devra être retiré suite à la couture au propre, il
                        est donc préférable d'utiliser une couleur bien visible,
                        différente du fil définitif. À vous de voir si cette étape
                        peut vous aider.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('placement-ruban')" v-bind="images['placement-ruban']" />
                        <figcaption>{{ images["placement-ruban"].alt }}</figcaption>
                    </figure>
                    <p>
                        Durant la couture, vérifiez régulièrement que la ligne
                        cousue à l'intérieur de la faluche soit bien droite et
                        qu'elle ne se soit pas prise dans la doublure. Cela est
                        d'autant plus nécessaire pour la couture des parties
                        “arrondies” de la faluche, au niveau du frontal et de
                        l'occipital puisqu'il faudra également éliminer les plis
                        sous le ruban en maintenant une zone sans pli à l'aide
                        d'une main dans la faluche sous le ruban.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('bords-faluche')" v-bind="images['bords-faluche']" />
                        <figcaption>{{ images["bords-faluche"].alt }}</figcaption>
                    </figure>
                    <p>
                        Une fois un ruban cousu, il est nécessaire de
                        <strong>sécuriser l'extrémité du ruban</strong> en cousant une
                        ligne parallèle au circulaire juste au-dessus de ce
                        dernier. Cette ligne doit être cousue même si votre ruban
                        dépasse pour passer sous le circulaire.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('secu-bas-ruban')" v-bind="images['secu-bas-ruban']" />
                        <figcaption>{{ images["secu-bas-ruban"].alt }}</figcaption>
                    </figure>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 5. Coudre un blason -->
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <span class="guide__num" aria-hidden="true">5</span>
                    <span class="guide__heading">
                        <span class="guide__title">Coudre un blason</span>
                        <span class="guide__summary">Alignement, épinglage, point arrière</span>
                    </span>
                </v-expansion-panel-title>
                <v-expansion-panel-text eager>
                    <p>
                        La couture d'un blason ne doit se faire que lorsque le
                        <strong>ruban en dessous de lui est complètement cousu</strong>.
                        Le blason doit être placé de sorte que la pointe
                        inférieure soit alignée avec le centre de la partie du
                        ruban faisant l'angle. La pointe la plus en avant du
                        blason doit quant à elle être alignée avec le centre de la
                        partie du ruban allant de l'avant jusqu'au pli. Une fois
                        en position, il est préférable de le stabiliser avec
                        beaucoup d'aiguilles.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('epingle-blason')" v-bind="images['epingle-blason']" />
                        <figcaption>{{ images["epingle-blason"].alt }}</figcaption>
                    </figure>
                    <p>
                        De la même manière qu'un ruban, la couture d'un blason ne
                        doit pas se faire directement sur le bord de ce dernier
                        mais à <strong>2 mm ou 3 mm de la bordure</strong>. La couture d'un
                        blason est simple mais doit être très solide, il est donc
                        préférable d'utiliser le <strong>point arrière</strong>.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('blason')" v-bind="images['blason']" />
                        <figcaption>{{ images["blason"].alt }}</figcaption>
                    </figure>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 6. Coudre le circulaire -->
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title>
                    <span class="guide__num" aria-hidden="true">6</span>
                    <span class="guide__heading">
                        <span class="guide__title">Coudre le circulaire</span>
                        <span class="guide__summary">Moivre, insignes, couture sur la faluche</span>
                    </span>
                </v-expansion-panel-title>
                <v-expansion-panel-text eager>
                    <p>
                        On considère que la longueur de ruban à utiliser pour
                        coudre un circulaire est correcte lorsque le ruban est
                        <strong>capable de tenir seul</strong> (sans aiguille) autour de
                        la partie inférieure, renforcée, de la faluche.
                    </p>
                    <p>
                        On commence la couture d'un circulaire par le moivre. Pour
                        cela, on prend une longueur de ruban entre
                        <strong>1,5 et 2 fois plus long que la hauteur du
                        circulaire</strong>. Le ruban est placé en diagonale sans angle
                        exact à suivre, son centre placé au milieu du circulaire
                        en hauteur. Les parties dépassant du circulaire sont
                        ensuite repliées derrière le circulaire et cousues avec
                        l'avant. Le moivre peut être utilisé pour masquer la
                        couture de 2 parties de ruban, il est donc préférable de
                        le placer au-dessus d'une couture de rubans. Les rubans
                        d'un circulaire peuvent être cousus en suivant la même
                        technique que les autres rubans ou en plaçant un ruban
                        au-dessus de l'autre puis en les cousant à l'aide d'une
                        simple ligne de fil.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('moivre')" v-bind="images['moivre']" />
                        <figcaption>{{ images["moivre"].alt }}</figcaption>
                    </figure>
                    <p>
                        Une fois le moivre cousu, les insignes peuvent être placés
                        sur le circulaire. Afin de permettre aux pattes de mieux
                        transpercer, il est conseillé de couper leurs extrémités en
                        diagonale afin qu'elles forment des pointes. De plus,
                        certains insignes peuvent se tordre lorsque les pattes
                        sont repliées ; pour éviter cela, des pinces peuvent être
                        utilisées pour maintenir la forme de l'insigne pendant que
                        la patte est mise en position. Une fois accrochés, il est
                        fortement conseillé de <strong>sécuriser ses insignes à l'aide
                        de fil</strong>. Les motifs permettant de sécuriser les
                        insignes ne suivent aucune règle, le seul but à viser
                        étant de maximiser les prises du fil.
                    </p>
                    <figure class="guide__figure">
                        <img loading="lazy" :src="getImageUrl('secu-insignes')" v-bind="images['secu-insignes']" />
                        <figcaption>{{ images["secu-insignes"].alt }}</figcaption>
                    </figure>
                    <p>
                        Une fois les insignes sur le circulaire, le ruban peut être
                        cousu à la faluche. Pour rappel, l'insigne à placer au
                        milieu de la zone frontale est l'insigne de filière au
                        moment du baptême. Pour coudre le circulaire, il faut
                        piquer dans le ruban et uniquement dans le tissu de la
                        partie consolidée, sans la transpercer. Pour cela, pliez
                        le tissu sur la faluche et faites-y passer votre aiguille
                        en point droit. Cette partie est complexe à coudre, de ce
                        fait il est préférable de maintenir des points peu serrés
                        et de passer une seconde fois pour consolider le
                        circulaire. Il ne faut coudre ainsi le ruban que
                        <strong>sur une de ses extrémités</strong> mais pas sur les deux
                        afin de pouvoir accéder à l'arrière du ruban pour y
                        ajouter ou remplacer des insignes.
                    </p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <p class="guide__credit">
            D'après Paul “Jabba El Meuble” R., ex-GC Sciences Amiens
        </p>
    </v-container>
</template>

<style scoped>
.guide__intro {
    margin-bottom: 1rem;
}

.guide__materiel {
    margin-bottom: 1.5rem;
}

.guide__label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.guide__materiel ul {
    padding-inline-start: 1.25rem;
}

/* Titre d'étape : numéro + intitulé + résumé */
.guide__num {
    flex: none;
    display: inline-grid;
    place-items: center;
    width: 28px;
    height: 28px;
    margin-right: 12px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 600;
}

.guide__heading {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.guide__title {
    font-size: 1rem;
    font-weight: 600;
}

.guide__summary {
    font-size: 0.8125rem;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

/* Contenu d'une étape */
.guide__steps :deep(.v-expansion-panel-text__wrapper) {
    padding-top: 4px;
}

.guide__steps h3 {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
}

.guide__steps p {
    margin-top: 0.75rem;
}

.guide__figure {
    margin: 1rem 0;
    text-align: center;
}

.guide__figure img {
    display: block;
    width: auto;
    height: auto;
    max-width: min(100%, 520px);
    max-height: 480px;
    margin-inline: auto;
    border-radius: 12px;
}

.guide__figure figcaption {
    margin-top: 0.5rem;
    font-size: 0.8125rem;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

.guide__note {
    margin-top: 1rem;
}

.guide__warning {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 1rem 0;
    padding: 12px 16px;
}

.guide__steps-list {
    margin-top: 0.5rem;
    padding-inline-start: 1.5rem;
}

.guide__steps-list li + li {
    margin-top: 0.25rem;
}

.guide__credit {
    margin-top: 1.5rem;
    font-size: 0.8125rem;
    font-style: italic;
    text-align: right;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

/* À l'impression, toutes les étapes sont dépliées */
@media print {
    .guide__steps :deep(.v-expansion-panel-text) {
        display: block !important;
        height: auto !important;
    }

    .guide__steps :deep(.v-expansion-panel-title__icon) {
        display: none;
    }
}
</style>
