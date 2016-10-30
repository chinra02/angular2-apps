import { OnInit, OnChanges, SimpleChange } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';

@Component({
  selector: 'ng2-smart-table-pager',
  moduleId:module.id,
  styleUrls: ['pager.scss'],
  template: `
  <nav *ngIf="shouldShow()" class="pagination-container">
    <ul class="pagination">
      <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
        <a class="ng2-smart-page-link page-link" href="#" 
        tooltip="first page"
        [tooltipDisabled]="false"
        [tooltipAnimation]="true"
        tooltipPlacement="top"
        (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">First</span>
        </a>
      </li>
      <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
        <a class="ng2-smart-page-link page-link" href="#" 
        tooltip="previous page"
        [tooltipDisabled]="false"
        [tooltipAnimation]="true"
        tooltipPlacement="top"
        (click)="getPage() == 1 ? false : paginate(page-1)" aria-label="Previous">
          <span aria-hidden="true">&lsaquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="ng2-smart-page-item page-item" 
      [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
        <span class="ng2-smart-page-link page-link" 
        *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
        <a class="ng2-smart-page-link page-link" href="#" 
        (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
      </li>

      <li class="ng2-smart-page-item page-item" 
      [ngClass]="{disabled: getPage() == getLast()}">
        <a class="ng2-smart-page-link page-link" href="#" 
         tooltip="next page"
        [tooltipDisabled]="false"
        [tooltipAnimation]="true"
        tooltipPlacement="top"
        (click)="getPage() == getLast() ? false : paginate(page+1)" aria-label="Last">
          <span aria-hidden="true">&rsaquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>

      <li class="ng2-smart-page-item page-item" 
      [ngClass]="{disabled: getPage() == getLast()}">
        <a class="ng2-smart-page-link page-link" href="#" 
         tooltip="last page"
        [tooltipDisabled]="false"
        [tooltipAnimation]="true"
        tooltipPlacement="top"
        (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Last</span>
        </a>
      </li>
    </ul>
  </nav>
  `
})
export class PagerComponent implements OnChanges{

  @Input() perPage: number ;
  @Input() source: DataSource;
  @Output() paginated:EventEmitter<any> = new EventEmitter();

  protected pages: Array<any>;
  protected page: number;
  protected count: number = 0;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if(this.source && changes['source']){
      this.source.onChanged().subscribe((changes) => {
      this.page = this.source.getPaging().page;
      this.count = this.source.count();
      this.perPage = this.source.getPaging().perPage;

      if (this.isPageOutOfBounce()) {
        this.source.setPage(--this.page);
      }

      this.processPageChange(changes);
      this.initPages();
    });
    }

  }

 /* ngOnInit(): void {
    this.source.onChanged().subscribe((changes) => {
      this.page = this.source.getPaging().page;
      this.count = this.source.count();
      this.perPage = this.source.getPaging().perPage;

      if (this.isPageOutOfBounce()) {
        this.source.setPage(--this.page);
      }

      this.processPageChange(changes);
      this.initPages();
    });

  } */

  /**
   * We change the page here depending on the action performed against data source
   * if a new element was added to the end of the table - then change the page to the last
   * if a new element was added to the beginning of the table - then to the first page
   * @param changes
   */
  processPageChange(changes:any): void {
    if (changes['action'] === 'prepend') {
      this.source.setPage(1);
    }
    if (changes['action'] === 'append') {
      this.source.setPage(this.getLast());
    }
     
  }

  shouldShow(): boolean {
    return this.source && this.source.count() > this.perPage;
  }

  paginate(page: number): boolean {
    this.source.setPage(page);
    this.page = page;
    this.paginated.emit(this);
    return false;
  }

  getPage(): number {
    return this.page;
  }

  getPages(): Array<any> {
    return this.pages;
  }

  getLast(): number {
    return Math.ceil(this.count / this.perPage);
  }

  protected isPageOutOfBounce(): boolean {
    return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
  }

  protected initPages() {
    let pagesCount = this.getLast();
    let showPagesCount = 4;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this.pages = [];

    if (this.shouldShow()) {

      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this.page >= middleOne ? this.page : middleOne;

      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;

      let firstOne = lastOne - showPagesCount + 1;

      for (let i = firstOne; i <= lastOne; i++) {
        this.pages.push(i);
      }
    }
  }
}
