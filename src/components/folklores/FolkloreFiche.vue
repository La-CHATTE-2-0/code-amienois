<script setup lang="ts">
export interface FolkloreImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    legende?: string;
    // Image sur fond transparent : ni arrondi ni liseré
    detouree?: boolean;
}

withDefaults(
    defineProps<{
        id: string;
        titre: string;
        image: FolkloreImage;
        enBref: { label: string; text: string }[];
        // 2 quand la fiche n'est pas rangée sous un titre de pays
        niveau?: 2 | 3;
    }>(),
    { niveau: 3 },
);
</script>

<template>
    <section :id="id" class="folklore-fiche" :class="{ 'folklore-fiche--principale': niveau === 2 }">
        <component :is="`h${niveau}`" class="folklore-titre">{{ titre }}</component>

        <div class="folklore-intro">
            <figure class="folklore-figure-principale">
                <img
                    class="folklore-image"
                    :class="{ 'folklore-image--detouree': image.detouree }"
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

.folklore-titre {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
}

/* Fiche de premier niveau : un liseré la sépare de la précédente */
.folklore-fiche--principale {
    padding-top: 1rem;
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.folklore-fiche--principale .folklore-titre {
    font-size: 1.5rem;
}

/* Le contenu passé en slot est stylé via :deep (:slotted n'est pas reconnu par Sonar) */
.folklore-fiche > :deep(h3:not(.folklore-titre)) {
    margin-top: 1.5rem;
    font-size: 1.0625rem;
    font-weight: 600;
}

/* Images : même arrondi que les cadres, liseré pour le mode sombre */
.folklore-image,
.folklore-fiche :deep(.folklore-figure img) {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.14);
    outline-offset: -1px;
}

/* Image détourée sur fond transparent : ni arrondi ni liseré */
.folklore-fiche :deep(img.folklore-image--detouree) {
    border-radius: 0;
    outline: none;
}

.folklore-fiche :deep(figcaption) {
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
.folklore-fiche :deep(.folklore-cadre) {
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 12px;
}

.folklore-fiche :deep(.folklore-cadre > * + *) {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.folklore-fiche :deep(.folklore-list > div) {
    padding: 12px 16px;
}

.folklore-fiche :deep(.folklore-list dt) {
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.folklore-fiche :deep(.folklore-list dd) {
    margin: 0;
}

/* Cadres du récit, hors encadré « En bref » */
.folklore-fiche > :deep(.folklore-cadre) {
    margin-top: 1rem;
}

.folklore-fiche > :deep(.folklore-video) {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-top: 1.25rem;
    border: 0;
    border-radius: 12px;
}

/* Récit */
.folklore-fiche > :deep(p) {
    margin-top: 0.75rem;
}

.folklore-fiche > :deep(.folklore-figure) {
    max-width: 480px;
    margin: 1.25rem auto 0;
}

.folklore-fiche > :deep(.v-alert) {
    margin-top: 1rem;
}
</style>
