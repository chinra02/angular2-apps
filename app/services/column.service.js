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
var configuration_1 = require('../jwt/configuration');
var Rx_1 = require('rxjs/Rx');
var base_http_service_1 = require('./base-http.service');
var core_1 = require('@angular/core');
var _ = require('underscore');
var ColumnService = (function () {
    function ColumnService(baseHttp, configuration) {
        this.baseHttp = baseHttp;
        this.configuration = configuration;
        this.getData = function getData(jsonFileName) {
            var buildNumberUrl = "?buildNumber=" + this.getMeditureBuildNumber();
            var jsonUrl = this.configuration.getJsonUrl(jsonFileName, buildNumberUrl);
            return this.baseHttp.invoke(jsonUrl);
        };
        this.getColumns = function getColumns(jsonFileName) {
            var _this = this;
            var buildNumberUrl = "?buildNumber=" + this.getMeditureBuildNumber();
            var jsonUrl = this.configuration.getJsonUrl(jsonFileName, buildNumberUrl);
            var httpColumnSource = new Rx_1.Subject();
            var httpColumnSource$ = httpColumnSource.asObservable();
            var columns = {};
            this.baseHttp.invoke(jsonUrl).subscribe(function (resp) {
                var definitionMap = JSON.parse(resp._body);
                _.forEach(definitionMap, function (definition) {
                    if (definition['attr']) {
                        columns[definition['attr']] = definition;
                        columns[definition['attr']]['id'] = definition['attr'];
                    }
                });
                /*      definitionMap.map(definition => {
                          if (_.isString(definition)) {
                              let defaults = {
                                  title: this.sentencify(definition.attr),
                                  visible: true,
                                  sortAttr: definition.attr,
                                  editable: false,
                                  viewTemplate: undefined,
                                  editTemplate: undefined,
                                  searchTemplate: undefined,
                                  searchDescriptionTemplate: undefined
                              };
          
                              let outResp = _.chain(definition)
                                  .defaults(defaults)
                                  .tap(function (obj) {
                                      _.each(obj, function (val, key) {
                                          if (angular.isFunction(val)) {
                                              obj[key] = val(obj);
                                          }
                                      });
                                  })
                                  .value();
          
                              
                          }
                      })  */
                httpColumnSource.next(columns);
            }, function (error) {
                _this.handleError(error);
            });
            return httpColumnSource$;
        };
        this.handleError = function handleError(error) {
            console.error(error);
            return Rx_1.Observable.throw(error || 'Server error');
        };
        this.sentencify = function sentencify(str) {
            return str && str.replace(/([a-z])([A-Z])/g, "$1 $2");
        };
        this.getMeditureBuildNumber = function getMeditureBuildNumber() {
            return window['buildNumber'] || window.top['buildNumber'] || Math.random();
        };
    }
    ColumnService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [base_http_service_1.BaseHttpService, configuration_1.Configuration])
    ], ColumnService);
    return ColumnService;
}());
exports.ColumnService = ColumnService;
//# sourceMappingURL=column.service.js.map