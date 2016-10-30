import { Cell } from './../../lib/data-set/cell';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ng2-smart-table-cell',
  moduleId:module.id,
  styleUrls: ['cell.scss'],
  template: `
     <span *ngIf="cell.isPopover"> 
          <popover-content  #cellPopover 
                [title]="title" 
                placement="left"
                [animation]="false">
          <div class="flex-container"> 
            <div class="flex1">
               <messages-view-template *ngIf="cell.isPopover"  [messages]="cell.getData()"> </messages-view-template>
            </div>
          </div>
        </popover-content>
     
      <a href [popover]="cellPopover"   [popoverOnHover]="true">{{ cell.getValue() }}</a>
     
     </span>
   
    <div *ngIf="!cell.getRow().isInEditing && cell.getColumn().type !== 'html' && !cell.isPopover ">{{ cell.getValue() }}</div>
    
    <div *ngIf="!cell.getRow().isInEditing && cell.getColumn().type === 'html'" [innerHTML]="cell.getValue()"></div>
    <input *ngIf="cell.getRow().isInEditing" 
      [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getColumn().id" 
      [placeholder]="cell.getColumn().title"
      [disabled]="!cell.getColumn().isEditable"
      (click)="onClick($event)"
      (keydown.enter)="onEdited($event)" 
      (keydown.esc)="onStopEditing()">

`
 ,
 
})
export class CellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';


  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();


  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onEdited(event:any): boolean {
    this.edited.emit(event);
    return false;
  }

  onClick(event:any): void {
    event.stopPropagation();
  }

}
