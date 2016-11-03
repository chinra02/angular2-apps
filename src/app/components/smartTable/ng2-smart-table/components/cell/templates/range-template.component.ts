import {Component,Input} from '@angular/core';

@Component({
   selector:'range-template',
   template:` 
    <div #template [ngSwitch]="type"> 
        <div *ngSwitchCase="'range-search'"  st-custom-search-type="range"> //TODO: st-custom-search="column.attr"
            <div class="flex-container">
                <div class="flex1" style="width: 230px;">
                    <input  id="search_greater_than" placeholder="Greater than" [(ngModel)]="range.low" type="text" class="form-control"> //TODO: st-custom-search-prop="low"
                </div>
            </div>

            <div class="flex-container">
                <div class="flex1">
                    <input  id="search_less_than" placeholder="Less than" [(ngModel)]="range.high" type="text" class="form-control"> //TODO  st-custom-search-prop="high"
                </div>
            </div>
     </div>
       <div *ngSwitchCase="'range-search-description'">
            <div *ngIf="attrPredicate.low && attrPredicate.high">
                {{attrPredicate.low}} -
                {{attrPredicate.high}}
            </div>
            <div *ngIf="attrPredicate.low && !attrPredicate.high">
                &gt; {{attrPredicate.low}}
            </div>
            <div *ngIf="!attrPredicate.low && attrPredicate.high">
                &lt; {{attrPredicate.high}}
            </div>
      </div>
        <div *ngSwitchDefault>...</div>
   </div> 
   `
})
export class RangeTemplate{
    @Input() type:string;
    @Input() title:string;
    @Input() value:string; 
    @Input() uniqueId; 
    @Input() attribute;
    @Input() attrPredicate;
}