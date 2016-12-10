import { DropdownModule } from 'ng2-dropdown';
import { SmartTableActions } from './actions/smart-table/smart-table.actions';
import { AppComponent } from './app.component';
import { Configuration } from './jwt/configuration';
import { JsonpModule } from '@angular/http';
import { BaseHttpService } from './services/base-http.service';
import { JWTHelper } from './jwt/jwt-helper';
import { SmartTableComponent } from './components/smartTable/smart-table.component';
import { Ng2SmartTableModule } from './components/smartTable/ng2-smart-table.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { provideAuth } from 'angular2-jwt';

let logger = './store/configure-logger';
import { IAppState, rootReducer, enhancers } from './store/index';
const createLogger = require('redux-logger')


@NgModule({
  imports: [BrowserModule, DropdownModule, Ng2SmartTableModule, JsonpModule, NgReduxModule],
  declarations: [
    AppComponent,
    //UIBulkActionsMenuComponent,
    SmartTableComponent
  ],
  bootstrap: [
    AppComponent
    // UIBulkActionsMenuComponent,
    //SmartTableComponent
  ],
  providers:[
   NgRedux,
   SmartTableActions,
   DevToolsExtension
  ]

})
export class AppModule {
   constructor(private ngRedux: NgRedux<any>, private devTool: DevToolsExtension) {
        this.ngRedux.configureStore(
            rootReducer,
            {},
            [createLogger()],
            [...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]);
    }
}

