const photos = [
    {
        title: "Biggar Gala Day (1975)",
        src: "/assets/images/gallery/biggar-galaday-1975-min.jpg",
        location: "Biggar",
        caption: `The local 'Bobby' makes a capture, with the help of a few 'Deputies'. Willie Stewart, 
        is the arresting officer.`,
        year: 1975
    },
    {
        title: "Police Motorcycle Course (1974)",
        src: "/assets/images/gallery/bikes-1974-min.jpg",
        location: "Inverness",
        caption: `Motorcycle course held on 7th August 1974 at Inverness Castle, which was then the Inverness Constabulary HQ. 
        Two riders are from the City of Glasgow Police, identifiable by the twin blue beacons on their 
        machines (RGD568M and 572M). The remaining 4 officers are from the home force, on force bikes WST296L and 297L 
        and (I think), CST87M and 86M. Thanks to Dave Connor for the information.`,
        year: 1974
    },
    {
        title: "Cambuslang Police Office (1964)",
        src: "/assets/images/gallery/cambuslang-1964-min.jpg",
        location: "Cambuslang",
        caption: `Can you name the two Officers with the Sunbeam Rapier Convertible?`,
        year: 1964
    },
    {
        title: "Caterpillar Workers Strike (1987)",
        src: "/assets/images/gallery/caterpillarworkerstrike-oldeclub-1987-min.jpg",
        location: "Uddingston",
        caption: `Many will remember the Caterpillar Plant, Tannochside, Uddingston, which 
        operated there for over 30 decades, from 1956 to 1987, producing giant bulldozers with their 
        distinctive tank-style wheel tracks. A proud workforce with a community spirit perhaps accounts 
        for the Police being able to man the picket lines dressed only in their normal uniforms, with their 
        backs to the crowds.`,
        year: 1987
    },
];

const searchResultsContainer = document.querySelector(".search-results-container");
const yearOption = document.querySelector(".filtered-years");
const locationOption = document.querySelector(".filtered-locations");

search = function() {
    const images = document.querySelectorAll("img");
    const inputLocation = document.querySelector("#photo-location").value.toLowerCase();
    const inputYear = document.querySelector("#photo-year").value;
    const noResults = document.querySelector(".no-results");

    searchResultsContainer.innerHTML = "";
    noResults.innerHTML = "";

    photos.forEach((photo) => {
        const photoLocation = photo.location.toLowerCase();
        const photoYear = photo.year;     
        const photoHTML = `
                <div class="col-12 col-md-3 col-lg-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`;

        if (inputLocation == photoLocation && inputYear == photoYear) {
            console.log(photo);
            noResults.innerHTML = "";
            searchResultsContainer.insertAdjacentHTML("beforeend", photoHTML);
        } else if (inputLocation == photoLocation && inputYear == "") {
            console.log(photo);
            noResults.innerHTML = "";
            searchResultsContainer.insertAdjacentHTML("beforeend", photoHTML);
        } else if (inputLocation == "" && inputYear == photoYear) {
            console.log(photo);
            noResults.innerHTML = "";
            searchResultsContainer.insertAdjacentHTML("beforeend", photoHTML);            
        } else if (!inputLocation == photoLocation && !inputYear == photoYear) {
            console.log(`no results for ${inputLocation} ${inputYear}`);
            noResults.innerHTML = `no results for ${inputLocation} ${inputYear}`;
        } else if (inputLocation == "" && inputYear == "") {
            console.log(`no location or input chosen`);
            searchResultsContainer.insertAdjacentHTML("beforeend", photoHTML);  
        }
        else {
            console.log("error");
        };
    });
    const gallery = Modal(document.querySelector(".search-results-container"));
};