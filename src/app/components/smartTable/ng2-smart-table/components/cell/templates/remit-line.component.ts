
import {Component,Input} from '@angular/core';

@Component({
   selector:'remit-line-template',
   template:` 
    <div #template [ngSwitch]="type"> 
        <div *ngSwitchCase="'remit-line-adjustment-amount'">
            <div *ngIf="level !== 'CLAIM_LEVEL'" class="money">
             {{ value | currency:'USD':true:'1.2-2'  }}
            </div>
            <div *ngIf="level === 'CLAIM_LEVEL'">n/a</div>
        </div>
        <div *ngSwitchCase="''">
        
            <div *ngIf="level !== 'CLAIM_LEVEL'" class="allowed-field-number">
                <div class="money_calc">{{ (value || 0) | currency:'USD':true:'1.2-2' }}</div>
                <div *ngIf="row.previousInitialAllowedAmount">
                    <div class="money">{{row.previousInitialAllowedAmount | currency:'USD':true:'1.2-2'}}</div>
                    <hr class="money-line">
                    <div class="money">{{value + row.previousInitialAllowedAmount | currency:'USD':true:'1.2-2'}}</div>
                </div>
            </div>
            <div *ngIf="level !== 'CLAIM_LEVEL'" class="allowed-field-calc">
                <button (click)="logEntries(row)"
                        class="{{noLogEntries(row) == true ? 'ui-button ui-state-disabled ui-button-icon-only' : 'ui-button ui-state-default ui-button-icon-only'}}"
                        aria-disabled="false"
                        type="button"
                        title="Show  log"
                        [disabled]="noLogEntries(row)">
                    <span class="fa fa-calculator"></span>
                </button>
            </div>
            <div class="allowed-field-number" *ngSwitchCase="'remit-line-charged-amount'">
                <div class="money_calc">{{ (value || 0) | currency:'USD':true:'1.2-2' }}</div>
            </div>
            <div *ngIf="level === 'CLAIM_LEVEL'">n/a</div>
        </div>
        <div *ngSwitchDefault>...</div>
   </div> 
   `
})
export class RemitLineTemplate{
    @Input() type:string;
    @Input() title:string;
    @Input() value:string; 
    @Input() uniqueId; 
    @Input() attribute;
    @Input() level;
    @Input() row;

    logEntries =  function logEntries(event){ //TODO: unimplemented
    }
    noLogEntries = function noLogEntries(row){

    }

}