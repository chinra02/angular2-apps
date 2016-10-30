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
var Rx_1 = require('rxjs/Rx');
var configuration_1 = require('./configuration');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var jwt_auth_configuration_1 = require('./jwt-auth-configuration');
var core_1 = require('@angular/core');
var _ = require('underscore');
var AdjudicaitonRestService = (function () {
    function AdjudicaitonRestService(http, config) {
        this.http = http;
        this.config = config;
        this.invoke = function invoke(url, params) {
            var _this = this;
            var restSource = new Rx_1.Subject();
            var rest$ = restSource.asObservable();
            var authHttpSource = new Rx_1.Subject();
            var authHttpSource$ = authHttpSource.asObservable();
            authHttpSource$.subscribe(function (authHttp) {
                var uri = _this.config.baseUrl + url;
                var urlParms = new http_1.URLSearchParams();
                var options = new http_1.RequestOptions({ search: urlParms });
                if (params) {
                    _.mapObject(params, function (value, key) {
                        urlParms.set(key, value);
                    });
                }
                authHttp.request(uri, options).subscribe(function (resp) {
                    restSource.next(resp.json());
                    restSource.complete();
                });
            }, function (error) {
                _this.handleError(error);
            }, function () { return console.log(" AdjudicaitonRestService invoke call is Completed !!!"); });
            this.http.makeAuthHttpReady(authHttpSource);
            return rest$;
        };
        this.handleError = function handleError(error) {
            console.error(error);
            return Observable_1.Observable.throw(error || 'Server error');
        };
        this.configiguration = config;
        this.jWT = http;
    }
    AdjudicaitonRestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [jwt_auth_configuration_1.JwtAuthConfiguration, configuration_1.Configuration])
    ], AdjudicaitonRestService);
    return AdjudicaitonRestService;
}());
exports.AdjudicaitonRestService = AdjudicaitonRestService;
//# sourceMappingURL=rest.service.js.map