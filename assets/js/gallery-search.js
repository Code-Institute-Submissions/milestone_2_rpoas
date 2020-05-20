/*------------------------------------------------------search photos by location--*/
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
];

/*--Function only shows first result. Why does loop not fix this???--*/

function search() {
    const searchResultsContainer = document.querySelector(".search-results-container");
    const input = document.querySelector("#photo-location").value;

    photos.forEach((photo) => {
        if (!photo.location.toLowerCase().includes(input.toLowerCase())) {
            console.log("no results");
        } else if (photo.location.toLowerCase().includes(input.toLowerCase())) {
            console.log(photo);
            searchResultsContainer.insertAdjacentHTML("beforeend", `
                <div class="col-2 gallery-photo-container">
                    <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">
                </div>`);
            return photo;
        };
    });
};