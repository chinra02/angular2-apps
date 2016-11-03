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
var grid_1 = require('../../lib/grid');
var core_1 = require('@angular/core');
var SmartSelector = (function () {
    function SmartSelector() {
        this.placeHolder = "Select";
        this.edited = new core_1.EventEmitter();
        this.isSelectorEnabled = true;
        this.disabled = false;
        this.onChange = function (event) {
            this.selectedValue = event.target.checked;
            this.edited.emit(this);
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SmartSelector.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', grid_1.Grid)
    ], SmartSelector.prototype, "grid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SmartSelector.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SmartSelector.prototype, "selectedValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SmartSelector.prototype, "edited", void 0);
    SmartSelector = __decorate([
        core_1.Component({
            selector: 'smart-selector',
            template: "\n    <input type=\"checkbox\" *ngIf=\"isSelectorEnabled\"\n      [ngClass]=\"inputClass\"\n      [(ngModel)]=\"selectedValue\"\n      [placeholder]=\"placeHolder\"\n      [disabled]=\"disabled\"\n      (change)=\"onChange($event)\">\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SmartSelector);
    return SmartSelector;
}());
exports.SmartSelector = SmartSelector;
//# sourceMappingURL=selector.component.js.map