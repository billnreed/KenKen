define(["jquery", "underscore", "Grid", "Cell"], function($, _, Grid, Cell) {
    var _grid;
    
    var initializeGrid = function() {
        _grid = new Grid();
    };
    
    var generatePuzzle = function() {
        var size = 6;
        var grid = [];
        for (var y = 0; y < size; y++) {
            var row = [];
            for (var x = 0; x < size; x++) {
                row.push(0);
            }
            grid.push(row);
        }
        
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                var col = getColumn(grid, x);
                var row = getRow(grid, y);
                var usedNumbers = _.union(col, row);
                usedNumbers = _.filter(usedNumbers, function(num) {
                    return num !== 0;
                });
                var numberForCell = getRandomExcluding(usedNumbers);
                grid[y][x] = numberForCell;
            }
        }
        
        _grid.setGrid(grid);
    };
    
    function getRandomExcluding(excludes) {
        var potentialNumbers = [1, 2, 3, 4, 5, 6];
        for (var i = 0; i < excludes.length; i++) {
            potentialNumbers.splice(potentialNumbers.indexOf(excludes[i]), 1);
        }
        return potentialNumbers[Math.floor(Math.random()*potentialNumbers.length)];
    }
    
    function getColumn(grid, index) {
        var size = 6;
        var column = [];
        for (var y = 0; y < size; y++) {
            column.push(grid[y][index]);
        }
        
        return column;
    }
    
    function getRow(grid, index) {
        return grid[index];
    }
    
    var KenKen = {
        initializeGrid: initializeGrid,
        generatePuzzle: generatePuzzle
    }
    return KenKen;
});