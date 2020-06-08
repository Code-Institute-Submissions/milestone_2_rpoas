describe("Search", function() {
    describe("Year search"), function() {
        it("should return photos with data-year = 1984", function() {
            const inputYear = document.querySelector("#photo-year").value;
            const searchResult = document.querySelector(".gallery-photo");

            select(inputYear).option("1984");
            expect(searchResult).toEqual(`<img class="gallery-photo" src="assets/images/gallery/strike-ravenscraig-1984-min.jpg" alt="Ravenscraig Strike (1984)" data-caption="In May 1984, Ravenscraig Steelworks was at the epicentre of an industrial strike 
        of seismic proportions in Scotland. The police were caught between a rock and a hard place, 
        with many having family, relations and friends amongst the pickets, not a good situation for anyone. 
        Group 2, Wishaw, in the photo were nightshift on this 1st day and were held on to cover The Craig, 
        before reverting back to 12 hour nightshifts for several weeks from that night. Can you name the policemen 
        in this photo?" data-year="1984" data-location="Motherwell" data-toggle="modal" data-target="#galleryModal" tabindex="0">`);
        });
    };
});