/*------------------------------------------------------array of photo objects--*/

const photos = [
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
        location: "Eastkilbride",
        caption: " ",
        year: 1973
    },
    {
        title: "Bishopbriggs (1971)",
        src: "/assets/images/gallery/bishopbriggs-1971-min.jpg",
        location: "Bishopbriggs",
        caption: " ",
        year: 1971
    },
    {
        title: "Eastkilbride Strike (1969)",
        src: "/assets/images/gallery/eastkilbride-strike-1969-min.jpg",
        location: "Eastkilbride",
        caption: " ",
        year: 1969
    },
    {
        title: "Exercise",
        src: "/assets/images/gallery/exercise-min.jpg",
        location: " ",
        caption: " ",
        year: " "
    },
    {
        title: "Motherwell & Wishaw Police Football Team (1948)",
        src: "/assets/images/gallery/football-motherwell-wishaw-1948-min.jpg",
        location: "Motherwell",
        caption: " ",
        year: 1948
    },
    {
        title: "Francie & Josie (1990)",
        src: "/assets/images/gallery/franciejosie-1990-min.jpg",
        location: " ",
        caption: " ",
        year: 1990
    },
    {
        title: "Bagpipers at Hamilton Sheriff Court",
        src: "/assets/images/gallery/hamiltonsheriffcourt-bagpipes-min.jpg",
        location: "Hamilton",
        caption: " ",
        year: " "
    },
    {
        title: "Lanarkshire HQ (1941)",
        src: "/assets/images/gallery/lanarkshirehq-hamilton-1941-min.jpg",
        location: "Hamilton",
        caption: " ",
        year: 1941
    },
    {
        title: "Lanarkshire Police Rugby Club (1962)",
        src: "/assets/images/gallery/lanarkshirerugby-1962-min.jpg",
        location: " ",
        caption: " ",
        year: 1962
    },
    {
        title: "Lanarkshire WPCs (1970)",
        src: "/assets/images/gallery/lanarkshirewpc-1970-min.jpg",
        location: " ",
        caption: " ",
        year: 1970
    },
];

const searchResultsContainer = document.querySelector(".search-results-container");

/*------------------------------------------------------display all photos--*/

function allPhotos() {
    photos.forEach((photo) => {
        searchResultsContainer.insertAdjacentHTML("beforeend", `
            <div class="col-12 col-md-3 col-lg-2 gallery-photo-container" tabindex="0">
                <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal">
            </div>`)      
    });
    const gallery = Modal(document.querySelector(".search-results-container"));
};

document.addEventListener("load", allPhotos());


/*------------------------------------------------------search photos by location and year--*/
/*------------took inspiration from https://www.includehelp.com/code-snippets/search-from-array-of-objects-javascript%20.aspx--*/

function search() {
    const images = document.querySelectorAll("img");
    const inputLocation = document.querySelector("#photo-location").value.toLowerCase();
    const inputYear = document.querySelector("#photo-year").value;
    const noResults = document.querySelector(".no-results");

    searchResultsContainer.innerHTML = "";
    noResults.innerHTML = ""

    photos.forEach((photo) => {
        const photoLocation = photo.location.toLowerCase();
        const photoYear = photo.year;

        if (inputLocation == photoLocation && inputYear == photoYear) {
            console.log(photo);
            noResults.innerHTML = "";
            searchResultsContainer.insertAdjacentHTML("beforeend", `
                <div class="col-12 col-md-3 col-lg-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`);
        } else if (inputLocation == photoLocation && inputYear == "") {
            console.log(photo);
            noResults.innerHTML = "";
            searchResultsContainer.insertAdjacentHTML("beforeend", `
                <div class="col-12 col-md-3 col-lg-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`);
        } else if (inputLocation == "" && inputYear == photoYear) {
            console.log(photo);
            noResults.innerHTML = "";
            searchResultsContainer.insertAdjacentHTML("beforeend", `
                <div class="col-12 col-md-3 col-lg-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`);            
        } else if (!inputLocation == photoLocation && !inputYear == photoYear) {
            console.log(`no results for ${inputLocation} ${inputYear}`);
            noResults.innerHTML = `no results for ${inputLocation} ${inputYear}`;
        }
        else {
            console.log("error");
        };
    });
    const gallery = Modal(document.querySelector(".search-results-container"));
};

/*------------------------------------------------------operates the modal--*/
/*------------took inspiration from https://wesbos.com/beginner-javascript--*/

function Modal(searchResultsContainer) {
    const images = Array.from(searchResultsContainer.querySelectorAll("img"));
    const body = document.querySelector("body")
    const modal = document.querySelector(".modal");
    const prevButton = modal.querySelector(".previous");
    const nextButton = modal.querySelector(".next");
    let currentImage;
    
    function showImage(el) {
        console.log(el);
        modal.querySelector("img").src = el.src;
        modal.querySelector(".modal-title").textContent = el.alt;
        modal.querySelector("figcaption p").textContent = el.dataset.caption;
        currentImage = el;
    }
    
    function handleImageClick(event) {
        showImage(event.currentTarget);
    }

    function showNextImage() {
        showImage(currentImage.parentElement.nextElementSibling.firstElementChild);
    }

    function showPrevImage() {
        showImage(currentImage.parentElement.previousElementSibling.firstElementChild);
    }

    function arrowKeys(event) {
        if (event.key === "ArrowRight") showNextImage();
        if (event.key === "ArrowLeft") showPrevImage();
    }

    images.forEach(image => image.addEventListener("click", handleImageClick));

    /* Why is this not displaying modal when pressing return???

    images.forEach(image => {
        image.addEventListener("keyup", e => {
            if (e.key === "Enter") {
                showImage(e.currentTarget);
            }
        });
    });

    */

    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
}

/*------------------------------------------------------sort photos by year--*/
/*--took inspiration from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/--*/


function sortPhotos(key, order = "asc") {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }
        const varA = (typeof a[key] === "string") ? a[key].toLowerCase() : a[key];
        const varB = (typeof b[key] === "string") ? b[key].toLowerCase() : b[key];
        let comparison = 0;

        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === "desc") ? (comparison * -1) : comparison
        );
    };
}

function sortYear(order) {
    newPhotoArray = photos.sort(sortPhotos("year", order));
    console.log(newPhotoArray);

    search(newPhotoArray);
}





