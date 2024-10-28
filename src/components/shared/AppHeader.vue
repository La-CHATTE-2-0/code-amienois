<script setup lang="ts">
import { useTheme } from "vuetify";
import { ref } from "vue";
import pages from "../../core/page";

const drawerState = ref(false);

const theme = useTheme();

function toggleTheme() {
    const newTheme = theme.global.current.value.dark ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    theme.global.name.value = newTheme;
}
</script>

<template>
    <v-app-bar
        :elevation="2"
        color="teal-darken-4"
        prominent
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
                gradient="to top right, rgba(0,0,0,.9), rgba(0,0,0,.7)"
            ></v-img>
        </template>

        <v-app-bar-title>Code Amiénois</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawerState" temporary>
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
            <v-list-item
                prepend-icon="mdi-account-group"
                :title="pages.notes_aux_pm.name"
                :value="pages.notes_aux_pm.url"
                :to="pages.notes_aux_pm.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-music-clef-treble"
                href="https://www.youtube.com/@nouveaubreviaireamienois111"
                title="Bréviaire Youtube"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-link-variant"
                href="https://docs.google.com/document/d/1Lc3zIimxY69m4PNlj290KviCkRV2fqpdqFIUsNVNC94/"
                title="Guide sécu'"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-format-list-bulleted"
                :title="pages.checklist.name"
                :value="pages.checklist.url"
                :to="pages.checklist.url"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-ribbon"
                :title="pages.couleurs_rubans.name"
                :value="pages.couleurs_rubans.url"
                :to="pages.couleurs_rubans.url"
            ></v-list-item>
        </v-list>
        <v-list>
            <v-list-subheader>Vie étudiante</v-list-subheader>
            <v-list-item
                prepend-icon="mdi-cat"
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
                href="https://docs.google.com/spreadsheets/d/11oPpJuXnl4LMNv5XBbDwdE47q_IjiV-bt9nMuB9aYaI/edit?usp=drivesdk"
                title="Annuaire des apérals"
            ></v-list-item>
        </v-list>

        <template v-slot:append>
            <v-divider></v-divider>
            <v-switch
                v-on:click="toggleTheme"
                class="ml-4"
                color="primary"
                label="Mode Sombre"
                inset
                :model-value="theme.global.current.value.dark"
            ></v-switch>
        </template>
    </v-navigation-drawer>
</template>
