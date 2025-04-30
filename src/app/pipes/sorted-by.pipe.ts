import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(value: string | null): string {
    switch(value){
      case 'creator':
        return 'Creador'
      case 'canFly':
        return 'Puede volar'
      case 'color':
        return 'Color'
      case 'name':
        return 'Nombre'
      default:
        return 'Sin filtros'
    }
  }
}
