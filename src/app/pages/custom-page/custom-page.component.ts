import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-custom-page',
  imports: [CardComponent],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent { }
