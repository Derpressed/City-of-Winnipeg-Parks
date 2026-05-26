// picnicData stores all the park names available
// validParkArr stores all the geoJSON features for ONLY valid parks (with reservations)

mainSearchButton.addEventListener("click", () => {
    if (mainSearchButton.classList.contains("toggle")) {
        console.log("Search");
    } else {
        mainSearchButton.classList.toggle("toggle");
        mainSearchText.classList.toggle("toggle");
    }
});

mainHeaderSearchButton.addEventListener("click", () => {
    if (mainHeaderSearchText.classList.contains("toggle")) {
        console.log("Search");
    } else {
        mainHeaderSearchText.classList.toggle("toggle");
    }
});

mapHeaderSearchButton.addEventListener("click", () => {
    if (mapHeaderSearchText.classList.contains("toggle")) {
        console.log("Search");
    } else {
        mapHeaderSearchText.classList.toggle("toggle");
    }
});