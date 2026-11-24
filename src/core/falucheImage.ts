// Transforme le schéma SVG affiché en image PNG à partager ou à télécharger

const EXPORT_SIZE = 1080;
const FILE_NAME = "ma-faluche.png";

async function toDataUrl(src: string): Promise<string> {
    const response = await fetch(src);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });
}

/**
 * Copie autonome du SVG : écussons intégrés (une image chargée depuis un SVG
 * dessiné dans un canvas ne va pas chercher ses ressources) et couleur de trait figée.
 */
export async function serializeSchema(svg: SVGSVGElement, strokeColor: string): Promise<string> {
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", String(EXPORT_SIZE));
    clone.setAttribute("height", String(EXPORT_SIZE));
    clone.style.color = strokeColor;

    const images = [...clone.querySelectorAll("image")];
    await Promise.all(
        images.map(async (image) => {
            const href = image.getAttribute("href");
            if (!href || href.startsWith("data:")) return;
            try {
                image.setAttribute("href", await toDataUrl(href));
            } catch {
                image.remove();
            }
        })
    );
    return new XMLSerializer().serializeToString(clone);
}

function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Image du schéma illisible"));
        img.src = src;
    });
}

export async function renderPng(svgMarkup: string, background: string, caption: string): Promise<Blob> {
    const svgUrl = URL.createObjectURL(new Blob([svgMarkup], { type: "image/svg+xml" }));
    try {
        const img = await loadImage(svgUrl);
        const captionHeight = caption ? 90 : 0;
        const canvas = document.createElement("canvas");
        canvas.width = EXPORT_SIZE;
        canvas.height = EXPORT_SIZE + captionHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas indisponible");
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, EXPORT_SIZE, EXPORT_SIZE);
        if (caption) {
            ctx.fillStyle = "#8a7a5a";
            ctx.font = "600 34px system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(caption, EXPORT_SIZE / 2, EXPORT_SIZE + 52, EXPORT_SIZE - 80);
        }
        return await new Promise((resolve, reject) =>
            canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Export impossible"))), "image/png")
        );
    } finally {
        URL.revokeObjectURL(svgUrl);
    }
}

export type ShareResult = "shared" | "downloaded" | "cancelled";

/** Partage natif quand le téléphone sait partager un fichier, téléchargement sinon */
export async function shareOrDownload(blob: Blob, title: string): Promise<ShareResult> {
    const file = new File([blob], FILE_NAME, { type: "image/png" });
    if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
        try {
            await navigator.share({ files: [file], title });
            return "shared";
        } catch (error) {
            if ((error as DOMException)?.name === "AbortError") return "cancelled";
            // Partage refusé par le navigateur : on retombe sur le téléchargement
        }
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = FILE_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return "downloaded";
}
