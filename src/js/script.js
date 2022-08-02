// Avant d'utiliser un Service Worker,
// on vérifie que c'est possible.
if ("serviceWorker" in navigator) {
    // Puis on déclare celui-ci
    // via la fonction `register`
    navigator.serviceWorkerContainer
        .register(new URL('./service-worker.js', import.meta.url))
        .then(registration => {
            // On a réussi ! Youpi !
            console.log(
                "App: Achievement unlocked."
            );
        })
        .catch(error => {
            // Il y a eu un problème
            console.error(
                "App: Crash de Service Worker",
                error
            );
        });
} else {
    // Si le navigateur ne permet pas
    // d'utiliser un Service Worker
    // on ne fait rien de particulier.
    // Le site devrait continuer à
    // fonctionner normalement.
}