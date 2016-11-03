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
var RangeTemplate = (function () {
    function RangeTemplate() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RangeTemplate.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RangeTemplate.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RangeTemplate.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RangeTemplate.prototype, "uniqueId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RangeTemplate.prototype, "attribute", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RangeTemplate.prototype, "attrPredicate", void 0);
    RangeTemplate = __decorate([
        core_1.Component({
            selector: 'range-template',
            template: " \n    <div #template [ngSwitch]=\"type\"> \n        <div *ngSwitchCase=\"'range-search'\"  st-custom-search-type=\"range\"> //TODO: st-custom-search=\"column.attr\"\n            <div class=\"flex-container\">\n                <div class=\"flex1\" style=\"width: 230px;\">\n                    <input  id=\"search_greater_than\" placeholder=\"Greater than\" [(ngModel)]=\"range.low\" type=\"text\" class=\"form-control\"> //TODO: st-custom-search-prop=\"low\"\n                </div>\n            </div>\n\n            <div class=\"flex-container\">\n                <div class=\"flex1\">\n                    <input  id=\"search_less_than\" placeholder=\"Less than\" [(ngModel)]=\"range.high\" type=\"text\" class=\"form-control\"> //TODO  st-custom-search-prop=\"high\"\n                </div>\n            </div>\n     </div>\n       <div *ngSwitchCase=\"'range-search-description'\">\n            <div *ngIf=\"attrPredicate.low && attrPredicate.high\">\n                {{attrPredicate.low}} -\n                {{attrPredicate.high}}\n            </div>\n            <div *ngIf=\"attrPredicate.low && !attrPredicate.high\">\n                &gt; {{attrPredicate.low}}\n            </div>\n            <div *ngIf=\"!attrPredicate.low && attrPredicate.high\">\n                &lt; {{attrPredicate.high}}\n            </div>\n      </div>\n        <div *ngSwitchDefault>...</div>\n   </div> \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], RangeTemplate);
    return RangeTemplate;
}());
exports.RangeTemplate = RangeTemplate;
//# sourceMappingURL=range-template.component.js.map