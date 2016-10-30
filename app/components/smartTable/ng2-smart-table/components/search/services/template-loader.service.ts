import {Http} from '@angular/http';
import {
    Injectable
} from '@angular/core';
@Injectable()
export class TemplateLoaderService { 
  constructor(private http:Http) {
  }
  baseUrl:string = "app/smartTable/ng2-smart-table/components/search";
  getTemplateContent = function getTemplateContent(uri:string) {
    return this.http.request(this.baseUrl + uri)
                 .map(res => res);
  }
}