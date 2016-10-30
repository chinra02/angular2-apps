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
var angular2_jwt_1 = require('angular2-jwt');
var core_1 = require('@angular/core');
var JWTHelper = (function () {
    function JWTHelper() {
        this.isTokenExpired = function isTokenExpired(token, time) {
            if (time == null || time == undefined) {
                time = 60;
            }
            return this.jwtHelper.isTokenExpired(token, time);
        };
        this.getTokenExpirationDate = function getTokenExpirationDate(token) {
            return this.jwtHelper.getTokenExpirationDate(token).valueOf();
        };
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
    }
    JWTHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JWTHelper);
    return JWTHelper;
}());
exports.JWTHelper = JWTHelper;
//# sourceMappingURL=jwt-helper.js.map