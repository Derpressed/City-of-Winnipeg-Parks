// button for main-page map
mapButton.addEventListener("click", () => {
    innerContainer.classList.toggle("switch");
    containerMap.classList.toggle("switch");

    if (mainHeaderSearchText.classList.contains("toggle")) {
        mainHeaderSearchText.classList.toggle("toggle")
    }

    if (mainSearchButton.classList.contains("toggle")) {
        mainSearchText.classList.toggle("toggle");
        mainSearchButton.classList.toggle("toggle");
    }

    if (containerMap.classList.contains("switch")) {
        // container map wants to be turned off
        containerMap.inert = false;
    } else {
        containerMap.inert = true;
    }
});

// button for the top hot-bar in map-page
parksTitleButton.addEventListener("click", () => {
    innerContainer.classList.toggle("switch");
    containerMap.classList.toggle("switch");

    if (containerMap.classList.contains("switch")) {
        // container map wants to be turned off
        containerMap.inert = false;
    } else {
        containerMap.inert = true;
    }

    if (mapHeaderSearchText.classList.contains("toggle")) {
        mapHeaderSearchText.classList.toggle("toggle");
    }
});