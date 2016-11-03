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
var TextTemplate = (function () {
    function TextTemplate() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextTemplate.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextTemplate.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextTemplate.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextTemplate.prototype, "id", void 0);
    TextTemplate = __decorate([
        core_1.Component({
            selector: 'text-template',
            template: " \n    <div #template [ngSwitch]=\"type\"> \n       <input *ngSwitchCase=\"'text-edit'\">\n       <input *ngSwitchCase=\"'text-search'\" id=\"{{id + '_text'}}\"  placeholder=\"search for {{title}}\" class=\"input-sm form-control\" type=\"search\"/>\n       <span  *ngSwitchCase=\"'text-view'\">{{ value }}</span>\n       <div *ngSwitchDefault>...</div>\n  </div> \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], TextTemplate);
    return TextTemplate;
}());
exports.TextTemplate = TextTemplate;
//# sourceMappingURL=text-template.component.js.map