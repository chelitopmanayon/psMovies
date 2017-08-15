describe("The movieList component", function(){
    

    beforeEach(module("psMovies"));

    var movieList;
    beforeEach(inject(function($componentController){
        moviesList = $componentController("movieList", {
            $scope: {}
        })

    }));

    it("can be create", function(){
        expect(moviesList).toBeDefined();
        expect(moviesList.$onInit).toBeDefined();
    });
});