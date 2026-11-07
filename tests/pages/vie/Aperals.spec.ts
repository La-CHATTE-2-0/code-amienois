import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { flushPromises, type VueWrapper } from "@vue/test-utils";
import { defineComponent, h, onMounted } from "vue";
import { AperalColor, type Aperal } from "../../../src/types/aperalTypes";
import { mountWithRouter } from "../../helpers/mountPage";

// Leaflet ne fonctionne pas sans vrai navigateur : la carte est remplacée par des doublures
const fakeMap = vi.hoisted(() => ({
    fitBounds: vi.fn(),
    setView: vi.fn(),
    flyTo: vi.fn(),
    // Le déplacement est immédiat : on déclenche aussitôt « moveend »
    once: vi.fn((_event: string, handler: () => void) => handler()),
}));
const openPopup = vi.hoisted(() => vi.fn());

vi.mock("@vue-leaflet/vue-leaflet", () => {
    const slot = (name: string) =>
        defineComponent({
            name,
            setup: (_props, { slots }) => () => h("div", { class: name }, slots.default?.()),
        });
    return {
        LMap: defineComponent({
            name: "LMap",
            emits: ["ready"],
            setup(_props, { slots, emit }) {
                onMounted(() => emit("ready", fakeMap));
                return () => h("div", { class: "l-map" }, slots.default?.());
            },
        }),
        LMarker: defineComponent({
            name: "LMarker",
            setup(_props, { slots, expose }) {
                expose({ leafletObject: { openPopup } });
                return () => h("div", { class: "l-marker" }, slots.default?.());
            },
        }),
        LTileLayer: slot("l-tile-layer"),
        LIcon: slot("l-icon"),
        LPopup: slot("l-popup"),
    };
});

const aperals: Aperal[] = [
    {
        city: "Reims",
        frequency: "Tous les jeudis",
        days: ["jeudi"],
        color: AperalColor.Orange,
        contactUrl: "https://example.org/reims",
        description: "Apéral rémois",
        places: [{ name: "Le Bar", address: "1 rue de Reims", latlong: [49.25, 4.03] }],
    },
    {
        city: "Amiens",
        days: ["mardi", "jeudi"],
        places: [{ name: "Le Riche", latlong: [49.89, 2.29] }, { name: "Sans coordonnées" }],
    },
    { city: "Évry", color: AperalColor.Red, places: [] },
];

const mockFetch = (ok = true) =>
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
        ok ? Response.json(aperals) : new Response(null, { status: 500 })
    );

async function mountPage() {
    const { default: Aperals } = await import("../../../src/pages/vie/Aperals.vue");
    const { wrapper } = await mountWithRouter(Aperals, { attachTo: document.body });
    await flushPromises();
    return wrapper;
}

const clickText = async (wrapper: VueWrapper, selector: string, text: string) => {
    const el = wrapper.findAll(selector).find((e) => e.text().includes(text));
    await el!.trigger("click");
    await flushPromises();
};

describe("Aperals", () => {
    beforeEach(() => {
        Element.prototype.scrollIntoView = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
        document.body.innerHTML = "";
    });

    it("affiche les apérals triés et centre la carte sur les marqueurs", async () => {
        mockFetch();
        const wrapper = await mountPage();
        expect(wrapper.text()).toContain("3 villes");
        const cities = wrapper.findAll(".v-list-item-title").map((t) => t.text());
        expect(cities[0]).toContain("Amiens");
        expect(cities[0]).toContain("Le Riche");
        expect(wrapper.findAll(".l-marker")).toHaveLength(2);
        expect(fakeMap.fitBounds).toHaveBeenCalled();
        expect(wrapper.text()).toContain("Tous les jeudis");
    });

    it("filtre par recherche, sans tenir compte des accents", async () => {
        mockFetch();
        const wrapper = await mountPage();
        await wrapper.get("input").setValue("evry");
        await flushPromises();
        expect(wrapper.text()).toContain("1 ville");
        // Aucun marqueur : la carte revient sur la France entière
        expect(fakeMap.setView).toHaveBeenCalledWith([46.6, 2.4], 5);

        await wrapper.get("input").setValue("riche");
        await flushPromises();
        expect(wrapper.findAll(".v-list-item-title")[0].text()).toContain("Amiens");

        await wrapper.get("input").setValue("introuvable");
        await flushPromises();
        expect(wrapper.text()).toContain("Aucun apéral ne correspond");

        await clickText(wrapper, "button", "Réinitialiser");
        expect(wrapper.text()).toContain("3 villes");
    });

    it("filtre par jour et par statut", async () => {
        mockFetch();
        const wrapper = await mountPage();
        await clickText(wrapper, ".v-chip", "Mar");
        expect(wrapper.text()).toContain("1 ville");
        await clickText(wrapper, ".v-chip", "Mar");
        await clickText(wrapper, ".v-chip", "Irrégulier");
        expect(wrapper.findAll(".v-list-item-title").map((t) => t.text())).toEqual([
            expect.stringContaining("Reims"),
        ]);
    });

    it("ouvre la fiche d'un apéral sur la carte", async () => {
        mockFetch();
        const wrapper = await mountPage();
        await clickText(wrapper, ".v-list-item", "Reims");
        expect(fakeMap.flyTo).toHaveBeenCalledWith([49.25, 4.03], 13, { duration: 0.8 });
        expect(openPopup).toHaveBeenCalled();

        // Ville sans coordonnées : rien à montrer sur la carte
        fakeMap.flyTo.mockClear();
        await clickText(wrapper, ".v-list-item", "Évry");
        expect(fakeMap.flyTo).not.toHaveBeenCalled();
    });

    it("recentre la carte à la demande", async () => {
        mockFetch();
        const wrapper = await mountPage();
        fakeMap.fitBounds.mockClear();
        await wrapper.get('[title="Recentrer la carte"]').trigger("click");
        expect(fakeMap.fitBounds).toHaveBeenCalledTimes(1);
    });

    it("propose de réessayer en cas d'erreur", async () => {
        const fetch = mockFetch(false);
        const wrapper = await mountPage();
        expect(wrapper.text()).toContain("Impossible de charger les apérals.");
        fetch.mockResolvedValue(Response.json(aperals));
        await clickText(wrapper, "button", "Réessayer");
        expect(wrapper.text()).toContain("3 villes");
    });

    it("affiche les filtres compacts sur téléphone", async () => {
        mockFetch();
        (window as any).happyDOM.setViewport({ width: 400, height: 800 });
        window.dispatchEvent(new Event("resize"));
        try {
            const wrapper = await mountPage();
            await flushPromises();
            expect(wrapper.find(".aperal-filters--compact").exists()).toBe(true);
        } finally {
            (window as any).happyDOM.setViewport({ width: 1024, height: 768 });
            window.dispatchEvent(new Event("resize"));
        }
    });
});
