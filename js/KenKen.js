define(["jquery", "Cell"], function($, Cell) {
    var size = 6;
    
    var initializeGrid = function() {
        var grid = [];
        var $grid = $("#grid");
        
        for (var y = 0; y < size; y++) {
            var row = [];
            var $row = $("<div>").addClass("row");
            for (var x = 0; x < size; x++) {
                var $cell = $("<div>").addClass("cell");
                $row.append($cell);
                
                var cell = new Cell(x, y, $cell);
                row.push(cell);
            }
            grid.push(row);
            $grid.append($row);
        }
    };
    
    var isValidValue = function(value) {
        var isValid = value >= 1 && value <= size;
        return isValid;
    };
    
    var KenKen = {
        initializeGrid: initializeGrid
    }
    return KenKen;
});