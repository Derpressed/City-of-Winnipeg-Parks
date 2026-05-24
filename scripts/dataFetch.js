
function onMarkerClick(park) {
    map.setView(park.coordinate, 16);
}

// fetch("parkData/parks.json")
//     .then((response) => response.json())
//     .then((parks) => {
//         for (let i = 0; i < parks.length; i++) {
        
//             let marker = L.marker(parks[i].coordinate).addTo(map);
//             marker.bindPopup(`<b>${parks[i].name}</b>`, {autoClose: false, closeOnClick: false}).openPopup();
        
//             marker.on("click", () => {
//                 onMarkerClick(parks[i])
//             });
//         }
//     })

fetch("parkData/parks_and_data.geojson")
    .then((response) => response.json())
    .then(parks => {
        for (let i = 0; i < parks.features.length; i++) {
            console.log(parks.features[i]);
            L.geoJSON(parks.features[i]).addTo(map);
        }
    })