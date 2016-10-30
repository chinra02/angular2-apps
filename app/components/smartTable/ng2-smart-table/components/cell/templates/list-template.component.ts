import { CommaSeparatedList } from './../../../../../../utils/comma-separated-list.pipe';
import {Component,Input} from '@angular/core';

@Component({
   selector:'list-template',
   template:`
    <div #template [ngSwitch]="type"> 
        <div *ngSwitchCase="'list-searh'">
        // TODO:  (change)="pipe()"
        <ng-select
        id="{{uniqueid + '_select'}}"
        [options]="column.list"
        [(ngModel)]="searchPredicate[column.attr]"
        class="input-sm form-control">
        </ng-select>
        </div>
        <span *ngSwitchCase="'list-view'">{{ value | commaSeparatedList }}</span>
    </div>
   `,
   providers:[CommaSeparatedList]
})
export class ListTemplate{
    @Input() columnDate;
    @Input() uniqueid;
    @Input() value;
    @Input() column;
    searchPredicate;  
}