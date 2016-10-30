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
var Ng2DropDownComponent = (function () {
    function Ng2DropDownComponent() {
        this.selected = new core_1.EventEmitter();
        this.optionsDisplayProperty = 'label';
        this.isSmartSelectorEnabled = true;
        this.dropdownNotCloseZone = null;
        this.displayLength = true;
        this.edited = new core_1.EventEmitter();
        this.onChange = function onChange(event, option) {
            event.passedValue = option;
            this.edited.emit(event, option);
        };
        this.onSelect = function (event, option) {
            event.passedValue = option;
            this.selected.emit(event, this.optionsDisplayProperty);
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2DropDownComponent.prototype, "label", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2DropDownComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2DropDownComponent.prototype, "optionsDisplayProperty", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2DropDownComponent.prototype, "optionsVisibility", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2DropDownComponent.prototype, "isSmartSelectorEnabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2DropDownComponent.prototype, "dropdownNotCloseZone", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2DropDownComponent.prototype, "displayLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Ng2DropDownComponent.prototype, "data", void 0);
    __decorate([
        //Excepting [{visible:true,title:'Sample'}]
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2DropDownComponent.prototype, "edited", void 0);
    Ng2DropDownComponent = __decorate([
        core_1.Component({
            selector: 'ng2-dropdown-comp',
            template: "\n        <span class=\"dropdown\" dropdown>\n            <button  class=\"btn btn-std btn-secondary \"  dropdown-open>\n             {{label}}\n             <span>\n               <span *ngIf=\"displayLength && data && data.length>0\">({{data.length}}) </span>\n                <span class=\"caret icon-right\">\n                </span>\n             </span>\n                \n            </button>\n             <ul class=\"dropdown-menu\" *ngIf=\"dropdownNotCloseZone!=null\"  dropdown-not-closable-zone>\n                <li *ngFor=\"let option of data\">\n                    <a (click)=\"onSelect($event,option)\">\n                        <span *ngIf=\"isSmartSelectorEnabled\"> \n                          <smart-selector [(selectedValue)]=\"option.isVisible\"  (edited)=\"onChange($event,option)\"> </smart-selector>\n                        </span>\n                        {{option[optionsDisplayProperty]}}\n                    </a>\n                </li>\n            </ul>\n           <ul class=\"dropdown-menu\" *ngIf=\"dropdownNotCloseZone==null\">\n                <li *ngFor=\"let option of data\">\n                    <a (click)=\"onSelect($event,option)\">\n                        <span *ngIf=\"isSmartSelectorEnabled\"> \n                          <smart-selector [(selectedValue)]=\"option.isVisible\"  (edited)=\"onChange($event,option)\"> </smart-selector>\n                        </span>\n                        {{option[optionsDisplayProperty]}}\n                    </a>\n                </li>\n            </ul>\n        </span>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2DropDownComponent);
    return Ng2DropDownComponent;
}());
exports.Ng2DropDownComponent = Ng2DropDownComponent;
//# sourceMappingURL=ng2dropdown.component.js.map