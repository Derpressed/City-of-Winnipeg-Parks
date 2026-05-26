// main-page "map" button
const mapButton = document.getElementById("text-map");

// main-page inner-container
const innerContainer = document.getElementById("inner-container");

// main-page header search
const mainHeaderSearchText = document.getElementById("outer-search-input");

// main-page header search button
const mainHeaderSearchButton = document.getElementById("hotbar-search-button");

// main-page inner container search button
const mainSearchButton = document.getElementById("text-search");

// main-page inner container search text
const mainSearchText = document.getElementById("inner-search-input");

// map-page "PARK" button
const parksTitleButton = document.querySelector(".parks-title-hotbar");

// map-page container
const containerMap = document.getElementById("container-map");

// map-page header search button
const mapHeaderSearchButton = document.getElementById("map-page-search");

// map-page header search text
const mapHeaderSearchText = document.getElementById("map-page-search-text");

// map-page map mode button (light/dark)
const mapModeButton = document.getElementById("colour-mode-button");

// map but lightmode
const lightMap = L.tileLayer("https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=wguwhsfBJybcFn9ybAg8", {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
});

// map but darkmode
const darkMap = L.tileLayer("https://api.maptiler.com/maps/streets-v4-dark/{z}/{x}/{y}.png?key=wguwhsfBJybcFn9ybAg8", {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
})

// center coordinate map of Winnipeg
const centerCoord = [49.87917848009978, -97.14560995229286];

// our map from Leaflet
var map = L.map("map").setView(centerCoord, 11);

// mapOptions sidebar
const mapOptionsParent = document.getElementById("map-options-parent");

// originButton for sidebar
const mapOriginButton = document.getElementById("map-origin-button");

// showAllParkNames for sidebar
const mapShowAllParks = document.getElementById("show-all-park-name");

// array of textboxes within the website
const textBoxes = [mainHeaderSearchText, mainSearchText, mapHeaderSearchText];