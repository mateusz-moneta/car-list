import { Directive, Host, HostListener, Input } from '@angular/core';

import { SortDirection } from '../enums/sort-direction.enum';
import { TableComponent } from '../components/table/table.component';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input('appSort')
  active: string;

  private currentDirection: SortDirection;

  @HostListener('click')
  onClick() {
    this.currentDirection = !this.currentDirection || this.currentDirection === SortDirection.DESC
      ? SortDirection.ASC
      : SortDirection.DESC;

    this.table.changeSort.emit({
      active: this.active,
      direction: this.currentDirection
    });
  }

  constructor(@Host() private table: TableComponent) {}
}
