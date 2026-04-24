<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

const getImageUrl = function ( aImageName: string ) {
    return `images/couture/${aImageName}-${theme.global.current.value.dark ? "dark" : "light"}.jpeg`;
};
</script>

<style lang="css">
    .img {
        margin-left: 10%; 
        margin-right: 10%;
    }
</style>

<template>
    <v-container>
        <h2 class="my-4 text-center">GUIDE COUTURE FALUCHE</h2>

        <v-expansion-panels class="mb-5">
            <v-expansion-panel elevation="0" variant="tonal">
                <v-expansion-panel-title>Les bases</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="mt-4 text-justify">
                    On désigne par le terme “point” une piqûre du tissu à l’aide d’une aiguille enchâssée d’un fil. Le premier point de couture doit être fait avec un nœud au bout du fil piqué de sorte que le nœud ne soit pas visible. Avant de démarrer la couture d’une faluche, il est utile de connaître au moins deux méthodes de couture à la main. 
                    </p>
                    
                    <h4 class="mt-4">Le point avant</h4>
                    <p class="mt-4 text-justify">
                        Une méthode de couture rapide mais peu solide. Elle consiste à piquer de part et d’autre du tissu en avançant à chaque point. Le rendu visible suite à la couture est une ligne en pointillé.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('point-droit')"> </v-img></div>

                    <h4 class="mt-4">Le point arrière</h4>
                    <p class="mt-4 text-justify">
                        Une méthode de couture lente mais très solide. Elle consiste à piquer d’un point vers l’arrière du côté extérieur du tissu puis de deux points vers l’avant du côté intérieur du tissu. Le rendu visible suite à la couture est une ligne continue.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('point-arriere')"> </v-img></div>
                    
                    <h4 class="mt-4">Espacement des points</h4>
                    <p class="mt-4 text-justify">
                        La solidité d’une faluche est vérifiée en tirant sur les rubans et en essayant de passer une dent de clé entre deux points de couture. Afin de réussir la vérification, il est recommandé d’espacer chaque point de moins de 2mm. Il est cependant tout à fait possible de varier entre 1mm et 3mm en fonction de l’accessibilité de la zone afin de privilégier la qualité des points à leur rapprochement.
                    </p>
                    
                    <h4 class="mt-4">Qualité d’un point</h4>
                    <p class="mt-4 text-justify">
                        Un point de bonne qualité est solide et ne crée pas de pli sur le tissu. Pour cela, la longueur du fil utilisé pour un point doit être égale à l’espacement entre deux points. Pour des points espacés de 2mm, 2mm de fil doivent être utilisés entre chaque point. Il ne faut pas utiliser moins et tirer dessus ni utiliser plus car le point serait moins solide. Les points doivent également être réguliers.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('alignement-point')"> </v-img></div>
                    <p class="mt-4 text-justify">
                        Pour un point reliant deux rubans entre eux, aucune distance ne doit être parcourue par le fil entre les rubans. Si l’aiguille est plantée à 10mm du bord des deux rubans, elle doit ressortir exactement à 10mm.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('point-au-travers')"> </v-img></div>
                    <p class="mt-4 text-justify">
                        NB : Il est possible de gagner en solidité en cousant à l’aide de deux fils simultanément cependant ce n’est pas sans risque. Il est plus difficile de gérer la tension de deux fils et le rendu après la couture est souvent moins propre lorsque deux fils sont utilisés. Si la couture en double fil n’est pas maîtrisée, il est donc fortement déconseillé de l’utiliser. Dans ce cas, il est préférable de ne coudre qu’avec un fil et de repasser une seconde fois si besoin.
                    </p>
                    
                    <h4 class="mt-4">Finir un point</h4>
                    <p class="mt-4 text-justify">
                        La méthode la plus simple pour finir un point est de faire un double nœud du côté intérieur du tissu. Des « points d’arrêt » existent mais il n’est pas nécessaire d’en utiliser pour la couture d’une faluche. Pour un bon nœud d’arrêt : 
                    </p>    
                    <ol class="ml-5">
                        <li>Faire une boucle</li>
                        <li>Passer le bout du fil dedans</li>
                        <li>Faire glisser la boucle pour la rapprocher le plus possible du tissu</li>
                        <li>Placer le doigt sur la boucle pour la garder en place</li>
                        <li>Tirez le bout du fil pour la refermer</li>
                    </ol>
                    <p class="mt-4 text-justify">
                        Une fois qu’un nœud a été fait, il suffit de coincer la boucle derrière le nœud puis de la refermer sur le précédent nœud afin de le consolider. Il est préférable d’effectuer des nœuds régulièrement afin de pouvoir recommencer plus facilement des portions de couture insatisfaisantes. 
                    </p>
                    <p class="mt-4 text-justify">
                        NB : pour éviter qu’un ruban ne s'effiloche, il faut faire fondre l’extrémité du ruban. Attention, cette technique n’est pas possible avec tous les types de tissus mais c’est le cas pour le satin et le velours utilisés à Amiens.
                    </p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>


        <v-expansion-panels class="mb-5">
            <v-expansion-panel elevation="0" variant="tonal">
                <v-expansion-panel-title>Coudre deux rubans ensemble</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="table-warning-fal pa-3 mt-5 text-center">Attention, les rubans ne sont pas cousus ensembles en pharmacie.</p>
                    <p class="mt-4 text-justify">
                        Sur Amiens, les rubans bicolores de ville, province et naissance sont cousus ensemble avant d’être cousus sur la faluche.
                    </p>
                    <p class="mt-4 text-justify">
                        Pour coudre deux rubans ensemble, il faut tout d’abord poser un ruban aligné sur l’autre, face extérieure contre face extérieure. Dans le cas d’un ruban de velours pour une faluche, la face extérieure correspond à la partie veloutée. Une fois les rubans alignés l’un à l’autre, ils sont cousus ensemble en traçant une ligne parallèle à la bordure du ruban, placée à 1 ou 2mm du bord, dépendant du ruban. Si la bordure d’un ruban est boursouflée, comme c’est le cas pour le velours, il ne faut pas coudre directement sur la boursouflure mais directement en dessous.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('ruban')"> </v-img></div>
                
                    <p class="mt-4 text-justify">
                        Cette partie étant simple à coudre, il faut maintenir des points serrés et réguliers, de préférence en point arrière.
                    </p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels class="mb-5">
            <v-expansion-panel elevation="0" variant="tonal">
                <v-expansion-panel-title>Le placement</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="mt-4 text-justify">
                        Les rubans sont traditionnellement placés sur la faluche par les parrains et marraines. Pour ce faire, la faluche doit être mise à plat de sorte qu’elle soit le plus ronde possible vue du dessus. Après cela, l’axe de symétrie central de la faluche doit être marqué, du frontal à l’occipital, à l’aide d’un ruban ou d’épingles. Les rubans de ville d’étude et de province doivent être placés de manière symétrique, la distance avec l’axe central pouvant varier d’un faluchard à l’autre dépendant de l’espace souhaité pour les différentes parties de la faluche.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('symetrie-et-zones')"> </v-img></div>
                    <p class="mt-4 text-justify">
                        Pour rappel :
                    </p>    
                    <ol class="ml-5">
                        <li>Faire une boucle</li>
                        <li>Passer le bout du fil dedans</li>
                        <li>Faire glisser la boucle pour la rapprocher le plus possible du tissu</li>
                        <li>Placer le doigt sur la boucle pour la garder en place</li>
                        <li>Tirez le bout du fil pour la refermer</li>
                    </ol>
                    <p class="mt-4 text-justify">
                        Il faut tout d’abord fixer la partie occipitale des rubans de ville d’étude et de province doivent être fixés à l’aide d’épingles, jusqu’au niveau du blason. Ensuite, plier le ruban à 120° et le fixer de nouveau à l’aide d’épingles.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('angle-blason')"> </v-img></div>

                    <p class="table-warning-fal pa-3 mt-5 text-center">Attention, les angles en pharmacie sont visibles</p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels class="mb-5">
            <v-expansion-panel elevation="0" variant="tonal">
                <v-expansion-panel-title>Coudre un ruban sur le velours</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="mt-4 text-justify">
                        Pour coudre droit et sans pli, il faut que le ruban épouse la forme de la faluche. Cela peut se faire en mettant une main à l’intérieur de la faluche pour lui donner une forme “normale”, c'est-à-dire légèrement bombée, et non à plat. Il est plus simple de commencer à coudre un ruban à la fois et de commencer par la plus longue ligne droite à coudre sur le ruban. Dans le cadre des rubans de ville et de province, on commence la couture juste au-dessus du pli qui accueillera le blason puis on trace une ligne droite reliant ce pli à l’avant puis on fait la même chose pour l’autre côté du ruban. Le ruban doit toujours être bien aplati sur la faluche durant la couture. Dans le cas d’un double ruban, chaque côté du ruban doit être espacé de sorte que le ruban soit bien à plat, comme si les deux parties du ruban étaient placées l’un à côté de l’autre sur la faluche.
                    </p>    
                    <p class="mt-4 text-justify">
                        Il est possible de commencer la couture directement à partir des aiguilles utilisées pour le placement des rubans sur la faluche mais il peut être utile d’ajouter une étape avant la couture au propre. En effet, il est plus simple pour certaines personnes de coudre une première fois en point droit avec un espacement de 1cm pour pouvoir bien fixer le ruban sur toute sa longueur puis retirer les aiguilles. Le fil utilisé pour cette étape devra être retiré suite à la couture au propre, il est donc préférable d’utiliser une couleur bien visible, différente du fil définitif. À vous de voir si cette étape peut vous aider.
                    </p>    
                    <div><v-img class="img" :src="getImageUrl('placement-ruban')"> </v-img></div>
                    <p class="mt-4 text-justify">
                        Durant la couture, vérifiez régulièrement que la ligne cousue à l’intérieur de la faluche soit bien droite et qu’elle ne se soit pas prise dans la doublure. Cela est d’autant plus nécessaire pour la couture des parties “arrondies” de la faluche, au niveau du frontal et de l’occipital puisqu’il faudra également éliminer les plis sous le ruban en maintenant une zone à sans pli à l’aide d’une main dans la faluche sous le ruban.
                    </p>    
                    <div><v-img class="img" :src="getImageUrl('bords-faluche')"> </v-img></div>
                    <p class="mt-4 text-justify">
                        Une fois un ruban cousu, il est nécessaire de sécuriser l’extrémité du ruban en cousant une ligne parallèle au circulaire juste au-dessus de ce dernier. Cette ligne doit être cousue même si votre ruban dépasse pour passer sous le circulaire.
                    </p>    
                    <div><v-img class="img" :src="getImageUrl('secu-bas-ruban')"> </v-img></div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels class="mb-5">
            <v-expansion-panel elevation="0" variant="tonal">
                <v-expansion-panel-title>Coudre un blason</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="mt-4 text-justify">
                        La couture d’un blason ne doit se faire que lorsque le ruban en dessous de lui est complètement cousu. Le blason doit être placé de sorte que la pointe inférieure soit alignée avec le centre de la partie du ruban faisant l’angle tandis. La pointe la plus en avant du blason doit quant à elle être alignée avec le centre de la partie du ruban allant de l’avant jusqu’au pli. Une fois en position, il est préférable de le stabiliser avec beaucoup d’aiguilles.
                    </p>    
                    <div><v-img class="img" :src="getImageUrl('epingle-blason')"> </v-img></div>
                    <p class="mt-4 text-justify">
                        De la même manière qu’un ruban, la couture d’un ruban ne doit pas se faire directement sur le bord de ce dernier mais à 2mm ou 3mm de la bordure. La couture d’un ruban est simple mais doit être très solide, il est donc préférable d’utiliser le point arrière.
                    </p>    
                    <div><v-img class="img" :src="getImageUrl('blason')"> </v-img></div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
            
        <v-expansion-panels class="mb-5">
            <v-expansion-panel elevation="0" variant="tonal">
                <v-expansion-panel-title>Coudre le circulaire</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="mt-4 text-justify">
                        On considère que la longueur de ruban à utiliser pour coudre un circulaire est correcte lorsque le ruban est capable de tenir seul (sans aiguille) autour de la partie inférieure, renforcée, de la faluche.
                    </p>
                    <p class="mt-4 text-justify">
                        On commence la couture d’un circulaire par le moivre. Pour cela, on prend une longueur de ruban entre 1.5 et 2 fois plus long que la hauteur du circulaire. Le ruban est placé en diagonale sans angle exact à suivre, son centre placé au milieu du circulaire en hauteur. Les parties dépassant du circulaire sont ensuite repliées derrière le circulaire et cousues avec l’avant. Le moivre peut être utilisé pour masquer la couture de 2 parties de ruban, il est donc préférable de le placer au-dessus d’une couture de rubans. Les rubans d’un circulaire peuvent être cousues en suivant la même technique que les autres rubans ou en plaçant un ruban au-dessus de l’autre puis en les cousant à l’aide d’une simple ligne de fil.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('moivre')"> </v-img></div>

                    <p class="mt-4 text-justify">
                        Une fois le moivre cousu, les insignes peuvent être placés sur le circulaire. Afin de permettre aux pattes de mieux transpercer, il est conseillé de couper leurs extrémités en diagonale afin qu’elles forment des pointes. De plus, certains insignes peuvent se tordre lorsque les pattes sont repliés, pour éviter cela, des pinces peuvent être utilisées pour maintenir la forme de l’insigne pendant que la patte est mise en position. Une fois accrochée, il est fortement conseillé de sécuriser ses insignes à l’aide de fil. Les motifs permettant de sécuriser les insignes ne suivent aucune règle, le seul but à viser étant de maximiser les prises du fil.
                    </p>
                    <div><v-img class="img" :src="getImageUrl('secu-insignes')"> </v-img></div>
                    <p class="mt-4 text-justify">
                        Une fois les insignes sur le circulaire, le ruban peut être cousu à la faluche. Pour rappel, l’insigne à placer au milieu de la zone frontale est l’insigne de filière au moment du baptême. Pour coudre le circulaire, il faut piquer dans le ruban et uniquement dans le tissu de la partie consolidée, sans la transpercer. Pour cela, pliez le tissu sur la faluche et faites-y passer votre aiguille en point droit. Cette partie est complexe à coudre, de ce fait il est préférable de maintenir des points peu serrés et de passer une seconde fois pour consolider le circulaire. Il ne faut coudre ainsi le ruban que sur une de ses extrémités mais pas sur les deux afin de pouvoir accéder à l’arrière du ruban pour y ajouter ou remplacer des insignes.
                    </p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        
        <div class="text-caption" style="text-align: right">
            <span>
                <em>
                    D'après Paul “Jabba El Meuble” R., Ex GC Sciences Amiens
                </em>
            </span>
        </div>
    </v-container>
</template>