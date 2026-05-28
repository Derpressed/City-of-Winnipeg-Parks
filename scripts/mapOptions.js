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

let isShowing = false;
mapShowAllParks.addEventListener("click", () => {

    if (isShowing == true) {
        isShowing = false;

        for (let i = 0; i < ourParks.length; i++) {
            map.removeLayer(parksDict[ourParks[i].name].marker);
            removePolygon(ourParks[i].name);
            
            // variable is present within 'mapDataFunc.js'
            activePolygon = "";
        }
    
    } else {
        isShowing = true;

        for (let i = 0; i < ourParks.length; i++) {
            parksDict[ourParks[i].name].marker.addTo(map);
        }
    }
});

