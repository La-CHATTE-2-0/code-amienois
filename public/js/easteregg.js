console.log("Eastereggs loading");
const imageSciences = document.getElementById("ea-palmeSciences");
const imageSf = document.getElementById("ea-sf");
const imageDroit = document.getElementById("ea-droits");
const imagePharma = document.getElementById("ea-cad-pharma");
const billotInge = document.getElementById("ea-billot-inge");
const carotte = document.getElementById("ea-carotte");

let clicsSciences = 0;
let clicsSf = 0;
let clicsDroit = 0;
let clicsPharma = 0;
let clicsInge = 0;
let clicsCarotte = 0;

const sextwo = "https://fr.pornhub.com/view_video.php?viewkey=660bd170cf0c6#1"

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

imageDroit.addEventListener("click", async () => {
    clicsDroit++;

    if (clicsDroit === 5) {
        const audio = new Audio("/sound/interfi.mp3");
        await audio.play();
        clicsDroit = 0;
    }
});

imagePharma.addEventListener("click", async () => {
    clicsPharma++;

    if (clicsPharma === 5) {
        const audio = new Audio("/sound/jean-loup.mp3");
        await audio.play();
        imagePharma.src = "/jean-loup.png"
        clicsPharma = 0;
    }
});

billotInge.addEventListener("click", async () => {
    clicsInge++;

    if (clicsInge === 5) {
        billotInge.src = "/images/insigne/troll_ingé.png"
        clicsInge = 0;
    }
});

carotte.addEventListener("click", async () => {
    clicsCarotte++;

    if (clicsCarotte === 5) {
        document.location.href = sextwo
        clicsCarotte = 0;
    }
});