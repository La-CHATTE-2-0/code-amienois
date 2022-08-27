// Avant d'utiliser un Service Worker,
// on vérifie que c'est possible.
if (navigator && "serviceWorker" in navigator) {
    // Puis on déclare celui-ci
    // via la fonction `register`
    navigator.serviceWorker
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
    console.log("No service worker: ", navigator)
    // Si le navigateur ne permet pas
    // d'utiliser un Service Worker
    // on ne fait rien de particulier.
    // Le site devrait continuer à
    // fonctionner normalement.
}