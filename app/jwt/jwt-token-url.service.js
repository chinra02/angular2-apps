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
var configuration_1 = require('./configuration');
var core_1 = require('@angular/core');
var JWTTokenUrlService = (function () {
    function JWTTokenUrlService(config) {
        this.config = config;
        this.getJWTServletUrl = function getJWTServletUrl() {
            // Prefer baseAppUrl if we are in an IFrame.
            if (window.top && window.top['baseAppUrl']) {
                return window.top.top['baseAppUrl'] + "/jwt";
            }
            else {
                // Fall back to the configured URL on the
                return this.config.jwtBaseUrl + "/jwt";
            }
        };
    }
    JWTTokenUrlService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [configuration_1.Configuration])
    ], JWTTokenUrlService);
    return JWTTokenUrlService;
}());
exports.JWTTokenUrlService = JWTTokenUrlService;
//# sourceMappingURL=jwt-token-url.service.js.map