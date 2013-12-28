define(["Cell"], function(Cell) {
    function Grid() {
        var size = 6;
        
        var _grid = [];
        var _$grid = $("#grid");
        var _selectedCell;
        
        for (var y = 0; y < size; y++) {
            var row = [];
            var $row = $("<div>").addClass("row");
            for (var x = 0; x < size; x++) {
                var $cell = $("<div>").addClass("cell");
                $row.append($cell);
                
                var cell = new Cell(x, y, $cell);
                row.push(cell);
            }
            _grid.push(row);
            _$grid.append($row);
        }
        _$grid.focus();
        
        $(document).keydown(function(keyEvent) {
            if (_selectedCell) {
                var number = 0;
                switch (keyEvent.which) {
                    case 49: number = 1; break;
                    case 50: number = 2; break;
                    case 51: number = 3; break;
                    case 52: number = 4; break;
                    case 53: number = 5; break;
                    case 54: number = 6; break;
                    default: number = ""; break;
                }
                _selectedCell.value(number);
            }
        });
        
        _$grid.click(function(clickEvent) {
            var x = clickEvent.pageX - this.offsetLeft;
            var y = clickEvent.pageY - this.offsetTop;
            
            var cellX = Math.floor(x / 50);
            var cellY = Math.floor(y / 50);
            _setSelectedCell(cellX, cellY);
        });
        
        var _setSelectedCell = function(cellX, cellY) {
            if (_selectedCell != null) {
                _selectedCell.$cell.removeClass("cell-selected");
            }
            _selectedCell = _grid[cellY][cellX];
            _selectedCell.$cell.addClass("cell-selected");
        }
        
        this.setGrid = function(grid) {
            for (var y = 0; y < size; y++) {
                for (var x = 0; x < size; x++) {
                    _grid[y][x].value("");
                    _grid[y][x].value(grid[y][x]);
                }
            }
        }
    }
    
    return Grid;
});