import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableActions {

    constructor(private redux: NgRedux<any>) { };

    static ON_PAGINATED: string = 'ON_PAGINATED';
    static ON_FILTER_UPDATE: string = 'ON_FILTER_UPDATE';
    static ON_COLUMN_FILTER_CHANGE : string ='ON_COLUMN_FILTER_CHANGE';

    onPaginate(pagerFilter:Object): void {
        /*this.redux.dispatch({ 
            type: SmartTableActions.ON_PAGINATED,
            payload: {pageFilter:pageFilter} 
        }); */
        this.redux.dispatch({ 
            type: SmartTableActions.ON_FILTER_UPDATE,
            payload: {pagerFilter:pagerFilter} 
        });
    }

    onColumnFilterChange(selectedColumns:Array<string>):void{
       /* this.redux.dispatch({ 
            type: SmartTableActions.ON_COLUMN_FILTER_CHANGE,
            payload: {selectedColumns:selectedColumns} 
        }); */
        this.redux.dispatch({ 
            type: SmartTableActions.ON_FILTER_UPDATE,
            payload: {columnFilter:{selectedColumns:selectedColumns}} 
        });
    }

}