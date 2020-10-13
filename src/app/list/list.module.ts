import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import { ListComponent } from './containers/list/list.component';
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SortDirective } from './directives/sort.directive';
import { TableComponent } from './components/table/table.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    ListComponent,
    SortDirective,
    TableComponent,
    FilterComponent,
    ActionDialogComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ],
  entryComponents: [ActionDialogComponent]
})
export class ListModule {}
