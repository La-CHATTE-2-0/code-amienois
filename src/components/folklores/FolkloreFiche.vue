<script setup lang="ts">
export interface FolkloreImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    legende?: string;
}

defineProps<{
    id: string;
    titre: string;
    image: FolkloreImage;
    enBref: { label: string; text: string }[];
}>();
</script>

<template>
    <section :id="id" class="folklore-fiche">
        <h3>{{ titre }}</h3>

        <div class="folklore-intro">
            <figure class="folklore-figure-principale">
                <img
                    class="folklore-image"
                    :src="image.src"
                    :alt="image.alt"
                    :width="image.width"
                    :height="image.height"
                    loading="lazy"
                />
                <figcaption v-if="image.legende">{{ image.legende }}</figcaption>
            </figure>

            <dl class="folklore-cadre folklore-list">
                <div v-for="item in enBref" :key="item.label">
                    <dt>{{ item.label }}</dt>
                    <dd>{{ item.text }}</dd>
                </div>
            </dl>
        </div>

        <slot></slot>
    </section>
</template>

<style scoped>
/* Laisse la place à la barre d'en-tête quand on arrive par une ancre */
.folklore-fiche {
    scroll-margin-top: 80px;
}

.folklore-fiche + .folklore-fiche {
    margin-top: 2.5rem;
}

h3 {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
}

/* Images : même arrondi que les cadres, liseré pour le mode sombre */
.folklore-image,
:slotted(.folklore-figure) img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.14);
    outline-offset: -1px;
}

figcaption,
:slotted(.folklore-figure) figcaption {
    margin-top: 6px;
    font-size: 0.8125rem;
    font-style: italic;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

/* Photo au-dessus de l'encadré sur mobile, à côté à partir de md */
.folklore-intro {
    display: grid;
    gap: 16px;
}

.folklore-figure-principale {
    margin: 0;
}

@media (min-width: 960px) {
    .folklore-intro {
        grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
        align-items: start;
    }
}

/* Même cadre que l'encadré « En bref » de Gambrinus */
.folklore-cadre,
:slotted(.folklore-cadre) {
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.folklore-cadre > * + *,
:slotted(.folklore-cadre) > * + * {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.folklore-list > div {
    padding: 12px 16px;
}

.folklore-list dt {
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.folklore-list dd {
    margin: 0;
}

/* Récit */
:slotted(p) {
    margin-top: 0.75rem;
}

:slotted(.folklore-figure) {
    max-width: 480px;
    margin: 1.25rem auto 0;
}

:slotted(.v-alert) {
    margin-top: 1rem;
}
</style>
