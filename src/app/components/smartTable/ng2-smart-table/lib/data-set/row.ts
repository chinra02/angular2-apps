import { Cell } from './cell';
import { Column } from './column';
import { DataSet } from './data-set';
let _ = require('underscore');
export class Row {

  isSelected: boolean = false;
  isInEditing: boolean = false;
 
  protected cells: Array<Cell> = [];


  constructor(public index: number, protected data: any, protected _dataSet: DataSet) {
    this.process();
  }

  getCell(column: Column): Cell {
    return this.cells.find(el => el.getColumn() === column);
  }

  getCells() {
    return this.cells;
  }

  getData(): any {
    return this.data;
  }

  getNewData(): any {
    let values = {};
    this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
    return Object.assign(this.data, values);
  }

  setData(data: any): any {
    this.data = data;
    this.process();
  }

  protected process(): void {
    this.cells = [];
    this._dataSet.getColumns().forEach((column: Column) => {
      if (column.isVisible) {
        let cell = this.createCell(column);
        this.cells.push(cell);
      }

    });
  }

  protected createCell(column: Column): Cell {
    let value = typeof this.data[column.id] === 'undefined' ? '' : this.data[column.id];
    if(_.isArray(value)){
          return new Cell(value, this, column, this._dataSet,true);
    }
    else {
         return new Cell(value, this, column, this._dataSet,false);
    }
    
  }
}
