require.config({
    paths: {
        jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min"
    }
});

require(["jquery", "KenKen"], function($, KenKen) {
    $(function() {
        KenKen.initializeGrid();
    });
});