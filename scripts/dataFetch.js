let ourParks = [];
let parksDict = {};
function assignMethod(geoFile) {
    let allParks = L.geoJSON(geoFile, {
        onEachFeature: function(feature, layer) {
            let parkName = feature.properties.park_name;

            parksDict[parkName] = {
                layer: layer,
                marker: L.marker(layer.getBounds().getCenter())
            }
            parksDict[parkName].marker.bindPopup(parkName, {
               autoClose: false,
               autoPan: false,
               closeOnClick: false
            })

            parksDict[parkName].marker.on("click", () => {
                markerClick(parkName);
            });
        }
    });
}


async function fetchData() {
    const onlineDataResponse = await fetch("parkData/parksWPG.geojson");
    const onlineData = await onlineDataResponse.json();
    const ourDataResponse = await fetch("parkData/parks_with_data.json");
    const ourData = await ourDataResponse.json();
    
    
    assignMethod(onlineData);

    for (let i = 0; i < ourData.length; i++) {
        ourParks.push(ourData[i]);
    }

    document.dispatchEvent(new Event("parkDataReady"));
}

fetchData();