import { describe, expect, it } from "vitest";
import {
    BACS,
    EMBLEMES,
    MARQUES,
    MAX_ANNEES,
    STATUTS,
    defaultCirculaire,
    emblemeDeFiliere,
    nouvelleAnnee,
    sanitizeCirculaire,
    type CirculaireConfig,
} from "../../src/core/circulaireConfig";
import { MOIVRE_PRIVE, MOIVRE_PUBLIC, RUBAN_H, buildFrise, type Element } from "../../src/core/circulaireFrise";
import { circuColors } from "../../src/core/circulaires";
import { defaultConfig, loadConfig, saveConfig } from "../../src/core/falucheConfig";

const config = (over: Partial<CirculaireConfig> = {}): CirculaireConfig => ({ ...defaultCirculaire(), actif: true, ...over });
const roles = (elements: Element[]) => elements.map((e) => e.role);
const byRole = (elements: Element[], role: string) => elements.filter((e) => e.role === role);

describe("circulaireConfig", () => {
    it("n'utilise que des images d'insignes connues", () => {
        for (const item of [...BACS, ...STATUTS, ...MARQUES, ...EMBLEMES]) {
            if ("image" in item && item.image) expect(item.image).toMatch(/^\/images\/insigne\/.+\.png$/);
        }
    });

    it("propose l'emblème d'une filière de même nom", () => {
        expect(emblemeDeFiliere("Géographie")).toBe("Globe terrestre");
        expect(emblemeDeFiliere("Droit")).toBeNull();
        expect(emblemeDeFiliere(null)).toBeNull();
    });

    it("part d'un circulaire désactivé avec une année", () => {
        const c = defaultCirculaire();
        expect(c.actif).toBe(false);
        expect(c.annees).toEqual([nouvelleAnnee()]);
    });

    it("garde ce qui est lisible dans un stockage abîmé", () => {
        const c = sanitizeCirculaire({
            actif: true,
            filiere: "Géographie",
            initiales: "a.z!éé",
            bac: "omega",
            bacAutre: "stmg-2",
            anneeBac: "2013",
            embleme: "Inconnu",
            annees: [{ statut: "argentee", marque: "large_palme", quille: "oui" }, null, ...Array(20).fill({})],
            abeille: 1,
        });
        expect(c.actif).toBe(true);
        expect(c.filiere).toBe("Géographie");
        expect(c.initiales).toBe("AZÉÉ");
        expect(c.bac).toBeNull();
        expect(c.bacAutre).toBe("STMG2");
        expect(c.anneeBac).toBe("20");
        expect(c.embleme).toBeNull();
        expect(c.annees).toHaveLength(MAX_ANNEES);
        expect(c.annees[0]).toEqual({ ...nouvelleAnnee(), statut: "argentee", marque: "large_palme" });
        expect(c.annees[1]).toEqual(nouvelleAnnee());
        expect(c.abeille).toBe(false);
        expect(sanitizeCirculaire("nope")).toEqual(defaultCirculaire());
        expect(sanitizeCirculaire({ filiere: "Inconnue" }).filiere).toBeNull();
    });

    it("est enregistré avec le reste de la faluche", () => {
        const circulaire = config({ filiere: "Droit", initiales: "AZ" });
        saveConfig({ ...defaultConfig(), circulaire });
        expect(loadConfig().circulaire).toEqual(circulaire);
    });
});

describe("buildFrise", () => {
    it("reprend l'exemple du Code : initiales, bac et année, emblème, étoiles sur moivre", () => {
        const frise = buildFrise(
            config({
                filiere: "Géographie",
                initiales: "AZ",
                bac: "beta",
                anneeBac: "13",
                embleme: "Globe terrestre",
                annees: [nouvelleAnnee(), nouvelleAnnee()],
            })
        );
        expect(frise.matiere).toBe("satin");
        expect(frise.couleurs).toEqual([circuColors.jaune]);
        expect(roles(frise.elements)).toEqual([
            "initiales",
            "bac",
            "annee-bac",
            "embleme",
            "moivre",
            "annee-doree",
            "annee-doree",
        ]);
        // De gauche à droite
        const xs = frise.elements.filter((e) => e.kind !== "band").map((e) => ("x" in e ? e.x : 0));
        expect(xs).toEqual([...xs].sort((a, b) => a - b));
        expect(frise.height).toBe(RUBAN_H);
    });

    it("dessine un ruban neutre tant qu'aucune filière n'est choisie", () => {
        const frise = buildFrise(config({ annees: [] }));
        expect(frise.couleurs).toEqual([]);
        expect(frise.matiere).toBeNull();
        expect(frise.elements).toEqual([]);
        expect(frise.width).toBeGreaterThan(0);
    });

    it("superpose les bandes de plusieurs couleurs", () => {
        const militaire = buildFrise(config({ filiere: "Militaire" }));
        expect(militaire.couleurs).toEqual([circuColors.bleuroy, circuColors.blanc, circuColors.rouge]);
    });

    it("écrit les initiales d'un autre bac et place « C » et « I » avant l'année", () => {
        const frise = buildFrise(config({ bac: "autre", bacAutre: "STMG", capacitaire: true, international: true, anneeBac: "21", annees: [] }));
        expect(roles(frise.elements)).toEqual(["bac", "lettre_c", "lettre_i", "annee-bac"]);
        expect(frise.elements[0]).toMatchObject({ kind: "text", text: "STMG" });
    });

    it("pose le moivre sous la première étoile, puis à chaque changement d'établissement", () => {
        const frise = buildFrise(
            config({
                prive: false,
                annees: [nouvelleAnnee(), nouvelleAnnee(), { ...nouvelleAnnee(), changement: true }, { ...nouvelleAnnee(), changement: true }],
            })
        );
        const moivres = byRole(frise.elements, "moivre");
        expect(moivres.map((m) => m.kind === "band" && m.color)).toEqual([MOIVRE_PUBLIC, MOIVRE_PRIVE, MOIVRE_PUBLIC]);
        const prive = buildFrise(config({ prive: true }));
        expect(byRole(prive.elements, "moivre")[0]).toMatchObject({ color: MOIVRE_PRIVE });
    });

    it("place les marques de chaque année et la fin de cursus", () => {
        const frise = buildFrise(
            config({
                annees: [
                    { ...nouvelleAnnee(), statut: "argentee", etranger: true, alternance: true, marque: "tete_de_vache" },
                    { ...nouvelleAnnee(), statut: "equivalence", perte: true, quille: true },
                    { ...nouvelleAnnee(), statut: "sabbatique" },
                ],
                agregation: true,
                capes: true,
                abeille: true,
            })
        );
        expect(roles(frise.elements)).toEqual([
            "moivre",
            "annee-argentee",
            "drapeau",
            "alternance",
            "tete_de_vache",
            "ruban-noir",
            "annee-equivalence",
            "quille",
            "annee-sabbatique",
            "concours",
            "palme-concours",
            "abeille",
        ]);
        expect(byRole(frise.elements, "concours")[0]).toMatchObject({ text: "ac" });
        // La quille pend sous le ruban, qui s'allonge d'autant
        const quille = byRole(frise.elements, "quille")[0];
        expect(quille.kind === "image" && quille.y + quille.h).toBeGreaterThan(RUBAN_H);
        expect(frise.height).toBeGreaterThan(RUBAN_H);
    });

    it("élargit le ruban avec le nombre d'années", () => {
        const court = buildFrise(config({ annees: Array.from({ length: 3 }, nouvelleAnnee) }));
        const long = buildFrise(config({ annees: Array.from({ length: 12 }, nouvelleAnnee) }));
        expect(long.width).toBeGreaterThan(court.width);
    });
});
