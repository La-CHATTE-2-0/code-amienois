<script setup lang="ts">
const depot = "https://github.com/La-CHATTE-2-0/code-amienois";

const stockageLocal = [
    { label: "Thème", text: "clair, sombre ou automatique" },
    { label: "Checklist Congrès", text: "les éléments cochés" },
    { label: "Révisions", text: "le nombre de questions choisi, les meilleurs scores et l’historique des parties" },
];
</script>

<template>
    <v-container>
        <article data-fal-article class="mentions">
            <p>
                Mentions prévues par l’article 6 de la loi n° 2004-575 du 21 juin
                2004 pour la confiance dans l’économie numérique (LCEN), et
                informations sur les données personnelles au titre du Règlement
                général sur la protection des données (RGPD).
            </p>

            <h2 class="mt-8">Éditeur</h2>
            <p>
                Le site <strong>code-amienois.app</strong> est un projet
                personnel et non commercial, édité par Alan LECART, également
                directeur de la publication, pour La CHATTE 2.0.
            </p>
            <p>
                Contact : par une
                <a :href="`${depot}/issues`" target="_blank" rel="noopener">issue sur le dépôt GitHub du projet</a>.
            </p>

            <h2 class="mt-8">Hébergement</h2>
            <address class="mentions-cadre">
                Microsoft Ireland Operations Limited (Azure Static Web Apps)<br />
                One Microsoft Place, South County Business Park<br />
                Leopardstown, Dublin 18, D18 P521, Irlande<br />
                Téléphone : +353 1 706 3117
            </address>

            <h2 class="mt-8">Données personnelles</h2>
            <p>
                Le site ne demande ni compte, ni adresse e-mail, ni formulaire :
                aucune donnée vous concernant n’est collectée par l’éditeur.
            </p>

            <h3 class="mt-6">Ce qui reste sur votre appareil</h3>
            <p>
                Pour retenir vos préférences, le site enregistre quelques
                informations dans le stockage local de votre navigateur. Elles ne
                quittent jamais votre appareil et ne sont pas transmises à
                l’éditeur :
            </p>
            <ul class="mentions-cadre">
                <li v-for="item in stockageLocal" :key="item.label">
                    <strong>{{ item.label }}</strong> : {{ item.text }}
                </li>
            </ul>
            <p>
                Vous pouvez les effacer à tout moment en supprimant les données
                du site dans les réglages de votre navigateur.
            </p>

            <h3 class="mt-6">Mesure d’audience</h3>
            <p>
                Le site utilise Google Analytics (Google Ireland Limited, Gordon
                House, Barrow Street, Dublin 4, Irlande) pour compter les visites
                et les pages consultées. Ce service dépose des cookies et reçoit
                des données techniques de navigation (adresse IP, type
                d’appareil et de navigateur, pages vues). Ces données peuvent
                être transférées aux États-Unis, dans le cadre du Data Privacy
                Framework UE–États-Unis. Les cookies sont conservés au plus 13
                mois.
            </p>

            <h3 class="mt-6">Carte des apérals</h3>
            <p>
                Le fond de carte est chargé depuis les serveurs d’OpenStreetMap
                (OpenStreetMap Foundation, Royaume-Uni), qui reçoivent votre
                adresse IP pour afficher les tuiles, uniquement lorsque vous
                ouvrez la page Apérals de France.
            </p>

            <h3 class="mt-6">Vidéo intégrée</h3>
            <p>
                La page Folklores Français intègre une vidéo YouTube en mode
                « confidentialité renforcée » (youtube-nocookie.com) : YouTube
                reçoit votre adresse IP à l’affichage de la page, et ne dépose de
                cookies que si vous lancez la lecture.
            </p>

            <h3 class="mt-6">Vos droits</h3>
            <p>
                Vous disposez d’un droit d’accès, de rectification, d’effacement
                et d’opposition sur les données vous concernant. Pour l’exercer,
                contactez l’éditeur par le dépôt GitHub. Vous pouvez aussi
                adresser une réclamation à la
                <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener">CNIL</a>.
            </p>

            <h2 class="mt-8">Propriété intellectuelle</h2>
            <p>
                Le code source du site est publié sous
                <a :href="`${depot}/blob/main/LICENSE`" target="_blank" rel="noopener">licence GPL-3.0</a>.
                Les images et textes tiers restent la propriété de leurs auteurs,
                cités dans le fichier
                <a :href="`${depot}/blob/main/CREDITS.md`" target="_blank" rel="noopener">CREDITS.md</a>.
                Pour signaler un contenu ou demander son retrait, ouvrez une
                issue sur le dépôt.
            </p>
        </article>
    </v-container>
</template>

<style scoped>
.mentions {
    max-width: 72ch;
}

.mentions-cadre {
    margin-block: 12px;
    padding: 12px 16px;
    border-left: 3px solid rgba(var(--v-theme-on-background), 0.24);
    font-style: normal;
}

ul.mentions-cadre {
    padding-left: 32px;
}
</style>
