import {Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector:'ng2-dropdown-comp',
    template:`
        <span class="dropdown" dropdown>
            <button  class="btn btn-std btn-secondary "  dropdown-open>
             {{label}}
             <span>
               <span *ngIf="displayLength && data && data.length>0">({{data.length}}) </span>
                <span class="caret icon-right">
                </span>
             </span>
                
            </button>
             <ul class="dropdown-menu" *ngIf="dropdownNotCloseZone!=null"  dropdown-not-closable-zone>
                <li *ngFor="let option of data">
                    <a (click)="onSelect($event,option)">
                        <span *ngIf="isSmartSelectorEnabled"> 
                          <smart-selector [(selectedValue)]="option.isVisible"  (edited)="onChange($event,option)"> </smart-selector>
                        </span>
                        {{option[optionsDisplayProperty]}}
                    </a>
                </li>
            </ul>
           <ul class="dropdown-menu" *ngIf="dropdownNotCloseZone==null">
                <li *ngFor="let option of data">
                    <a (click)="onSelect($event,option)">
                        <span *ngIf="isSmartSelectorEnabled"> 
                          <smart-selector [(selectedValue)]="option.isVisible"  (edited)="onChange($event,option)"> </smart-selector>
                        </span>
                        {{option[optionsDisplayProperty]}}
                    </a>
                </li>
            </ul>
        </span>
    `
})
export class Ng2DropDownComponent{

    @Input() public label:String;
    @Output() public selected:EventEmitter<any>= new EventEmitter<any>();
    @Input() optionsDisplayProperty:string='label';
    @Input() optionsVisibility:boolean;
    @Input() isSmartSelectorEnabled:boolean=true;
    @Input() dropdownNotCloseZone=null;
    @Input() displayLength:boolean=true;
    @Input() public data:Array<any>; //Excepting [{visible:true,title:'Sample'}]
    @Output() public  edited:EventEmitter<any> =  new EventEmitter<any>();

   onChange = function onChange(event,option):void{
        event.passedValue = option;
        this.edited.emit(event,option);
    }

    onSelect = function(event,option){
       event.passedValue = option;
       this.selected.emit(event,this.optionsDisplayProperty);
    }

}
