import { ISmartTableFilterData, ISmartTableColumnFilterData, ISmartTablePagerFilterData } from './smart-table.reducers';
import { SmartTableActions } from './../../actions/smart-table/smart-table.actions';


//PagerFilter
export interface ISmartTablePagerFilterData {
  pagerFilter: {
    paging: string
  }

}
const INITIAL_PAGER_STATE: ISmartTablePagerFilterData = {
  pagerFilter: {
    paging: '0,50'
  }
};

//ColumnFilter 
export interface ISmartTableColumnFilterData {
  columnFilter: {
     selectedColumns:Array<string>
  }

};

const INITIAL_COLUMN_FILTER_STATE: ISmartTableColumnFilterData = {
  columnFilter: {
    selectedColumns:new Array<string>()
  }
};


//Total SmartTableFilterData
export interface ISmartTableFilterData {
  pagerFilter: {
    paging:string
    },
    columnFilter: {
     selectedColumns:Array<string>
    }
  
}
const INITIAL_FILTER_STATE: ISmartTableFilterData = {
  pagerFilter: {
     paging: '0,50'
  },
  columnFilter: {
     selectedColumns:new Array<string>()
    }
};




//Total SmartTable Reducer
export function smartTableFilterReducer(state: ISmartTableFilterData = INITIAL_FILTER_STATE, action: any) {
  switch (action.type) {
    case SmartTableActions.ON_FILTER_UPDATE:
      return Object.assign({}, state, {
        pagerFilter: (action.payload.pagerFilter === null || action.payload.pagerFilter === undefined) ? state.pagerFilter : action.payload.pagerFilter,
        columnFilter: (action.payload.columnFilter === null || action.payload.columnFilter === undefined) ? state.columnFilter : action.payload.columnFilter,
      });;
    default:
      return state;
  }
}


//Pager reducer
export function smartTablePagerReducer(state: Object = INITIAL_PAGER_STATE, action: any) {
  switch (action.type) {
    case SmartTableActions.ON_PAGINATED:
      return Object.assign({}, state, action.payload);;
    default:
      return state;
  }
}

//ColumnFilter Reducer
export function smartTableColumnFilterReducer(state: Object = INITIAL_COLUMN_FILTER_STATE, action: any) {
  switch (action.type) {
    case SmartTableActions.ON_COLUMN_FILTER_CHANGE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}