<script setup lang="ts">
import AppHeader from "../components/shared/AppHeader.vue";
import { version } from "../version";

const footerLinks = [
    {
        title: "Code source",
        icon: "mdi-github",
        href: "https://github.com/La-CHATTE-2-0/code-amienois",
    },
    {
        title: "La CHATTE 2.0",
        icon: "mdi-cat",
        href: "https://linktr.ee/lachatte2.0",
    },
    {
        title: "Bréviaire Youtube",
        icon: "mdi-music-clef-treble",
        href: "https://www.youtube.com/@nouveaubreviaireamienois111",
    },
];

function skipToContent() {
    document.getElementById("contenu")?.focus();
}
</script>

<template>
    <!-- Lien d'évitement : visible seulement au clavier -->
    <a href="#contenu" class="skip-link" @click.prevent="skipToContent">
        Aller au contenu
    </a>
    <AppHeader />
    <v-main id="contenu" class="main-content" tabindex="-1">
        <slot></slot>
    </v-main>
    <v-footer class="app-footer no-print">
        <nav class="app-footer__links" aria-label="Liens externes">
            <v-btn
                v-for="link in footerLinks"
                :key="link.href"
                :href="link.href"
                :prepend-icon="link.icon"
                target="_blank"
                rel="noopener"
                variant="text"
                size="small"
            >
                {{ link.title }}
            </v-btn>
        </nav>
        <span class="app-footer__version">{{ version }}</span>
    </v-footer>
</template>

<style scoped>
.app-footer {
    flex-direction: column;
    gap: 4px;
    padding-block: 16px;
}

.app-footer__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
}

.app-footer__links .v-btn {
    text-transform: none;
    letter-spacing: normal;
}

.app-footer__version {
    font-size: 0.75rem;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.skip-link {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 2000;
    padding: 8px 16px;
    border-radius: 8px;
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-on-surface));
    transform: translateY(-200%);
}

.skip-link:focus {
    transform: none;
}

.main-content:focus {
    outline: none;
}
</style>
