/*------------------------------------------------------array of photo objects--*/

const photos = [
    {
        title: "Biggar Gala Day (1975)",
        src: "/milestone_2_rpoas/assets/images/gallery/biggar-galaday-1975-min.jpg",
        location: "Biggar",
        caption: `The local 'Bobby' makes a capture, with the help of a few 'Deputies'. Willie Stewart, 
        is the arresting officer.`,
        year: 1975
    },
    {
        title: "Police Motorcycle Course (1974)",
        src: "/milestone_2_rpoas/assets/images/gallery/bikes-1974-min.jpg",
        location: "Inverness",
        caption: `Motorcycle course held on 7th August 1974 at Inverness Castle, which was then the Inverness Constabulary HQ. 
        Two riders are from the City of Glasgow Police, identifiable by the twin blue beacons on their 
        machines (RGD568M and 572M). The remaining 4 officers are from the home force, on force bikes WST296L and 297L 
        and (I think), CST87M and 86M. Thanks to Dave Connor for the information.`,
        year: 1974
    },
    {
        title: "Cambuslang Police Office (1964)",
        src: "/milestone_2_rpoas/assets/images/gallery/cambuslang-1964-min.jpg",
        location: "Cambuslang",
        caption: `Can you name the two Officers with the Sunbeam Rapier Convertible?`,
        year: 1964
    },
    {
        title: "Caterpillar Workers Strike (1987)",
        src: "/milestone_2_rpoas/assets/images/gallery/caterpillarworkerstrike-oldeclub-1987-min.jpg",
        location: "Uddingston",
        caption: `Many will remember the Caterpillar Plant, Tannochside, Uddingston, which 
        operated there for over 30 decades, from 1956 to 1987, producing giant bulldozers with their 
        distinctive tank-style wheel tracks. A proud workforce with a community spirit perhaps accounts 
        for the Police being able to man the picket lines dressed only in their normal uniforms, with their 
        backs to the crowds.`,
        year: 1987
    },
    {
        title: "Lanarkshire Control Room (1985)",
        src: "/milestone_2_rpoas/assets/images/gallery/controlroom-motherwell-1985-min.jpg",
        location: "Motherwell",
        caption: `Brian Dixon using 'State of the Art' equipment - not.`,
        year: 1985
    },
    {
        title: "Road Traffic Accident (1974)",
        src: "/milestone_2_rpoas/assets/images/gallery/crash-1974-min.jpg",
        location: "Larkhall",
        caption: `Can you name any of the officers?`,
        year: 1974
    },
    {
        title: "Cumbernauld 'N' Divison (1997)",
        src: "/milestone_2_rpoas/assets/images/gallery/cumbernauld-1997-min.jpg",
        location: "Cumbernauld",
        caption: `Who do you recognise and where are they now?`,
        year: 1997
    },
    {
        title: "Strathclyde Dog Branch (1985)",
        src: "/milestone_2_rpoas/assets/images/gallery/dog-lowmoss-1985-min.jpg",
        location: "Bishopbriggs",
        caption: `Andy Alexander with his dog, Zoltan, at the rear of Low Moss Young Offenders Institute, Bishopbriggs.`,
        year: 1985
    },
    {
        title: "Dog Branch, Pollok (1999)",
        src: "/milestone_2_rpoas/assets/images/gallery/dogbranch-pollok-1999-min.jpg",
        location: "Pollok",
        caption: `Lanarkshire Ladies enjoy a visit to the Dog Branch at Pollok. Smartly dressed o
        fficers with beautiful dogs and great weather made for a memorable day. Thanks to member 
        Meg McLean for these memories.`,
        year: 1999
    },
    {
        title: "East Kilbride Police Office (1973)",
        src: "/milestone_2_rpoas/assets/images/gallery/eastkilbride-1973-min.jpg",
        location: "Eastkilbride",
        caption: `A happy shift. Who do you remember?`,
        year: 1973
    },
    {
        title: "Bishopbriggs (1971)",
        src: "/milestone_2_rpoas/assets/images/gallery/bishopbriggs-1971-min.jpg",
        location: "Bishopbriggs",
        caption: " ",
        year: 1971
    },
    {
        title: "BSR Workers Strike (1969)",
        src: "/milestone_2_rpoas/assets/images/gallery/eastkilbride-strike-1969-min.jpg",
        location: "Eastkilbride",
        caption: `October 1969, some 1,000 members of the Amalgamated Union of 
        Engineering and Foundry Workers employed by B.S.R. Ltd., (British Sound Recorder) 
        East Kilbride, went on official strike over the company's refusal to recognise the 
        trade union. Do you recognise anyone in this photo?`,
        year: 1969
    },
    {
        title: "Exercise",
        src: "/milestone_2_rpoas/assets/images/gallery/exercise-min.jpg",
        location: "notAvailable",
        caption: `Do you recognise faces or location? What year was this?`,
        year: "notAvailable"
    },
    {
        title: "Motherwell & Wishaw Burgh Police Football Team (1948)",
        src: "/milestone_2_rpoas/assets/images/gallery/football-motherwell-wishaw-1948-min.jpg",
        location: "Motherwell",
        caption: `Can you name anyone?`,
        year: 1948
    },
    {
        title: "Francie & Josie (1990)",
        src: "/milestone_2_rpoas/assets/images/gallery/franciejosie-1990-min.jpg",
        location: "notAvailable",
        caption: " ",
        year: 1990
    },
    {
        title: "Bagpipers at Hamilton Sheriff Court",
        src: "/milestone_2_rpoas/assets/images/gallery/hamiltonsheriffcourt-bagpipes-min.jpg",
        location: "Hamilton",
        caption: `Motherwell & Wishaw Police Pipe Band outside Hamilton Sheriff Court. Do you know what year this was taken?`,
        year: "notAvailable"
    },
    {
        title: "Lanarkshire HQ (1941)",
        src: "/milestone_2_rpoas/assets/images/gallery/lanarkshirehq-hamilton-1941-min.jpg",
        location: "Hamilton",
        caption: `Lanarkshire HQ, which is now Hamilton Sheriff Court. One Sergeant and the Chief Constable a
        re wearing diced cap bands. Do you recognise anyone, or have any more info on the uniforms/cap badges?`,
        year: 1941
    },
    {
        title: "Lanarkshire Police Football Club (1962)",
        src: "/milestone_2_rpoas/assets/images/gallery/lanarkshirefootball-1962-min.jpg",
        location: "Aberdeen",
        caption: `Scottish Police Cup Final at Pittodrie, Aberdeen on 16 April 1962. Lanarkshire Constabulary v Aberdeen City Police. 
        Prior to the game Denis Law attended. John Clark (left), Jim Shaw (2nd from right). Do you recognise anyone else?`,
        year: 1962
    },
    {
        title: "Lanarkshire WPCs (1970)",
        src: "/milestone_2_rpoas/assets/images/gallery/lanarkshirewpc-1970-min.jpg",
        location: "notAvailable",
        caption: `Can you name anyone?`,
        year: 1970
    },
    {
        title: "Lanimer Day Lanark (1950)",
        src: "/milestone_2_rpoas/assets/images/gallery/lanimerday-lanark-1950-min.jpg",
        location: "Lanark",
        caption: `Every June the town of Lanark holds its Lanimer Day celebrations. The festivities reach a 
        high point on the Thursday of Lanimer week, when the town's schoolchildren parade 
        in fancy dress with decorated vehicles, pipe bands, and a Lanimer Queen and her Court, 
        who have been elected from local schools. One of the police offficers is Elizabeth Paul. Do you know her colleague?`,
        year: 1950
    },
    {
        title: "Large Group Photo",
        src: "/milestone_2_rpoas/assets/images/gallery/largegroupphoto-min.jpg",
        location: "notAvailable",
        caption: " ",
        year: "notAvailable"
    },
    {
        title: "Nelson Mandela Visits Glasgow (1993)",
        src: "/milestone_2_rpoas/assets/images/gallery/mandela-glasgowcitychambers-1993-min.jpg",
        location: "Glasgow",
        caption: `A historic occasion at Glasgow City Chambers on 9 October 1993. 
        Do you recognise one of our members? `,
        year: 1993
    },
    {
        title: "Motherwell (1926)",
        src: "/milestone_2_rpoas/assets/images/gallery/motherwell-1926-min.jpg",
        location: "Motherwell",
        caption: `One for the historians, trophy winners in the Burgh days, believed to be in the former Motherwell 
        Police Office.`,
        year: 1926
    },
    {
        title: "Motherwell and Wishaw Band (1928)",
        src: "/milestone_2_rpoas/assets/images/gallery/motherwell-wishaw-band-1928-min.jpg",
        location: "Motherwell",
        caption: `Can you recognise the former Police Office in the background?`,
        year: 1928
    },
    {
        title: "Motherwell and Wishaw Pipe Band (1968)",
        src: "/milestone_2_rpoas/assets/images/gallery/motherwell-wishaw-pipeband-1968-min.jpg",
        location: "Motherwell",
        caption: ``,
        year: 1968
    },
    {
        title: "Penguin Pete (1998)",
        src: "/milestone_2_rpoas/assets/images/gallery/penguinpete-coatbridge-1998-min.jpg",
        location: "Coatbridge",
        caption: `School Event in Airdrie/Coatbridge.`,
        year: 1998
    },
    {
        title: "Pipe Band (1996)",
        src: "/milestone_2_rpoas/assets/images/gallery/pipeband-1996-min.jpg",
        location: "notAvailable",
        caption: " ",
        year: 1996
    },
    {
        title: "Policeman",
        src: "/milestone_2_rpoas/assets/images/gallery/policeman-min.jpg",
        location: "notAvailable",
        caption: " ",
        year: "notAvailable"
    },
    {
        title: "Strathaven Gala Day (1997)",
        src: "/milestone_2_rpoas/assets/images/gallery/strathaven-galaday-1997-min.jpg",
        location: "Strathaven",
        caption: " ",
        year: 1997
    },
    {
        title: "Ravenscraig Strike (1984)",
        src: "/milestone_2_rpoas/assets/images/gallery/strike-ravenscraig-1984-min.jpg",
        location: "Motherwell",
        caption: `In May 1984, Ravenscraig Steelworks was at the epicentre of an industrial strike 
        of seismic proportions in Scotland. The police were caught between a rock and a hard place, 
        with many having family, relations and friends amongst the pickets, not a good situation for anyone. 
        Group 2, Wishaw, in the photo were nightshift on this 1st day and were held on to cover The Craig, 
        before reverting back to 12 hour nightshifts for several weeks from that night. Can you name the policemen 
        in this photo?`,
        year: 1984
    },
    {
        title: "Traffic Police (1971)",
        src: "/milestone_2_rpoas/assets/images/gallery/traffic-1971-min.jpg",
        location: "notAvailable",
        caption: `AJA (left) and Jack Paterson (right) of Lanarkshire Constabulary Traffic Dept.`,
        year: 1971
    },
    {
        title: "Lanarkshire Constabulary Traffic Department (1972)",
        src: "/milestone_2_rpoas/assets/images/gallery/traffic-1972-min.jpg",
        location: "notAvailable",
        caption: "Two stalwarts of the Lanarkshire Constabulary Traffic Department, Charlie Young (left) and Willie Docherty (right).",
        year: 1972
    },
    {
        title: "Traffic Instructor Course (1983)",
        src: "/milestone_2_rpoas/assets/images/gallery/trafficinstructorscourse-tulliallan-1983-min.jpg",
        location: "Tulliallan",
        caption: `At Scottish Police College, Tulliallan. Who do you recognise?`,
        year: 1983
    },
    {
        title: "Tulliallan (1974)",
        src: "/milestone_2_rpoas/assets/images/gallery/tulliallan-1974-min.jpg",
        location: "Tulliallan",
        caption: `Scottish Police College, Tulliallan. Potential Instructors Course No.27. Who do you recognise?`,
        year: 1974
    },
    {
        title: "Tulliallan (1982)",
        src: "/milestone_2_rpoas/assets/images/gallery/tulliallan-1982-min.jpg",
        location: "Tulliallan",
        caption: " ",
        year: 1982
    },
    {
        title: "Wishaw (1959)",
        src: "/milestone_2_rpoas/assets/images/gallery/wishaw-1959-min.jpg",
        location: "Wishaw",
        caption: `Check the shine on the Cops' boots, all that for points duty. 
        The wee laddie has skint knee and his gutties are on the wrong feet. 
        Perhaps someone will recognise the shoulder number?`,
        year: 1959
    },
    {
        title: "Rolling Stones in Hamilton (1964)",
        src: "/milestone_2_rpoas/assets/images/gallery/rollingstones-hamilton-1964-min.jpg",
        location: "Hamilton",
        caption: `On 18 May 1964, The Rolling Stones and their army of fans rolled into Hamilton - 
        and the town had never seen anything like it before. As 2000 people crammed into the ballroom at the 
        Chantinghall Hotel, another 1000 mobbed the streets outside because of a forgery scam.
        A queue snaked its way all the way to Peacock Cross, and the police had to send for reinforcements from 
        Motherwell and Wishaw. Youngsters who succumbed to the heat or hysteria tried to recover in a make-shift 
        ambulance room in the hotel’s foyer, while in the ballroom a few scraps broke out.`,
        year: 1964
    },
    {
        title: "Drill",
        src: "/milestone_2_rpoas/assets/images/gallery/drill-min.jpg",
        location: "Hamilton",
        caption: `Remember when this was part of the drill at the SPC. "Stop Traffic from the Front and Rear." Check out the cap badges, looks like a Lanarkshire man? Thanks to Tam Eadie for this memory.`,
        year: 1964
    },    
];

const searchResultsContainer = document.querySelector(".search-results-container");
const yearOption = document.querySelector(".filtered-years");
const locationOption = document.querySelector(".filtered-locations");

/*------------------------------------------------------display all photos--*/

function allPhotos(array) {
    photos.forEach((photo) => {
        searchResultsContainer.insertAdjacentHTML("beforeend", `
            <div class="col-12 col-md-3 col-lg-2 gallery-photo-container" tabindex="0">
                <img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal">
            </div>`);
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
        modal.querySelector(".modal-caption").textContent = el.dataset.caption;
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
/*
    images.forEach(image => image.addEventListener("click", handleImageClick));
*/
    
    images.forEach(image => {
        image.addEventListener("click", handleImageClick);
        image.addEventListener("keypress", handleImageClick);
    });
/* 
    Why is this not displaying modal when pressing return???

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
    document.addEventListener("load", allPhotos(newPhotoArray));

    search(newPhotoArray);
}





