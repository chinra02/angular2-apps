import {Component,Input} from '@angular/core';

@Component({
   selector:'numeric-template',
   template:` 
    <div #template [ngSwitch]="type"> //TODO  st-custom-search="column.attr" st-custom-search-type="number"
        <div *ngSwitchCase="'numeric-search'">
            <div class="flex-container">
                <div class="flex1">
                    <input  placeholder="Equals" [(ngModel)]="numberValue" type="text" class="form-control"> //TODO st-custom-search-prop="numberValue"
                </div>
            </div>
        </div>
        <div *ngSwitchCase="'numeric-search-description'">
            <div *ngIf="attrPredicate.numberValue">
                 {{attrPredicate.numberValue}}
            </div>
       </div>
        <div *ngSwitchDefault>...</div>
   </div> 
   `
})
export class NumericTemplate{
    @Input() type:string;
    @Input() title:string;
    @Input() value:string; 
    @Input() uniqueId; 
    @Input() attribute;
    @Input() attrPredicate;
}