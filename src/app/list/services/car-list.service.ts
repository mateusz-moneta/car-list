import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Car } from '../interfaces/car.interface';
import { filterItemsByValue, sortItems } from '../utils/data-operations.util';
import { Sort } from '../interfaces/sort.interface';

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  carList$ = new BehaviorSubject<Car[]>([]);

  private dataSource: Car[] = [];

  add(car: Car): void {
    this.dataSource = [
      ...this.dataSource,
      car
    ];
    this.carList$.next(this.dataSource);
  }

  changeSort(sort: Sort): void {
    this.carList$.next(sortItems<Car>(this.dataSource, sort.active, sort.direction));
  }

  edit(car: Car): void {
    const index = this.dataSource.findIndex(item => item.id === car.id);
    this.dataSource[index] = car;
    this.carList$.next(this.dataSource);
  }

  filterByModel(filterValue: string): void {
    this.carList$.next(filterItemsByValue<Car, keyof Car>(this.dataSource, 'model', filterValue));
  }

  remove(id: number): void {
    this.dataSource = this.dataSource.filter((car: Car) => car.id !== id);
    this.carList$.next(this.dataSource);
  }
}
