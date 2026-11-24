export type Province = { id: string; name: string; image: string; colors: string };
export type City = { name: string; image: string; colors: string; province: string };

// Couleurs écrites telles qu'au code : l'ordre compte (première couleur en haut du ruban)
export const provinces: Province[] = [
    { id: "artois", image: "artois", name: "Artois", colors: "Bleu roi et or" },
    { id: "champagne", image: "champagne", name: "Champagne", colors: "Bleu et blanc" },
    { id: "flandres", image: "flandres", name: "Flandres", colors: "Or et noir" },
    { id: "iledefrance", image: "ile de france", name: "Île-de-France", colors: "Bleu roi et or" },
    { id: "normandie", image: "normandie", name: "Normandie", colors: "Rouge et or" },
    { id: "picardie", image: "picardie", name: "Picardie", colors: "Bleu et blanc" },
];

export const cities: City[] = [
    { name: "Abbeville", image: "abbeville", colors: "Bleu roi et rouge", province: "picardie" },
    { name: "Amiens", image: "amiens", colors: "Rouge et bleu roi", province: "picardie" },
    { name: "Arras", image: "arras", colors: "Rouge et or", province: "artois" },
    { name: "Beauvais", image: "beauvais", colors: "Rouge et blanc", province: "picardie" },
    { name: "Compiègne", image: "compiègne", colors: "Bleu roi et or", province: "picardie" },
    { name: "Creil", image: "creil", colors: "Bleu roi et or", province: "picardie" },
    { name: "Doullens", image: "doullens", colors: "Bleu roi et or", province: "picardie" },
    { name: "Hirson", image: "hirson", colors: "Bleu et blanc", province: "picardie" },
    { name: "Laon", image: "laon", colors: "Bleu et blanc", province: "picardie" },
    { name: "Lille", image: "lille", colors: "Rouge et blanc", province: "flandres" },
    { name: "Noyon", image: "noyon", colors: "Rouge et blanc", province: "picardie" },
    { name: "Paris", image: "paris", colors: "Bleu roi et rouge", province: "iledefrance" },
    { name: "Reims", image: "reims", colors: "Bleu roi et blanc", province: "champagne" },
    { name: "Rouen", image: "rouen", colors: "Bleu roi et rouge", province: "normandie" },
    { name: "Saint-Quentin", image: "saint-quentin", colors: "Blanc et bleu", province: "picardie" },
    { name: "Senlis", image: "senlis", colors: "Rouge et or", province: "picardie" },
    { name: "Soissons", image: "soissons", colors: "Bleu et blanc", province: "picardie" },
    { name: "Valenciennes", image: "valenciennes", colors: "Rouge et or", province: "flandres" },
];

// Teintes des rubans (mêmes valeurs que les circulaires quand elles existent)
export const swatchColors: Record<string, string> = {
    "bleu roi": "#0914BC",
    bleu: "#155CC8",
    rouge: "#BC1212",
    blanc: "#FFFFFF",
    or: "#C9A227",
    noir: "#000000",
    vert: "#1C6800",
    jaune: "#FFC107",
    violet: "#51009E",
    orange: "#EF801E",
    argent: "#CCCCCC",
};

/** « Rouge et bleu roi » → ["rouge", "bleu roi"] */
export const colorNames = (colors: string) =>
    colors
        .toLowerCase()
        .split(" et ")
        .map((name) => name.trim());

export const swatch = (colors: string) => colorNames(colors).map((name) => swatchColors[name] ?? "transparent");

export const ecusson = (image: string) => `/images/ecussons/${image}.png`;
