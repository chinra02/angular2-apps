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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var CellTemplate = (function () {
    function CellTemplate() {
    }
    CellTemplate.prototype.ngOnInit = function () {
        if (this.type && typeof this.type === 'string') {
            this.templateType = this.type.substring(0, this.type.indexOf('-'));
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CellTemplate.prototype, "componentType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CellTemplate.prototype, "cellData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CellTemplate.prototype, "titile", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CellTemplate.prototype, "type", void 0);
    CellTemplate = __decorate([
        core_1.Component({
            selector: 'cell-template',
            template: "\n            <div #container [ngSwitch]=\"templateType\"> \n              <text-template *ngSwitchCase=\"'text'\" [type]=\"type\"> </text-template>\n              <date-template *ngSwitchCase=\"'date'\" [type]=\"type\"> </date-template>\n             <!-- <list-template *ngSwitchCase=\"date-edit\" [type]=\"type\"> </list-template>\n              <messages-template *ngSwitchCase=\"'message'\" [type]=\"type\" [messages]=cellData> </messages-template> -->\n            </div>\n            \n        ",
            providers: [common_1.NgSwitch, common_1.NgSwitchCase]
        }), 
        __metadata('design:paramtypes', [])
    ], CellTemplate);
    return CellTemplate;
}());
exports.CellTemplate = CellTemplate;
//# sourceMappingURL=cell-template.component.js.map