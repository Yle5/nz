let lat = -43.883333;
let lng = 170.516667;
let zoom = 11;

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*
let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`

   <b>Lake Tekapo</b>
   <ul> 
     <li>Breite:${lat.toFixed(5)}</li>
     <li>Länge:${lng.toFixed(5)}</li>
   </ul>

   `).openPopup();
   */

//Maßstab hinzugefügt
L.control.scale({
    imperial: false
}).addTo(map);

let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Lake Tekapo"
    }
}

L.geoJSON(jsonPunkt, {}).bindPopup(function (layer) {
    return `
    <b>${layer.feature.properties.name}</b>
    <ul> 
      <li>Breite:${layer.feature.geometry.coordinates[1].toFixed(5)}</li>
      <li>Länge:${layer.feature.geometry.coordinates[0].toFixed(5)}</li>
    </ul>
    `;
}).addTo(map);