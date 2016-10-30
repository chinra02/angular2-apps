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
var moment_ = require('moment');
var moment = moment_.default || moment_;
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
        this.opened = false;
        this.format = 'shortDate';
        this.minDate = void 0;
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
        if (this.dt == null || this.dt == undefined) {
            this.dt = new Date();
        }
    }
    DatePickerComponent.prototype.getDate = function () {
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    DatePickerComponent.prototype.today = function () {
        this.dt = new Date();
    };
    DatePickerComponent.prototype.d20090824 = function () {
        this.dt = moment('2009-08-24', 'YYYY-MM-DD').toDate();
    };
    // todo: implement custom class cases
    DatePickerComponent.prototype.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (var i = 0; i < this.events.length; i++) {
                var currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return this.events[i].status;
                }
            }
        }
        return '';
    };
    DatePickerComponent.prototype.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };
    DatePickerComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    DatePickerComponent.prototype.clear = function () {
        this.dt = void 0;
    };
    DatePickerComponent.prototype.toggleMin = function () {
        this.dt = new Date(this.minDate.valueOf());
    };
    DatePickerComponent.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    DatePickerComponent.prototype.onDateChange = function (event) {
        if (event.target.value) {
            var newDate = new Date(event.target.value);
            if (newDate && newDate != 'Invalid Date') {
                this.dt = newDate;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "opened", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "format", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "placeHolder", void 0);
    DatePickerComponent = __decorate([
        core_1.Component({
            selector: 'ng2-datepicker',
            moduleId: module.id,
            templateUrl: 'ng2-datepicker.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=ng2-datepicker.component.js.map