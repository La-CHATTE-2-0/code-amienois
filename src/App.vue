<script setup lang="ts">
import { onMounted } from "vue";
import { useTheme } from "vuetify";
import pages from "./core/page";

const theme = useTheme();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const page = computed(() =>
    Object.values(pages).find((entry) => entry.url === route.path),
);

useHead(() => {
    const title = page.value?.name ?? "Code Amiénois";
    const description = page.value?.description ?? "Code de la Faluche Amiénoise";
    const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, "");
    const url = siteUrl ? `${siteUrl}${route.path}` : undefined;
    const image = siteUrl ? `${siteUrl}/images/cropped-montpellier-etudiant-medecine-faluche-6-790x400.jpg` : undefined;

    return {
        title,
        meta: [
            { name: "description", content: description },
            { property: "og:type", content: "website" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            ...(url ? [{ property: "og:url", content: url }] : []),
            ...(image ? [{ property: "og:image", content: image }] : []),
            ...(image ? [{ property: "og:image:alt", content: "Code Amiénois" }] : []),
            { name: "twitter:card", content: "summary_large_image" },
            ...(image ? [{ name: "twitter:image", content: image }] : []),
        ],
    };
});

onMounted(() => {
    const savedTheme = localStorage.getItem("theme") ?? "dark";
    localStorage.setItem("theme", savedTheme);
    theme.change(savedTheme);
});
</script>

<template>
    <v-app>
        <v-theme-provider>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </v-theme-provider>
    </v-app>
</template>

<style lang="scss">
.v-main {
    min-height: 90%;
}
</style>
