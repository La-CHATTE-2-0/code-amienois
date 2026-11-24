import { afterEach, describe, expect, it, vi } from "vitest";
import { renderPng, serializeSchema, shareOrDownload } from "../../src/core/falucheImage";

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

    it("échoue proprement sans canvas", async () => {
        vi.stubGlobal("Image", FakeImage);
        vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
        await expect(renderPng("<svg/>", "#fff", "")).rejects.toThrow("Canvas indisponible");
    });
});
