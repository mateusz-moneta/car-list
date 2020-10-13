import { SortDirection } from '../enums/sort-direction.enum';

export interface Sort {
  active: string;
  direction: SortDirection;
}
