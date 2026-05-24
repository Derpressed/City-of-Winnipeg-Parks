lightMap.addTo(map);
mapOptionsParent.classList.add("light");

mapModeButton.addEventListener("click", () => {
    if (mapOptionsParent.classList.contains("light")) {
        mapOptionsParent.classList.remove("light");
        mapOptionsParent.classList.add("dark");
        
        map.removeLayer(lightMap);
        darkMap.addTo(map);
    } else {
        mapOptionsParent.classList.remove("dark");
        mapOptionsParent.classList.add("light");
        
        map.removeLayer(darkMap);
        lightMap.addTo(map)
    }
});

mapOriginButton.addEventListener("click", () => {
    map.setView(centerCoord, 11);
});



