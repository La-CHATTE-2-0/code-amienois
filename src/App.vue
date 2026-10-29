<script setup lang="ts">
import { useTheme } from "vuetify";
import { RouterView, useRoute } from "vue-router";
import { computed, onMounted, watchEffect } from "vue";

const theme = useTheme();
const route = useRoute();

// Barres de défilement et contrôles natifs alignés sur le thème courant
watchEffect(() => {
    document.documentElement.style.colorScheme = theme.global.current.value.dark
        ? "dark"
        : "light";
});

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
                <RouterView v-slot="{ Component }">
                    <Transition name="page" mode="out-in" appear>
                        <component :is="Component" />
                    </Transition>
                </RouterView>
            </component>
        </v-theme-provider>
    </v-app>
</template>

<style lang="scss">
.v-main {
    min-height: 90%;
}
</style>
