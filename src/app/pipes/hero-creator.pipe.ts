import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator',
})

export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    return value === Creator.DC ? 'DC' : 'Marvel'; // Assuming 0 is DC and 1 is Marvel
  }
}
