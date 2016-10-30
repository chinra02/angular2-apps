import * as console from 'console';
import { ReflectMetadataDecoratorSetsMetadataOnTargetWithTargetKey } from 'reflect-metadata/temp/test/spec';
import { UIBulkActionsMenuComponent } from '../../dropdown-menu/ui-bulk-actions-menu.component';
import { AfterContentInit, ChangeDetectionStrategy, DoCheck, OnInit } from '@angular/core';
import { Cell } from './lib/data-set/cell';
import { Column } from './lib/data-set/column';
import {
  Component, Input, Output, SimpleChange, EventEmitter,
  OnChanges
} from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';

import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';

import { HeaderActions } from './components/actions/header-actions.component';

var _ = require('underscore');
@Component({
  selector: 'ng2-smart-table',
  moduleId: module.id,
  styleUrls: ['ng2-smart-table.scss'],
  templateUrl: 'ng2-smart-table.html'
})
export class Ng2SmartTableComponent implements OnChanges {
  //, DoCheck,AfterViewChecked, AfterViewInit {

  @Input() source: any;
  @Input() settings: any;
  @Input() selectAll: any;
  @Output() public rowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() public userRowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() public edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public create: EventEmitter<any> = new EventEmitter<any>();

  @Output() public deleteConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() public editConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() public createConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() public paginated: EventEmitter<any> = new EventEmitter<any>();
  @Output() public pagsChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() public columnFilterChanged: EventEmitter<any> = new EventEmitter<any>();

  protected grid: Grid;
  protected dataSource: DataSource;
  protected pagerData = { page: 1, perPage: 50 };
  protected defaultSettings: Object = {

    mode: 'inline', // inline|external|click-to-edit
    hideHeader: false,
    hideSubHeader: false,
    selector: 'check', //Currently checkbox is the default selector and the only selector for now.
    pageRows: [{ 'label': 10 }, { 'label': 15 }, { 'label': 25 }, { 'label': 50 }, { 'label': 100 }, { 'label': 1000 }],
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: 'Edit',
      saveButtonContent: 'Update',
      cancelButtonContent: 'Cancel',
      confirmSave: false
    },
    add: {
      inputClass: '',
      addButtonContent: 'Add New',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: false
    },
    delete: {
      deleteButtonContent: 'Delete',
      confirmDelete: false
    },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: 'No data found',
    columns: {
    },

    pager: {
      display: true,
      perPage: 50
    }
  };

  getColumns = function getColumns() {
    return this.grid.getColumns();
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (this.grid) {
      if (changes['settings']) {
        this.grid.updateSettings(this.prepareSettings());

      }
      if (changes['source']) {
        let data: any = changes['source'].currentValue;
        if (this.dataSource) {
          this.grid.getDataSource().load(data);
        }
        else {
          this.dataSource = this.prepareSource();
          this.grid.setSource(this.dataSource);

        }

      }
    } else {
      this.initGrid();
    }

  }

  onAdd(event: any): boolean {
    event.stopPropagation();
    if (this.grid.getSetting('mode') === 'external') {
      this.create.emit({
        source: this.dataSource
      });
    } else {
      this.grid.createFormShown = true;
    }
    return false;
  }

  onUserSelectRow(row: Row): void {
    this.grid.selectRow(row);
    this.userRowSelect.emit({
      data: row.getData(),
      source: this.dataSource
    });

    this.onSelectRow(row);
  }

  onSelectRow(row: Row): void {
    this.grid.selectRow(row);
    this.rowSelect.emit({
      data: row.getData(),
      source: this.dataSource
    });
  }

  onEdit(row: Row, event: any): boolean {
    event.stopPropagation();
    this.onSelectRow(row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: row.getData(),
        source: this.dataSource
      });
    } else {
      this.grid.edit(row);
    }
    return false;
  }

  onDelete(row: Row, event: any): boolean {
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: row.getData(),
        source: this.dataSource
      });
    } else {
      this.grid.delete(row, this.deleteConfirm);
    }
    return false;
  }

  onCreate(row: Row, event: any): boolean {
    event.stopPropagation();

    this.grid.create(row, this.createConfirm);
    return false;
  }

  onSave(row: Row, event: any): boolean {
    event.stopPropagation();

    this.grid.save(row, this.editConfirm);
    return false;
  }

  protected initGrid(): void {
    this.dataSource = this.prepareSource();
    this.grid = new Grid(this.dataSource, this.prepareSettings());
    this.grid.onSelectRow().subscribe((row) => this.onSelectRow(row));
  }

  protected prepareSource(): DataSource {
    if (this.source instanceof DataSource) {
      return this.source;
    } else if (this.source instanceof Array) {
      return new LocalDataSource(this.source);
    }

    return new LocalDataSource();
  }

  protected prepareSettings(): Object {
    return deepExtend({}, this.defaultSettings, this.settings);
  }

  protected onHeaderSelectAll(event): void {
    this.onSelectAll(event.selectedValue);
  }

  protected onSelectAll(selectedValue: any): void {
    this.selectAll = selectedValue;
    let rows: Row[] = this.grid.getRows();
    if (rows) {
      _.map(rows, (row: Row) => {
        row.isSelected = selectedValue;
      })
    }
  }

  protected onPaginate(event) {
    this.pagerData.page = event.page;
    this.pagerData.perPage = event.perPage;
    this.selectAll=false;
    // this.onSelectAll(this.grid, this.selectAll);
    this.paginated.emit(event);
    //this.handleRowsForColumnFilter();
  }

  // This is parent onColumnFilterChange, whih is a caller
  protected onColumnFilterChange(event) {
    let passedValue: Column = event.passedValue;
    let isColumnSelected = event.selectedValue;
    let selectedColumnIds = Array<string>();
    this.grid.getDataSet().getColumns().forEach((columnItem: Column) => {
      if (columnItem.uniqueId === passedValue.uniqueId) {
        columnItem.isVisible = isColumnSelected;
        this.handleRowsForColumnFilter(columnItem);
      }
      if(columnItem.isVisible){
       selectedColumnIds.push(columnItem.id);
      }
      
    })
   this.columnFilterChanged.emit(selectedColumnIds);

  }
  protected handleRowsForColumnFilter(columnItem: Column) {
    this.grid.getDataSet().getRows().forEach(function (rowItem: Row) {
      rowItem.getCells().forEach(function (cell: Cell) {
        if (cell.getColumn().uniqueId === columnItem.uniqueId) {
          cell.isVisible = columnItem.isVisible;
        }

      })
    });

    this.grid.getDataSource().refresh();

  }

  protected onPageSizeChange(event): void {
    let perPage = event.selectedPage;
    this.pagerData.perPage = perPage;
    this.dataSource.setPaging(1, perPage, true);
    this.pagsChanged.emit(this.pagerData);


  }


}
