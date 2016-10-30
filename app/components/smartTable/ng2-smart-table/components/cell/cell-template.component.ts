import {
    NgSwitch, NgSwitchCase
} from '@angular/common';
import {Component,Input, ViewContainerRef, OnInit, ViewChild, ComponentFactoryResolver} from '@angular/core';

@Component({
   selector:'cell-template',
   template:`
            <div #container [ngSwitch]="templateType"> 
              <text-template *ngSwitchCase="'text'" [type]="type"> </text-template>
              <date-template *ngSwitchCase="'date'" [type]="type"> </date-template>
             <!-- <list-template *ngSwitchCase="date-edit" [type]="type"> </list-template>
              <messages-template *ngSwitchCase="'message'" [type]="type" [messages]=cellData> </messages-template> -->
            </div>
            
        `,
    providers:[NgSwitch,NgSwitchCase]
   
})
export class CellTemplate implements OnInit{
    @Input() componentType;
    @Input() cellData;
    @Input() titile;
    @Input() type:string; 
    templateType:string;

    ngOnInit(){
        if(this.type && typeof this.type === 'string'){
            this.templateType = this.type.substring(0,this.type.indexOf('-'));
        }
    }
/*
    @ViewChild('container', {read:ViewContainerRef}) conatiner;
    
    constructor(private resolver:ComponentFactoryResolver){}

    ngAfterContentInit(){
     let templateViewFactory =this.resolver.resolveComponentFactory(this.createTemplateComponent());
     this.conatiner.createComponent(templateViewFactory);
    } */

}