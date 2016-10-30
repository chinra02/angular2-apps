import {Component,Input} from '@angular/core';

@Component({
   selector:'text-template',
   template:` 
    <div #template [ngSwitch]="type"> 
       <input *ngSwitchCase="'text-edit'">
       <input *ngSwitchCase="'text-search'" id="{{id + '_text'}}"  placeholder="search for {{title}}" class="input-sm form-control" type="search"/>
       <span  *ngSwitchCase="'text-view'">{{ value }}</span>
       <div *ngSwitchDefault>...</div>
  </div> 
   `
})
export class TextTemplate{
    @Input() type:string;
    @Input() title:string;
    @Input() value:string; 
    @Input() id; 
}