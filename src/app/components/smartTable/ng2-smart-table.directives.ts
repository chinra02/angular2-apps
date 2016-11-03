import { FilterPipe } from '../../utils/filter.pipe';
import { NamePipe } from './../../utils/name.pipe';
import { CommaSeparatedList } from './../../utils/comma-separated-list.pipe';
import { Safe } from './../../utils/safe.pipe';
import { CurrencyFormatterDirective } from './../../utils/currency-formatter.directive';
import { CurrencyFormatPipe } from './../../utils/currency-format.pipe';
import { ClaimLineStatusCodes } from './../../utils/claim-line-status-codes.pipe';
import { UIBulkActionsMenuComponent } from './../dropdown-menu/ui-bulk-actions-menu.component';
import { RowAction } from './ng2-smart-table/components/actions/row-action.component';

import {HeaderActions} from './ng2-smart-table/components/actions/header-actions.component';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';


export const NG2_SMART_TABLE_DIRECTIVES = [Ng2SmartTableComponent,HeaderActions, RowAction, UIBulkActionsMenuComponent,ClaimLineStatusCodes,
    CurrencyFormatPipe, CurrencyFormatterDirective,Safe,CommaSeparatedList,NamePipe,FilterPipe];