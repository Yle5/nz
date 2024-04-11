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

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`

   <b>Lake Tekapo</b>
   <ul> 
     <li>Breite:${lat.toFixed(5)}</li>
     <li>Länge:${lng.toFixed(5)}</li>
   </ul>

   `).openPopup();

   L.control.scale({
    imperial: false
   }).addTo(map);