import { Subject } from 'rxjs/Rx';
import { AuthHttp } from 'angular2-jwt';
import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';
import { Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { JwtAuthConfiguration } from './jwt-auth-configuration';
import { Injectable } from '@angular/core';

var _ = require('underscore');

@Injectable()
export class AdjudicaitonRestService {

    private configiguration: Configuration;
    private jWT: JwtAuthConfiguration;



    constructor(private http: JwtAuthConfiguration, private config: Configuration) {
        this.configiguration = config;
        this.jWT = http;

    }


    invoke = function invoke(url, params): Observable<any> {
        let restSource: Subject<any> = new Subject<any>();
        let rest$: Observable<any> = restSource.asObservable();

        let authHttpSource: Subject<AuthHttp> = new Subject<AuthHttp>();
        let authHttpSource$: Observable<AuthHttp> = authHttpSource.asObservable();
        authHttpSource$.subscribe(
            (authHttp: AuthHttp) => {
                let uri = this.config.baseUrl + url;
                let urlParms: URLSearchParams = new URLSearchParams();
                let options = new RequestOptions({ search: urlParms });
                if (params) {
                    _.mapObject(params,function(value,key){
                            urlParms.set(key, value);
                    })

                }

                authHttp.request(uri, options).subscribe(resp => {
                    restSource.next(resp.json());
                    restSource.complete();
                })

            },
            (error) => {
                this.handleError(error);
            },
            () => console.log(" AdjudicaitonRestService invoke call is Completed !!!")
        );
        this.http.makeAuthHttpReady(authHttpSource);

        return rest$;

    }

    handleError = function handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

}