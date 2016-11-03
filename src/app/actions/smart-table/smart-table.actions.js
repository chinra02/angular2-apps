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
var ng2_redux_1 = require('ng2-redux');
var core_1 = require('@angular/core');
var SmartTableActions = (function () {
    function SmartTableActions(redux) {
        this.redux = redux;
    }
    ;
    SmartTableActions.prototype.onPaginate = function (pagerFilter) {
        /*this.redux.dispatch({
            type: SmartTableActions.ON_PAGINATED,
            payload: {pageFilter:pageFilter}
        }); */
        this.redux.dispatch({
            type: SmartTableActions.ON_FILTER_UPDATE,
            payload: { pagerFilter: pagerFilter }
        });
    };
    SmartTableActions.prototype.onColumnFilterChange = function (selectedColumns) {
        /* this.redux.dispatch({
             type: SmartTableActions.ON_COLUMN_FILTER_CHANGE,
             payload: {selectedColumns:selectedColumns}
         }); */
        this.redux.dispatch({
            type: SmartTableActions.ON_FILTER_UPDATE,
            payload: { columnFilter: { selectedColumns: selectedColumns } }
        });
    };
    SmartTableActions.ON_PAGINATED = 'ON_PAGINATED';
    SmartTableActions.ON_FILTER_UPDATE = 'ON_FILTER_UPDATE';
    SmartTableActions.ON_COLUMN_FILTER_CHANGE = 'ON_COLUMN_FILTER_CHANGE';
    SmartTableActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], SmartTableActions);
    return SmartTableActions;
}());
exports.SmartTableActions = SmartTableActions;
//# sourceMappingURL=smart-table.actions.js.map