import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { BaseHttpService } from './services/base-http.service';
import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'ng2-app',
    template: ` <smart-table-component 
                    restUrl="enrollment/planByInstallBaseId" 
                    columnJsonName="entry_eclaim_columns"> 
                </smart-table-component>`

})
export class AppComponent {
    

}