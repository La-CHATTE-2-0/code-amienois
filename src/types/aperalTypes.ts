export type Aperal = {
    city: string;
    description?: string;
    frequency?: string;
    places: Array<Place>;
    contactUrl?: string;
    color?: AperalColor;
};

export type Place = {
    name?: string;
    address?: string;
    latlong?: Array<number>;
};

export enum AperalColor {
    Red = "red",
    Green = "green",
    Orange = "orange",
}