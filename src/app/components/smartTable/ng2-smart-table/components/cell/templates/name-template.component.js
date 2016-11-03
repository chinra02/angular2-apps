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
var NameTemplate = (function () {
    function NameTemplate() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NameTemplate.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NameTemplate.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NameTemplate.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NameTemplate.prototype, "uniqueId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NameTemplate.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NameTemplate.prototype, "searchPredicate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NameTemplate.prototype, "column", void 0);
    NameTemplate = __decorate([
        core_1.Component({
            selector: 'name-template',
            template: " \n    <div #template [ngSwitch]=\"type\"> \n        <div  *ngSwitchCase=\"'name-search'\"> //TODO: st-custom-search-prop=\"last\" st-custom-search-prop=\"first\" st-custom-search-prop=\"middle\"\n            <div>\n                <input id=\"{{uniqueid + '_name_last'}}\"  placeholder=\"Last\" [(ngModel)]=\"name.last\" type=\"search\" class=\"form-control\">\n            </div>\n            <div>\n                <input id=\"{{uniqueid + '_name_first'}}\"   placeholder=\"First\" [(ngModel)]=\"name.first\" type=\"search\" class=\"form-control\">\n            </div>\n            <div>\n                <input id=\"{{uniqueid + '_name_middle'}}\"   placeholder=\"Middle\" [(ngModel)]=\"name.middle\" type=\"search\" class=\"form-control\">\n            </div>\n        </div>\n        <div *ngSwitchCase=\"'name-search-sescription'\">[ {{ searchPredicate[column.attr] | NamePipe }} ]</div>\n        <span *ngSwitchCase=\"'name-view'\">{{ value | NamePipe }}</span>\n        <div *ngSwitchDefault>...</div>\n   </div> \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], NameTemplate);
    return NameTemplate;
}());
exports.NameTemplate = NameTemplate;
//# sourceMappingURL=name-template.component.js.map