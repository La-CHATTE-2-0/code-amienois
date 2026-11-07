import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { flushPromises } from "@vue/test-utils";
import ArticleToc from "../../src/components/ArticleToc.vue";
import { mountWithRouter } from "../helpers/mountPage";

const articles = [
    { id: "art-1", label: "Article 1" },
    { id: "art-2", label: "Article 2" },
    { id: "art-3", label: "Article 3" },
];

// Doublure d'IntersectionObserver : le test déclenche lui-même le rappel
let notify: () => void = () => {};
const observe = vi.fn();
const disconnect = vi.fn();

class FakeObserver {
    constructor(callback: () => void) {
        notify = callback;
    }
    observe = observe;
    disconnect = disconnect;
}

// Position verticale de chaque article dans la fenêtre
function place(tops: Record<string, number>) {
    for (const [id, top] of Object.entries(tops)) {
        const el = document.getElementById(id)!;
        el.getBoundingClientRect = () => ({ top }) as DOMRect;
    }
}

describe("ArticleToc", () => {
    beforeEach(() => {
        vi.stubGlobal("IntersectionObserver", FakeObserver);
        // Seuls les deux premiers articles sont présents dans la page
        document.body.innerHTML = '<div id="art-1"></div><div id="art-2"></div>';
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        document.body.innerHTML = "";
    });

    it("liste les articles et observe ceux présents", async () => {
        const { wrapper } = await mountWithRouter(ArticleToc, {
            props: { articles },
            attachTo: document.body,
        });
        expect(wrapper.findAll(".article-toc__item").map((a) => a.text())).toEqual([
            "Article 1",
            "Article 2",
            "Article 3",
        ]);
        expect(observe).toHaveBeenCalledTimes(2);
        wrapper.unmount();
        expect(disconnect).toHaveBeenCalled();
    });

    it("met en avant le dernier article passé sous l'en-tête", async () => {
        const { wrapper } = await mountWithRouter(ArticleToc, {
            props: { articles },
            attachTo: document.body,
        });

        place({ "art-1": 500, "art-2": 900 });
        notify();
        await flushPromises();
        // Aucun article n'a encore défilé : le premier reste actif
        expect(wrapper.get(".is-active").text()).toBe("Article 1");

        place({ "art-1": -400, "art-2": 100 });
        notify();
        await flushPromises();
        expect(wrapper.get(".is-active").text()).toBe("Article 2");
        expect(wrapper.get(".is-active").attributes("aria-current")).toBe("location");
        wrapper.unmount();
    });

    it("ne fait rien sans article", async () => {
        const { wrapper } = await mountWithRouter(ArticleToc, {
            props: { articles: [] },
            attachTo: document.body,
        });
        notify();
        await flushPromises();
        expect(wrapper.find(".is-active").exists()).toBe(false);
        wrapper.unmount();
    });
});
