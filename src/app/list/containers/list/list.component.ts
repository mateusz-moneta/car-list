import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

import { Action } from '../../enums/action.enum';
import { ActionDialogComponent } from '../../components/action-dialog/action-dialog.component';
import { Car } from '../../interfaces/car.interface';
import { CarListService } from '../../services/car-list.service';
import { Sort } from '../../interfaces/sort.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  carList$ = this.carListService.carList$;

  readonly action = Action;

  constructor(private carListService: CarListService, private dialog: MatDialog) {}

  onChangeSort(sort: Sort): void {
    this.carListService.changeSort(sort);
  }

  openDialog(action: Action, car?: Car): void {
    this.dialog.open(
        ActionDialogComponent,
      {
          data: {
            action,
            car
          }
        }
      )
      .afterClosed()
      .pipe(filter(outputCar => !!outputCar))
      .subscribe((outputCar: Car) => {
        if (action === Action.ADD) {
          this.carListService.add({
            id: this.carList$.getValue().length,
            ...outputCar
          });

          return;
        }

        this.carListService.edit({
          id: car.id,
          ...outputCar
        });
      });
  }

  onRemoveCar(id: number): void {
    this.carListService.remove(id);
  }

  onValueChange(filterValue: string): void {
    this.carListService.filterByModel(filterValue);
  }
}
