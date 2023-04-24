console.log("Chargement du script easteregg.js");
const image = document.getElementById("palmeSciences");

let clicsSciences = 0;

image.addEventListener("click", () => {
    clicsSciences++;

    if (clicsSciences === 5) {
        const audio = new Audio("../sound/sciencesdecheance.mp3");
        audio.play();
        clicsSciences = 0;
    }
});
