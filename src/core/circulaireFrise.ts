// Dispose sur un ruban à plat ce que l'article 7 fait figurer sur le circulaire, de
// gauche à droite : initiales, baccalauréat et année, emblème de la discipline, puis
// une étoile par année d'études avec ses marques, et la fin de cursus.

import { circuColors, findCirculaire } from "./circulaires";
import { BACS, EMBLEMES, MARQUES, STATUTS, type CirculaireConfig } from "./circulaireConfig";

export const RUBAN_H = 120;
const QUILLE_H = 84;
const PAD = 36;
const GAP = 30;
const MIN_W = 640;

// Moivre : bleu pour le public, blanc pour le privé
export const MOIVRE_PUBLIC = "#8CC8EE";
export const MOIVRE_PRIVE = "#FFFFFF";
const RUBAN_NOIR = "#111111";

export type Element =
    | { kind: "text"; role: string; x: number; y: number; text: string; size: number }
    | { kind: "image"; role: string; x: number; y: number; w: number; h: number; href: string; rotate?: number }
    | { kind: "band"; role: string; points: string; color: string };

export type Frise = {
    width: number;
    height: number;
    /** Couleurs du ruban, de haut en bas (vide tant qu'aucune filière n'est choisie) */
    couleurs: string[];
    matiere: "satin" | "velours" | null;
    elements: Element[];
};

// Proportions (largeur / hauteur) des images entières : la boîte épouse l'image,
// qui garde ainsi sa taille prévue malgré ses marges transparentes
const RATIO: Record<string, number> = {
    beta: 0.55,
    phi: 0.72,
    epsilon: 0.71,
    phiEpsilon: 1.19,
    gamma: 1,
    daeu: 3.58,
    lettre_c: 0.69,
    lettre_i: 0.39,
    simple_palme: 0.74,
    large_palme: 0.72,
    double_palme: 0.67,
    tete_de_vache: 1,
    tete_de_mort: 0.77,
};

// Largeur approximative d'un texte en capitales grasses
const textWidth = (text: string, size: number) => text.length * size * 0.68;

/** Bande posée de biais sous une étoile (moivre ou ruban noir) */
function biais(cx: number, offset = 0) {
    const x = cx + offset;
    return `${x - 48},${RUBAN_H} ${x + 10},0 ${x + 44},0 ${x - 14},${RUBAN_H}`;
}

export function buildFrise(c: CirculaireConfig): Frise {
    const elements: Element[] = [];
    let x = PAD;
    const mid = RUBAN_H / 2;

    // Initiales
    if (c.initiales) {
        elements.push({ kind: "text", role: "initiales", x, y: mid, text: c.initiales, size: 72 });
        x += textWidth(c.initiales, 72) + GAP;
    }

    // Baccalauréat, lettres capacitaire / international, puis année
    const bac = BACS.find((b) => b.id === c.bac);
    if (bac) {
        if (bac.image) {
            const h = bac.id === "daeu" ? 34 : 84;
            const w = h * (RATIO[bac.id] ?? 1);
            elements.push({ kind: "image", role: "bac", x, y: mid - h / 2, w, h, href: bac.image });
            x += w + 6;
        } else if (c.bacAutre) {
            elements.push({ kind: "text", role: "bac", x, y: mid, text: c.bacAutre, size: 46 });
            x += textWidth(c.bacAutre, 46) + 6;
        }
        for (const [on, name] of [
            [c.capacitaire, "lettre_c"],
            [c.international, "lettre_i"],
        ] as const) {
            if (!on) continue;
            const h = 56;
            const w = h * RATIO[name];
            elements.push({ kind: "image", role: name, x, y: mid - h / 2 + 6, w, h, href: `/images/insigne/${name}.png` });
            x += w + 6;
        }
        if (c.anneeBac) {
            // Un peu plus bas que la lettre, comme sur l'exemple du Code
            elements.push({ kind: "text", role: "annee-bac", x, y: mid + 18, text: c.anneeBac, size: 40 });
            x += textWidth(c.anneeBac, 40);
        }
        x += GAP;
    }

    // Emblème de la discipline
    const embleme = EMBLEMES.find((e) => e.name === c.embleme);
    if (embleme) {
        const s = 90;
        elements.push({ kind: "image", role: "embleme", x, y: mid - s / 2, w: s, h: s, href: embleme.image, rotate: embleme.rotate });
        x += s + GAP;
    }

    // Une étoile par année. Le moivre passe sous la première, puis à chaque changement d'établissement.
    let prive = c.prive;
    c.annees.forEach((annee, i) => {
        const cx = x + 40;
        if (i > 0 && annee.changement) prive = !prive;
        if (i === 0 || annee.changement) {
            elements.push({ kind: "band", role: "moivre", points: biais(cx), color: prive ? MOIVRE_PRIVE : MOIVRE_PUBLIC });
        }
        if (annee.perte) {
            elements.push({ kind: "band", role: "ruban-noir", points: biais(cx, i === 0 || annee.changement ? 30 : 0), color: RUBAN_NOIR });
        }

        const statut = STATUTS.find((s) => s.id === annee.statut) ?? STATUTS[0];
        // Le « 0 » n'occupe qu'un tiers de son image : boîte agrandie pour le même rendu
        const s = { doree: 66, argentee: 66, equivalence: 48, sabbatique: 150 }[annee.statut];
        const cy = annee.statut === "sabbatique" ? 44 : 43;
        elements.push({ kind: "image", role: `annee-${annee.statut}`, x: cx - s / 2, y: cy - s / 2, w: s, h: s, href: statut.image });

        // Sous l'étoile : drapeau du pays, « A » d'alternance
        const sous = [
            annee.etranger && { role: "drapeau", href: "/images/insigne/drapeaux.png", w: 34 },
            annee.alternance && { role: "alternance", href: "/images/insigne/lettre_a.png", w: 26 },
        ].filter(Boolean) as { role: string; href: string; w: number }[];
        const total = sous.reduce((sum, m) => sum + m.w, 0) + (sous.length - 1) * 4;
        let sx = cx - total / 2;
        for (const m of sous) {
            elements.push({ kind: "image", role: m.role, x: sx, y: 80, w: m.w, h: 30, href: m.href });
            sx += m.w + 4;
        }

        let slot = 80;
        const marque = MARQUES.find((m) => m.id === annee.marque);
        if (marque) {
            const h = 64;
            const w = h * (RATIO[marque.id] ?? 0.7);
            elements.push({ kind: "image", role: marque.id, x: cx + 34, y: mid - h / 2 - 6, w, h, href: marque.image });
            slot += w + 8;
        }
        if (annee.quille) {
            // Image presque carrée dont seule une fine bande centrale est dessinée
            const h = QUILLE_H;
            const w = h * 0.96;
            elements.push({ kind: "image", role: "quille", x: cx - w / 2, y: RUBAN_H - 8, w, h, href: "/images/insigne/quille.png" });
        }
        x += slot + 10;
    });
    if (c.annees.length) x += GAP - 10;

    // Fin de cursus : petit « a » (agrégation) et/ou « c » (CAPES) suivis d'une petite palme
    const concours = [c.agregation && "a", c.capes && "c"].filter(Boolean).join("");
    if (concours) {
        elements.push({ kind: "text", role: "concours", x, y: mid + 10, text: concours, size: 40 });
        x += textWidth(concours, 40) + 4;
        const h = 50;
        const w = h * RATIO.simple_palme;
        elements.push({ kind: "image", role: "palme-concours", x, y: mid - h / 2, w, h, href: "/images/insigne/simple_palme.png" });
        x += w + GAP;
    }
    if (c.abeille) {
        const s = 62;
        elements.push({ kind: "image", role: "abeille", x, y: mid - s / 2, w: s, h: s, href: "/images/insigne/abeille.png" });
        x += s + GAP;
    }

    const circ = findCirculaire(c.filiere);
    return {
        width: Math.max(Math.round(x - GAP + PAD), MIN_W),
        height: RUBAN_H + (c.annees.some((a) => a.quille) ? QUILLE_H - 8 : 0),
        couleurs: circ ? circ.couleurs.map((name) => circuColors[name] ?? "transparent") : [],
        matiere: circ?.matiere ?? null,
        elements,
    };
}
