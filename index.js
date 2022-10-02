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

//#region Darkmode
let darkmode = localStorage.getItem("darkmode");
const darkmodeSwitch = document.getElementById("darkmode")
const body = document.querySelector("body")

if (darkmode == "true") {
    console.log("oui")
    darkmodeSwitch.checked = true
    body.classList.add("dark")
}
else {
    darkmodeSwitch.checked = false
}

darkmodeSwitch.addEventListener("change", (e) => {
    if (e.target.checked == true) {
        localStorage.setItem("darkmode", "true")
        body.classList.add("dark")

    } else {
        localStorage.setItem("darkmode", "false")
        body.classList.remove("dark")
    }
})
//#endregion Darkmode