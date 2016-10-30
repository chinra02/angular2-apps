"use strict";
var _ = require('underscore');
var Cell = (function () {
    function Cell(value, row, column, dataSet, isPopOver) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.isVisible = true;
        this.parsedValue = ' ';
        this.isPopover = false;
        this.type = "";
        this.newValue = value;
        this.isPopover = isPopOver;
    }
    Cell.prototype.getData = function () {
        return this.value;
    };
    Cell.prototype.getValue = function () {
        var valid = this.column.getValuePrepareFunction() instanceof Function;
        var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        var parseValue;
        if (_.isArray(this.value)) {
            if (this.value.length > 0) {
                var lengthStr = this.value.length;
                this.parsedValue = lengthStr + (this.value.length > 1 ? ' mesages' : ' message');
            }
            return prepare.call(null, this.parsedValue);
        }
        return prepare.call(null, this.value);
    };
    Cell.prototype.getColumn = function () {
        return this.column;
    };
    Cell.prototype.getRow = function () {
        return this.row;
    };
    Cell.PREPARE = function (value) { return value; };
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=cell.js.map