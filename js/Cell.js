define(["jquery"], function($) {
    function Cell(x, y, $cell) {
        var self = this;
        
        var _x = x;
        var _y = y;
        this.$cell = $cell;
        var _value = 0;
        
        this.value = function(value) {
            if (value == null) {
                return _value;
            } else {
                _value = value;
                this.$cell.text(value);
            }
        };
    }
    
    return Cell;
});