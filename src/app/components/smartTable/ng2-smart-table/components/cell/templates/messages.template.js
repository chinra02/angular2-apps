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
var MessagesTemplate = (function () {
    function MessagesTemplate() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesTemplate.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MessagesTemplate.prototype, "messages", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesTemplate.prototype, "value", void 0);
    MessagesTemplate = __decorate([
        core_1.Component({
            selector: 'messages-template',
            template: "\n    <div #template [ngSwitch]=\"type\"> \n         <div *ngSwitchCase=\"'message-popover'\">\n            <ul class=\"claim-message-popover\">\n                <li *ngFor=\"let message of messages\">\n                    <span *ngIf=\"message.countMessage != null\">{{message.countMessage}} </span>{{ message | claimLineStatusCodes }}\n                </li>\n            </ul>\n         </div>\n         <div *ngSwitchCase=\"'message-view'\">\n            <div *ngIf=\"value.length>0\">\n                <div popover=\"content to be shown in the popover\"\n                    #helpPO\n                    popoverTitle=\"Popover header\"\n                    popoverPlacement=\"left\"\n                    [popoverOnHover]=\"false\"\n                    [popoverCloseOnClickOutside]=\"true\"\n                    [popoverCloseOnMouseOutside]=\"false\"\n                    [popoverDisabled]=\"false\"\n                    [popoverAnimation]=\"true\"\n                    [popoverDismissTimeout]=\"1000\">\n                        <messages-view-template [messages] = \"messages\"> </messages-view-template>\n                </div>\n              <span (mouseenter)='helpPO.show($event)'>\n                {{value.length}} message<span *ngIf=\"value.length > 1\">s</span>\n              </span>\n              \n            </div> \n         </div>\n    </div>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesTemplate);
    return MessagesTemplate;
}());
exports.MessagesTemplate = MessagesTemplate;
//# sourceMappingURL=messages.template.js.map