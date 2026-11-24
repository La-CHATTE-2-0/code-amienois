import data from "./quizImages.json";

export type Matiere = "velours" | "satin";
export type Circulaire = { filiere: string; matiere: Matiere; couleurs: string[]; amiens?: boolean };

// Mêmes teintes que $data-fal-circu-infos dans _circulaires.scss
export const circuColors: Record<string, string> = {
    argente: "#CCCCCC",
    blanc: "#FFFFFF",
    bleu: "#155CC8",
    bleuroy: "#0914BC",
    bordeaux: "#740000",
    fiolet: "#2C1355",
    fuschia: "#9c0952",
    gris: "#777777",
    jaune: "#FFC107",
    marron: "#522F18",
    noir: "#000000",
    orange: "#EF801E",
    rouge: "#BC1212",
    rose: "#F3A0EA",
    saumon: "#E89292",
    vert: "#1c6800",
    vertclair: "#67df12",
    vertfonce: "#007e06",
    violet: "#51009e",
};

// Filières triées par ordre alphabétique, quel que soit leur ordre dans le quiz
export const circulaires: Circulaire[] = (data.circulaires as Circulaire[])
    .map(({ filiere, matiere, couleurs, amiens }) => ({ filiere, matiere, couleurs, amiens }))
    .sort((a, b) => a.filiere.localeCompare(b.filiere, "fr"));

export const findCirculaire = (filiere: string | null | undefined) =>
    circulaires.find((c) => c.filiere === filiere);
