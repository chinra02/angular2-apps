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
var smart_table_actions_1 = require('./actions/smart-table/smart-table.actions');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var smart_table_component_1 = require('./components/smartTable/smart-table.component');
var ng2_smart_table_module_1 = require('./components/smartTable/ng2-smart-table.module');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_dropdown_1 = require('ng2-dropdown');
var ng2_redux_1 = require('ng2-redux');
var logger = './store/configure-logger';
var index_1 = require('./store/index');
var createLogger = require('redux-logger');
var AppModule = (function () {
    function AppModule(ngRedux, devTool) {
        this.ngRedux = ngRedux;
        this.devTool = devTool;
        this.ngRedux.configureStore(index_1.rootReducer, {}, [createLogger()], index_1.enhancers.concat([devTool.isEnabled() ? devTool.enhancer() : function (f) { return f; }]));
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_dropdown_1.DropdownModule, ng2_smart_table_module_1.Ng2SmartTableModule, http_1.JsonpModule, ng2_redux_1.NgReduxModule],
            declarations: [
                app_component_1.AppComponent,
                //UIBulkActionsMenuComponent,
                smart_table_component_1.SmartTableComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                ng2_redux_1.NgRedux,
                smart_table_actions_1.SmartTableActions,
                ng2_redux_1.DevToolsExtension
            ]
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux, ng2_redux_1.DevToolsExtension])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map