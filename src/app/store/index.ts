import { combineReducers } from 'redux';
import { ISmartTablePagerFilterData, ISmartTableFilterData, smartTablePagerReducer, 
    smartTableFilterReducer,smartTableColumnFilterReducer,
    ISmartTableColumnFilterData } from './smart-table/smart-table.reducers';
const persistState = require('redux-localstorage');


export class IAppState {
  smartTableFilter:ISmartTableFilterData;
  smartTablePager:ISmartTablePagerFilterData;
  smartTableColumnFilter:ISmartTableColumnFilterData;

};

export const rootReducer = combineReducers<IAppState>({
  smartTableFilter:smartTableFilterReducer,
  //smartTablePager: smartTablePagerReducer,
  //smartTableColumnFilter:smartTableColumnFilterReducer
  

});

export const enhancers = [
  persistState('smartTable', { key: 'smartTable' })
];