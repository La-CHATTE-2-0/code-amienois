<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import pages from "../../core/page";

// Sur grand écran, le menu reste ouvert à côté du contenu
const { lgAndUp } = useDisplay();
const drawerState = ref(lgAndUp.value);
watch(lgAndUp, (large) => (drawerState.value = large));

const route = useRoute();
const isHome = computed(() => route.path === pages.code.url);

// Entrées du menu : une page interne ou un lien externe ouvert dans un nouvel onglet
type Page = (typeof pages)[keyof typeof pages];
const pageItem = (prependIcon: string, page: Page) => ({ prependIcon, title: page.name, value: page.url, to: page.url });
const linkItem = (prependIcon: string, title: string, href: string) => ({ prependIcon, title, href, target: "_blank" });

const mainItems = [
    pageItem("mdi-book-outline", pages.code),
    pageItem("mdi-book-alert-outline", pages.recap_spe),
    pageItem("mdi-head-question-outline", pages.revisions),
];

const sections = [
    {
        title: "Annexes",
        items: [
            pageItem("mdi-chess-pawn", pages.monome),
            { ...linkItem("mdi-book-open-page-variant-outline", pages.rabelais.name, /*pages.rabelais.url*/ "https://ordrerabelaisien.be/rabelais"), value: pages.rabelais.url },
            pageItem("mdi-glass-wine", pages.bacchus),
            pageItem("mdi-glass-mug", pages.gambrinus),
        ],
    },
    {
        title: "Ressources",
        items: [
            pageItem("mdi-account-group", pages.notes_aux_pm),
            pageItem("mdi-ribbon", pages.couleurs_rubans),
            linkItem("mdi-music-clef-treble", "Bréviaire Youtube", "https://www.youtube.com/@nouveaubreviaireamienois111"),
            pageItem("mdi-scissors-cutting", pages.guide_couture),
            linkItem("mdi-link-variant", "Guide sécu'", "https://docs.google.com/document/d/1Lc3zIimxY69m4PNlj290KviCkRV2fqpdqFIUsNVNC94/"),
            pageItem("mdi-format-list-bulleted", pages.checklist),
        ],
    },
    {
        title: "Vie étudiante",
        items: [
            pageItem("mdi-lifebuoy", pages.homme_bouee),
            linkItem("mdi-cat", "La CHATTE 2.0", "https://linktr.ee/lachatte2.0"),
            pageItem("mdi-eiffel-tower", pages.folklore_francais),
            pageItem("mdi-earth", pages.folklore_etranger),
            pageItem("mdi-map", pages.aperals),
        ],
    },
];

const theme = useTheme();

// "system" suit le réglage clair/sombre de l'appareil (géré par Vuetify)
const themeModes = [
    { value: "system", label: "Auto", icon: "mdi-theme-light-dark" },
    { value: "light", label: "Clair", icon: "mdi-white-balance-sunny" },
    { value: "dark", label: "Sombre", icon: "mdi-weather-night" },
];
const themeMode = ref(localStorage.getItem("theme") ?? "system");

watch(themeMode, (mode) => {
    localStorage.setItem("theme", mode);
    theme.change(mode);
});
</script>

<template>
    <v-app-bar
        class="app-header"
        :elevation="2"
        color="header"
        image="/images/cropped-montpellier-etudiant-medecine-faluche-6-790x400.jpg"
    >
        <template v-slot:prepend>
            <v-app-bar-nav-icon
                :aria-label="drawerState ? 'Fermer le menu' : 'Ouvrir le menu'"
                :aria-expanded="drawerState"
                @click.stop="drawerState = !drawerState"
            ></v-app-bar-nav-icon>
        </template>

        <template v-slot:image>
            <v-img
                alt=""
                gradient="to top right, rgba(0,0,0,.75), rgba(0,0,0,.45)"
            ></v-img>
        </template>

        <!-- Titre principal de chaque page (seul h1) -->
        <v-app-bar-title tag="h1" class="app-header__title" v-motion :initial="{ opacity: 0, x: -16 }" :enter="{ opacity: 1, x: 0, transition: { duration: 450 } }">
            <!-- Sur mobile, seul le nom de la page courante est affiché -->
            <router-link
                :to="pages.code.url"
                class="app-header__brand"
                :class="{ 'd-none d-sm-inline': !isHome }"
            >
                Code Amiénois
            </router-link>
            <template v-if="!isHome">
                <span class="app-header__separator d-none d-sm-inline" aria-hidden="true">/</span>
                <span class="app-header__page">{{ route.name }}</span>
            </template>
        </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawerState"
        :temporary="!lgAndUp"
        class="app-drawer"
    >
        <v-list density="compact" nav>
            <v-list-item v-for="item in mainItems" :key="item.title" v-bind="item"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list v-for="section in sections" :key="section.title">
            <v-list-subheader>{{ section.title }}</v-list-subheader>
            <v-list-item v-for="item in section.items" :key="item.title" v-bind="item"></v-list-item>
        </v-list>

        <template v-slot:append>
            <v-divider></v-divider>
            <div class="app-drawer__theme">
                <span id="theme-label" class="text-caption text-medium-emphasis">Thème</span>
                <v-btn-toggle
                    v-model="themeMode"
                    role="radiogroup"
                    aria-labelledby="theme-label"
                    mandatory
                    divided
                    density="compact"
                    variant="outlined"
                    class="app-drawer__theme-toggle"
                >
                    <v-btn
                        v-for="mode in themeModes"
                        :key="mode.value"
                        :value="mode.value"
                        :prepend-icon="mode.icon"
                        role="radio"
                        :aria-checked="themeMode === mode.value"
                        size="small"
                    >
                        {{ mode.label }}
                    </v-btn>
                </v-btn-toggle>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<style scoped>
.app-header__brand {
    color: inherit;
    text-decoration: none;
}

.app-header__separator {
    margin: 0 8px;
    opacity: 0.5;
}

.app-header__page {
    font-weight: 600;
}

/* Le h1 garde l'apparence du titre de barre d'application */
.app-header__title {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: inherit;
}

.app-drawer__theme {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px 16px;
}

.app-drawer__theme-toggle {
    width: 100%;
}

.app-drawer__theme-toggle .v-btn {
    flex: 1 1 0;
    padding-inline: 4px;
    text-transform: none;
    letter-spacing: normal;
}

@media (min-width: 600px) {
    .app-header__page {
        font-weight: 400;
        opacity: 0.85;
    }
}
</style>
