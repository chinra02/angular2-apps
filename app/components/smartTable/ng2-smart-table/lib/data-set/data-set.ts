import { OnChanges, SimpleChange } from '@angular/core';
import { Row } from './row';
import { Column } from './column';

export class DataSet {

  public newRow: Row;

  protected data: Array<any> = new Array();
  private columns: Array<Column> = new Array();
  protected rows: Array<Row> = new Array();
  protected selectedRow: Row;
  protected willSelect:string='NA';

  constructor(data: Array<any> = new Array(), protected columnSettings: Object) {
   
    this.createColumns(columnSettings);
    this.setData(data);

    this.createNewRow();
  }


  setData(data: Array<any>): void {
    this.data = data;
    this.createRows();
  }

  getData():Array<any>{
    return this.data;
  }


  getColumns(): Array<Column> {
     return this.columns;
  }

  getRows(): Array<Row> {
    return this.rows;
  }

  
  findRowByData(data:any): Row {
    return this.rows.find((row: Row) => row.getData() === data);
  }

  deselectAll(): void {
    this.rows.forEach((row) => {
      row.isSelected = false;
    });
  }

  selectRow(row: Row): Row {
    //this.deselectAll();

    row.isSelected = true;
    this.selectedRow = row;

    return this.selectedRow;
  }

  selectPreviousRow(): Row {
    if (this.rows.length > 0) {
      let index = this.selectedRow ? this.selectedRow.index : 0;
      if (index > this.rows.length - 1) {
        index = this.rows.length - 1;
      }
      this.selectRow(this.rows[index]);
      return this.selectedRow;
    }
  }

  selectFirstRow(): Row {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[0]);
      return this.selectedRow;
    }
  }

  selectLastRow(): Row {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[this.rows.length - 1]);
      return this.selectedRow;
    }
  }

  willSelectFirstRow(): void {
    this.willSelect = 'NA';
  }

  willSelectLastRow(): void {
    this.willSelect = 'NA';
  } 

  select(): Row {
    if (this.getRows().length === 0) {
      return;
    }
    if (this.willSelect) {
      if (this.willSelect === 'first') {
        this.selectFirstRow();
      }
      if (this.willSelect === 'last') {
        this.selectLastRow();
      }
      this.willSelect = '';
    } else {
      this.selectFirstRow();
    }

    return this.selectedRow;
  }

  createNewRow(): void {
    this.newRow = new Row(0, {}, this);
    this.newRow.isInEditing = true;
  }

  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
   createColumns(settings:any) {
   
    for (let id in settings.columns) {
       //let visible = settings.columns[id]['visible'];
      if (id) {
        this.columns.push(new Column(id, settings.columns[id], this));
      }
    }
  
  }

  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  protected createRows() {
    this.rows = [];
    this.data.forEach((el, index) => {
      this.rows.push(new Row(index, el, this));
    });
  }
}
