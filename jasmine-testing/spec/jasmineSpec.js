describe("Search", function() {
    describe("Year search"), function() {
        it("should return photos with photos.year = 1974", function() {
            expect(inputLocation("1974").toEqual(photo.location("1974")));
        });
    }
})