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
var ng2_smart_table_component_1 = require('./ng2-smart-table/ng2-smart-table.component');
var column_service_1 = require('./../../services/column.service');
var jwt_module_1 = require('./../../jwt/jwt.module');
var ui_bulk_actions_menu_component_1 = require('./../dropdown-menu/ui-bulk-actions-menu.component');
var search_description_component_1 = require('./ng2-smart-table/components/cell/templates/search-description.component');
var remit_line_component_1 = require('./ng2-smart-table/components/cell/templates/remit-line.component');
var range_template_component_1 = require('./ng2-smart-table/components/cell/templates/range-template.component');
var numeric_template_component_1 = require('./ng2-smart-table/components/cell/templates/numeric-template.component');
var name_template_component_1 = require('./ng2-smart-table/components/cell/templates/name-template.component');
var money_template_component_1 = require('./ng2-smart-table/components/cell/templates/money-template.component');
var messages_view_popover_component_1 = require('./ng2-smart-table/components/cell/templates/messages-view-popover.component');
var list_template_component_1 = require('./ng2-smart-table/components/cell/templates/list-template.component');
var ng2_datepicker_component_1 = require('../ng2datepicker/ng2-datepicker.component');
var datepicker_module_1 = require('ng2-bootstrap/components/datepicker/datepicker.module');
var messages_template_1 = require('./ng2-smart-table/components/cell/templates/messages.template');
var date_template_component_1 = require('./ng2-smart-table/components/cell/templates/date-template.component');
var text_template_component_1 = require('./ng2-smart-table/components/cell/templates/text-template.component');
var cell_component_1 = require('./ng2-smart-table/components/cell/cell.component');
var cell_template_component_1 = require('./ng2-smart-table/components/cell/cell-template.component');
var template_modal_component_1 = require('./ng2-smart-table/components/modal/template-modal.component');
var http_1 = require('@angular/http');
var row_action_component_1 = require('./ng2-smart-table/components/actions/row-action.component');
var header_actions_component_1 = require('./ng2-smart-table/components/actions/header-actions.component');
var ng2dropdown_component_1 = require('../ng2dropdown/ng2dropdown.component');
var ng2_dropdown_1 = require('ng2-dropdown');
var table_settings_component_1 = require('./ng2-smart-table/components/tableSettings/table-settings.component');
var selector_component_1 = require('./ng2-smart-table/components/selector/selector.component');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng2_smart_table_directives_1 = require('./ng2-smart-table.directives');
var filter_component_1 = require('./ng2-smart-table/components/filter/filter.component');
var pager_component_1 = require('./ng2-smart-table/components/pager/pager.component');
var title_component_1 = require('./ng2-smart-table/components/title/title.component');
var ng2_modal_1 = require('ng2-modal');
var angular2_select_1 = require('angular2-select');
var ng2_popover_1 = require('ng2-popover');
var ng2_tooltip_1 = require('ng2-tooltip');
var Ng2SmartTableModule = (function () {
    function Ng2SmartTableModule() {
    }
    Ng2SmartTableModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_dropdown_1.DropdownModule,
                ng2_modal_1.ModalModule,
                datepicker_module_1.DatepickerModule,
                angular2_select_1.SelectModule,
                ng2_popover_1.PopoverModule,
                ng2_tooltip_1.TooltipModule,
                jwt_module_1.JwtModule
            ],
            declarations: [
                cell_component_1.CellComponent,
                filter_component_1.FilterComponent,
                pager_component_1.PagerComponent,
                title_component_1.TitleComponent,
                selector_component_1.SmartSelector,
                table_settings_component_1.tableSettings,
                ng2dropdown_component_1.Ng2DropDownComponent,
                header_actions_component_1.HeaderActions,
                row_action_component_1.RowAction,
                ui_bulk_actions_menu_component_1.UIBulkActionsMenuComponent,
                template_modal_component_1.TemplateModal,
                cell_template_component_1.CellTemplate,
                text_template_component_1.TextTemplate,
                date_template_component_1.DateTemplate,
                list_template_component_1.ListTemplate,
                messages_template_1.MessagesTemplate,
                messages_view_popover_component_1.MessagesPopOver,
                money_template_component_1.MoneyTemplate,
                name_template_component_1.NameTemplate,
                numeric_template_component_1.NumericTemplate,
                range_template_component_1.RangeTemplate,
                remit_line_component_1.RemitLineTemplate,
                search_description_component_1.SearchDescriptionTemplate,
                ng2_datepicker_component_1.DatePickerComponent
            ].concat(ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES),
            entryComponents: [ng2_smart_table_component_1.Ng2SmartTableComponent],
            exports: ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES.slice(),
            providers: [Window, column_service_1.ColumnService]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2SmartTableModule);
    return Ng2SmartTableModule;
}());
exports.Ng2SmartTableModule = Ng2SmartTableModule;
//# sourceMappingURL=ng2-smart-table.module.js.map