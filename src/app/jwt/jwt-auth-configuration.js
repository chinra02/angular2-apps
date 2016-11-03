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
var jwt_helper_1 = require('./jwt-helper');
var Rx_1 = require('rxjs/Rx');
var jwt_token_url_service_1 = require('./jwt-token-url.service');
var base_http_service_1 = require('./../services/base-http.service');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var core_1 = require('@angular/core');
var JwtAuthConfiguration = (function () {
    function JwtAuthConfiguration(http, basehttpService, tokenUrlService, adjJWtHelper) {
        this.http = http;
        this.basehttpService = basehttpService;
        this.tokenUrlService = tokenUrlService;
        this.adjJWtHelper = adjJWtHelper;
        this.getObservableForToken = function getObservableForToken() {
            var authTokenSource = new Rx_1.Subject();
            var authTokenSource$ = authTokenSource.asObservable();
            this.basehttpService.invokeWithUrl(this.url, null).subscribe(function (resp) {
                var token = resp._body;
                localStorage.setItem('id_token', token);
                authTokenSource.next(token);
                authTokenSource.complete();
            }, function (error) { return console.error("Error :" + JSON.stringify(error)); }, function () { return console.log(" getObservableForToken is Completed !!!"); });
            return authTokenSource$;
        };
        this.makeAuthHttpReady = function makeAuthHttpReady(authHttpSource) {
            var _this = this;
            var token = localStorage.getItem('id_token');
            if (token) {
                console.log("Delta: " + (new Date().valueOf() - this.adjJWtHelper.getTokenExpirationDate(token) / 1000));
            }
            if (token == null || token == undefined || this.adjJWtHelper.isTokenExpired(token, 60)) {
                if (token) {
                    console.log("Now:     " + new Date().valueOf());
                    console.log("Expires: " + this.adjJWtHelper.getTokenExpirationDate(token));
                }
                this.getObservableForToken().subscribe(function (resp) {
                    token = resp;
                    var authHttp = _this.getNewAuthHttp(token);
                    authHttpSource.next(authHttp);
                    authHttpSource.complete();
                });
            }
            else {
                var authHttp = this.getNewAuthHttp(token);
                authHttpSource.next(authHttp);
                authHttpSource.complete();
            }
        };
        this.getNewAuthHttp = function getNewAuthHttp(token) {
            return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
                noJwtError: true,
                globalHeaders: [{ 'Accept': 'application/json' }],
                tokenGetter: (function () { return token; }),
            }), this.http);
        };
        this.url = this.tokenUrlService.getJWTServletUrl();
    }
    JwtAuthConfiguration = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, base_http_service_1.BaseHttpService, jwt_token_url_service_1.JWTTokenUrlService, jwt_helper_1.JWTHelper])
    ], JwtAuthConfiguration);
    return JwtAuthConfiguration;
}());
exports.JwtAuthConfiguration = JwtAuthConfiguration;
//# sourceMappingURL=jwt-auth-configuration.js.map