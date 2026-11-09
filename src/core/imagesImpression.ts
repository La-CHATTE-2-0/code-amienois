import type { Router } from "vue-router";

/*
 * Les images en loading="lazy" ne se chargent qu'en approchant de l'écran :
 * à l'impression, celles jamais affichées sortent vides dans le PDF.
 * On les passe en chargement normal une fois la page affichée (quand le
 * navigateur est au repos), et en dernier recours juste avant l'impression.
 */
export function chargerImagesDifferees(racine: ParentNode = document): void {
    racine.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
        img.loading = "eager";
    });
}

function auRepos(action: () => void): void {
    if ("requestIdleCallback" in window) {
        window.requestIdleCallback(action, { timeout: 3000 });
    } else {
        setTimeout(action, 1500);
    }
}

export function installerImagesImpression(router: Router): void {
    window.addEventListener("beforeprint", () => chargerImagesDifferees());

    // Le contenu d'une nouvelle page est rendu après la navigation (transition comprise)
    router.afterEach(() => {
        setTimeout(() => auRepos(() => chargerImagesDifferees()), 600);
    });
}
