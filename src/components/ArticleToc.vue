<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps<{
    articles: { id: string; label: string }[];
}>();

const active = ref<string>();
const track = ref<HTMLElement>();
let observer: IntersectionObserver | undefined;

onMounted(() => {
    // Article actif = celui qui occupe le haut de l'écran, sous l'en-tête et le sommaire
    observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) active.value = entry.target.id;
            }
        },
        { rootMargin: "-130px 0px -60% 0px" }
    );

    for (const article of props.articles) {
        const el = document.getElementById(article.id);
        if (el) observer.observe(el);
    }
});

onBeforeUnmount(() => observer?.disconnect());

// Garde la pastille active visible dans la barre (défilement horizontal seulement).
// Instantané : un second défilement animé interromprait celui de la page dans Chrome.
watch(active, (id) => {
    const chip = track.value?.querySelector<HTMLElement>(`[data-toc="${id}"]`);
    if (!track.value || !chip) return;

    track.value.scrollLeft =
        chip.offsetLeft - (track.value.clientWidth - chip.clientWidth) / 2;
});
</script>

<template>
    <nav class="article-toc no-print" aria-label="Sommaire des articles">
        <div ref="track" class="article-toc__track">
            <router-link
                v-for="article in articles"
                :key="article.id"
                :to="{ hash: `#${article.id}` }"
                :data-toc="article.id"
                class="article-toc__item"
                :class="{ 'is-active': active === article.id }"
                :aria-current="active === article.id ? 'location' : undefined"
            >
                {{ article.label }}
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.article-toc {
    position: sticky;
    top: var(--v-layout-top, 64px);
    z-index: 2;
    margin-inline: -8px;
    padding: 8px;
    background: rgb(var(--v-theme-background));
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.article-toc__track {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
}

.article-toc__track::-webkit-scrollbar {
    display: none;
}

.article-toc__item {
    flex: none;
    padding: 4px 12px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 999px;
    color: inherit;
    font-size: 0.8125rem;
    text-decoration: none;
    white-space: nowrap;
    transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease;
}

.article-toc__item:hover {
    background: rgba(var(--v-theme-on-background), 0.06);
}

.article-toc__item.is-active {
    background: rgb(var(--v-theme-on-background));
    border-color: rgb(var(--v-theme-on-background));
    color: rgb(var(--v-theme-background));
}
</style>
