import { afterEach, describe, expect, it, vi } from "vitest";
import { renderPng, serializeRuban, serializeSchema, shareOrDownload } from "../../src/core/falucheImage";

function svgWith(href: string) {
    const div = document.createElement("div");
    div.innerHTML = `<svg viewBox="0 0 10 10"><image href="${href}" /><circle r="2" /></svg>`;
    return div.querySelector("svg") as unknown as SVGSVGElement;
}

describe("serializeSchema", () => {
    afterEach(() => vi.unstubAllGlobals());

    it("intègre les écussons et fige la couleur du trait", async () => {
        vi.stubGlobal("fetch", vi.fn(async () => new Response(new Blob(["png"], { type: "image/png" }))));
        const markup = await serializeSchema(svgWith("/images/ecussons/amiens.png"), "#123456");
        expect(markup).toContain('href="data:image/png;base64,');
        expect(markup).toContain('width="1080"');
        expect(markup).toMatch(/color:\s*#123456|color:\s*rgb\(18, 52, 86\)/);
    });

    it("garde le ruban circulaire à sa taille naturelle", async () => {
        vi.stubGlobal("fetch", vi.fn(async () => new Response(new Blob(["png"], { type: "image/png" }))));
        const svg = svgWith("/images/insigne/beta.png");
        svg.setAttribute("viewBox", "0 0 900 120");
        svg.setAttribute("style", "height: 96px");
        const bande = await serializeRuban(svg, "#000");
        expect(bande).toMatchObject({ width: 900, height: 120 });
        expect(bande.markup).toContain('width="900"');
        expect(bande.markup).not.toContain("96px");
    });

    it("retire un écusson introuvable plutôt que d'échouer", async () => {
        vi.stubGlobal("fetch", vi.fn(async () => Promise.reject(new Error("hors ligne"))));
        const markup = await serializeSchema(svgWith("/images/ecussons/inconnu.png"), "#000");
        expect(markup).not.toContain("<image");
        expect(markup).toContain("<circle");
    });
});

describe("shareOrDownload", () => {
    const blob = new Blob(["png"], { type: "image/png" });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it("passe par le partage du téléphone quand il accepte les fichiers", async () => {
        const share = vi.fn(async () => {});
        vi.stubGlobal("navigator", { ...navigator, canShare: () => true, share });
        expect(await shareOrDownload(blob, "Ma faluche")).toBe("shared");
        expect(share).toHaveBeenCalledOnce();
    });

    it("ne télécharge rien si l'utilisateur annule le partage", async () => {
        const abort = Object.assign(new Error("annulé"), { name: "AbortError" });
        vi.stubGlobal("navigator", { ...navigator, canShare: () => true, share: vi.fn(async () => Promise.reject(abort)) });
        expect(await shareOrDownload(blob, "Ma faluche")).toBe("cancelled");
    });

    it("télécharge l'image sinon", async () => {
        const click = vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
        vi.stubGlobal("navigator", { ...navigator, canShare: undefined });
        expect(await shareOrDownload(blob, "Ma faluche")).toBe("downloaded");
        expect(click).toHaveBeenCalledOnce();
    });
});

describe("renderPng", () => {
    class FakeImage {
        onload: (() => void) | null = null;
        onerror: (() => void) | null = null;
        set src(value: string) {
            setTimeout(() => (value.startsWith("blob:") ? this.onload?.() : this.onerror?.()));
        }
    }

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it("dessine le schéma sur un fond, avec sa légende", async () => {
        vi.stubGlobal("Image", FakeImage);
        const ctx = { fillRect: vi.fn(), drawImage: vi.fn(), fillText: vi.fn(), fillStyle: "", font: "", textAlign: "" };
        vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(ctx as any);
        vi.spyOn(HTMLCanvasElement.prototype, "toBlob").mockImplementation(function (cb: BlobCallback) {
            cb(new Blob(["png"], { type: "image/png" }));
        });
        const blob = await renderPng("<svg/>", "#fff", "Ma faluche · Droit");
        expect(blob.type).toBe("image/png");
        expect(ctx.drawImage).toHaveBeenCalledWith(expect.anything(), 0, 0, 1080, 1080);
        expect(ctx.fillText).toHaveBeenCalledWith("Ma faluche · Droit", 540, expect.any(Number), expect.any(Number));
    });

    it("ajoute le ruban circulaire sous la faluche, sur toute la largeur utile", async () => {
        vi.stubGlobal("Image", FakeImage);
        const ctx = { fillRect: vi.fn(), drawImage: vi.fn(), fillText: vi.fn(), fillStyle: "", font: "", textAlign: "" };
        vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(ctx as any);
        let height = 0;
        vi.spyOn(HTMLCanvasElement.prototype, "toBlob").mockImplementation(function (this: HTMLCanvasElement, cb: BlobCallback) {
            height = this.height;
            cb(new Blob(["png"], { type: "image/png" }));
        });
        await renderPng("<svg/>", "#fff", "Ma faluche", { markup: "<svg/>", width: 960, height: 120 });
        // 1080 - 2 × 60 de marge = 960 de large, donc 120 de haut
        expect(ctx.drawImage).toHaveBeenLastCalledWith(expect.anything(), 60, 1100, 960, 120);
        expect(height).toBe(1080 + 120 + 40 + 90);
    });

    it("échoue proprement sans canvas", async () => {
        vi.stubGlobal("Image", FakeImage);
        vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
        await expect(renderPng("<svg/>", "#fff", "")).rejects.toThrow("Canvas indisponible");
    });
});
