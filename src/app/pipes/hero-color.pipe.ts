import { Color, ColorMap } from './../interfaces/hero.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroColor',
})

export class HeroColorPipe implements PipeTransform {
  transform(color: Color) : string {
    return Color[color] || '#000000'; // Default to black if color not found


  }
}
