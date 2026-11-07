import { describe, expect, it, vi } from "vitest";
import { flushPromises } from "@vue/test-utils";
import type { Component } from "vue";
import { mountWithRouter } from "./helpers/mountPage";

// Toutes les pages et tous les composants sans props obligatoires doivent s'afficher sans erreur
const modules = import.meta.glob<{ default: Component }>([
    "../src/pages/**/*.vue",
    "../src/components/**/*.vue",
]);

// Testés à part : props obligatoires, carte Leaflet ou mise en page Vuetify
const TESTED_ELSEWHERE = [
    "ArticleToc",
    "FolkloreFiche",
    "QuizCard",
    "QuizHistoryDialog",
    "QuizScoreBar",
    "QuizVisual",
    "TableItemDialog",
    "AperalFilters",
    "AperalMarker",
    "AperalPopupContent",
    "Aperals",
    "AppHeader",
];

const entries = Object.entries(modules)
    .filter(([path]) => !TESTED_ELSEWHERE.some((name) => path.endsWith(`/${name}.vue`)))
    .map(([path, load]) => [path.replace("../src/", ""), load] as const);

describe("rendu des pages et composants", () => {
    it.each(entries)("%s s'affiche", async (_path, load) => {
        Element.prototype.scrollIntoView = vi.fn();
        const { default: component } = await load();
        const { wrapper } = await mountWithRouter(component, { attachTo: document.body });
        expect(wrapper.html()).not.toBe("");

        // Le contenu des panneaux repliés n'est rendu qu'à l'ouverture : on les déplie tous
        for (const title of wrapper.findAll(".v-expansion-panel-title")) {
            await title.trigger("click");
        }
        // Sommaires des pages de folklore : défilement vers la tradition choisie
        for (const chip of wrapper.findAll(".folklore-sommaire .v-chip")) {
            await chip.trigger("click");
        }
        await flushPromises();
        wrapper.unmount();
    });
});
