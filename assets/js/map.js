/*------------------------------------------------------array of event objects--*/

const events = [
    {
        title: "RPOAS Quiz Night",
        location: "Motherwell United Service Club, ML1 1TY",
        lat: 55.7841963,
        lng: -3.9906829,
        datetime: "2020-06-29 20:00",
        description: `Get your thinking caps on for the quiz night. Bring family and friends, the more the merrier. The winners will be crowned Lanarkshire Branch Champions and win a top prize.`,
        number: "One"
    },
    {
        title: "Gin Trip in Auld Reekie",
        location: "National Museum of Scotland, Edinburgh, EH1 1JF",
        lat: 55.9469809,
        lng: -3.1927411,
        datetime: "2020-07-13 19:30",
        description: `Join us for a gin tasting at the beautiful National Museum of Scotland followed by dinner.`,
        number: "Two"
    },
    {
        title: "Drumpellier Police Dinner",
        location: "Drumpellier Golf Club, Coatbridge, ML5 1RX",
        lat: 55.8604836,
        lng: -4.0542339,
        datetime: "2020-07-30 19:00",
        description: ``
    },
    {
        title: "RPOAS Lunch",
        location: "The Castle Rooms, Uddingston, G71 7PE",
        lat: 55.820283,
        lng: -4.0835657,
        datetime: "2020-08-09 13:00",
        description: ``
    },
    {
        title: "Quiz Night",
        location: "Colville Park Club, Motherwell, ML1 4UG",
        lat: 55.8006031,
        lng: -3.9837373,
        datetime: "2020-09-02 20:30",
        description: ``
    },
    {
        title: "Annual General Meeting",
        location: "Hamilton Caledonian Bowling Club, ML3 7BN",
        lat: 55.7753011,
        lng: -4.0311063,
        datetime: "2020-10-01 14:00",
        description: ``
    },
];

/*------------------------------------------------------Google map, markers and info windows--*/
/*--Took inspiration from https://developers.google.com/maps/documentation/javascript/infowindows--*/

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
        let windowContent = `
        <div class="form-section">
            <h3>${event.title}</h3>
            <h4>${event.datetime}</h4>
            <h4>${event.location}</h4>
        </div>`;
        let infoWindow = new google.maps.InfoWindow({
            content: windowContent
        });
        eventsList.insertAdjacentHTML("beforeend", `
        <div class="form-section main-text row">
            <div class="col">
                <div id="heading${event.number}" class="row">
                    <div class="col-10" data-toggle="collapse" data-target="#collapse${event.number}" aria-expanded="false" aria-controls="collapse${event.number}">
                        <h3>${event.title}</h3>
                        <h4>${event.datetime}</h4>
                        <h5>${event.location}</h5>
                    </div>
                    <div class="col-2">
                        <h3><i class="fas fa-calendar-check"></i></h3>
                    </div>
                </div>
                <div id="collapse${event.number}" class="collapse row" aria-labelledby="heading${event.number}" data-parent="#accordian">
                    <div class="main-text col">
                        ${event.description}
                        <h5 class="main-text">Book your place now
                        <a class="main-text gold-hover" href="/contact.html" target="_blank"><i class="fas fa-envelope"></i></a>
                        <a class="main-text gold-hover" href="https://www.facebook.com/rpoas.lanarkshire" target="_blank"><i class="fab fa-facebook-square"></i></a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        `);
        marker.addListener("click", function() {
            infoWindow.open(map, marker);
        });
    });
};
