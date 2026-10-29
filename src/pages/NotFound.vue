<script setup lang="ts">
import pages from "../core/page";
</script>

<template>
    <v-container class="text-center py-16">
        <v-icon icon="mdi-glass-mug-variant-off" size="64" class="mb-4 text-medium-emphasis" />
        <h1 class="text-h5 font-weight-bold mb-2">Page introuvable</h1>
        <p class="text-medium-emphasis mb-6">
            Cette page n'existe pas ou a été déplacée.
        </p>
        <v-btn
            :to="pages.code.url"
            color="primary"
            variant="tonal"
            prepend-icon="mdi-book-outline"
            text="Retour au Code"
        />
    </v-container>
</template>
