import { describe, expect, it, vi } from "vitest";
import { AperalColor, type Aperal } from "../../src/types/aperalTypes";
import { getAperalStatus, getDirectionsUrl, loadAperals } from "../../src/services/aperalServices";

const aperal = (city: string, color?: AperalColor): Aperal => ({ city, color, places: [] });

describe("getAperalStatus", () => {
    it("traduit la couleur en statut", () => {
        expect(getAperalStatus(aperal("Amiens", AperalColor.Green))).toBe("active");
        expect(getAperalStatus(aperal("Amiens", AperalColor.Orange))).toBe("irregular");
        expect(getAperalStatus(aperal("Amiens", AperalColor.Red))).toBe("inactive");
    });

    it("considère un apéral sans couleur comme actif", () => {
        expect(getAperalStatus(aperal("Amiens"))).toBe("active");
    });
});

describe("getDirectionsUrl", () => {
    it("construit un itinéraire Google Maps vers les coordonnées", () => {
        expect(getDirectionsUrl({ latlong: [49.894, 2.295] })).toBe(
            "https://www.google.com/maps/dir/?api=1&destination=49.894,2.295"
        );
    });

    it("ne renvoie rien sans coordonnées", () => {
        expect(getDirectionsUrl({ name: "Le bar" })).toBeUndefined();
    });
});

describe("loadAperals", () => {
    it("trie les apérals par ville, accents compris", async () => {
        vi.spyOn(globalThis, "fetch").mockResolvedValue(
            Response.json([aperal("Reims"), aperal("Évry"), aperal("Amiens")])
        );
        const cities = (await loadAperals()).map((a) => a.city);
        expect(cities).toEqual(["Amiens", "Évry", "Reims"]);
    });

    it("signale un échec de chargement", async () => {
        vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 404 }));
        await expect(loadAperals()).rejects.toThrow("(404)");
    });
});
