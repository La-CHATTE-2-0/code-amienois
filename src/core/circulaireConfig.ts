import data from "./quizImages.json";
import { circulaires } from "./circulaires";

// ---- Ce que l'article 7 place sur le ruban circulaire ----

export type BacId = "beta" | "phi" | "epsilon" | "phiEpsilon" | "gamma" | "daeu" | "autre";

export const BACS: { id: BacId; label: string; image?: string }[] = [
    { id: "gamma", label: "Général (depuis 2021) · γ", image: "/images/insigne/gamma.png" },
    { id: "beta", label: "Économique et social (avant 2021) · β", image: "/images/insigne/beta.png" },
    { id: "phi", label: "Littéraire (avant 2021) · φ", image: "/images/insigne/phi.png" },
    { id: "epsilon", label: "Scientifique (avant 2021) · ε", image: "/images/insigne/epsilon.png" },
    { id: "phiEpsilon", label: "Scientifique spé SVT, à Amiens (avant 2021) · φε", image: "/images/insigne/phi_epsilon.png" },
    { id: "daeu", label: "DAEU", image: "/images/insigne/lettres_daeu.png" },
    { id: "autre", label: "Autre bac (initiales : STMG, STI2D…)" },
];

export type Statut = "doree" | "argentee" | "equivalence" | "sabbatique";

export const STATUTS: { id: Statut; label: string; image: string }[] = [
    { id: "doree", label: "Étoile dorée · année débutée", image: "/images/insigne/etoile_doree.png" },
    { id: "argentee", label: "Étoile argentée · année redoublée", image: "/images/insigne/etoile_argentee.png" },
    { id: "equivalence", label: "« E » · année validée par équivalence", image: "/images/insigne/lettre_e.png" },
    { id: "sabbatique", label: "« 0 » · année sabbatique", image: "/images/insigne/petit_zero.png" },
];

export type Marque = "simple_palme" | "large_palme" | "double_palme" | "tete_de_vache" | "tete_de_mort";

export const MARQUES: { id: Marque; label: string; image: string }[] = [
    { id: "large_palme", label: "Large palme · major de promotion", image: "/images/insigne/large_palme.png" },
    { id: "simple_palme", label: "Simple palme · fin de cycle", image: "/images/insigne/simple_palme.png" },
    { id: "double_palme", label: "Double palmes · diplôme obtenu", image: "/images/insigne/double_palme.png" },
    { id: "tete_de_vache", label: "Tête de vache · année aux rattrapages", image: "/images/insigne/tete_de_vache.png" },
    { id: "tete_de_mort", label: "Tête de mort · abandon de filière", image: "/images/insigne/tete_de_mort.png" },
];

export type Embleme = { name: string; filiere: string; image: string; rotate?: number };

// Emblèmes des disciplines, les mêmes que dans le quiz
export const EMBLEMES: Embleme[] = (data.emblemes as (Embleme & { amiens?: boolean })[])
    .map(({ name, filiere, image, rotate }) => ({ name, filiere, image, rotate }))
    .sort((a, b) => a.filiere.localeCompare(b.filiere, "fr"));

/** Emblème proposé d'office pour une filière, quand les deux listes portent le même nom */
export const emblemeDeFiliere = (filiere: string | null) => EMBLEMES.find((e) => e.filiere === filiere)?.name ?? null;

export type Annee = {
    statut: Statut;
    /** Drapeau sous l'étoile : année à l'étranger */
    etranger: boolean;
    /** Petit « A » sous l'étoile : année en alternance */
    alternance: boolean;
    /** Ruban noir sous l'étoile : perte ou vol de la faluche */
    perte: boolean;
    /** Nouveau moivre sous l'étoile : passage du public au privé, ou l'inverse */
    changement: boolean;
    /** Quille pendue au ruban : service militaire ou civique */
    quille: boolean;
    marque: Marque | null;
};

export type CirculaireConfig = {
    actif: boolean;
    filiere: string | null;
    initiales: string;
    bac: BacId | null;
    bacAutre: string;
    capacitaire: boolean;
    international: boolean;
    anneeBac: string;
    embleme: string | null;
    /** Établissement de la première année : moivre bleu (public) ou blanc (privé) */
    prive: boolean;
    annees: Annee[];
    agregation: boolean;
    capes: boolean;
    abeille: boolean;
};

export const nouvelleAnnee = (): Annee => ({
    statut: "doree",
    etranger: false,
    alternance: false,
    perte: false,
    changement: false,
    quille: false,
    marque: null,
});

export const defaultCirculaire = (): CirculaireConfig => ({
    actif: false,
    filiere: null,
    initiales: "",
    bac: null,
    bacAutre: "",
    capacitaire: false,
    international: false,
    anneeBac: "",
    embleme: null,
    prive: false,
    annees: [nouvelleAnnee()],
    agregation: false,
    capes: false,
    abeille: false,
});

// ---- Relecture d'un stockage abîmé ----

const MAX_ANNEES = 15;
const bool = (v: unknown) => v === true;
const oneOf = <T extends string>(v: unknown, ids: readonly T[]) => (ids.includes(v as T) ? (v as T) : null);
const digits = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\D/g, "").slice(0, max) : "");
const letters = (v: unknown, max: number) =>
    typeof v === "string" ? v.replace(/[^\p{L}0-9]/gu, "").toUpperCase().slice(0, max) : "";

function sanitizeAnnee(raw: any): Annee {
    const base = nouvelleAnnee();
    if (!raw || typeof raw !== "object") return base;
    return {
        statut: oneOf(raw.statut, STATUTS.map((s) => s.id)) ?? base.statut,
        etranger: bool(raw.etranger),
        alternance: bool(raw.alternance),
        perte: bool(raw.perte),
        changement: bool(raw.changement),
        quille: bool(raw.quille),
        marque: oneOf(raw.marque, MARQUES.map((m) => m.id)),
    };
}

export function sanitizeCirculaire(raw: any): CirculaireConfig {
    const base = defaultCirculaire();
    if (!raw || typeof raw !== "object") return base;
    return {
        actif: bool(raw.actif),
        filiere: circulaires.some((c) => c.filiere === raw.filiere) ? raw.filiere : null,
        initiales: letters(raw.initiales, 4),
        bac: oneOf(raw.bac, BACS.map((b) => b.id)),
        bacAutre: letters(raw.bacAutre, 6),
        capacitaire: bool(raw.capacitaire),
        international: bool(raw.international),
        anneeBac: digits(raw.anneeBac, 2),
        embleme: EMBLEMES.some((e) => e.name === raw.embleme) ? raw.embleme : null,
        prive: bool(raw.prive),
        annees: Array.isArray(raw.annees) ? raw.annees.slice(0, MAX_ANNEES).map(sanitizeAnnee) : base.annees,
        agregation: bool(raw.agregation),
        capes: bool(raw.capes),
        abeille: bool(raw.abeille),
    };
}

export { MAX_ANNEES, letters, digits };
