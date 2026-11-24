import { afterEach, describe, expect, it, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import MaFaluche from "../../../src/pages/ressources/MaFaluche.vue";
import FalucheSchema from "../../../src/components/schemas/FalucheSchema.vue";
import { AUTRE, cityRef, defaultConfig, loadConfig, provinceRef, resolveRuban } from "../../../src/core/falucheConfig";
import { defaultCirculaire, nouvelleAnnee } from "../../../src/core/circulaireConfig";
import CirculaireRuban from "../../../src/components/schemas/CirculaireRuban.vue";
import CirculaireForm from "../../../src/components/faluche/CirculaireForm.vue";
import { mountWithRouter } from "../../helpers/mountPage";

const image = vi.hoisted(() => ({
    serializeSchema: vi.fn(async () => "<svg/>"),
    serializeRuban: vi.fn(async () => ({ markup: "<svg id='ruban'/>", width: 640, height: 120 })),
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
                etudes: resolveRuban({ ref: cityRef("Amiens") }),
                etudesAvant: resolveRuban({ ref: cityRef("Lille") }),
                anneeChangement: "2024",
                province: resolveRuban({ ref: provinceRef("flandres") }),
                naissance: resolveRuban({ ref: AUTRE, nom: "Brest", couleurs: ["noir", "blanc"] }),
            },
        });
        expect(wrapper.find('[data-faluche="ruban-etudes-avant"]').exists()).toBe(true);
        expect(wrapper.get('[data-faluche="ruban-etudes"]').text()).toContain("2024");
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

    it("place l'ancienne ville d'études sur l'écusson du haut, en miroir de la naissance", () => {
        const wrapper = mount(FalucheSchema, {
            props: {
                etudes: resolveRuban({ ref: cityRef("Amiens") }),
                etudesAvant: resolveRuban({ ref: cityRef("Beauvais") }),
                anneeChangement: "2024",
            },
        });
        // L'ancienne ville : écusson du haut, diagonale seule
        expect(wrapper.get('[data-faluche="ruban-etudes-avant"]').findAll("rect")).toHaveLength(0);
        expect(wrapper.get('[data-faluche="ecusson-etudes-avant"] image').attributes("href")).toBe("/images/ecussons/beauvais.png");
        expect(wrapper.get('[data-faluche="ecusson-etudes-avant"] image').attributes("transform")).toBe("rotate(45 162 347)");
        // La ville actuelle : ruban complet, écusson du bas et année
        const actuelle = wrapper.get('[data-faluche="ruban-etudes"]');
        expect(actuelle.findAll("rect").length).toBeGreaterThan(0);
        expect(actuelle.text()).toContain("2024");
        expect(wrapper.get('[data-faluche="ecusson-etudes"] image').attributes("href")).toBe("/images/ecussons/amiens.png");
        expect(wrapper.get('[data-faluche="ecusson-etudes"] image').attributes("transform")).toBe("rotate(45 212 528)");
    });

    it("garde le ruban complet pour une seule ville d'études", () => {
        const wrapper = mount(FalucheSchema, { props: { etudes: resolveRuban({ ref: cityRef("Amiens") }) } });
        expect(wrapper.get('[data-faluche="ruban-etudes"]').findAll("rect").length).toBeGreaterThan(0);
        expect(wrapper.get('[data-faluche="ecusson-etudes"] image').attributes("transform")).toBe("rotate(45 212 528)");
        expect(wrapper.find('[data-faluche="ruban-etudes-avant"]').exists()).toBe(false);
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

    it("ajoute une ancienne ville d'études et l'année du changement", async () => {
        const wrapper = await mountPage();
        expect(wrapper.text()).toContain("J'ai eu une autre ville avant");
        await wrapper.get('input[type="checkbox"]').setValue(true);
        expect(wrapper.find("#mf-ville-avant").exists()).toBe(true);
        // Aucune ville imposée : l'utilisateur la choisit
        expect(loadConfig().etudesAvant).toBeNull();

        wrapper.findAllComponents({ name: "RubanChoix" })[1].vm.$emit("update:modelValue", { ref: cityRef("Beauvais") });
        const annee = wrapper.findAll("input").find((i) => i.attributes("inputmode") === "numeric")!;
        await annee.setValue("20a24");
        expect(loadConfig().etudesAvant).toEqual({ ref: cityRef("Beauvais") });
        expect(loadConfig().anneeChangement).toBe("2024");
        expect(wrapper.get('[data-faluche="ruban-etudes"]').text()).toContain("2024");
        expect(wrapper.get(".ma-faluche__legende").text()).toContain("Beauvais puis Amiens");

        // Refermer l'interrupteur retire l'ancienne ville et l'année
        await wrapper.get('input[type="checkbox"]').setValue(false);
        expect(loadConfig().etudesAvant).toBeNull();
        expect(loadConfig().anneeChangement).toBe("");
    });

    it("enregistre la faluche en image", async () => {
        const wrapper = await mountPage();
        await wrapper.findAll("button").find((b) => b.text().includes("Enregistrer en image"))!.trigger("click");
        await flushPromises();
        expect(image.serializeSchema).toHaveBeenCalledWith(expect.any(SVGSVGElement), expect.any(String));
        expect(image.renderPng).toHaveBeenCalledWith("<svg/>", expect.any(String), "Ma faluche", undefined);
        expect(image.serializeRuban).not.toHaveBeenCalled();
        expect(wrapper.get('[role="status"]').text()).toBe("Image téléchargée.");
    });

    it("ajoute le circulaire sous la faluche dans l'image", async () => {
        localStorage.setItem(
            "ma-faluche",
            JSON.stringify({ version: 1, config: { ...defaultConfig(), circulaire: { ...defaultCirculaire(), actif: true, filiere: "Droit" } } })
        );
        const wrapper = await mountPage();
        await wrapper.findAll("button").find((b) => b.text().includes("Enregistrer en image"))!.trigger("click");
        await flushPromises();
        expect(image.serializeRuban).toHaveBeenCalledWith(expect.any(SVGSVGElement), expect.any(String));
        expect(image.renderPng).toHaveBeenLastCalledWith("<svg/>", expect.any(String), "Ma faluche", {
            markup: "<svg id='ruban'/>",
            width: 640,
            height: 120,
        });
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

describe("Circulaire", () => {
    afterEach(() => {
        document.body.innerHTML = "";
    });

    it("dessine le ruban à plat avec ses bandes, sa matière et ses insignes", () => {
        const wrapper = mount(CirculaireRuban, {
            props: {
                circulaire: {
                    ...defaultCirculaire(),
                    actif: true,
                    filiere: "Militaire",
                    initiales: "AZ",
                    bac: "beta",
                    anneeBac: "13",
                    embleme: "Globe terrestre",
                    annees: [nouvelleAnnee(), { ...nouvelleAnnee(), statut: "argentee", marque: "large_palme" }],
                },
            },
        });
        expect(wrapper.attributes("data-matiere")).toBe("satin");
        expect(wrapper.findAll('[data-circulaire="bande"]')).toHaveLength(3);
        expect(wrapper.get('[data-circulaire="initiales"]').text()).toBe("AZ");
        expect(wrapper.get('[data-circulaire="annee-bac"]').text()).toBe("13");
        expect(wrapper.get('[data-circulaire="bac"]').attributes("href")).toBe("/images/insigne/beta.png");
        expect(wrapper.get('[data-circulaire="embleme"]').attributes("href")).toBe("/images/insigne/globe_terrestre.png");
        expect(wrapper.find('[data-circulaire="moivre"]').exists()).toBe(true);
        expect(wrapper.findAll('[data-circulaire^="annee-"]').map((e) => e.attributes("data-circulaire"))).toEqual([
            "annee-bac",
            "annee-doree",
            "annee-argentee",
        ]);
        expect(wrapper.find('[data-circulaire="large_palme"]').exists()).toBe(true);
        expect(wrapper.get("desc").text()).toBe("Ruban circulaire en satin, initiales AZ, 2 années");
    });

    it("suit la filière pour l'emblème, sauf s'il a été choisi à la main", async () => {
        const wrapper = mount(CirculaireForm, {
            props: {
                modelValue: { ...defaultCirculaire(), actif: true },
                "onUpdate:modelValue": (value: any) => wrapper.setProps({ modelValue: value }),
            },
        });
        const filiere = wrapper.findAllComponents({ name: "VAutocomplete" })[0];
        filiere.vm.$emit("update:modelValue", "Géographie");
        await flushPromises();
        expect(wrapper.props("modelValue").embleme).toBe("Globe terrestre");

        filiere.vm.$emit("update:modelValue", "Histoire");
        await flushPromises();
        expect(wrapper.props("modelValue").embleme).toBe("Casque de Périclès");

        wrapper.props("modelValue").embleme = "Coq";
        filiere.vm.$emit("update:modelValue", "Géographie");
        await flushPromises();
        expect(wrapper.props("modelValue").embleme).toBe("Coq");
    });

    it("nettoie les saisies et ajoute ou retire des années", async () => {
        const model = { ...defaultCirculaire(), actif: true };
        const wrapper = mount(CirculaireForm, { props: { modelValue: model } });
        await wrapper.get("#cf-initiales").setValue("a.z1x");
        expect(model.initiales).toBe("AZ1X");
        await wrapper.get("#cf-annee-bac").setValue("2a013");
        expect(model.anneeBac).toBe("20");

        await wrapper.findAll("button").find((b) => b.text().includes("Ajouter une année"))!.trigger("click");
        expect(model.annees).toHaveLength(2);
        // Le changement d'établissement n'a de sens qu'à partir de la deuxième année
        expect(wrapper.get('[data-annee="0"]').text()).not.toContain("Changement public / privé");
        expect(wrapper.get('[data-annee="1"]').text()).toContain("Changement public / privé");

        await wrapper.get(`[aria-label="Retirer l'année 1"]`).trigger("click");
        expect(model.annees).toHaveLength(1);
    });

    it("n'affiche le circulaire qu'une fois l'interrupteur activé", async () => {
        const { wrapper } = await mountWithRouter(MaFaluche, { attachTo: document.body });
        expect(wrapper.find(".circulaire-ruban").exists()).toBe(false);
        const toggle = wrapper.get(".ma-faluche__circulaire input[type='checkbox']");
        await toggle.setValue(true);
        expect(wrapper.find(".circulaire-ruban").exists()).toBe(true);
        expect(loadConfig().circulaire.actif).toBe(true);
    });
});
