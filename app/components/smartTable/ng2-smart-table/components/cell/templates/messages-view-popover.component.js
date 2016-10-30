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
var MessagesPopOver = (function () {
    function MessagesPopOver() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesPopOver.prototype, "columnDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesPopOver.prototype, "uniqueid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesPopOver.prototype, "messages", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessagesPopOver.prototype, "column", void 0);
    MessagesPopOver = __decorate([
        core_1.Component({
            selector: 'messages-view-template',
            template: "\n    <ul class=\"claim-message-popover\">\n    <li *ngFor=\"let message of messages\">\n        <span ng-if=\"message.countMessage != null\">{{message.countMessage}} </span>{{ message | claimLineStatusCodes }}\n    </li>\n</ul>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesPopOver);
    return MessagesPopOver;
}());
exports.MessagesPopOver = MessagesPopOver;
//# sourceMappingURL=messages-view-popover.component.js.map