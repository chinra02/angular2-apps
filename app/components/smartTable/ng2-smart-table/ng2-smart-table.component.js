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
var core_1 = require('@angular/core');
var grid_1 = require('./lib/grid');
var data_source_1 = require('./lib/data-source/data-source');
var helpers_1 = require('./lib/helpers');
var local_data_source_1 = require('./lib/data-source/local/local.data-source');
var _ = require('underscore');
var Ng2SmartTableComponent = (function () {
    function Ng2SmartTableComponent() {
        this.rowSelect = new core_1.EventEmitter();
        this.userRowSelect = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
        this.deleteConfirm = new core_1.EventEmitter();
        this.editConfirm = new core_1.EventEmitter();
        this.createConfirm = new core_1.EventEmitter();
        this.paginated = new core_1.EventEmitter();
        this.pagsChanged = new core_1.EventEmitter();
        this.columnFilterChanged = new core_1.EventEmitter();
        this.pagerData = { page: 1, perPage: 50 };
        this.defaultSettings = {
            mode: 'inline',
            hideHeader: false,
            hideSubHeader: false,
            selector: 'check',
            pageRows: [{ 'label': 10 }, { 'label': 15 }, { 'label': 25 }, { 'label': 50 }, { 'label': 100 }, { 'label': 1000 }],
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 50
            }
        };
        this.getColumns = function getColumns() {
            return this.grid.getColumns();
        };
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.updateSettings(this.prepareSettings());
            }
            if (changes['source']) {
                var data = changes['source'].currentValue;
                if (this.dataSource) {
                    this.grid.getDataSource().load(data);
                }
                else {
                    this.dataSource = this.prepareSource();
                    this.grid.setSource(this.dataSource);
                }
            }
        }
        else {
            this.initGrid();
        }
    };
    Ng2SmartTableComponent.prototype.onAdd = function (event) {
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.dataSource
            });
        }
        else {
            this.grid.createFormShown = true;
        }
        return false;
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        this.grid.selectRow(row);
        this.userRowSelect.emit({
            data: row.getData(),
            source: this.dataSource
        });
        this.onSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.rowSelect.emit({
            data: row.getData(),
            source: this.dataSource
        });
    };
    Ng2SmartTableComponent.prototype.onEdit = function (row, event) {
        event.stopPropagation();
        this.onSelectRow(row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: row.getData(),
                source: this.dataSource
            });
        }
        else {
            this.grid.edit(row);
        }
        return false;
    };
    Ng2SmartTableComponent.prototype.onDelete = function (row, event) {
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: row.getData(),
                source: this.dataSource
            });
        }
        else {
            this.grid.delete(row, this.deleteConfirm);
        }
        return false;
    };
    Ng2SmartTableComponent.prototype.onCreate = function (row, event) {
        event.stopPropagation();
        this.grid.create(row, this.createConfirm);
        return false;
    };
    Ng2SmartTableComponent.prototype.onSave = function (row, event) {
        event.stopPropagation();
        this.grid.save(row, this.editConfirm);
        return false;
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.dataSource = this.prepareSource();
        this.grid = new grid_1.Grid(this.dataSource, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.onSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof data_source_1.DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new local_data_source_1.LocalDataSource(this.source);
        }
        return new local_data_source_1.LocalDataSource();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return helpers_1.deepExtend({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableComponent.prototype.onHeaderSelectAll = function (event) {
        this.onSelectAll(event.selectedValue);
    };
    Ng2SmartTableComponent.prototype.onSelectAll = function (selectedValue) {
        this.selectAll = selectedValue;
        var rows = this.grid.getRows();
        if (rows) {
            _.map(rows, function (row) {
                row.isSelected = selectedValue;
            });
        }
    };
    Ng2SmartTableComponent.prototype.onPaginate = function (event) {
        this.pagerData.page = event.page;
        this.pagerData.perPage = event.perPage;
        this.selectAll = false;
        // this.onSelectAll(this.grid, this.selectAll);
        this.paginated.emit(event);
        //this.handleRowsForColumnFilter();
    };
    // This is parent onColumnFilterChange, whih is a caller
    Ng2SmartTableComponent.prototype.onColumnFilterChange = function (event) {
        var _this = this;
        var passedValue = event.passedValue;
        var isColumnSelected = event.selectedValue;
        var selectedColumnIds = Array();
        this.grid.getDataSet().getColumns().forEach(function (columnItem) {
            if (columnItem.uniqueId === passedValue.uniqueId) {
                columnItem.isVisible = isColumnSelected;
                _this.handleRowsForColumnFilter(columnItem);
            }
            if (columnItem.isVisible) {
                selectedColumnIds.push(columnItem.id);
            }
        });
        this.columnFilterChanged.emit(selectedColumnIds);
    };
    Ng2SmartTableComponent.prototype.handleRowsForColumnFilter = function (columnItem) {
        this.grid.getDataSet().getRows().forEach(function (rowItem) {
            rowItem.getCells().forEach(function (cell) {
                if (cell.getColumn().uniqueId === columnItem.uniqueId) {
                    cell.isVisible = columnItem.isVisible;
                }
            });
        });
        this.grid.getDataSource().refresh();
    };
    Ng2SmartTableComponent.prototype.onPageSizeChange = function (event) {
        var perPage = event.selectedPage;
        this.pagerData.perPage = perPage;
        this.dataSource.setPaging(1, perPage, true);
        this.pagsChanged.emit(this.pagerData);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2SmartTableComponent.prototype, "source", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2SmartTableComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2SmartTableComponent.prototype, "selectAll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "edit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "create", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "paginated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "pagsChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2SmartTableComponent.prototype, "columnFilterChanged", void 0);
    Ng2SmartTableComponent = __decorate([
        core_1.Component({
            selector: 'ng2-smart-table',
            moduleId: module.id,
            styleUrls: ['ng2-smart-table.scss'],
            templateUrl: 'ng2-smart-table.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2SmartTableComponent);
    return Ng2SmartTableComponent;
}());
exports.Ng2SmartTableComponent = Ng2SmartTableComponent;
//# sourceMappingURL=ng2-smart-table.component.js.map