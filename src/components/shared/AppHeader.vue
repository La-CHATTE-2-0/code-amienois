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
                @click.stop="drawerState = !drawerState"
            ></v-app-bar-nav-icon>
        </template>

        <template v-slot:image>
            <v-img
                alt=""
                gradient="to top right, rgba(0,0,0,.75), rgba(0,0,0,.45)"
            ></v-img>
        </template>

        <v-app-bar-title v-motion :initial="{ opacity: 0, x: -16 }" :enter="{ opacity: 1, x: 0, transition: { duration: 450 } }">
            <!-- Sur mobile, seul le nom de la page courante est affiché -->
            <router-link
                :to="pages.code.url"
                class="app-header__brand"
                :class="{ 'd-none d-sm-inline': !isHome }"
            >
                Code Amiénois
            </router-link>
            <template v-if="!isHome">
                <span class="app-header__separator d-none d-sm-inline">/</span>
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
            <v-list-item
                prepend-icon="mdi-book-outline"
                :title="pages.code.name"
                :value="pages.code.url"
                :to="pages.code.url"
            ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-subheader>Annexes</v-list-subheader>
            <v-list-item
                prepend-icon="mdi-book-alert-outline"
                :title="pages.recap_spe.name"
                :value="pages.recap_spe.url"
                :to="pages.recap_spe.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-chess-pawn"
                :title="pages.monome.name"
                :value="pages.monome.url"
                :to="pages.monome.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-book-open-page-variant-outline"
                :title="pages.rabelais.name"
                :value="pages.rabelais.url"
                target="_blank"
                :href="/*pages.rabelais.url*/ 'https://ordrerabelaisien.be/rabelais'"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-glass-wine"
                :title="pages.bacchus.name"
                :value="pages.bacchus.url"
                :to="pages.bacchus.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-glass-mug"
                :title="pages.gambrinus.name"
                :value="pages.gambrinus.url"
                :to="pages.gambrinus.url"
            ></v-list-item>
        </v-list>
        <v-list>
            <v-list-subheader>Ressources</v-list-subheader>
            <!-- <v-list-item
                prepend-icon="mdi-currency-eur"
                :title="pages.achats.name"
                :value="pages.achats.url"
                :to="pages.achats.url"
            ></v-list-item> -->
            <v-list-item
                prepend-icon="mdi-account-group"
                :title="pages.notes_aux_pm.name"
                :value="pages.notes_aux_pm.url"
                :to="pages.notes_aux_pm.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-ribbon"
                :title="pages.couleurs_rubans.name"
                :value="pages.couleurs_rubans.url"
                :to="pages.couleurs_rubans.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-music-clef-treble"
                target="_blank"
                href="https://www.youtube.com/@nouveaubreviaireamienois111"
                title="Bréviaire Youtube"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-scissors-cutting"
                :title="pages.guide_couture.name"
                :value="pages.guide_couture.url"
                :to="pages.guide_couture.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-link-variant"
                target="_blank"
                href="https://docs.google.com/document/d/1Lc3zIimxY69m4PNlj290KviCkRV2fqpdqFIUsNVNC94/"
                title="Guide sécu'"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-format-list-bulleted"
                :title="pages.checklist.name"
                :value="pages.checklist.url"
                :to="pages.checklist.url"
            ></v-list-item>
        </v-list>
        <v-list>
            <v-list-subheader>Vie étudiante</v-list-subheader>
            <v-list-item
                prepend-icon="mdi-lifebuoy"
                :title="pages.homme_bouee.name"
                :value="pages.homme_bouee.url"
                :to="pages.homme_bouee.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-cat"
                target="_blank"
                href="https://linktr.ee/lachatte2.0"
                title="La CHATTE 2.0"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-eiffel-tower"
                :title="pages.folklore_francais.name"
                :value="pages.folklore_francais.url"
                :to="pages.folklore_francais.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-earth"
                :title="pages.folklore_etranger.name"
                :value="pages.folklore_etranger.url"
                :to="pages.folklore_etranger.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-map"
                :title="pages.aperals.name"
                :value="pages.aperals.url"
                :to="pages.aperals.url"
            ></v-list-item>
        </v-list>

        <template v-slot:append>
            <v-divider></v-divider>
            <div class="app-drawer__theme">
                <span class="text-caption text-medium-emphasis">Thème</span>
                <v-btn-toggle
                    v-model="themeMode"
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
