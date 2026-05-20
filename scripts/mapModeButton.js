lightMap.addTo(map);
mapModeButton.classList.add("light");

mapModeButton.addEventListener("click", () => {
    if (mapModeButton.classList.contains("light")) {
        mapModeButton.classList.remove("light");
        mapModeButton.classList.add("dark");
        
        map.removeLayer(lightMap);
        darkMap.addTo(map);
    } else {
        mapModeButton.classList.remove("dark");
        mapModeButton.classList.add("light");
        
        map.removeLayer(darkMap);
        lightMap.addTo(map)
    }
});