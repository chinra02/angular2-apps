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
var TemplateModal = (function () {
    function TemplateModal() {
        this.title = "text";
        this.type = "text";
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TemplateModal.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TemplateModal.prototype, "type", void 0);
    TemplateModal = __decorate([
        core_1.Component({
            selector: 'template-modal',
            moduleId: module.id,
            template: "\n\n<popover-content #cellPopover \n                [title]=\"title\" \n                placement=\"bottom\"\n                [animation]=\"true\" \n                [closeOnClickOutside]=\"true\" >\n  <div class=\"flex-container\"> \n    <div class=\"flex1\">\n      <cell-template  [type]=\"type\"></cell-template>\n    </div>\n  </div>\n        \n    \n</popover-content>\n\n<div [popover]=\"cellPopover\" class=\"st-icon st-search ng-scope\"></div>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateModal);
    return TemplateModal;
}());
exports.TemplateModal = TemplateModal;
//# sourceMappingURL=template-modal.component.js.map