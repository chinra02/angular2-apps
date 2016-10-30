import {Grid} from '../../lib/grid';
import {Cell} from '../../lib/data-set/cell';
import {Row} from '../../lib/data-set/row';
import {Column} from '../../lib/data-set/column';

import {Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
   selector:'table-settings',
   moduleId:module.id,
   templateUrl:'table-settings.html'
})
export class tableSettings{
    @Input() grid:Grid;
    @Input() selectedPage:any;
    @Input() selectedFilter:any;
    @Output() columnFiterChange:EventEmitter<any> = new EventEmitter<any>();
    @Output() pageSizeChange:EventEmitter<any> = new EventEmitter<any>();
    @Input() sliderOpen:boolean=false;

    onColumnFilterChange = function onColumnFilterChange(event){
           this.columnFiterChange.emit(event);
    }

    selectedPageSize = function selectedPageSize(event,property:string){
          this.selectedPage = event.passedValue[property];
          this.pageSizeChange.emit(this);
    }

                listFilters = function () {
                    //return SmartTablePrefs.listFilters(ctrl.filterkey)
                };

                saveFilterDialog = function () {
                   // var currentFilter = $parse(ctrl.selectedFilter);
                   // return SmartTablePrefs.saveFilterDialog(currentFilter());
                };

                manageFiltersDialog = function () {
                    //return SmartTablePrefs.manageFiltersDialog(ctrl.listFilters())
                };
                applyView = function (view) {
                    this.selectedFilter = view.filter;
                   // return TableUtils.applyView(ctrl.tablestate, view.filter, ctrl.columns, ctrl.pagesize, ctrl.restroute);
                };
                defaultFilter = function () {
                    //return TableUtils.setDefaultFilter(ctrl.tablestate, ctrl.restroute);
                };

}