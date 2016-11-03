import { AdjudicaitonRestService } from './rest.service';
import { JwtAuthConfiguration } from './jwt-auth-configuration';
import { JWTTokenUrlService } from './jwt-token-url.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { JWTHelper } from './jwt-helper';
import { BaseHttpService } from './../services/base-http.service';
import { Configuration } from './configuration';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';



@NgModule({
  imports: [ JsonpModule],
    providers: [
         Configuration,
         BaseHttpService,
         JWTHelper,
         JWTTokenUrlService,
         JwtAuthConfiguration,
         AdjudicaitonRestService,
         AUTH_PROVIDERS
           
  ],
    // The store that defines our app state]
})
export class JwtModule {

     
}

