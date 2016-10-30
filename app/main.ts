import { SmartTableComponent } from './components/smartTable/smart-table.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import {Component, enableProdMode} from '@angular/core';
import upgradeAdapter from './upgradeAdapter';

declare var angular: any;/*
angular.element(document).ready(() => { 
    let app = angular.module('?');
    app.directive('uiBulkActionsMenuComponent', upgradeAdapter.downgradeNg2Component(UIBulkActionsMenuComponent));
    app.directive('smartTableComponent', upgradeAdapter.downgradeNg2Component(SmartTableComponent));
     upgradeAdapter.bootstrap(document.documentElement, ['?']).ready(() => {
        console.log('Hybrid Angular application bootstrapped with Upgrade Adapter.');
        
    }); 
    
    }); */
 enableProdMode();
 platformBrowserDynamic().bootstrapModule(AppModule);
  