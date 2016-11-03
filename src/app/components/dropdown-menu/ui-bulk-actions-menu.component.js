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
var UIBulkActionsMenuComponent = (function () {
    function UIBulkActionsMenuComponent() {
        this.label = "Bulk Actions";
        this.hasValidActions = function () {
            for (var action in this.actions) {
                if (this.actions[action].contexts && this.actions[action].contexts.indexOf(this.context) >= 0) {
                    return true;
                }
            }
            return false;
        };
        this.clicked = function (action, selections) {
            if (action, selections) {
                action.performActionIfValidForAll(selections);
            }
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UIBulkActionsMenuComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UIBulkActionsMenuComponent.prototype, "actions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UIBulkActionsMenuComponent.prototype, "context", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UIBulkActionsMenuComponent.prototype, "menuId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UIBulkActionsMenuComponent.prototype, "selections", void 0);
    UIBulkActionsMenuComponent = __decorate([
        core_1.Component({
            selector: 'ui-bulk-actions-menu-component',
            template: "\n<div dropdown class=\"dropdown\"  dropdown *ngIf=\"hasValidActions()\">\n    <button dropdown-open  id=\"action_{{menuId}}\"\n            class=\"btn btn-std btn-primary dropdown-toggle bulk-action-button\"\n             ng-class=\"{ disabled: selections.length === 0 }\"\n            tooltip=\"Bulk Actions\">\n        {{ label }}\n       <!-- <span class=\"badge\">{{ selections.length }}</span> -->\n        <i class=\"fa fa-caret-down icon-right\"></i>\n    </button>\n    <ul class=\"dropdown-menu\">\n        <li *ngFor=\"let action of actions\"> \n            <a href (click)=\"clicked(action,selections)\" id=\"menu_bulk_action_{{$index}}\"> {{ action.name }} </a>\n       </li>\n    </ul>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], UIBulkActionsMenuComponent);
    return UIBulkActionsMenuComponent;
}());
exports.UIBulkActionsMenuComponent = UIBulkActionsMenuComponent;
//# sourceMappingURL=ui-bulk-actions-menu.component.js.map