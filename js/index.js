//Keep bootstrap import, it is needed for header in mobile mode
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

//#region Darkmode
let darkmode = localStorage.getItem("darkmode");
const darkmodeSwitch = document.getElementById("darkmode")
const body = document.querySelector("body")

if (darkmode === "true") {
    darkmodeSwitch.checked = true
    body.classList.add("dark")
}
else {
    darkmodeSwitch.checked = false
}

darkmodeSwitch.addEventListener("change", (e) => {
    if (e.target.checked === true) {
        localStorage.setItem("darkmode", "true")
        body.classList.add("dark")

    } else {
        localStorage.setItem("darkmode", "false")
        body.classList.remove("dark")
    }
})
//#endregion Darkmode