/*------------------------------------------------------search photos by location and year--*/
/*------------took inspiration from https://www.includehelp.com/code-snippets/search-from-array-of-objects-javascript%20.aspx--*/

const photos = [
    {
        title: "Bishopbriggs (1971)",
        src: "/assets/images/gallery/bishopbriggs-1971-min.jpg",
        location: "Bishopbriggs",
        caption: " ",
        year: 1971
    },
    {
        title: "Biggar Gala Day (1975)",
        src: "/assets/images/gallery/biggar-galaday-1975-min.jpg",
        location: "Biggar",
        caption: " ",
        year: 1975
    },
    {
        title: "Bikes (1974)",
        src: "/assets/images/gallery/bikes-1974-min.jpg",
        location: " ",
        caption: " ",
        year: 1974
    },
    {
        title: "Cambuslang (1964)",
        src: "/assets/images/gallery/cambuslang-1964-min.jpg",
        location: "Cambuslang",
        caption: " ",
        year: 1964
    },
    {
        title: "Caterpillar Workers Strike (1987)",
        src: "/assets/images/gallery/caterpillarworkerstrike-oldeclub-1987-min.jpg",
        location: "Uddingston",
        caption: " ",
        year: 1987
    },
    {
        title: "Control Room, Motherwell (1985)",
        src: "/assets/images/gallery/controlroom-motherwell-1985-min.jpg",
        location: "Motherwell",
        caption: " ",
        year: 1985
    },
    {
        title: "Crash (1974)",
        src: "/assets/images/gallery/crash-1974-min.jpg",
        location: " ",
        caption: " ",
        year: 1974
    },
    {
        title: "Cumbernauld (1997)",
        src: "/assets/images/gallery/cumbernauld-1997-min.jpg",
        location: "Cumbernauld",
        caption: " ",
        year: 1997
    },
    {
        title: "Dogs, Low Moss (1985)",
        src: "/assets/images/gallery/dog-lowmoss-1985-min.jpg",
        location: "Bishopbriggs",
        caption: " ",
        year: 1985
    },
    {
        title: "Dog Branch, Pollok (1999)",
        src: "/assets/images/gallery/dogbranch-pollok-1999-min.jpg",
        location: "Pollok",
        caption: " ",
        year: 1999
    },
    {
        title: "Eastkilbride (1973)",
        src: "/assets/images/gallery/eastkilbride-1973-min.jpg",
        location: "Uddingston",
        caption: " ",
        year: 1973
    },
];

/*--

if (no locationMatch and no yearMatch) {
    display "No results"
} else if (locationMatch and yearMatch) {
    display results
} else if (locationMatch or yearMatch) {
    display results
} else {

}

--*/

function allPhotos() {
    photos.forEach((photo) => {
        document.querySelector(".search-results-container").insertAdjacentHTML("beforeend", `
            <div class="col-2 gallery-photo-container">
                <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
            </div>`)      
    });
};

function search() {
    const images = document.querySelectorAll("img");
    const searchResultsContainer = document.querySelector(".search-results-container");
    const inputLocation = document.querySelector("#photo-location").value.toLowerCase();
    const inputYear = document.querySelector("#photo-year").value;

    searchResultsContainer.innerHTML = "";

    photos.forEach((photo) => {
        const photoLocation = photo.location.toLowerCase();
        const photoYear = photo.year;

        if (inputLocation == photoLocation && inputYear == photoYear) {
            console.log(photo);
            searchResultsContainer.insertAdjacentHTML("beforeend", `
                <div class="col-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`);
        } else if (inputLocation == photoLocation && inputYear == "") {
            console.log(photo);
            searchResultsContainer.insertAdjacentHTML("beforeend", `
                <div class="col-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`);
        } else if (inputLocation == "" && inputYear == photoYear) {
            console.log(photo);
            searchResultsContainer.insertAdjacentHTML("beforeend", `
                <div class="col-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`);            
        }
        else {
            console.log(`no results for ${inputLocation} ${inputYear}`);
        };
    });
};

document.addEventListener("load", allPhotos());