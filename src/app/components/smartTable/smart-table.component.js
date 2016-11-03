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
var smart_table_actions_1 = require('./../../actions/smart-table/smart-table.actions');
var ng2_smart_table_component_1 = require('./ng2-smart-table/ng2-smart-table.component');
var Rx_1 = require('rxjs/Rx');
var column_service_1 = require('../../services/column.service');
var rest_service_1 = require('./../../jwt/rest.service');
var configuration_1 = require('./../../jwt/configuration');
var ng2_redux_1 = require('ng2-redux');
var core_1 = require('@angular/core');
var SmartTableComponent = (function () {
    function SmartTableComponent(restService, columnService, config, redux, smarttableActions) {
        this.restService = restService;
        this.columnService = columnService;
        this.config = config;
        this.smarttableActions = smarttableActions;
        this.restParams = { installBaseId: 93172689 };
        this.settingsSource = new Rx_1.Subject();
        this.dataSource = new Rx_1.Subject();
        this.dataSource$ = this.dataSource.asObservable();
        this.setLocalOrRestData = function setLocalOrRestData(restUrl, restParams) {
            if (this.config.getJsonUrl(null, null).indexOf('app') == -1) {
                this.setData(this.restUrl, this.restParams);
            }
            else {
                this.setLocalData();
            }
        };
        this.setLocalData = function setLocalData() {
            var _this = this;
            this.columnService.getData('entry_eclaim_data').subscribe(function (resp) {
                _this.dataSource.next(JSON.parse(resp._body));
            });
        };
        this.setData = function setData(restUrl, restParams) {
            var _this = this;
            if (restUrl && restParams) {
                this.restService.invoke(restUrl, restParams).subscribe(function (resp) {
                    _this.dataSource.next(resp);
                });
            }
        };
        this.setSettings = function setSettings(columnJsonName) {
            var _this = this;
            if (columnJsonName) {
                this.columnService.getColumns(columnJsonName).subscribe(function (columns) {
                    var settings = {
                        hideHeader: false,
                        hideSubHeader: true,
                        columns: columns,
                        actions: null,
                        pageRows: [
                            { 'id': 10, 'label': 10 }, { 'id': 15, 'label': 15 },
                            { 'id': 25, 'label': 25 }, { 'id': 50, 'label': 50 },
                            { 'id': 100, 'label': 100 }, { 'id': 1000, 'label': 1000 }],
                        pager: {
                            display: true,
                            perPage: 50
                        }
                    };
                    _this.settingsSource.next(settings);
                    _this.settingsSource.complete();
                });
            }
        };
        this.settings$ = this.settingsSource.asObservable();
        console.log('SmartTableComponent Constructor');
    }
    SmartTableComponent.prototype.ngOnChanges = function (changes) {
        this.setSettings(this.columnJsonName);
        this.setLocalOrRestData(this.restUrl, this.restParams);
    };
    SmartTableComponent.prototype.onPaginate = function (event) {
        var pagerfilter = { paging: (event.page * event.perPage + ',' + event.perPage) };
        this.setLocalOrRestData(this.restUrl, pagerfilter);
        this.smarttableActions.onPaginate(pagerfilter);
    };
    SmartTableComponent.prototype.onPageSizeChanged = function (pagerData) {
        var pagerfilter = { paging: (pagerData.page * pagerData.perPage + ',' + pagerData.perPage) };
        this.setLocalOrRestData(this.restUrl, pagerfilter);
        this.smarttableActions.onPaginate(pagerfilter);
    };
    SmartTableComponent.prototype.onColumnFilterChange = function (selectedColumns) {
        this.smarttableActions.onColumnFilterChange(selectedColumns);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SmartTableComponent.prototype, "restUrl", void 0);
    __decorate([
        // enrollment/planByInstallBaseId
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SmartTableComponent.prototype, "restParams", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SmartTableComponent.prototype, "columnJsonName", void 0);
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], SmartTableComponent.prototype, "container", void 0);
    __decorate([
        ng2_redux_1.select(), 
        __metadata('design:type', Rx_1.Observable)
    ], SmartTableComponent.prototype, "pagerFilter$", void 0);
    __decorate([
        ng2_redux_1.select(), 
        __metadata('design:type', Rx_1.Observable)
    ], SmartTableComponent.prototype, "columnFilter$", void 0);
    SmartTableComponent = __decorate([
        core_1.Component({
            selector: 'smart-table-component',
            moduleId: module.id,
            template: "\n     <ng2-smart-table  \n     (paginated)=\"onPaginate($event)\"\n     (pagsChanged) = \"onPageSizeChanged($event)\"\n     (columnFilterChanged)=\"onColumnFilterChange($event)\"\n     [settings]=\"settings$ | async\"  \n     [source]=\"dataSource$ | async\">\n      <header-actions>\n        <ui-bulk-actions-menu-component\n              [actions]=\"actions | async\"\n              [selections]=\"selectedAction | async\"\n              context=\"bulk-remit\"\n              menu-id=\"bulk_actions\"\n              label=\"Remits\">\n          </ui-bulk-actions-menu-component>\n      </header-actions>\n      <row-action>\n        <ui-bulk-actions-menu-component\n              [actions]=\"actions | async\"\n              [selections]=\"selectedAction | async\"\n              context=\"bulk-remit\"\n              menu-id=\"bulk_actions\"\n              label=\"Remits\">\n          </ui-bulk-actions-menu-component>\n      </row-action>\n    </ng2-smart-table> \n\n    ",
            providers: [ng2_smart_table_component_1.Ng2SmartTableComponent]
        }), 
        __metadata('design:paramtypes', [rest_service_1.AdjudicaitonRestService, column_service_1.ColumnService, configuration_1.Configuration, ng2_redux_1.NgRedux, smart_table_actions_1.SmartTableActions])
    ], SmartTableComponent);
    return SmartTableComponent;
}());
exports.SmartTableComponent = SmartTableComponent;
//# sourceMappingURL=smart-table.component.js.map