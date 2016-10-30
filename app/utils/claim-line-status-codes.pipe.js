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
var _ = require('underscore');
var core_1 = require('@angular/core');
var ClaimLineStatusCodes = (function () {
    function ClaimLineStatusCodes() {
    }
    ClaimLineStatusCodes.prototype.transform = function (elem, args) {
        if (!elem)
            return null;
        var pairs = [
            [elem.statusCategoryCode1, elem.statusCode1],
            [elem.statusCategoryCode2, elem.statusCode2],
            [elem.statusCategoryCode3, elem.statusCode3]
        ];
        // _.partial(_.every, _, angular.identity);
        var hasData = function (pair) {
            return _.some(pair, angular.identity);
        };
        var joinpair = function (pair) {
            return _.filter(pair, angular.identity).join("-");
        };
        var codes = _.chain(pairs)
            .filter(hasData)
            .map(joinpair)
            .join("/")
            .value();
        return [codes, elem.freeFormMessageText]
            .filter(angular.identity)
            .join(" - ");
    };
    ClaimLineStatusCodes = __decorate([
        core_1.Pipe({ name: 'claimLineStatusCodes' }), 
        __metadata('design:paramtypes', [])
    ], ClaimLineStatusCodes);
    return ClaimLineStatusCodes;
}());
exports.ClaimLineStatusCodes = ClaimLineStatusCodes;
//# sourceMappingURL=claim-line-status-codes.pipe.js.map