console.log("Eastereggs loading");
const imageSciences = document.getElementById("palmeSciences");
const imageSf = document.getElementById("ea-sf");

let clicsSciences = 0;
let clicsSf = 0;

imageSciences.addEventListener("click", async () => {
    clicsSciences++;

    if (clicsSciences === 5) {
        const audio = new Audio("/sound/sciencesdecheance.mp3");
        await audio.play();
        clicsSciences = 0;
    }
});

imageSf.addEventListener("click", async () => {
    clicsSf++;

    if (clicsSf === 5) {
        const audio = new Audio("/sound/sf_pleurs_bebe_02.mp3");
        await audio.play();
        clicsSf = 0;
    }
});
