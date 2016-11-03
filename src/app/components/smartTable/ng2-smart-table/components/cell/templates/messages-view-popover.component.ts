import {Component,Input} from '@angular/core';

@Component({
   selector:'messages-view-template',
   template:`
    <ul class="claim-message-popover">
    <li *ngFor="let message of messages">
        <span ng-if="message.countMessage != null">{{message.countMessage}} </span>{{ message | claimLineStatusCodes }}
    </li>
</ul>
   `
})
export class MessagesPopOver{
    @Input() columnDate;
    @Input() uniqueid;
    @Input() messages;
    @Input() column;
    searchPredicate;  
}