

function removePolygon(name) {
    map.removeLayer(parksDict[name].layer);
}

function removeMarker(name) {
    map.removeLayer(parksDict[name].marker);
}

function showMarker(name) {
    parksDict[name].marker.addTo(map);
}

function showPolygon(name) {
    parksDict[name].layer.addTo(map);
}

let activePolygon = "";
function markerClick(name) {
    map.fitBounds(parksDict[name].layer.getBounds());
    
    if (activePolygon != "") {
        map.removeLayer(activePolygon);
    }
    
    activePolygon = parksDict[name].layer;
    showPolygon(name);
}













