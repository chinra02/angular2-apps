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
var core_1 = require("@angular/core");
var PADDING = "000000";
var CurrencyFormatPipe = (function () {
    function CurrencyFormatPipe() {
        this.hanldleSymbol = function hanldleSymbol(integer, fraction) {
            var transformedValue = integer + fraction;
            if (transformedValue && transformedValue.indexOf('$') < 0) {
                transformedValue = this.currencySymbol(null) + transformedValue;
            }
            return transformedValue;
        };
        this.currencySymbol = function currencySymbol(currencySymbol) {
            if (currencySymbol) {
                return currencySymbol;
            }
            else {
                return '$ ';
            }
        };
        // TODO comes from configuration settings
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = ",";
    }
    CurrencyFormatPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        var transformedValue = this.hanldleSymbol(integer, fraction);
        return transformedValue;
    };
    CurrencyFormatPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        var transformedValue = this.hanldleSymbol(integer, fraction);
        return transformedValue;
    };
    CurrencyFormatPipe = __decorate([
        core_1.Pipe({ name: "currencyFormatter" }), 
        __metadata('design:paramtypes', [])
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());
exports.CurrencyFormatPipe = CurrencyFormatPipe;
//# sourceMappingURL=currency-format.pipe.js.map