import { describe, expect, it } from "vitest";
import pages from "../../src/core/page";
import config from "../../staticwebapp.config.json";

// Azure doit servir l'index.html propre à chaque page (titre et description des aperçus de lien)
describe("staticwebapp.config.json", () => {
    it("déclare une réécriture pour chaque page interne", () => {
        const routes = new Map(config.routes.map((r) => [r.route, r.rewrite]));
        for (const page of Object.values(pages)) {
            if (page.url === pages.code.url) continue;
            expect(routes.get(page.url), page.url).toBe(`${page.url}/index.html`);
        }
    });
});
