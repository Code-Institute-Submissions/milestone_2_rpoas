const locations = [
    ["Hamilton", 55.7715968, -4.1186458],
    ["Motherwell", 55.7934441, -4.0486918],
    ["Coatbridge", 55.8600105, -4.1000587],
    ["Airdrie", 55.8618126, -4.0402511]
];

function initMap() {
    const map = new google.maps.Map(document.querySelector("#photoMap"), {
        zoom: 10,
        center: {lat: 55.8617792, lng: -4.0054024}
    });

    function setMarkers(map) {
    for (let i=0; i < locations.length; i++) {
        let town = locations[i];
        let marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: {lat: town[1], lng: town[2]},
            title: town[0],
            label: town[0]
        });
        marker.addListener("click", toggleBounce);    
    }
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    }
    setMarkers(map);
};
