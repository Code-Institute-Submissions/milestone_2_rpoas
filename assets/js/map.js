const events = [
    {
        title: "RPOAS Quiz Night",
        location: "Motherwell United Service Club, ML1 1TY",
        lat: 55.7841963,
        lng: -3.9906829,
        datetime: "2020-06-29 20:00"
    },
    {
        title: "Gin and Cultural Trip",
        location: "National Museum of Scotland, Edinburgh, EH1 1JF",
        lat: 55.9469809,
        lng: -3.1927411,
        datetime: "2020-07-13 19:30"
    },
    {
        title: "Drumpellier Police Dinner",
        location: "Drumpellier Golf Club, Coatbridge, ML5 1RX",
        lat: 55.8604836,
        lng: -4.0542339,
        datetime: "2020-07-30 19:00"
    },
    {
        title: "RPOAS Lunch",
        location: "The Castle Rooms, Uddingston, G71 7PE",
        lat: 55.820283,
        lng: -4.0835657,
        datetime: "2020-08-09 13:00"
    },
    {
        title: "Quiz Night",
        location: "Colville Park Club, Motherwell, ML1 4UG",
        lat: 55.8006031,
        lng: -3.9837373,
        datetime: "2020-09-02 20:30"
    },
    {
        title: "Annual General Meeting",
        location: "Hamilton Caledonian Bowling Club, ML3 7BN",
        lat: 55.7753011,
        lng: -4.0311063,
        datetime: "2020-10-01 14:00"
    },
];

function initMap() {
    const map = new google.maps.Map(document.querySelector("#photoMap"), {
        zoom: 9,
        center: {lat: 55.8617792, lng: -4.0054024}
    });
    setMarkers(map);
};

function setMarkers(map) {
    const eventsList = document.querySelector(".events-list");

    events.forEach((event) => {
        let marker = new google.maps.Marker({
            map: map,
            position: {lat: event.lat, lng: event.lng},
            title: event.title
        });
        eventsList.insertAdjacentHTML("beforeend", `
        <li class="form-section">
            <h3>${event.title}</h3>
            <h4>${event.datetime}</h4>
            <h5>${event.location}</h5>
        </li>
        `)
    });
};



/*
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
*/
