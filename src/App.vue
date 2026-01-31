<script setup lang="ts">
import { useTheme } from "vuetify";
import { RouterView, useRoute } from "vue-router";
import { computed, onMounted } from "vue";

const theme = useTheme();
const route = useRoute();

onMounted(() => {
    const darkmode = localStorage.getItem("theme");

    if (darkmode == null) {
        localStorage.setItem("theme", "dark");
    }

    theme.change(darkmode ?? "dark");
});

/*
 * Get the route layout
 */
const layout = computed(() => {
    const layout: string = route?.meta?.layout as string;
    if (layout) {
        return `${layout}Layout`;
    }
    return "div";
});
</script>

<template>
    <v-app>
        <v-theme-provider>
            <component :is="layout">
                <RouterView />
            </component>
        </v-theme-provider>
    </v-app>
</template>

<style lang="scss">
.v-main {
    min-height: 90%;
}
</style>
