"use strict";
var Column = (function () {
    function Column(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isFilterable = false;
        this.isVisible = true;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.process();
    }
    Column.prototype.getCompareFunction = function () {
        return this.compareFunction;
    };
    Column.prototype.getValuePrepareFunction = function () {
        return this.valuePrepareFunction;
    };
    Column.prototype.getFilterFunction = function () {
        return this.filterFunction;
    };
    Column.prototype.process = function () {
        if (this.settings) {
            this.title = this.settings['title'];
            this.class = this.settings['class'];
            this.type = this.prepareType();
            this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
            this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
            this.isSortable = (this.settings['sort'] === undefined || this.settings['sort'] === null) ? true : !!this.settings['sort'];
            this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
            this.sortDirection = this.prepareSortDirection();
            this.compareFunction = this.settings['compareFunction'];
            this.valuePrepareFunction = this.settings['valuePrepareFunction'];
            this.filterFunction = this.settings['filterFunction'];
            this.isVisible = (this.settings['visible'] === undefined || this.settings['visible'] === null) ? true : this.settings['visible'];
            this.uniqueId = this.settings['uniqueId'] === 'undefined' ? this.title : this.settings['uniqueId'];
        }
    };
    Column.prototype.prepareType = function () {
        return this.settings['type'] || this.determineType();
    };
    Column.prototype.prepareSortDirection = function () {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    };
    Column.prototype.determineType = function () {
        // TODO: determine type by data
        return 'string';
    };
    return Column;
}());
exports.Column = Column;
//# sourceMappingURL=column.js.map