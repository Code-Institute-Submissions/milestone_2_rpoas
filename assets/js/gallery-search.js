/*------------------------------------------------------search photos by location--*/
/*------------took inspiration from https://www.includehelp.com/code-snippets/search-from-array-of-objects-javascript%20.aspx--*/

const photos = [
    {
        title: "Biggar Gala Day (1975)",
        src: "/assets/images/gallery/biggar-galaday-1975-min.jpg",
        location: "Biggar",
        caption: "",
        year: 1975
    },
    {
        title: "Bikes (1974)",
        src: "/assets/images/gallery/bikes-1974-min.jpg",
        location: "",
        caption: "",
        year: 1974
    },
    {
        title: "Bishopbriggs (1971)",
        src: "/assets/images/gallery/bishopbriggs-1971-min.jpg",
        location: "Bishopbriggs",
        caption: "",
        year: 1971
    },
    {
        title: "Cambuslang (1964)",
        src: "/assets/images/gallery/cambuslang-1964-min.jpg",
        location: "Cambuslang",
        caption: "",
        year: 1964
    },
    {
        title: "Caterpillar Workers Strike (1987)",
        src: "/assets/images/gallery/caterpillarworkerstrike-oldeclub-1987-min.jpg",
        location: "Uddingston",
        caption: "",
        year: 1987
    },
];

/*--Function only shows first result. Why does loop not fix this???--*/

function search() {
    const searchResultsContainer = document.querySelector(".search-results-container");
    const input = document.querySelector("#photo-location").value;

    for (i=0; i<photos.length; i++) {
        if (!photos[i].location.toLowerCase().includes(input.toLowerCase())) {
            console.log("no results");
            searchResultsContainer.innerHTML = `Sorry, no results match ${input}`;
            return;
        }   else {
            console.log("results");
            searchResultsContainer.insertAdjacentHTML("beforeend", `<img class="gallery-photo" src="${photos[i].src}" alt="${photos[i].title}" data-caption="${photos[i].caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">`);
            return;
        };
    }}