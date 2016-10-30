import { Configuration } from '../jwt/configuration';
import { Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { BaseHttpService } from './base-http.service';
import { Injectable } from '@angular/core';

var _ = require('underscore');


@Injectable()
export class ColumnService {
    constructor(private baseHttp: BaseHttpService,private configuration:Configuration) { }

    getData = function getData(jsonFileName: string): Observable<any> {
        let buildNumberUrl = "?buildNumber=" + this.getMeditureBuildNumber();
        let jsonUrl = this.configuration.getJsonUrl(jsonFileName,buildNumberUrl);
        return this.baseHttp.invoke(jsonUrl);
    }

    getColumns = function getColumns(jsonFileName: string): Observable<any> {
        let buildNumberUrl = "?buildNumber=" + this.getMeditureBuildNumber();
        let jsonUrl = this.configuration.getJsonUrl(jsonFileName,buildNumberUrl);
        let httpColumnSource: Subject<any> = new Subject<any>();
        let httpColumnSource$: Observable<String> = httpColumnSource.asObservable();
        let columns = {};
        this.baseHttp.invoke(jsonUrl).subscribe(resp => {
            let definitionMap:any = JSON.parse(resp._body);
            _.forEach(definitionMap, function(definition){
               if(definition['attr']){
                 columns[definition['attr']]=definition;
                 columns[definition['attr']]['id']=definition['attr'];
               }
            })

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
        },
        error=>{
            this.handleError(error);
        })

        return httpColumnSource$;

    }

    handleError = function handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

    sentencify = function sentencify(str) {
        return str && str.replace(/([a-z])([A-Z])/g, "$1 $2");
    }

    getMeditureBuildNumber = function getMeditureBuildNumber() {
        return window['buildNumber'] || window.top['buildNumber'] || Math.random();
    }



}