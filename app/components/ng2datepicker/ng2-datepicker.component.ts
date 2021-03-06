import {
    DateFormatter
} from 'ng2-bootstrap/components/datepicker/date-formatter';
import { Component, ViewContainerRef, forwardRef, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment_ from 'moment';

const moment: any = (<any>moment_).default || moment_;



@Component({
  selector: 'ng2-datepicker',
  moduleId: module.id,
  templateUrl:'ng2-datepicker.component.html',
  
})
export class DatePickerComponent {
   public formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  @Input() opened:boolean=false;
  @Input() format:string = 'shortDate';
  @Input() id;
  @Input() placeHolder;

  public dt:Date ;
  public minDate:Date = void 0;
  public events:Array<any>;
  public tomorrow:Date;
  public afterTomorrow:Date;
 
  
  public dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
 
  public constructor() {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
    if(this.dt ==null || this.dt==undefined){
       this.dt = new Date();
    }
  }
 
  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }
 
  public today():void {
    this.dt = new Date();
  }
 
  public d20090824():void {
    this.dt = moment('2009-08-24', 'YYYY-MM-DD').toDate();
  }
 
  // todo: implement custom class cases
  public getDayClass(date:any, mode:string):string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);
 
      for (let i = 0; i < this.events.length; i++) {
        let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
 
        if (dayToCheck === currentDay) {
          return this.events[i].status;
        }
      }
    }
 
    return '';
  }
 
  public disabled(date:Date, mode:string):boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }
 
  public open():void {
    this.opened = !this.opened;
  }
 
  public clear():void {
    this.dt = void 0;
  }
 
  public toggleMin():void {
    this.dt = new Date(this.minDate.valueOf());
  }

  public  toggle() {
    this.opened = !this.opened; 
  }

  public onDateChange(event){
     if(event.target.value){
        let newDate:any = new Date(event.target.value);
        if(newDate && newDate!='Invalid Date'){
              this.dt =  newDate;
        }
     }
  }

}
