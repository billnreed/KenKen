require.config({
    paths: {
        jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
        underscore: "libs/underscore-1.5.2"
    }
});

require(["jquery", "KenKen"], function($, KenKen) {
    $(function() {
        KenKen.initializeGrid();
        
        $("#generate-btn").click(KenKen.generatePuzzle);
    });
});