import { describe, expect, it } from "vitest";
import { nextTick } from "vue";
import {
    AUTRE,
    cityRef,
    defaultConfig,
    loadConfig,
    provinceRef,
    resolveRuban,
    sanitize,
    saveConfig,
    useFalucheConfig,
} from "../../src/core/falucheConfig";
import { circulaires, circuColors, findCirculaire } from "../../src/core/circulaires";
import { cities, colorNames, provinces, swatchColors } from "../../src/core/villes";

const KEY = "ma-faluche";

describe("données", () => {
    it("connaît la teinte de chaque couleur de ville et de province", () => {
        for (const item of [...cities, ...provinces]) {
            for (const name of colorNames(item.colors)) {
                expect(swatchColors[name], `${item.name} : ${name}`).toBeDefined();
            }
        }
    });

    it("connaît la teinte de chaque couleur de circulaire", () => {
        for (const c of circulaires) {
            for (const name of c.couleurs) expect(circuColors[name], `${c.filiere} : ${name}`).toBeDefined();
        }
    });

    it("rattache chaque ville à une province connue", () => {
        const ids = new Set(provinces.map((p) => p.id));
        for (const city of cities) expect(ids.has(city.province), city.name).toBe(true);
    });

    it("trie les filières par ordre alphabétique", () => {
        const names = circulaires.map((c) => c.filiere);
        expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, "fr")));
        expect(findCirculaire("Médecine")).toMatchObject({ matiere: "velours", couleurs: ["bordeaux"] });
        expect(findCirculaire(null)).toBeUndefined();
    });
});

describe("resolveRuban", () => {
    it("trouve une ville avec ses couleurs et son écusson", () => {
        expect(resolveRuban({ ref: cityRef("Amiens") })).toEqual({
            nom: "Amiens",
            couleurs: [swatchColors.rouge, swatchColors["bleu roi"]],
            ecusson: "/images/ecussons/amiens.png",
        });
    });

    it("trouve une province", () => {
        expect(resolveRuban({ ref: provinceRef("normandie") })?.nom).toBe("Normandie");
    });

    it("décrit une ville saisie à la main, sans écusson", () => {
        expect(resolveRuban({ ref: AUTRE, nom: " Brest ", couleurs: ["noir", "blanc"] })).toEqual({
            nom: "Brest",
            couleurs: [swatchColors.noir, swatchColors.blanc],
        });
    });

    it("ignore un choix vide ou inconnu", () => {
        expect(resolveRuban(null)).toBeNull();
        expect(resolveRuban({ ref: cityRef("Atlantis") })).toBeNull();
        expect(resolveRuban({ ref: AUTRE, nom: "", couleurs: ["noir"] })).toBeNull();
        expect(resolveRuban({ ref: AUTRE, nom: "Brest", couleurs: ["plaid"] })).toBeNull();
    });
});

describe("stockage", () => {
    it("part d'Amiens en velours noir", () => {
        expect(loadConfig()).toEqual(defaultConfig());
        expect(defaultConfig().etudes).toEqual({ ref: cityRef("Amiens") });
    });

    it("relit ce qui a été enregistré", () => {
        const config = { ...defaultConfig(), velours: "amarante" as const, filiere: "Droit" };
        saveConfig(config);
        expect(loadConfig()).toEqual(config);
    });

    it("garde ce qui est lisible dans un stockage abîmé", () => {
        expect(sanitize({ velours: "vert", filiere: 3, province: { ref: provinceRef("artois") }, anneeChangement: "202512" })).toEqual({
            ...defaultConfig(),
            province: { ref: provinceRef("artois") },
            anneeChangement: "2025",
        });
        localStorage.setItem(KEY, "{pas du json");
        expect(loadConfig()).toEqual(defaultConfig());
    });

    it("n'écrase pas une configuration écrite par une version plus récente", () => {
        const newer = JSON.stringify({ version: 99, config: { velours: "amarante" } });
        localStorage.setItem(KEY, newer);
        expect(loadConfig()).toEqual(defaultConfig());
        saveConfig(defaultConfig());
        expect(localStorage.getItem(KEY)).toBe(newer);
    });

    it("enregistre chaque changement et repart de zéro", async () => {
        const { config, reset } = useFalucheConfig();
        config.value.filiere = "Pharmacie";
        await nextTick();
        expect(loadConfig().filiere).toBe("Pharmacie");
        reset();
        await nextTick();
        expect(loadConfig()).toEqual(defaultConfig());
    });
});
