import { Configuration } from './../jwt/configuration';
import { Observable } from 'rxjs/Observable';
import { BaseModel } from './../modal/base.modal';
import { Headers, Http, Jsonp, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class BaseHttpService {
    constructor(private jsonp: Jsonp, private http:Http) { }

    public invokeWithUrl = (uri, params): Observable<any> => {
        let url = uri + '?cachebuster=' + Math.random() + '&callback=JSONP_CALLBACK';
        return this.jsonp.request(url, { method: 'Get' });

    }

    public invoke = (uri): Observable<any> => {
          return this.http.request(uri, { method: 'Get'});

    }
   
}