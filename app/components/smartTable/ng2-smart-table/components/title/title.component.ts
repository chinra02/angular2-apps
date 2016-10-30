import { Column } from './../../lib/data-set/column';
import { Component, Input } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';

@Component({
  selector: 'ng2-smart-table-title',
  moduleId: module.id,
  styleUrls: ['title.scss'],
  template: `
    <div *ngIf="column.isSortable" class="st-icon st-multi-sort"></div>
    <a href="#"
    *ngIf="column.isVisible"
    (click)="sort($event, column)" 
    class="ng2-smart-sort-link sort"
    [ngClass]="currentDirection">
      {{ column.title }} {{column.attr}}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `
})
export class TitleComponent {

  @Input() column: Column;
  @Input() source: DataSource;

  protected currentDirection = '';

  ngOnInit(): void {
    if (this.source) {
      this.source.onChanged().subscribe((elements) => {
        let sortConf = this.source.getSort();

        if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
          this.currentDirection = sortConf[0]['direction'];
        } else {
          this.currentDirection = '';
        }

        sortConf.forEach((fieldConf: any) => {

        });
      });
    }

  }

  sort(): boolean {
    this.changeSortDirection();
    this.source.setSort([
      {
        field: this.column.id,
        direction: this.currentDirection,
        compare: this.column.getCompareFunction()
      }
    ]);
    return false;
  }

  changeSortDirection(): string {
    if (this.currentDirection) {
      let newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
      this.currentDirection = newDirection;
    } else {
      this.currentDirection = this.column.sortDirection;
    }
    return this.currentDirection;
  }
}
