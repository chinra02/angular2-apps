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
var template_loader_service_1 = require('../services/template-loader.service');
var core_1 = require('@angular/core');
var TemplateComponent = (function () {
    function TemplateComponent(resolver, templateLoaderService) {
        this.resolver = resolver;
        this.templateLoaderService = templateLoaderService;
        this.templateBase = "./views/";
        this.templateUrlsMap = new Object();
        this.getTemplateHtml = function getTemplateHtml(uri) {
            var _this = this;
            this.templateLoaderService.getTemplateContent(uri).subscribe(function (data) {
                _this.templateHtml = data._body.toString();
            }, function (err) { return console.error(err); });
        };
    }
    TemplateComponent.prototype.ngAfterViewInit = function () {
        this.getTemplateHtml("/templates/views/text-search.html");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TemplateComponent.prototype, "type", void 0);
    TemplateComponent = __decorate([
        core_1.Component({
            selector: 'template-view',
            moduleId: module.id,
            template: "\n         <div [innerHTML]=\"templateHtml | safe\"></div>\n     ",
            providers: [template_loader_service_1.TemplateLoaderService]
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, template_loader_service_1.TemplateLoaderService])
    ], TemplateComponent);
    return TemplateComponent;
}());
exports.TemplateComponent = TemplateComponent;
//# sourceMappingURL=template-component.js.map