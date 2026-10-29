import {
    AperalColor,
    type Aperal,
    type AperalStatus,
    type Place,
    type WeekDay,
} from "../types/aperalTypes";

export const weekDays: Array<{ label: string; value: WeekDay }> = [
    { label: "Lun", value: "lundi" },
    { label: "Mar", value: "mardi" },
    { label: "Mer", value: "mercredi" },
    { label: "Jeu", value: "jeudi" },
    { label: "Ven", value: "vendredi" },
];

export const aperalStatuses: Record<
    AperalStatus,
    { label: string; color: string; icon: string }
> = {
    active: { label: "Actif", color: "#43a047", icon: "mdi-glass-mug-variant" },
    irregular: { label: "Irrégulier", color: "#fb8c00", icon: "mdi-progress-question" },
    inactive: { label: "Inactif", color: "#e53935", icon: "mdi-skull" },
};

const statusByColor: Record<AperalColor, AperalStatus> = {
    [AperalColor.Green]: "active",
    [AperalColor.Orange]: "irregular",
    [AperalColor.Red]: "inactive",
};

export function getAperalStatus(aperal: Aperal): AperalStatus {
    return statusByColor[aperal.color ?? AperalColor.Green];
}

export function getDirectionsUrl(place: Place): string | undefined {
    if (!place.latlong) return undefined;
    return `https://www.google.com/maps/dir/?api=1&destination=${place.latlong.join(",")}`;
}

export async function loadAperals(): Promise<Aperal[]> {
    const res = await fetch("/data/aperals.json");
    if (!res.ok) {
        throw new Error(`Unable to load aperals.json (${res.status})`);
    }
    const aperals = (await res.json()) as Aperal[];
    return aperals.sort((a, b) => a.city.localeCompare(b.city, "fr"));
}
