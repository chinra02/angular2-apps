"use strict";
var redux_1 = require('redux');
var smart_table_reducers_1 = require('./smart-table/smart-table.reducers');
var persistState = require('redux-localstorage');
var IAppState = (function () {
    function IAppState() {
    }
    return IAppState;
}());
exports.IAppState = IAppState;
;
exports.rootReducer = redux_1.combineReducers({
    smartTableFilter: smart_table_reducers_1.smartTableFilterReducer,
});
exports.enhancers = [
    persistState('smartTable', { key: 'smartTable' })
];
//# sourceMappingURL=index.js.map