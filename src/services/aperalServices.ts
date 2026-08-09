import { Aperal } from "../types/aperalTypes";

export async function loadAperals(): Promise<Aperal[]> {
    const res = await fetch("/data/aperals.json");
    if (!res.ok) {
        throw new Error(`Unable to load aperals.json (${res.status})`);
    }
    return (await res.json()) as Aperal[];
}