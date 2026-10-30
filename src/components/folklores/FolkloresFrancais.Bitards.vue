<script setup lang="ts">
import FolkloreFiche from "./FolkloreFiche.vue";

const image = {
    src: "/images/folklores/venere.jpg",
    alt: "Créature naturalisée à tête de fouine, corps de carpe et plumes de paon : le vénéré Bitard",
    width: 800,
    height: 600,
    legende: "Le vénéré Bitard (L.S.T.)",
};

const enBref = [
    { label: "Sa ville", text: "Poitiers" },
    { label: "Son dieu", text: "Le vénéré Bitard, Loué Soit-Il (L.S.T.)" },
    { label: "Sa tenue", text: "La faluche, avec un chevron, et une cape" },
    { label: "Son grand rendez-vous", text: "La chasse au Bitard, vers l’équinoxe de printemps" },
];

const grandConseil = [
    { label: "Grand Maître", text: "Élu à l’automne, il dirige l’Ordre et nomme le Grand Conseil" },
    { label: "Grand Sommelier", text: "Les boissons" },
    { label: "Grand Argentier", text: "Les comptes" },
    { label: "Grand Escriturier", text: "Le courrier et les archives" },
    { label: "Grand Intendant", text: "Le rangement, le bricolage et les victuailles" },
    { label: "Grand Chantre", text: "Les chansons paillardes, les canulars, et il donne le la" },
    { label: "Grand Bitardier", text: "Désigné par la chasse au Bitard, il est le chef des novices" },
];

const costumes = [
    { label: "Chabousses", text: "Cape verte" },
    { label: "Novices", text: "Chevron blanc, cape blanche" },
    { label: "Chevaliers", text: "Chevron bleu, cape rouge" },
    { label: "Commandeurs", text: "Liseré argent sur le chevron bleu de la faluche, chevron bleu sur la cape rouge" },
    { label: "Grand Maître", text: "Cape bleue bordée de fourrure blanche" },
    { label: "Grand Bitardier", text: "Cape camaïeu" },
];
</script>

<template>
    <FolkloreFiche id="bitard" titre="L’ordre du Bitard (Loué soit-il !)" :niveau="2" :image="image" :en-bref="enBref">
        <v-alert
            type="warning"
            variant="tonal"
            density="compact"
            border="start"
            title="Bitard n’est pas faluchard"
        >
            Les membres de l’ordre du Bitard portent eux aussi une faluche, mais
            ce n’est pas un ordre faluchard : c’est un autre folklore, même s’il y
            a des mélanges et une vraie amitié entre les deux.
        </v-alert>

        <h3>Genèse</h3>
        <p>
            Le dieu des étudiants de Poitiers trouve ses origines dans les temps
            anciens, quand les dieux habitaient l’Olympe. Junon, épouse de
            Jupiter, fauta un jour avec un berger. Le courroux de son mari dut
            influencer le destin : elle enfanta dans la douleur d’un monstre à
            tête de fouine, corps de carpe, plumes de dinde et de paon, pattes de
            lièvre et palmes académiques. Cet être, dieu par sa mère, était le
            vénéré Bitard (L.S.T.).
        </p>
        <p>
            Horrifiée par l’aspect de son divin enfant, Junon le projeta
            par-dessus monts et vallées, et il tomba dans la forêt de Ligugé. Par
            de nombreux miracles, il y fit connaître sa nature divine aux
            habitants, qui lui rendirent un culte et bâtirent un sanctuaire en
            son honneur. Au Ve siècle, saint Martin convertit nombre d’entre eux
            et le sanctuaire devint un couvent ; mais des initiés, refusant les
            idées nouvelles, s’enfuirent dans les bois avec les reliques du
            vénéré Bitard (L.S.T.) et enseignèrent leur religion à leurs enfants.
            C’est ainsi qu’au fil des siècles, leurs mystères furent transmis aux
            dignitaires de l’Ordre.
        </p>
        <p>
            Le culte est toujours célébré par les « escholiers fidèles » lors de
            réunions nocturnes et secrètes, réservées aux dignitaires. Et chaque
            année, vers l’équinoxe de printemps, au cours d’un grand
            rassemblement dans la forêt de Chanteloup, les étudiants, guidés par
            l’Ordre, se livrent à la chasse au Bitard (L.S.T.), avant de ramener
            à travers Poitiers le nouveau Grand Bitardier.
        </p>

        <iframe
            class="folklore-video"
            src="https://www.youtube-nocookie.com/embed/K4mCWBDUC_M"
            title="Vidéo sur l’ordre du Bitard"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>

        <h3>Hiérarchie</h3>
        <p>
            L’Ordre réunit des dignitaires (chevaliers et commandeurs), des
            novices et des chabousses. L’étudiant qui veut devenir bitard se
            présente aux dignitaires : il reçoit un surnom et devient novice.
            S’il montre des aptitudes, il est intronisé chevalier, puis, si ses
            qualités le justifient, commandeur ; le Grand Conseil statue sur
            chaque intronisation. Les chabousses, éléments féminins, côtoient les
            bitards sans espoir de promotion.
        </p>
        <p>
            Tous les membres du Grand Conseil sont choisis parmi les dignitaires :
        </p>
        <dl class="folklore-cadre folklore-list">
            <div v-for="item in grandConseil" :key="item.label">
                <dt>{{ item.label }}</dt>
                <dd>{{ item.text }}</dd>
            </div>
        </dl>

        <h3>Costume</h3>
        <p>
            Les bitards portent tous la faluche, le béret de feutre des
            étudiants de France, dont les insignes et rubans résument la vie de
            son porteur. Ils y ajoutent un chevron et portent une cape, dont les
            couleurs disent, sommairement, le rang de chacun :
        </p>
        <dl class="folklore-cadre folklore-list">
            <div v-for="item in costumes" :key="item.label">
                <dt>{{ item.label }}</dt>
                <dd>{{ item.text }}</dd>
            </div>
        </dl>

        <h3>Coutumes</h3>
        <p>
            Les bitards visitent les lieux poitevins rendus mythiques par
            Rabelais, la Pierre Levée et Passelourdain. Le cusec de vin rouge
            est une institution, et l’hymne au Bitard (L.S.T.) est chanté à
            chaque instant solennel. Chaque bitard a, au sein de l’Ordre, sa
            propre chanson paillarde.
        </p>

        <figure class="folklore-figure">
            <img
                src="/images/folklores/800x600_217321.jpg"
                alt="Bitards en capes colorées et faluches réunis dans un pré autour de la bannière « Vénéré Bitard »"
                width="600"
                height="400"
                loading="lazy"
            />
        </figure>
    </FolkloreFiche>
</template>
