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
var rest_service_1 = require('./rest.service');
var jwt_auth_configuration_1 = require('./jwt-auth-configuration');
var jwt_token_url_service_1 = require('./jwt-token-url.service');
var angular2_jwt_1 = require('angular2-jwt');
var jwt_helper_1 = require('./jwt-helper');
var base_http_service_1 = require('./../services/base-http.service');
var configuration_1 = require('./configuration');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var JwtModule = (function () {
    function JwtModule() {
    }
    JwtModule = __decorate([
        core_1.NgModule({
            imports: [http_1.JsonpModule],
            providers: [
                configuration_1.Configuration,
                base_http_service_1.BaseHttpService,
                jwt_helper_1.JWTHelper,
                jwt_token_url_service_1.JWTTokenUrlService,
                jwt_auth_configuration_1.JwtAuthConfiguration,
                rest_service_1.AdjudicaitonRestService,
                angular2_jwt_1.AUTH_PROVIDERS
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], JwtModule);
    return JwtModule;
}());
exports.JwtModule = JwtModule;
//# sourceMappingURL=jwt.module.js.map