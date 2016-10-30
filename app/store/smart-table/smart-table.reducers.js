"use strict";
var smart_table_actions_1 = require('./../../actions/smart-table/smart-table.actions');
var INITIAL_PAGER_STATE = {
    pagerFilter: {
        paging: '0,50'
    }
};
;
var INITIAL_COLUMN_FILTER_STATE = {
    columnFilter: {
        selectedColumns: new Array()
    }
};
var INITIAL_FILTER_STATE = {
    pagerFilter: {
        paging: '0,50'
    },
    columnFilter: {
        selectedColumns: new Array()
    }
};
//Total SmartTable Reducer
function smartTableFilterReducer(state, action) {
    if (state === void 0) { state = INITIAL_FILTER_STATE; }
    switch (action.type) {
        case smart_table_actions_1.SmartTableActions.ON_FILTER_UPDATE:
            return Object.assign({}, state, {
                pagerFilter: (action.payload.pagerFilter === null || action.payload.pagerFilter === undefined) ? state.pagerFilter : action.payload.pagerFilter,
                columnFilter: (action.payload.columnFilter === null || action.payload.columnFilter === undefined) ? state.columnFilter : action.payload.columnFilter,
            });
            ;
        default:
            return state;
    }
}
exports.smartTableFilterReducer = smartTableFilterReducer;
//Pager reducer
function smartTablePagerReducer(state, action) {
    if (state === void 0) { state = INITIAL_PAGER_STATE; }
    switch (action.type) {
        case smart_table_actions_1.SmartTableActions.ON_PAGINATED:
            return Object.assign({}, state, action.payload);
            ;
        default:
            return state;
    }
}
exports.smartTablePagerReducer = smartTablePagerReducer;
//ColumnFilter Reducer
function smartTableColumnFilterReducer(state, action) {
    if (state === void 0) { state = INITIAL_COLUMN_FILTER_STATE; }
    switch (action.type) {
        case smart_table_actions_1.SmartTableActions.ON_COLUMN_FILTER_CHANGE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
exports.smartTableColumnFilterReducer = smartTableColumnFilterReducer;
//# sourceMappingURL=smart-table.reducers.js.map