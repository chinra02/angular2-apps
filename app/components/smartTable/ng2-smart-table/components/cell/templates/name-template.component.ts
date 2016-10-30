import {Component,Input} from '@angular/core';

@Component({
   selector:'name-template',
   template:` 
    <div #template [ngSwitch]="type"> 
        <div  *ngSwitchCase="'name-search'"> //TODO: st-custom-search-prop="last" st-custom-search-prop="first" st-custom-search-prop="middle"
            <div>
                <input id="{{uniqueid + '_name_last'}}"  placeholder="Last" [(ngModel)]="name.last" type="search" class="form-control">
            </div>
            <div>
                <input id="{{uniqueid + '_name_first'}}"   placeholder="First" [(ngModel)]="name.first" type="search" class="form-control">
            </div>
            <div>
                <input id="{{uniqueid + '_name_middle'}}"   placeholder="Middle" [(ngModel)]="name.middle" type="search" class="form-control">
            </div>
        </div>
        <div *ngSwitchCase="'name-search-sescription'">[ {{ searchPredicate[column.attr] | NamePipe }} ]</div>
        <span *ngSwitchCase="'name-view'">{{ value | NamePipe }}</span>
        <div *ngSwitchDefault>...</div>
   </div> 
   `
})
export class NameTemplate{
    @Input() type:string;
    @Input() title:string;
    @Input() value:string; 
    @Input() uniqueId; 
    @Input() name;
    @Input() searchPredicate;
    @Input() column;
}