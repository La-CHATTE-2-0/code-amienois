import { ref, watch } from "vue";
import { cities, colorNames, ecusson, provinces, swatchColors } from "./villes";

/** Ruban choisi dans les listes (« ville:Amiens », « province:picardie ») ou décrit à la main */
export type ChoixRuban =
    | { ref: string }
    | { ref: "autre"; nom: string; couleurs: string[] };

export type FalucheConfig = {
    etudes: ChoixRuban | null;
    /** Ancienne ville d'études : sur l'écusson du haut, au-dessus de la ville actuelle */
    etudesAvant: ChoixRuban | null;
    /** Année du changement, écrite sur le ruban de la ville d'études actuelle */
    anneeChangement: string;
    province: ChoixRuban | null;
    naissance: ChoixRuban | null;
};

/** Ce que le schéma dessine pour un ruban supérieur */
export type RubanResolu = { nom: string; couleurs: string[]; ecusson?: string };

// Velours noir, seul proposé sur le schéma
export const VELOURS_COLOR = "#141214";

export const AUTRE = "autre";
export const cityRef = (name: string) => `ville:${name}`;
export const provinceRef = (id: string) => `province:${id}`;

export const defaultConfig = (): FalucheConfig => ({
    etudes: { ref: cityRef("Amiens") },
    etudesAvant: null,
    anneeChangement: "",
    province: null,
    naissance: null,
});

export function resolveRuban(choix: ChoixRuban | null | undefined): RubanResolu | null {
    if (!choix) return null;
    if ("nom" in choix) {
        const couleurs = choix.couleurs.map((name) => swatchColors[name]).filter(Boolean);
        return choix.nom.trim() && couleurs.length ? { nom: choix.nom.trim(), couleurs } : null;
    }
    const [kind, key] = choix.ref.split(":");
    const found =
        kind === "ville"
            ? cities.find((c) => c.name === key)
            : kind === "province"
              ? provinces.find((p) => p.id === key)
              : undefined;
    if (!found) return null;
    return {
        nom: found.name,
        couleurs: colorNames(found.colors).map((name) => swatchColors[name] ?? "transparent"),
        ecusson: ecusson(found.image),
    };
}

// ---- Stockage sur l'appareil ----

const KEY = "ma-faluche";
const VERSION = 1;

const isChoix = (c: any): c is ChoixRuban =>
    c !== null &&
    typeof c === "object" &&
    typeof c.ref === "string" &&
    (c.ref !== AUTRE ||
        (typeof c.nom === "string" && Array.isArray(c.couleurs) && c.couleurs.every((x: unknown) => typeof x === "string")));

const choixOrNull = (c: unknown) => (isChoix(c) ? c : null);

/** Garde ce qui est lisible dans un stockage abîmé ou incomplet, le reste reprend sa valeur par défaut */
export function sanitize(raw: any): FalucheConfig {
    const base = defaultConfig();
    if (!raw || typeof raw !== "object") return base;
    return {
        etudes: "etudes" in raw ? choixOrNull(raw.etudes) : base.etudes,
        etudesAvant: choixOrNull(raw.etudesAvant),
        anneeChangement: typeof raw.anneeChangement === "string" ? raw.anneeChangement.slice(0, 4) : "",
        province: choixOrNull(raw.province),
        naissance: choixOrNull(raw.naissance),
    };
}

type Stored = { version: number; config: unknown };

function read(): Stored | null {
    try {
        const stored = JSON.parse(localStorage.getItem(KEY) ?? "null");
        return stored && typeof stored.version === "number" ? stored : null;
    } catch {
        return null;
    }
}

// Écrit par une version plus récente de l'app (ancien cache PWA) : on n'y touche pas
const fromNewerVersion = (stored: Stored | null) => (stored?.version ?? 0) > VERSION;

export function loadConfig(): FalucheConfig {
    const stored = read();
    if (!stored || fromNewerVersion(stored)) return defaultConfig();
    return sanitize(stored.config);
}

export function saveConfig(config: FalucheConfig) {
    if (fromNewerVersion(read())) return;
    try {
        localStorage.setItem(KEY, JSON.stringify({ version: VERSION, config }));
    } catch {
        // Stockage plein ou bloqué : la faluche reste affichée, simplement pas retenue
    }
}

export function clearConfig() {
    try {
        localStorage.removeItem(KEY);
    } catch {
        // Rien à faire
    }
}

/** Configuration réactive, enregistrée à chaque changement */
export function useFalucheConfig() {
    const config = ref<FalucheConfig>(loadConfig());
    watch(config, (value) => saveConfig(value), { deep: true });
    const reset = () => {
        clearConfig();
        config.value = defaultConfig();
    };
    return { config, reset };
}
