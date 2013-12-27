define(["jquery"], function($) {
    function Cell(x, y, $cell) {
        var self = this;
        
        var _x = x;
        var _y = y;
        var _$cell = $cell;
        var _value = 0;
        
        _$cell.click(function() {
            var newValue = prompt("Enter a new value.");
            self.value(newValue);
        });
        
        this.value = function(value) {
            if (value == null) {
                return _value;
            } else {
                _value = value;
                _$cell.text(value);
            }
        };
    }
    
    return Cell;
});