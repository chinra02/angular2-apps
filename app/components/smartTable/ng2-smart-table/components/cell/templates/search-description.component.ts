import {Component,Input} from '@angular/core';

@Component({
   selector:'search-description-template',
   template:` 
    <div>[{{attrPredicate}}]</div>
   `
})
export class SearchDescriptionTemplate{
    @Input() attrPredicate; 

}