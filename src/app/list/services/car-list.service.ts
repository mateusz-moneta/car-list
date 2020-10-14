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
  private filterValue: string;
  private sort: Sort;

  add(car: Car): void {
    this.dataSource = [
      ...this.dataSource,
      car
    ];
    this.carList$.next(this.getOutputData());
  }

  changeSort(sort: Sort): void {
    this.sort = sort;
    this.carList$.next(this.getOutputData());
  }

  edit(car: Car): void {
    const index = this.dataSource.findIndex(item => item.id === car.id);
    this.dataSource[index] = car;
    this.carList$.next(this.getOutputData());
  }

  filterByModel(filterValue: string): void {
    this.filterValue = filterValue;
    this.carList$.next(this.getOutputData());
  }

  remove(id: number): void {
    this.dataSource = this.dataSource.filter((car: Car) => car.id !== id);
    this.carList$.next(this.getOutputData());
  }

  private getOutputData(): Car[] {
    const filteredItems = filterItemsByValue<Car, keyof Car>(this.dataSource, 'model', this.filterValue);
    const sortedItems = sortItems<Car>(filteredItems, this.sort?.active, this.sort?.direction);

    return sortedItems;
  }
}
