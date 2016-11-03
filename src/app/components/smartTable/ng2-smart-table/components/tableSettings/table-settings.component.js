"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var grid_1 = require('../../lib/grid');
var core_1 = require('@angular/core');
var tableSettings = (function () {
    function tableSettings() {
        this.columnFiterChange = new core_1.EventEmitter();
        this.pageSizeChange = new core_1.EventEmitter();
        this.sliderOpen = false;
        this.onColumnFilterChange = function onColumnFilterChange(event) {
            this.columnFiterChange.emit(event);
        };
        this.selectedPageSize = function selectedPageSize(event, property) {
            this.selectedPage = event.passedValue[property];
            this.pageSizeChange.emit(this);
        };
        this.listFilters = function () {
            //return SmartTablePrefs.listFilters(ctrl.filterkey)
        };
        this.saveFilterDialog = function () {
            // var currentFilter = $parse(ctrl.selectedFilter);
            // return SmartTablePrefs.saveFilterDialog(currentFilter());
        };
        this.manageFiltersDialog = function () {
            //return SmartTablePrefs.manageFiltersDialog(ctrl.listFilters())
        };
        this.applyView = function (view) {
            this.selectedFilter = view.filter;
            // return TableUtils.applyView(ctrl.tablestate, view.filter, ctrl.columns, ctrl.pagesize, ctrl.restroute);
        };
        this.defaultFilter = function () {
            //return TableUtils.setDefaultFilter(ctrl.tablestate, ctrl.restroute);
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', grid_1.Grid)
    ], tableSettings.prototype, "grid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], tableSettings.prototype, "selectedPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], tableSettings.prototype, "selectedFilter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], tableSettings.prototype, "columnFiterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], tableSettings.prototype, "pageSizeChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], tableSettings.prototype, "sliderOpen", void 0);
    tableSettings = __decorate([
        core_1.Component({
            selector: 'table-settings',
            moduleId: module.id,
            templateUrl: 'table-settings.html'
        }), 
        __metadata('design:paramtypes', [])
    ], tableSettings);
    return tableSettings;
}());
exports.tableSettings = tableSettings;
//# sourceMappingURL=table-settings.component.js.map