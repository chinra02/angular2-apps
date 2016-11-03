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
var comma_separated_list_pipe_1 = require('./../../../../../../utils/comma-separated-list.pipe');
var core_1 = require('@angular/core');
var ListTemplate = (function () {
    function ListTemplate() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListTemplate.prototype, "columnDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListTemplate.prototype, "uniqueid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListTemplate.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListTemplate.prototype, "column", void 0);
    ListTemplate = __decorate([
        core_1.Component({
            selector: 'list-template',
            template: "\n    <div #template [ngSwitch]=\"type\"> \n        <div *ngSwitchCase=\"'list-searh'\">\n        // TODO:  (change)=\"pipe()\"\n        <ng-select\n        id=\"{{uniqueid + '_select'}}\"\n        [options]=\"column.list\"\n        [(ngModel)]=\"searchPredicate[column.attr]\"\n        class=\"input-sm form-control\">\n        </ng-select>\n        </div>\n        <span *ngSwitchCase=\"'list-view'\">{{ value | commaSeparatedList }}</span>\n    </div>\n   ",
            providers: [comma_separated_list_pipe_1.CommaSeparatedList]
        }), 
        __metadata('design:paramtypes', [])
    ], ListTemplate);
    return ListTemplate;
}());
exports.ListTemplate = ListTemplate;
//# sourceMappingURL=list-template.component.js.map