
import {ModalContent} from 'ng2-modal';
import {ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {Component, ViewChild, Input, OnInit} from '@angular/core';

@Component({
    selector: 'template-modal',
    moduleId: module.id,
    template: `

<popover-content #cellPopover 
                [title]="title" 
                placement="bottom"
                [animation]="true" 
                [closeOnClickOutside]="true" >
  <div class="flex-container"> 
    <div class="flex1">
      <cell-template  [type]="type"></cell-template>
    </div>
  </div>
        
    
</popover-content>

<div [popover]="cellPopover" class="st-icon st-search ng-scope"></div>
`,
  
})
export class TemplateModal {
    @Input() title: string = "text";
    @Input() type: string = "text";
    templateUrl;
/*
    getTemplateURL = function getTemplateURL() {
        let factory: TemplateFactory = new TemplateFactory();
        let templateUrl: string = factory.getTemplateURL(this.templateKey);
        if (templateUrl) {
            return templateUrl;
        }
        else {
            return factory.getDefaultTemplateURL();
        }
    }

   createTemplateComponent= function createTemplateComponent():Component{
     return  Component({
         selector:'template-view',
         moduleId:module.id,
         templateUrl:'./templates/views/text-search.html'
      })
    }

    @ViewChild('container', {read:ViewContainerRef}) conatiner;
    @ViewChild('template') template;

    constructor(private resolver:ComponentFactoryResolver){}

    ngAfterContentInit(){
     let templateViewFactory =this.resolver.resolveComponentFactory(this.createTemplateComponent());
      console.log(this.conatiner.createComponent(templateViewFactory));
    }  */

}