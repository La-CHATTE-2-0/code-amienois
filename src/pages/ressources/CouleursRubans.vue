<script setup lang="ts">
type Province = { id: string; name: string; image: string; colors: string };
type City = { name: string; image: string; colors: string; province: string };

// Couleurs écrites telles qu'au code : l'ordre compte (première couleur en haut du ruban)
const provinces: Province[] = [
    { id: "artois", image: "artois", name: "Artois", colors: "Bleu roi et or" },
    { id: "champagne", image: "champagne", name: "Champagne", colors: "Bleu et blanc" },
    { id: "flandres", image: "flandres", name: "Flandres", colors: "Or et noir" },
    { id: "iledefrance", image: "ile de france", name: "Île-de-France", colors: "Bleu roi et or" },
    { id: "normandie", image: "normandie", name: "Normandie", colors: "Rouge et or" },
    { id: "picardie", image: "picardie", name: "Picardie", colors: "Bleu et blanc" },
];

const cities: City[] = [
    { name: "Abbeville", image: "abbeville", colors: "Bleu roi et rouge", province: "picardie" },
    { name: "Amiens", image: "amiens", colors: "Rouge et bleu roi", province: "picardie" },
    { name: "Arras", image: "arras", colors: "Rouge et or", province: "artois" },
    { name: "Beauvais", image: "beauvais", colors: "Rouge et blanc", province: "picardie" },
    { name: "Compiègne", image: "compiègne", colors: "Bleu roi et or", province: "picardie" },
    { name: "Creil", image: "creil", colors: "Bleu roi et or", province: "picardie" },
    { name: "Doullens", image: "doullens", colors: "Bleu roi et or", province: "picardie" },
    { name: "Hirson", image: "hirson", colors: "Bleu et blanc", province: "picardie" },
    { name: "Laon", image: "laon", colors: "Bleu et blanc", province: "picardie" },
    { name: "Lille", image: "lille", colors: "Rouge et blanc", province: "flandres" },
    { name: "Noyon", image: "noyon", colors: "Rouge et blanc", province: "picardie" },
    { name: "Paris", image: "paris", colors: "Bleu roi et rouge", province: "iledefrance" },
    { name: "Reims", image: "reims", colors: "Bleu roi et blanc", province: "champagne" },
    { name: "Rouen", image: "rouen", colors: "Bleu roi et rouge", province: "normandie" },
    { name: "Saint-Quentin", image: "saint-quentin", colors: "Blanc et bleu", province: "picardie" },
    { name: "Senlis", image: "senlis", colors: "Rouge et or", province: "picardie" },
    { name: "Soissons", image: "soissons", colors: "Bleu et blanc", province: "picardie" },
    { name: "Valenciennes", image: "valenciennes", colors: "Rouge et or", province: "flandres" },
];

// Villes regroupées par province, la Picardie en premier
const cityGroups = [...provinces]
    .sort((a, b) => Number(b.id === "picardie") - Number(a.id === "picardie"))
    .map((province) => ({
        province,
        cities: cities.filter((city) => city.province === province.id),
    }))
    .filter((group) => group.cities.length);

// Teintes des échantillons (mêmes valeurs que les circulaires quand elles existent)
const swatchColors: Record<string, string> = {
    "bleu roi": "#0914BC",
    bleu: "#155CC8",
    rouge: "#BC1212",
    blanc: "#FFFFFF",
    or: "#C9A227",
    noir: "#000000",
};

function swatch(colors: string) {
    return colors
        .toLowerCase()
        .split(" et ")
        .map((name) => swatchColors[name.trim()] ?? "transparent");
}

const ecusson = (image: string) => `/images/ecussons/${image}.png`;
</script>

<template>
    <v-container>
        <article data-fal-article>
            <section class="city-hero">
                <img
                    class="city-hero__blason"
                    src="/images/ecussons/blason-amiens.png"
                    alt="Blason d'Amiens"
                />
                <div class="city-hero__copy">
                    <p class="city-hero__eyebrow">Ville d'Amiens</p>
                    <h2>Rouge et bleu roi</h2>
                    <p class="city-hero__quote">
                        « De gueules au lierre d'argent ; au chef d'azur semé de
                        fleurs de lis d'or (au chef de France ancien). »
                    </p>
                    <div class="ruban ruban--large" aria-hidden="true">
                        <span
                            v-for="(color, i) in swatch('Rouge et bleu roi')"
                            :key="i"
                            :style="{ backgroundColor: color }"
                        />
                    </div>
                </div>
            </section>

            <h2 class="mt-6 mb-2">Les villes proches</h2>
            <v-table class="table align-middle couleurs-table">
                <caption class="d-sr-only">
                    Couleurs des villes, regroupées par province
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Blason</th>
                        <th scope="col">Ville</th>
                        <th scope="col">Couleurs</th>
                    </tr>
                </thead>
                <tbody v-for="group in cityGroups" :key="group.province.id">
                    <tr>
                        <td colspan="3">
                            <h3>
                                <a :href="`#${group.province.id}`" class="couleurs-table__province">
                                    {{ group.province.name }}
                                </a>
                            </h3>
                        </td>
                    </tr>
                    <tr v-for="city in group.cities" :key="city.name">
                        <td data-fal-insigne>
                            <img
                                :alt="city.name"
                                loading="lazy"
                                height="50"
                                width="75"
                                :src="ecusson(city.image)"
                            />
                        </td>
                        <td>{{ city.name }}</td>
                        <td>
                            <div class="couleurs-table__couleurs">
                                <div class="ruban" aria-hidden="true">
                                    <span
                                        v-for="(color, i) in swatch(city.colors)"
                                        :key="i"
                                        :style="{ backgroundColor: color }"
                                    />
                                </div>
                                {{ city.colors }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </v-table>

            <h2 class="mt-6 mb-2">Les provinces</h2>
            <v-table class="table align-middle couleurs-table">
                <caption class="d-sr-only">
                    Couleurs des provinces
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Blason</th>
                        <th scope="col">Province</th>
                        <th scope="col">Couleurs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="province in provinces" :id="province.id" :key="province.id">
                        <td data-fal-insigne>
                            <img
                                :alt="province.name"
                                loading="lazy"
                                height="50"
                                width="75"
                                :src="ecusson(province.image)"
                            />
                        </td>
                        <td>{{ province.name }}</td>
                        <td>
                            <div class="couleurs-table__couleurs">
                                <div class="ruban" aria-hidden="true">
                                    <span
                                        v-for="(color, i) in swatch(province.colors)"
                                        :key="i"
                                        :style="{ backgroundColor: color }"
                                    />
                                </div>
                                {{ province.colors }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </v-table>

            <v-alert
                class="mt-6"
                icon="mdi-information-outline"
                variant="tonal"
                density="compact"
            >
                Si ta ville n'apparaît pas dans cette liste et/ou que tu as un
                doute, tu peux te rapprocher de tes croix pour avoir
                confirmation des couleurs ou regarder sur
                <a href="https://faluche.app/couture/heraldique-blasonnement">
                    cette liste faite par faluche.app
                </a>.
            </v-alert>
        </article>
    </v-container>
</template>

<style scoped>
.city-hero {
    display: grid;
    grid-template-columns: minmax(120px, 220px) 1fr;
    align-items: center;
    gap: clamp(22px, 5vw, 56px);
    padding: clamp(22px, 4vw, 38px);
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 20px;
    background:
        radial-gradient(circle at 100% 20%, rgba(21, 76, 255, 0.12), transparent 42%),
        rgb(var(--v-theme-surface));
}

.city-hero__eyebrow {
    color: rgb(var(--v-theme-primary));
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

.city-hero__copy h2 {
    margin: 2px 0 10px;
    font-size: clamp(1.65rem, 3vw, 2.5rem);
}

.city-hero__blason {
    display: block;
    width: 100%;
    max-width: 220px;
    height: auto;
    margin: auto;
}

.city-hero__quote {
    max-width: 620px;
    margin-bottom: 16px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.05rem;
    font-style: italic;
    line-height: 1.55;
}

/* Échantillon de ruban bicolore, texture velours par-dessus les couleurs */
.ruban {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: none;
    width: 56px;
    height: 28px;
    overflow: hidden;
    border-radius: 6px;
    outline: 1px solid rgba(var(--v-theme-on-surface), 0.14);
    outline-offset: -1px;
}

.ruban span {
    flex: 1;
}

.ruban::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url(/images/circu/velours.webp) center / cover;
}

.ruban--large {
    width: 120px;
    height: 40px;
    border-radius: 8px;
}

.couleurs-table__couleurs {
    display: flex;
    align-items: center;
    gap: 12px;
    /* Écart entre l'échantillon et les bords de la case */
    padding-block: 8px;
    padding-inline-start: 4px;
}

.couleurs-table__province {
    color: inherit;
    text-decoration: none;
}

.couleurs-table__province:hover {
    text-decoration: underline;
}

/* Province ciblée depuis un lien : décalée sous l'en-tête et brièvement surlignée */
.couleurs-table tr[id] {
    scroll-margin-top: 80px;
}

.couleurs-table tr:target > td {
    animation: province-highlight 1.6s ease-out;
}

@keyframes province-highlight {
    from {
        background: rgba(var(--v-theme-primary), 0.18);
    }
}

@media (max-width: 600px) {
    .city-hero {
        grid-template-columns: 90px 1fr;
        gap: 14px;
        padding: 18px 14px;
        border-radius: 18px;
    }

    .city-hero__quote {
        font-size: 0.92rem;
    }

    .couleurs-table__couleurs {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
}
</style>
