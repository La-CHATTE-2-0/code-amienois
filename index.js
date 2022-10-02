console.log("Script loaded")

//#region Init search
const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById("search-submit");

searchInput.addEventListener("input", (e) => {
    if (e.target.value.length > 2) {
        searchSubmit.classList.remove("disabled")
    } else {
        searchSubmit.classList.add("disabled")
    }
})

searchSubmit.addEventListener("click", (e) => {
    window.find(searchInput.value)
})
//#endregion Init search