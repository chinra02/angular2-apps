import {
    NgSwitch, NgSwitchCase
} from '@angular/common';
import {Component,Input} from '@angular/core';

@Component({
   selector:'date-template',
   template:`
       <div #template [ngSwitch]="type"> 
            <span *ngSwitchCase="'date-edit'"><small>todo: editor</small> {{ columnDate | date }}</span>
            <div *ngSwitchCase="'date-search'">
                <ng2-datepicker placeHolder="{{title}} is after date..." id="{{uniqueid + '_date_after'}}" format="shortDate"> </ng2-datepicker>
                <ng2-datepicker placeHolder="{{title}} is before date..." id="{{uniqueid + '_date_before'}}" format="shortDate"> </ng2-datepicker>
           </div>
           <div *ngSwitchCase="'date-search-description'">
                <div *ngIf="attrPredicate.low && attrPredicate.high">
                    {{attrPredicate.low | date:'shortDate'}} -
                    {{attrPredicate.high | date:'shortDate'}}
                </div>
                <div *ngIf="attrPredicate.low && !attrPredicate.high">
                    After {{attrPredicate.low | date:'shortDate'}}
                </div>
                <div *ngIf="!attrPredicate.low && attrPredicate.high">
                    Before {{attrPredicate.high | date:'shortDate'}}
                </div> 
         </div>
         <span *ngSwitchCase="'date-view'">{{ columnDate | date }}</span>
         <div *ngSwitchDefault>...</div>

    </div>

   `,
    providers:[NgSwitch,NgSwitchCase]
})
export class DateTemplate{
    @Input() type;
    @Input() columnDate; 
    @Input() id;
    @Input() title;
    @Input() uniqueid;
    @Input() attrPredicate;
    
}