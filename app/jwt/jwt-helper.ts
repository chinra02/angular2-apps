import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';
import { BaseHttpService } from './../services/base-http.service';
import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
@Injectable()
export class JWTHelper {

    jwtHelper: JwtHelper;
    constructor() {
        this.jwtHelper = new JwtHelper();
    }

    isTokenExpired = function isTokenExpired(token, time) {
        if (time == null || time == undefined) {
            time = 60;
        }

        return this.jwtHelper.isTokenExpired(token, time);
    }

    getTokenExpirationDate = function getTokenExpirationDate(token){
        return this.jwtHelper.getTokenExpirationDate(token).valueOf()
    }


}