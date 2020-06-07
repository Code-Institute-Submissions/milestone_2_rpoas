Hello

describe("Search", function() {
    describe("Year search"), function() {
        it("should return photos with data-year = 1974", function() {
            const photoYear = document.querySelector("#photo-year");
            const searchResultYear = document.querySelector(".gallery-photo").dataset.year;

            select(photoYear).option("1974");
            expect(searchResultYear).toContain("1974");
        });
    };
});