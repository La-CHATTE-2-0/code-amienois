import { afterEach, describe, expect, it, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import MaFaluche from "../../../src/pages/ressources/MaFaluche.vue";
import FalucheSchema from "../../../src/components/schemas/FalucheSchema.vue";
import { AUTRE, cityRef, defaultConfig, loadConfig, provinceRef, resolveRuban } from "../../../src/core/falucheConfig";
import { mountWithRouter } from "../../helpers/mountPage";

const image = vi.hoisted(() => ({
    serializeSchema: vi.fn(async () => "<svg/>"),
    renderPng: vi.fn(async () => new Blob(["png"])),
    shareOrDownload: vi.fn(async () => "downloaded"),
}));
vi.mock("../../../src/core/falucheImage", () => image);

async function mountPage() {
    const { wrapper } = await mountWithRouter(MaFaluche, { attachTo: document.body });
    return wrapper;
}

describe("FalucheSchema", () => {
    it("dessine un dessus en velours noir, sans circulaire", () => {
        const wrapper = mount(FalucheSchema);
        expect(wrapper.get('[data-faluche="velours"]').attributes("fill")).toBe("#141214");
        expect(wrapper.find('[data-faluche="circulaire"]').exists()).toBe(false);
        expect(wrapper.get("desc").text()).toBe("Dessus de faluche en velours noir");
    });

    it("place les rubans choisis avec leur écusson et l'année du changement", () => {
        const wrapper = mount(FalucheSchema, {
            props: {
                etudes: resolveRuban({ ref: cityRef("Lille") }),
                etudesSuivante: resolveRuban({ ref: cityRef("Amiens") }),
                anneeChangement: "2024",
                province: resolveRuban({ ref: provinceRef("flandres") }),
                naissance: resolveRuban({ ref: AUTRE, nom: "Brest", couleurs: ["noir", "blanc"] }),
            },
        });
        expect(wrapper.find('[data-faluche="ruban-etudes"]').exists()).toBe(true);
        expect(wrapper.get('[data-faluche="ruban-etudes-suivante"]').text()).toContain("2024");
        expect(wrapper.get('[data-faluche="ecusson-province"] image').attributes("href")).toBe("/images/ecussons/flandres.png");
        // Pas d'écusson connu pour une ville saisie à la main : on dessine son initiale
        expect(wrapper.get('[data-faluche="ecusson-naissance"]').text()).toBe("B");
        expect(wrapper.get("desc").text()).toContain("ruban de ville de naissance : Brest");
    });

    it("donne au ruban de province la largeur de celui d'études, et ne garde que la diagonale de la naissance", () => {
        const wrapper = mount(FalucheSchema, {
            props: {
                etudes: resolveRuban({ ref: cityRef("Reims") }),
                province: resolveRuban({ ref: provinceRef("picardie") }),
                naissance: resolveRuban({ ref: cityRef("Saint-Quentin") }),
            },
        });
        // Largeur de la partie droite : somme des bandes d'une même zone découpée
        const largeur = (key: string) =>
            wrapper
                .get(`[data-faluche="ruban-${key}"] g`)
                .findAll("rect")
                .reduce((sum, rect) => sum + Number(rect.attributes("width")), 0);
        expect(largeur("province")).toBeCloseTo(largeur("etudes"), 0);
        expect(wrapper.get('[data-faluche="ruban-naissance"]').findAll("rect")).toHaveLength(0);
        expect(wrapper.get('[data-faluche="ruban-naissance"]').findAll("path").length).toBeGreaterThan(0);
    });

    it("place deux villes d'études en miroir de la province et de la naissance", () => {
        const wrapper = mount(FalucheSchema, {
            props: {
                etudes: resolveRuban({ ref: cityRef("Beauvais") }),
                etudesSuivante: resolveRuban({ ref: cityRef("Amiens") }),
                anneeChangement: "2024",
            },
        });
        // La ville d'avant : écusson du haut, diagonale seule
        const avant = wrapper.get('[data-faluche="ruban-etudes"]');
        expect(avant.findAll("rect")).toHaveLength(0);
        expect(wrapper.get('[data-faluche="ecusson-etudes"] image').attributes("transform")).toBe("rotate(45 162 347)");
        // La nouvelle ville : ruban complet, écusson du bas et année
        const nouvelle = wrapper.get('[data-faluche="ruban-etudes-suivante"]');
        expect(nouvelle.findAll("rect").length).toBeGreaterThan(0);
        expect(nouvelle.text()).toContain("2024");
        expect(wrapper.get('[data-faluche="ecusson-etudes-suivante"] image').attributes("href")).toBe("/images/ecussons/amiens.png");
        expect(wrapper.get('[data-faluche="ecusson-etudes-suivante"] image').attributes("transform")).toBe("rotate(45 212 528)");
    });

    it("garde le ruban complet pour une seule ville d'études", () => {
        const wrapper = mount(FalucheSchema, { props: { etudes: resolveRuban({ ref: cityRef("Amiens") }) } });
        expect(wrapper.get('[data-faluche="ruban-etudes"]').findAll("rect").length).toBeGreaterThan(0);
        expect(wrapper.get('[data-faluche="ecusson-etudes"] image').attributes("transform")).toBe("rotate(45 212 528)");
        expect(wrapper.find('[data-faluche="ruban-etudes-suivante"]').exists()).toBe(false);
    });

    it("garde la place des rubans d'association et d'élu", () => {
        const wrapper = mount(FalucheSchema);
        expect(wrapper.find('[data-faluche="emplacement-association"]').exists()).toBe(true);
        expect(wrapper.find('[data-faluche="emplacement-elu"]').exists()).toBe(true);
    });
});

describe("MaFaluche", () => {
    afterEach(() => {
        vi.unstubAllGlobals();
        document.body.innerHTML = "";
    });

    it("affiche Amiens comme ville d'études par défaut", async () => {
        const wrapper = await mountPage();
        expect(wrapper.find('[data-faluche="ruban-etudes"]').exists()).toBe(true);
        expect(wrapper.get(".ma-faluche__legende").text()).toContain("Amiens");
    });

    it("reprend la faluche enregistrée", async () => {
        localStorage.setItem(
            "ma-faluche",
            JSON.stringify({ version: 1, config: { ...defaultConfig(), naissance: { ref: cityRef("Rouen") } } })
        );
        const wrapper = await mountPage();
        const legende = wrapper.get(".ma-faluche__legende").text();
        expect(legende).toContain("Rouen");
        expect(wrapper.find('[data-faluche="ecusson-naissance"] image').attributes("href")).toBe("/images/ecussons/rouen.png");
    });

    it("ne propose ni velours ni circulaire", async () => {
        const wrapper = await mountPage();
        expect(wrapper.findAll("button").some((b) => b.text() === "Amarante")).toBe(false);
        expect(wrapper.find("#mf-filiere").exists()).toBe(false);
    });

    it("ajoute une nouvelle ville d'études avec son année", async () => {
        const wrapper = await mountPage();
        await wrapper.get('input[type="checkbox"]').setValue(true);
        const annee = wrapper.findAll("input").find((i) => i.attributes("inputmode") === "numeric")!;
        await annee.setValue("20a24");
        expect(loadConfig().etudesSuivante).toEqual({ ref: cityRef("Amiens") });
        expect(loadConfig().anneeChangement).toBe("2024");
        expect(wrapper.get('[data-faluche="ruban-etudes-suivante"]').text()).toContain("2024");
    });

    it("enregistre la faluche en image", async () => {
        const wrapper = await mountPage();
        await wrapper.findAll("button").find((b) => b.text().includes("Enregistrer en image"))!.trigger("click");
        await flushPromises();
        expect(image.serializeSchema).toHaveBeenCalledWith(expect.any(SVGSVGElement), expect.any(String));
        expect(image.renderPng).toHaveBeenCalledWith("<svg/>", expect.any(String), "Ma faluche");
        expect(wrapper.get('[role="status"]').text()).toBe("Image téléchargée.");
    });

    it("prévient si l'image n'a pas pu être créée", async () => {
        image.renderPng.mockRejectedValueOnce(new Error("canvas"));
        const wrapper = await mountPage();
        await wrapper.findAll("button").find((b) => b.text().includes("Enregistrer en image"))!.trigger("click");
        await flushPromises();
        expect(wrapper.get('[role="status"]').text()).toContain("n'a pas pu");
    });

    it("repart d'une faluche vierge après confirmation", async () => {
        localStorage.setItem("ma-faluche", JSON.stringify({ version: 1, config: { ...defaultConfig(), province: { ref: provinceRef("artois") } } }));
        const wrapper = await mountPage();
        const confirm = vi.fn(() => false);
        vi.stubGlobal("confirm", confirm);
        const reset = wrapper.findAll("button").find((b) => b.text().includes("Recommencer"))!;

        await reset.trigger("click");
        expect(loadConfig().province).toEqual({ ref: provinceRef("artois") });

        confirm.mockReturnValue(true);
        await reset.trigger("click");
        expect(loadConfig().province).toBeNull();
    });
});

describe("RubanChoix", () => {
    it("ouvre la saisie libre sur « Autre… » et met à jour les couleurs", async () => {
        const RubanChoix = (await import("../../../src/components/faluche/RubanChoix.vue")).default;
        const wrapper = mount(RubanChoix, {
            props: {
                id: "test",
                label: "Ville",
                options: [],
                modelValue: { ref: AUTRE, nom: "", couleurs: ["rouge", "blanc"] },
                "onUpdate:modelValue": (value: any) => wrapper.setProps({ modelValue: value }),
            },
        });
        expect(wrapper.find(".ruban-choix__custom").exists()).toBe(true);
        await wrapper.get(".ruban-choix__custom input").setValue("Brest");
        expect(wrapper.props("modelValue")).toEqual({ ref: AUTRE, nom: "Brest", couleurs: ["rouge", "blanc"] });

        const [, seconde] = wrapper.findAllComponents({ name: "VSelect" });
        seconde.vm.$emit("update:modelValue", null);
        await flushPromises();
        expect(wrapper.props("modelValue")).toEqual({ ref: AUTRE, nom: "Brest", couleurs: ["rouge"] });

        wrapper.findComponent({ name: "VAutocomplete" }).vm.$emit("update:modelValue", null);
        await flushPromises();
        expect(wrapper.props("modelValue")).toBeNull();
    });
});
