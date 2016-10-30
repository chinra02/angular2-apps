import {Component} from "@angular/core";

@Component({
   selector:'header-actions',
   template:`
    <div class="header-actions"> 
      <ng-content></ng-content>
    </div>
     
   `
})
export class HeaderActions{

}