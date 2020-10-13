import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Car } from '../../interfaces/car.interface';
import { Sort } from '../../interfaces/sort.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  carList: Car[] = [];

  @Output()
  changeSort = new EventEmitter<Sort>();

  @Output()
  openCar = new EventEmitter<Car>();

  @Output()
  removeCar = new EventEmitter<number>();

  onOpenCar(car: Car): void {
    this.openCar.emit(car);
  }

  onRemoveCar(index: number): void {
    this.removeCar.emit(index);
  }

  trackByFn(index: number, car: Car): string {
    return `${car.brand}-${car.model}-${car.date}-${index}`;
  }
}
