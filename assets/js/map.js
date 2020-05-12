function initMap() {
    const mapProp = {
        center: new google.maps.LatLng(55.8617792, -4.0054024),
        zoom: 7,
    }
    const map = new google.maps.Map(document.querySelector("#photoMap"), mapProp);
    
    setMarkers(map);
};

const locations = [
    ["Hamilton", 55.7715968, -4.1186458],
    ["Motherwell", 55.7934441, -4.0486918],
    ["Coatbridge", 55.8600105, -4.1000587],
    ["Airdrie", 55.8618126, -4.0402511]
];

function setMarkers(map) {
    for (let i=0; i < locations.length; i++) {
        let town = locations[i];
        let marker = new google.maps.Marker({
            position: {lat: town[1], lng: town[2]},
            map: map,
            title: town[0]
        })
    }
}
