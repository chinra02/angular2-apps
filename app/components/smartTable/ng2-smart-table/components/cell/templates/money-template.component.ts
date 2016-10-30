import { CurrencyFormatPipe } from './../../../../../../utils/currency-format.pipe';
import {Component,Input} from '@angular/core';

@Component({
   selector:'money-template',
   template:` 
    <div #template [ngSwitch]="type"> 
       <div class="money" *ngSwitchCase="'money-edit'">
            <input type="text" [(ngModel)]="attribute" currencyFormatter/>
      </div>
      <div class="money" *ngSwitchCase="'money-view'">
        {{ (value || 0) | currency:'USD':true:'1.2-2' }}
    </div>
       <div *ngSwitchDefault>...</div>
  </div> 
   `,
   providers:[CurrencyFormatPipe]
})
export class MoneyTemplate{
    @Input() type:string;
    @Input() title:string;
    @Input() value:string; 
    @Input() uniqueId; 
    @Input() attribute;
}