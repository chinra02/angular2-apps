import { DataSet } from './data-set';

export class Column {

  public title: string = '';
  public type: string = '';
  public class: string = '';
  public isSortable: boolean = false;
  public isEditable: boolean = true;
  public isFilterable: boolean = false;
  public isVisible: boolean = true;
  public sortDirection: string = '';
  public defaultSortDirection: string = '';
  public uniqueId: string;
  protected compareFunction: Function;
  protected valuePrepareFunction: Function;
  protected filterFunction: Function;

  constructor(public id: string, protected settings: any, protected dataSet: DataSet) {
    this.process();
  }

  public getCompareFunction(): Function {
    return this.compareFunction;
  }

  public getValuePrepareFunction(): Function {
    return this.valuePrepareFunction;
  }

  public getFilterFunction(): Function {
    return this.filterFunction;
  }

  protected process(): void {
    if (this.settings ) {
      this.title = this.settings['title'];
      this.class = this.settings['class'];
      this.type = this.prepareType();

      this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
      this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
      this.isSortable = (this.settings['sort'] === undefined || this.settings['sort'] === null) ? true : !!this.settings['sort'];
      this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
      this.sortDirection = this.prepareSortDirection();

      this.compareFunction = this.settings['compareFunction'];
      this.valuePrepareFunction = this.settings['valuePrepareFunction'];
      this.filterFunction = this.settings['filterFunction'];
      this.isVisible = (this.settings['visible'] === undefined || this.settings['visible'] === null) ? true : this.settings['visible'];
      this.uniqueId = this.settings['uniqueId'] === 'undefined' ? this.title : this.settings['uniqueId'];
      
    }

  }

  protected prepareType(): string {
    return this.settings['type'] || this.determineType();
  }

  protected prepareSortDirection(): string {
    return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
  }

  protected determineType(): string {
    // TODO: determine type by data
    return 'string';
  }
}
