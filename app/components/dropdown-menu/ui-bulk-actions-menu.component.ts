import {Component, Input} from '@angular/core';

@Component({

    selector: 'ui-bulk-actions-menu-component',
    template: `
<div dropdown class="dropdown"  dropdown *ngIf="hasValidActions()">
    <button dropdown-open  id="action_{{menuId}}"
            class="btn btn-std btn-primary dropdown-toggle bulk-action-button"
             ng-class="{ disabled: selections.length === 0 }"
            tooltip="Bulk Actions">
        {{ label }}
       <!-- <span class="badge">{{ selections.length }}</span> -->
        <i class="fa fa-caret-down icon-right"></i>
    </button>
    <ul class="dropdown-menu">
        <li *ngFor="let action of actions"> 
            <a href (click)="clicked(action,selections)" id="menu_bulk_action_{{$index}}"> {{ action.name }} </a>
       </li>
    </ul>
</div>
`

})
export class UIBulkActionsMenuComponent {
    @Input() label = "Bulk Actions";
    @Input() actions: any;
    @Input() context: any;
    @Input() menuId: string;
    @Input() selections:Array<any>;
 
    hasValidActions = function (): boolean {
        for (let action in this.actions) {
            if (this.actions[action].contexts && this.actions[action].contexts.indexOf(this.context)>=0) {
                 return true;
            }
        }
        return false;
    }

    clicked = function(action,selections){
        if(action, selections){
            action.performActionIfValidForAll(selections);
        }
        
    }
}