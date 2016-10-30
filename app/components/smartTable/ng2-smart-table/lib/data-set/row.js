"use strict";
var cell_1 = require('./cell');
var _ = require('underscore');
var Row = (function () {
    function Row(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getNewData = function () {
        var values = {};
        this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
        return Object.assign(this.data, values);
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataSet.getColumns().forEach(function (column) {
            if (column.isVisible) {
                var cell = _this.createCell(column);
                _this.cells.push(cell);
            }
        });
    };
    Row.prototype.createCell = function (column) {
        var value = typeof this.data[column.id] === 'undefined' ? '' : this.data[column.id];
        if (_.isArray(value)) {
            return new cell_1.Cell(value, this, column, this._dataSet, true);
        }
        else {
            return new cell_1.Cell(value, this, column, this._dataSet, false);
        }
    };
    return Row;
}());
exports.Row = Row;
//# sourceMappingURL=row.js.map