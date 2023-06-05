//Keep bootstrap import, it is needed for header in mobile mode
import * as bootstrap from 'bootstrap'

//#region Init search
console.log("Init search")
const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById("search-submit");
const searchForm = document.getElementById("search-submit");

searchInput?.addEventListener("input", (e) => {
    if (e.target.value.length > 2) {
        searchSubmit?.classList.remove("disabled")
    } else {
        searchSubmit.classList.add("disabled")
    }
})

searchSubmit?.addEventListener("click", (e) => {
    e.preventDefault()
    window.find(searchInput?.value)
})

searchForm?.addEventListener("submit", (e) => {
    e.preventDefault()
    window.find(searchInput?.value)
})
//#endregion Init search
