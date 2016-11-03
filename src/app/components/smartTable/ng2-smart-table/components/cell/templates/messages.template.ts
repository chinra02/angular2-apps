import {Component,Input} from '@angular/core';

@Component({
   selector:'messages-template',
   template:`
    <div #template [ngSwitch]="type"> 
         <div *ngSwitchCase="'message-popover'">
            <ul class="claim-message-popover">
                <li *ngFor="let message of messages">
                    <span *ngIf="message.countMessage != null">{{message.countMessage}} </span>{{ message | claimLineStatusCodes }}
                </li>
            </ul>
         </div>
         <div *ngSwitchCase="'message-view'">
            <div *ngIf="value.length>0">
                <div popover="content to be shown in the popover"
                    #helpPO
                    popoverTitle="Popover header"
                    popoverPlacement="left"
                    [popoverOnHover]="false"
                    [popoverCloseOnClickOutside]="true"
                    [popoverCloseOnMouseOutside]="false"
                    [popoverDisabled]="false"
                    [popoverAnimation]="true"
                    [popoverDismissTimeout]="1000">
                        <messages-view-template [messages] = "messages"> </messages-view-template>
                </div>
              <span (mouseenter)='helpPO.show($event)'>
                {{value.length}} message<span *ngIf="value.length > 1">s</span>
              </span>
              
            </div> 
         </div>
    </div>
   `
})
export class MessagesTemplate{
    @Input() type;  
    @Input() messages:Array<any>;
    @Input() value;
}