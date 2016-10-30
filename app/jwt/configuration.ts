import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public baseUrl: string= "/service/rest/api/v1/";
    private jsonBaseUrl = "/app/json/" ;

    getJsonUrl = function getJsonUrl(jsonFileName:string,buildNumberUrl:string):string{
      return this.jsonBaseUrl + jsonFileName + '.json' + buildNumberUrl;
    }
}