console.log("Bootstrap loading")
//Keep bootstrap import, it is needed for header in mobile mode
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

console.log("Script loading")

//#region Init search
const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById("search-submit");
const searchForm = document.getElementById("search-submit");

searchInput && searchInput.addEventListener("input", (e) => {
    if (e.target.value.length > 2) {
        searchSubmit.classList.remove("disabled")
    } else {
        searchSubmit.classList.add("disabled")
    }
})

searchSubmit && searchSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    window.find(searchInput.value)
})

searchForm && searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
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