import { SmartTableActions } from './../../actions/smart-table/smart-table.actions';
import { runInThisContext } from 'vm';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Jsonp } from '@angular/http';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';
import { Observable, Subject } from 'rxjs/Rx';
import { ChangeDetectionStrategyEnum } from '@angular/compiler/src/view_compiler/constants';
import { ColumnService } from '../../services/column.service';
import { JwtAuthConfiguration } from '../../jwt/jwt-auth-configuration';
import { AdjudicaitonRestService } from './../../jwt/rest.service';
import { Configuration } from './../../jwt/configuration';
import { BaseModel } from './../../modal/base.modal';
import { BaseHttpService } from './../../services/base-http.service';
import { select, NgRedux } from 'ng2-redux';

import { Component, Input, OnChanges, SimpleChange, OnInit, ChangeDetectionStrategy, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit, NgZone, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'smart-table-component',
  template: `
     <ng2-smart-table  
     (paginated)="onPaginate($event)"
     (pagsChanged) = "onPageSizeChanged($event)"
     (columnFilterChanged)="onColumnFilterChange($event)"
     [settings]="settings$ | async"  
     [source]="dataSource$ | async">
      <header-actions>
        <ui-bulk-actions-menu-component
              [actions]="actions | async"
              [selections]="selectedAction | async"
              context="bulk-remit"
              menu-id="bulk_actions"
              label="Remits">
          </ui-bulk-actions-menu-component>
      </header-actions>
      <row-action>
        <ui-bulk-actions-menu-component
              [actions]="actions | async"
              [selections]="selectedAction | async"
              context="bulk-remit"
              menu-id="bulk_actions"
              label="Remits">
          </ui-bulk-actions-menu-component>
      </row-action>
    </ng2-smart-table> 

    `,
  providers: [Ng2SmartTableComponent]


})
export class SmartTableComponent implements OnChanges {
  //,AfterContentInit {
  @Input() restUrl: string; // enrollment/planByInstallBaseId
  @Input() restParams: any = { installBaseId: 93172689 };
  @Input() columnJsonName: string;

  @ViewChild('container', { read: ViewContainerRef }) container;

  settingsSource: Subject<Object> = new Subject<Object>();
  settings$: Observable<Object>;
  dataSource: Subject<any> = new Subject<any>();
  dataSource$ = this.dataSource.asObservable();

  @select() pagerFilter$: Observable<Object>;
  @select() columnFilter$: Observable<Object>;



  constructor(private restService: AdjudicaitonRestService, private columnService: ColumnService,
    private config: Configuration, redux: NgRedux<any>, private smarttableActions: SmartTableActions) {
    this.settings$ = this.settingsSource.asObservable();
    console.log('SmartTableComponent Constructor');
  }


  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    this.setSettings(this.columnJsonName);
    this.setLocalOrRestData(this.restUrl, this.restParams);

  }

  setLocalOrRestData = function setLocalOrRestData(restUrl, restParams) {
    if (this.config.getJsonUrl(null, null).indexOf('app') == -1) {
      this.setData(this.restUrl, this.restParams);
    }
    else {
      this.setLocalData();
    }
  }

  setLocalData = function setLocalData() {
    this.columnService.getData('entry_eclaim_data').subscribe((resp) => {
      this.dataSource.next(JSON.parse(resp._body));
    });
  }

  setData = function setData(restUrl, restParams) {
    if (restUrl && restParams) {
      this.restService.invoke(restUrl, restParams).subscribe((resp) => {
        this.dataSource.next(resp);
      });
    }

  }

  setSettings = function setSettings(columnJsonName: string) {
    if (columnJsonName) {
      this.columnService.getColumns(columnJsonName).subscribe(columns => {
        let settings = {
          hideHeader: false,
          hideSubHeader: true,
          columns: columns,
          actions: null,
          pageRows: [
            { 'id': 10, 'label': 10 }, { 'id': 15, 'label': 15 },
            { 'id': 25, 'label': 25 }, { 'id': 50, 'label': 50 },
            { 'id': 100, 'label': 100 }, { 'id': 1000, 'label': 1000 }],
          pager: {
            display: true,
            perPage: 50
          }
        };

        this.settingsSource.next(settings);
        this.settingsSource.complete();

      })

    }

  }

  protected onPaginate(event) {
    let pagerfilter = { paging: (event.page * event.perPage + ',' + event.perPage) };
    this.setLocalOrRestData(this.restUrl, pagerfilter);
    this.smarttableActions.onPaginate(pagerfilter);
  }

  protected onPageSizeChanged(pagerData) {
    let pagerfilter = { paging: (pagerData.page * pagerData.perPage + ',' + pagerData.perPage) };
    this.setLocalOrRestData(this.restUrl, pagerfilter);
    this.smarttableActions.onPaginate(pagerfilter);
  }

  protected onColumnFilterChange(selectedColumns:Array<string>){
   this.smarttableActions.onColumnFilterChange(selectedColumns);
  }

  actions: Observable<any>;
  selectedAction: Observable<any>;
  baseData: BaseModel[];

}