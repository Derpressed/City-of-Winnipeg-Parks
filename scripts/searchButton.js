const mainInnerSearch = document.getElementById("text-search");
const mainOuterSearch = document.getElementById("hotbar-search-button");
const mapOuterSearch = document.getElementById("map-page-search");

const innerSearch = document.getElementById("text-search");
const outerSearch = document.getElementById("outer-search-input");

const innerTextBox = document.getElementById("inner-search-input");

mainInnerSearch.addEventListener("click", () => {
    if (mainInnerSearch.classList.contains("toggle")) {
        console.log("Search");
    } else {
        mainInnerSearch.classList.toggle("toggle");
        innerTextBox.classList.toggle("toggle");
    }
});

mainOuterSearch.addEventListener("click", () => {
    if (outerSearch.classList.contains("toggle")) {
        console.log("Search");
    } else {
        outerSearch.classList.toggle("toggle");
    }
});