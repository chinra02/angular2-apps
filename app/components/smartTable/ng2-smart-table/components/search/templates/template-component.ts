import {Http} from '@angular/http';
import {TemplateLoaderService} from '../services/template-loader.service';

import {Component,Input, ViewChild,ViewContainerRef,ComponentFactoryResolver,OnInit} from '@angular/core';


@Component({
    selector:'template-view',
    moduleId:module.id,
    template:`
         <div [innerHTML]="templateHtml | safe"></div>
     `,
    providers:[TemplateLoaderService]
})
export class TemplateComponent {
    templateBase:string="./views/";
    @Input() type:string;
    templateHtml:string;
    templateUrlsMap:Object = new Object();

    constructor(private resolver:ComponentFactoryResolver, private templateLoaderService: TemplateLoaderService){}

    getTemplateHtml = function getTemplateHtml(uri:string){
        this.templateLoaderService.getTemplateContent(uri).subscribe(
        data => { this.templateHtml = data._body.toString();
                  
            },
        err => console.error(err)
       
      );
    }

     ngAfterViewInit(){
          this.getTemplateHtml("/templates/views/text-search.html");
    }


}