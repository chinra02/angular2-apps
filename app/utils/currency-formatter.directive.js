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
var currency_format_pipe_1 = require('./currency-format.pipe');
var core_1 = require("@angular/core");
var CurrencyFormatterDirective = (function () {
    function CurrencyFormatterDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.el = this.elementRef.nativeElement;
    }
    CurrencyFormatterDirective.prototype.ngOnInit = function () {
        this.el.value = this.currencyPipe.transform(this.el.value);
    };
    CurrencyFormatterDirective.prototype.onFocus = function (value) {
        this.el.value = this.currencyPipe.parse(value); // opossite of transform
    };
    CurrencyFormatterDirective.prototype.onBlur = function (value) {
        this.el.value = this.currencyPipe.transform(value);
    };
    __decorate([
        core_1.HostListener("focus", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CurrencyFormatterDirective.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener("blur", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CurrencyFormatterDirective.prototype, "onBlur", null);
    CurrencyFormatterDirective = __decorate([
        core_1.Directive({ selector: "[currencyFormatter]" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, currency_format_pipe_1.CurrencyFormatPipe])
    ], CurrencyFormatterDirective);
    return CurrencyFormatterDirective;
}());
exports.CurrencyFormatterDirective = CurrencyFormatterDirective;
//# sourceMappingURL=currency-formatter.directive.js.map