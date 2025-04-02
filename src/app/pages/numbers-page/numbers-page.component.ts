import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [
    DecimalPipe, PercentPipe, CurrencyPipe
  ],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {


  totalSells = signal<number>(2_376_090.1938)
  percent = signal<number>(0.4856)


}
