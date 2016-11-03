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
var currency_format_pipe_1 = require('./../../../../../../utils/currency-format.pipe');
var core_1 = require('@angular/core');
var MoneyTemplate = (function () {
    function MoneyTemplate() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MoneyTemplate.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MoneyTemplate.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MoneyTemplate.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MoneyTemplate.prototype, "uniqueId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MoneyTemplate.prototype, "attribute", void 0);
    MoneyTemplate = __decorate([
        core_1.Component({
            selector: 'money-template',
            template: " \n    <div #template [ngSwitch]=\"type\"> \n       <div class=\"money\" *ngSwitchCase=\"'money-edit'\">\n            <input type=\"text\" [(ngModel)]=\"attribute\" currencyFormatter/>\n      </div>\n      <div class=\"money\" *ngSwitchCase=\"'money-view'\">\n        {{ (value || 0) | currency:'USD':true:'1.2-2' }}\n    </div>\n       <div *ngSwitchDefault>...</div>\n  </div> \n   ",
            providers: [currency_format_pipe_1.CurrencyFormatPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], MoneyTemplate);
    return MoneyTemplate;
}());
exports.MoneyTemplate = MoneyTemplate;
//# sourceMappingURL=money-template.component.js.map