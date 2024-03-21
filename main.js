var map = L.map('map').setView([-43.883333, 170.516667], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-43.883333, 170.516667]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am in a lake.").openPopup();