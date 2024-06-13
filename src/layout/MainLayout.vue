<script setup lang="ts">
import AppHeader from "../components/shared/AppHeader.vue";
</script>

<template>
    <AppHeader></AppHeader>
    <v-main>
        <slot></slot>
    </v-main>
</template>
