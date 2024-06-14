<script setup lang="ts">
import AppHeader from "../components/shared/AppHeader.vue";
</script>

<template>
    <AppHeader></AppHeader>
    <v-main style="max-width: 900px; margin: auto">
        <slot></slot>
    </v-main>
</template>

<style scoped></style>
