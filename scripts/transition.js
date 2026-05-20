const mapButton = document.getElementById("text-map");
const parksTitleButton = document.querySelector(".parks-title-hotbar");

const innerContainer = document.getElementById("inner-container");
const containerMap = document.getElementById("container-map");

const hotbarSearchText = document.getElementById("outer-search-input");
const innerSearchText = document.getElementById("text-search");

// button for main-page map
mapButton.addEventListener("click", () => {
    innerContainer.classList.toggle("switch");
    containerMap.classList.toggle("switch");

    if (hotbarSearchText.classList.contains("toggle")) {
        hotbarSearchText.classList.toggle("toggle")
    }

    if (innerSearchText.classList.contains("toggle")) {
        innerSearchText.classList.toggle("toggle");
        innerTextBox.classList.toggle("toggle");
    }
});

// button for the top hot-bar in map-page
parksTitleButton.addEventListener("click", () => {
    innerContainer.classList.toggle("switch");
    containerMap.classList.toggle("switch");
});