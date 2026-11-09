import { afterEach, describe, expect, it, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";
import {
    chargerImagesDifferees,
    installerImagesImpression,
} from "../../src/core/imagesImpression";

function imagesDifferees(): HTMLImageElement[] {
    document.body.innerHTML = `
        <img loading="lazy" src="/a.png" alt="" />
        <img loading="lazy" src="/b.png" alt="" />
        <img src="/c.png" alt="" />`;
    return [...document.querySelectorAll("img")];
}

describe("imagesImpression", () => {
    afterEach(() => {
        document.body.innerHTML = "";
        vi.useRealTimers();
    });

    it("passe les images différées en chargement normal", () => {
        const images = imagesDifferees();
        chargerImagesDifferees();
        expect(images.map((img) => img.loading)).toEqual(["eager", "eager", "auto"]);
    });

    it("charge les images juste avant l'impression", () => {
        const router = createRouter({ history: createMemoryHistory(), routes: [] });
        installerImagesImpression(router);
        const images = imagesDifferees();

        window.dispatchEvent(new Event("beforeprint"));

        expect(images[0].loading).toBe("eager");
    });

    it("charge les images après chaque navigation", async () => {
        vi.useFakeTimers();
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [{ path: "/", component: { template: "<div />" } }],
        });
        installerImagesImpression(router);
        const images = imagesDifferees();

        await router.push("/");
        await vi.runAllTimersAsync();

        expect(images[1].loading).toBe("eager");
    });
});
