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
var DateTemplate = (function () {
    function DateTemplate() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTemplate.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTemplate.prototype, "columnDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTemplate.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTemplate.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTemplate.prototype, "uniqueid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTemplate.prototype, "attrPredicate", void 0);
    DateTemplate = __decorate([
        core_1.Component({
            selector: 'date-template',
            template: "\n       <div #template [ngSwitch]=\"type\"> \n            <span *ngSwitchCase=\"'date-edit'\"><small>todo: editor</small> {{ columnDate | date }}</span>\n            <div *ngSwitchCase=\"'date-search'\">\n                <ng2-datepicker placeHolder=\"{{title}} is after date...\" id=\"{{uniqueid + '_date_after'}}\" format=\"shortDate\"> </ng2-datepicker>\n                <ng2-datepicker placeHolder=\"{{title}} is before date...\" id=\"{{uniqueid + '_date_before'}}\" format=\"shortDate\"> </ng2-datepicker>\n           </div>\n           <div *ngSwitchCase=\"'date-search-description'\">\n                <div *ngIf=\"attrPredicate.low && attrPredicate.high\">\n                    {{attrPredicate.low | date:'shortDate'}} -\n                    {{attrPredicate.high | date:'shortDate'}}\n                </div>\n                <div *ngIf=\"attrPredicate.low && !attrPredicate.high\">\n                    After {{attrPredicate.low | date:'shortDate'}}\n                </div>\n                <div *ngIf=\"!attrPredicate.low && attrPredicate.high\">\n                    Before {{attrPredicate.high | date:'shortDate'}}\n                </div> \n         </div>\n         <span *ngSwitchCase=\"'date-view'\">{{ columnDate | date }}</span>\n         <div *ngSwitchDefault>...</div>\n\n    </div>\n\n   ",
            providers: [common_1.NgSwitch, common_1.NgSwitchCase]
        }), 
        __metadata('design:paramtypes', [])
    ], DateTemplate);
    return DateTemplate;
}());
exports.DateTemplate = DateTemplate;
//# sourceMappingURL=date-template.component.js.map