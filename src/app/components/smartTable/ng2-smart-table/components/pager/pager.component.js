"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_source_1 = require('../../lib/data-source/data-source');
var PagerComponent = (function () {
    function PagerComponent() {
        this.paginated = new core_1.EventEmitter();
        this.count = 0;
    }
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.source && changes['source']) {
            this.source.onChanged().subscribe(function (changes) {
                _this.page = _this.source.getPaging().page;
                _this.count = _this.source.count();
                _this.perPage = _this.source.getPaging().perPage;
                if (_this.isPageOutOfBounce()) {
                    _this.source.setPage(--_this.page);
                }
                _this.processPageChange(changes);
                _this.initPages();
            });
        }
    };
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
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source && this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        this.paginated.emit(this);
        return false;
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PagerComponent.prototype, "perPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', data_source_1.DataSource)
    ], PagerComponent.prototype, "source", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PagerComponent.prototype, "paginated", void 0);
    PagerComponent = __decorate([
        core_1.Component({
            selector: 'ng2-smart-table-pager',
            moduleId: module.id,
            styleUrls: ['pager.scss'],
            template: "\n  <nav *ngIf=\"shouldShow()\" class=\"pagination-container\">\n    <ul class=\"pagination\">\n      <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n        <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n        tooltip=\"first page\"\n        [tooltipDisabled]=\"false\"\n        [tooltipAnimation]=\"true\"\n        tooltipPlacement=\"top\"\n        (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">First</span>\n        </a>\n      </li>\n      <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n        <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n        tooltip=\"previous page\"\n        [tooltipDisabled]=\"false\"\n        [tooltipAnimation]=\"true\"\n        tooltipPlacement=\"top\"\n        (click)=\"getPage() == 1 ? false : paginate(page-1)\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&lsaquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li class=\"ng2-smart-page-item page-item\" \n      [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n        <span class=\"ng2-smart-page-link page-link\" \n        *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n        <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n        (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n      </li>\n\n      <li class=\"ng2-smart-page-item page-item\" \n      [ngClass]=\"{disabled: getPage() == getLast()}\">\n        <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n         tooltip=\"next page\"\n        [tooltipDisabled]=\"false\"\n        [tooltipAnimation]=\"true\"\n        tooltipPlacement=\"top\"\n        (click)=\"getPage() == getLast() ? false : paginate(page+1)\" aria-label=\"Last\">\n          <span aria-hidden=\"true\">&rsaquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n\n      <li class=\"ng2-smart-page-item page-item\" \n      [ngClass]=\"{disabled: getPage() == getLast()}\">\n        <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n         tooltip=\"last page\"\n        [tooltipDisabled]=\"false\"\n        [tooltipAnimation]=\"true\"\n        tooltipPlacement=\"top\"\n        (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Last</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PagerComponent);
    return PagerComponent;
}());
exports.PagerComponent = PagerComponent;
//# sourceMappingURL=pager.component.js.map