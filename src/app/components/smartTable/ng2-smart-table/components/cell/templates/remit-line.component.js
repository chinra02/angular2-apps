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
var RemitLineTemplate = (function () {
    function RemitLineTemplate() {
        this.logEntries = function logEntries(event) {
        };
        this.noLogEntries = function noLogEntries(row) {
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RemitLineTemplate.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RemitLineTemplate.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RemitLineTemplate.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RemitLineTemplate.prototype, "uniqueId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RemitLineTemplate.prototype, "attribute", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RemitLineTemplate.prototype, "level", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RemitLineTemplate.prototype, "row", void 0);
    RemitLineTemplate = __decorate([
        core_1.Component({
            selector: 'remit-line-template',
            template: " \n    <div #template [ngSwitch]=\"type\"> \n        <div *ngSwitchCase=\"'remit-line-adjustment-amount'\">\n            <div *ngIf=\"level !== 'CLAIM_LEVEL'\" class=\"money\">\n             {{ value | currency:'USD':true:'1.2-2'  }}\n            </div>\n            <div *ngIf=\"level === 'CLAIM_LEVEL'\">n/a</div>\n        </div>\n        <div *ngSwitchCase=\"''\">\n        \n            <div *ngIf=\"level !== 'CLAIM_LEVEL'\" class=\"allowed-field-number\">\n                <div class=\"money_calc\">{{ (value || 0) | currency:'USD':true:'1.2-2' }}</div>\n                <div *ngIf=\"row.previousInitialAllowedAmount\">\n                    <div class=\"money\">{{row.previousInitialAllowedAmount | currency:'USD':true:'1.2-2'}}</div>\n                    <hr class=\"money-line\">\n                    <div class=\"money\">{{value + row.previousInitialAllowedAmount | currency:'USD':true:'1.2-2'}}</div>\n                </div>\n            </div>\n            <div *ngIf=\"level !== 'CLAIM_LEVEL'\" class=\"allowed-field-calc\">\n                <button (click)=\"logEntries(row)\"\n                        class=\"{{noLogEntries(row) == true ? 'ui-button ui-state-disabled ui-button-icon-only' : 'ui-button ui-state-default ui-button-icon-only'}}\"\n                        aria-disabled=\"false\"\n                        type=\"button\"\n                        title=\"Show  log\"\n                        [disabled]=\"noLogEntries(row)\">\n                    <span class=\"fa fa-calculator\"></span>\n                </button>\n            </div>\n            <div class=\"allowed-field-number\" *ngSwitchCase=\"'remit-line-charged-amount'\">\n                <div class=\"money_calc\">{{ (value || 0) | currency:'USD':true:'1.2-2' }}</div>\n            </div>\n            <div *ngIf=\"level === 'CLAIM_LEVEL'\">n/a</div>\n        </div>\n        <div *ngSwitchDefault>...</div>\n   </div> \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], RemitLineTemplate);
    return RemitLineTemplate;
}());
exports.RemitLineTemplate = RemitLineTemplate;
//# sourceMappingURL=remit-line.component.js.map