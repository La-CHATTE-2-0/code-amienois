export type WeekDay = "lundi" | "mardi" | "mercredi" | "jeudi" | "vendredi";

export type Aperal = {
    city: string;
    description?: string;
    frequency?: string;
    days?: Array<WeekDay>;
    places: Array<Place>;
    contactUrl?: string;
    color?: AperalColor;
};

export type Place = {
    name?: string;
    address?: string;
    latlong?: [number, number];
};

/** Couleur saisie dans aperals.json, traduite en statut côté affichage. */
export enum AperalColor {
    Red = "red",
    Green = "green",
    Orange = "orange",
}

export type AperalStatus = "active" | "irregular" | "inactive";
