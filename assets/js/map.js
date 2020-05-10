/*
function initMap() {
    const map = new google.maps.Map(document.querySelector("#photoMap"), {
        zoom: 9,
        center: {
            lat: 55.8617792,
            lng: -4.0054024
        }
    });
}
*/

/*

    var marker = new google.maps.Marker({
        position: {lat: 55.8617792, lng:-4.0054024},
        map: map,
        label: "Center"
    });
*/

function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(55.8617792, -4.0054024),
        zoom: 7,
    }
    var map = new google.maps.Map(document.getElementById("photoMap"), mapProp);
    
    setMarkers(map);
};

var locations = [
    ["Hamilton", 55.7715968, -4.1186458],
    ["Motherwell", 55.7934441, -4.0486918],
    ["Coatbridge", 55.8600105, -4.1000587],
    ["Airdrie", 55.8618126, -4.0402511]
];

function setMarkers(map) {
    for (var i=0; i < locations.length; i++) {
        var town = locations[i];
        var marker = new google.maps.Marker({
            position: {lat: town[1], lng: town[2]},
            map: map,
            title: town[0]
        })
    }
}
