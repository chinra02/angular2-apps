import { JWTHelper } from './jwt-helper';
import { Observable, Subject } from 'rxjs/Rx';
import { JWTTokenUrlService } from './jwt-token-url.service';
import { BaseHttpService } from './../services/base-http.service';
import { Http } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';



@Injectable()
export class JwtAuthConfiguration {
    url: string;
    constructor(private http: Http, private basehttpService: BaseHttpService, private tokenUrlService: JWTTokenUrlService, private adjJWtHelper: JWTHelper) {
        this.url = this.tokenUrlService.getJWTServletUrl();
    }

    getObservableForToken = function getObservableForToken(): Observable<String> {

        let authTokenSource: Subject<String> = new Subject<String>();
        let authTokenSource$: Observable<String> = authTokenSource.asObservable();
        this.basehttpService.invokeWithUrl(this.url, null).subscribe(
            resp => {
                let token = resp._body;
                localStorage.setItem('id_token', token);
                authTokenSource.next(token);
                authTokenSource.complete();
            },
            (error) => console.error("Error :" + JSON.stringify(error)),
            () => console.log(" getObservableForToken is Completed !!!")
        );
        return authTokenSource$


    }

    makeAuthHttpReady = function makeAuthHttpReady(authHttpSource: Subject<AuthHttp>): void {
        let token = localStorage.getItem('id_token');
        if (token) {
            console.log("Delta: " + (new Date().valueOf() - this.adjJWtHelper.getTokenExpirationDate(token) / 1000));
        }
        if (token == null || token == undefined || this.adjJWtHelper.isTokenExpired(token, 60)) {
            if (token) {
                console.log("Now:     " + new Date().valueOf());
                console.log("Expires: " + this.adjJWtHelper.getTokenExpirationDate(token));
            }
            this.getObservableForToken().subscribe((resp) => {
                token = resp;
                let authHttp: AuthHttp = this.getNewAuthHttp(token);
                authHttpSource.next(authHttp);
                authHttpSource.complete();
            })
        }
        else {
            let authHttp: AuthHttp = this.getNewAuthHttp(token);
            authHttpSource.next(authHttp);
            authHttpSource.complete();
        }

    }


    getNewAuthHttp = function getNewAuthHttp(token): AuthHttp {
        return new AuthHttp(new AuthConfig({
            noJwtError: true,
            globalHeaders: [{ 'Accept': 'application/json' }],
            tokenGetter: (() => token),
        }), this.http);
    }


}