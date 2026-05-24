
let picnicData = "";
let polygonLayer = "";
let parkFocused = "";

// parkFeatures is features from WPG API
// parkData is our own JSON
function onMarkerClick(parkFeatures, parkData) {
    
    // IF we see that there is no layer within our map, then add one
    if (polygonLayer === "") {
        
        // adding only the specific park we want
        polygonLayer = L.geoJSON(parkFeatures, {
            filter: function(feature) {
                return feature.properties.park_name === parkData.name;
            }
        }).addTo(map);

        // change our park focused to the one we are currently on
        parkFocused = parkData.name;        
    } else { // else if we DO see a layer within the map already
        if (parkData.name != parkFocused) { // if we select a new park
            map.removeLayer(polygonLayer); // remove old layer then replace layer with new park
            polygonLayer = L.geoJSON(parkFeatures, { 
                filter: function(feature) {
                    return feature.properties.park_name === parkData.name;
                }
            }).addTo(map);    
            parkFocused = parkData.name; // change our park we focus to
        }
    }


    
    let coordinate = polygonLayer.getBounds().getCenter();
    console.log(coordinate);
    map.setView(coordinate, 16);
}


// fetches our own data that stores ONLY parks with picnic reservations
fetch("parkData/parks_with_data.json")
    .then((response) => response.json())
    .then(parkData => {
        picnicData = parkData; // store it into global variable
    })

// fetches City of Winnipeg Park API
fetch("parkData/parksWPG.geojson")
    .then((response) => response.json())
    .then(parks => {
        const numParks = parks.features.length; // the number of parks within Winnipeg
        for (let i = 0; i < numParks; i++) { // iterate through that list
            let polygon = L.geoJSON(parks.features[i]); // find the polygon at which each park resides in
            let parkName = (parks.features[i].properties.park_name); // name as well
            
            for (let j = 0; j < picnicData.length; j++) { // iterate through OUR data to see ONLY specific parks
                let dataName = picnicData[j].name;
                if (parkName == dataName) {
                    let centerCoord = (polygon.getBounds().getCenter()); // getting center coordinate to have our marker
                    let parkMarker = L.marker(centerCoord, 16).addTo(map); // putting our marker at the center coordinate of each park
                    
                    // click event for marker
                    parkMarker.on("click", () => {
                        onMarkerClick(parks.features[i], picnicData[j]);
                    })
                }
            }
        }
    })