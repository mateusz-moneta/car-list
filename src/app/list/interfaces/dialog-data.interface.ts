import { Action } from '../enums/action.enum';
import { Car } from './car.interface';

export interface DialogData {
  action: Action;
  car?: Car;
}
