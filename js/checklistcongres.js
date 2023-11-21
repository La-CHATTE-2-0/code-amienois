import * as bootstrap from 'bootstrap'

//#region ChecklistCongres
const checkboxes = document.querySelectorAll('.checkcongres');
const helpicons = document.querySelectorAll('.help-icon');

if (localStorage.length > 0) {
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        const dom = document.getElementById(key)
        if (dom != null) {
            const value = localStorage.getItem(key);
            dom.checked = value;
        }
    });
}

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
});

helpicons.forEach(function (helpicon) {
    helpicon.addEventListener('click', function () {
        let modal = new bootstrap.Modal(
            document.getElementById("modal-info"),
            {}
        );
        document.getElementById('modal-content').innerHTML = helpicon.getAttribute('description');
        modal.show();
    });
});

document.getElementById('clear-checkboxes').addEventListener('click', function () {
    const excludedKeys = ['darkmode', 'debug'];
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        if (!excludedKeys.includes(key)) {
            document.getElementById(key).checked = false;
        }
    });
    localStorage.clear();
});
//#endregion ChecklistCongres