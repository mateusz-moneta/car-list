import { SortDirection } from '../enums/sort-direction.enum';

export function filterItemsByValue<T, K extends keyof T>(items: T[], property: K, filterValue: string): T[] {
  if (filterValue) {
    return items.filter(item => item[property].toString().toLowerCase().includes(filterValue.toLowerCase()));
  }

  return items;
}

export function sortItems<T>(items: T[], active: string, direction: SortDirection): T[] {
  if (active && direction) {
    switch (direction) {
      case SortDirection.ASC:
        return items.slice().sort((prev, next) => (prev[active] > next[active]) ? 1 : -1);

      case SortDirection.DESC:
        return items.slice().sort((prev, next) => (prev[active] > next[active]) ? -1 : 1);

      default:
        return items;
    }
  }

  return items;
}
