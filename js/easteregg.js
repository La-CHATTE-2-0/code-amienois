console.log("Eastereggs loading");
const image = document.getElementById("palmeSciences");

let clicsSciences = 0;

image.addEventListener("click", async () => {
    clicsSciences++;

    if (clicsSciences === 5) {
        const audio = new Audio("/sound/sciencesdecheance.mp3");
        await audio.play();
        clicsSciences = 0;
    }
});
