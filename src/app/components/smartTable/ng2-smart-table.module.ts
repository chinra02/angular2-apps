import { DropdownModule } from 'ng2-dropdown';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';
import { ColumnService } from './../../services/column.service';
import { JwtModule } from './../../jwt/jwt.module';
import { UIBulkActionsMenuComponent } from './../dropdown-menu/ui-bulk-actions-menu.component';
import { SearchDescriptionTemplate } from './ng2-smart-table/components/cell/templates/search-description.component';
import { RemitLineTemplate } from './ng2-smart-table/components/cell/templates/remit-line.component';
import { RangeTemplate } from './ng2-smart-table/components/cell/templates/range-template.component';
import { NumericTemplate } from './ng2-smart-table/components/cell/templates/numeric-template.component';
import { NameTemplate } from './ng2-smart-table/components/cell/templates/name-template.component';
import { MoneyTemplate } from './ng2-smart-table/components/cell/templates/money-template.component';
import { MessagesPopOver } from './ng2-smart-table/components/cell/templates/messages-view-popover.component';
import { ListTemplate } from './ng2-smart-table/components/cell/templates/list-template.component';
import { DatePickerComponent } from '../ng2datepicker/ng2-datepicker.component';
import {
  DatepickerModule
} from 'ng2-bootstrap/components/datepicker/datepicker.module';
import { MessagesTemplate } from './ng2-smart-table/components/cell/templates/messages.template';
import { DateTemplate } from './ng2-smart-table/components/cell/templates/date-template.component';
import { TextTemplate } from './ng2-smart-table/components/cell/templates/text-template.component';
import { CellComponent } from './ng2-smart-table/components/cell/cell.component';
import { CellTemplate } from './ng2-smart-table/components/cell/cell-template.component';
import { TemplateModal } from './ng2-smart-table/components/modal/template-modal.component';
import {
  HttpModule
} from '@angular/http';
import { TemplateComponent } from './ng2-smart-table/components/search/templates/template-component';
import { RowAction } from './ng2-smart-table/components/actions/row-action.component';
import { HeaderActions } from './ng2-smart-table/components/actions/header-actions.component';
import { Ng2DropDownComponent } from '../ng2dropdown/ng2dropdown.component';
import { tableSettings } from './ng2-smart-table/components/tableSettings/table-settings.component';
import { SmartSelector } from './ng2-smart-table/components/selector/selector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NG2_SMART_TABLE_DIRECTIVES } from './ng2-smart-table.directives';
import { FilterComponent } from './ng2-smart-table/components/filter/filter.component';
import { PagerComponent } from './ng2-smart-table/components/pager/pager.component';
import { TitleComponent } from './ng2-smart-table/components/title/title.component';
import { ModalModule } from 'ng2-modal';
import { SelectModule } from 'angular2-select';
import { PopoverModule } from 'ng2-popover';
import {TooltipModule} from 'ng2-tooltip';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DropdownModule,
    ModalModule,
    DatepickerModule,
    SelectModule,
    PopoverModule,
    TooltipModule,
    JwtModule
   
  ],
  declarations: [
    CellComponent,
    FilterComponent,
    PagerComponent,
    TitleComponent,
    SmartSelector,
    tableSettings,
    Ng2DropDownComponent,
    HeaderActions,
    RowAction,
    UIBulkActionsMenuComponent,
    TemplateModal,
    CellTemplate,
    TextTemplate,
    DateTemplate,
    ListTemplate,
    MessagesTemplate,
    MessagesPopOver,
    MoneyTemplate,
    NameTemplate,
    NumericTemplate,
    RangeTemplate,
    RemitLineTemplate,
    SearchDescriptionTemplate,
    DatePickerComponent,
    ...NG2_SMART_TABLE_DIRECTIVES
  ],
  entryComponents:[Ng2SmartTableComponent],
  exports: [

    ...NG2_SMART_TABLE_DIRECTIVES
  ],
  providers:[Window,ColumnService]
})
export class Ng2SmartTableModule {
}