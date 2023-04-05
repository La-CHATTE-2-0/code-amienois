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

//#region ChecklistCongres
const checkboxes = document.querySelectorAll('.checkcongres');
const helpicons = document.querySelectorAll('.help-icon');

if(localStorage.length > 0){
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        const value = localStorage.getItem(key);
        document.getElementById(key).checked = value;
    });
}

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
});

helpicons.forEach(function(helpicon) {
    helpicon.addEventListener('click', function() {
        let modal = new bootstrap.Modal(
        document.getElementById("modal-info"),
        {}
        );
        document.getElementById('modal-content').innerHTML = helpicon.getAttribute('description');
        modal.show();
    });
});

document.getElementById('clear-checkboxes').addEventListener('click', function() {
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        const value = localStorage.getItem(key);
        document.getElementById(key).checked = false;
    });
    localStorage.clear();
  });
//#endregion ChecklistCongres