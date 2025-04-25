import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Sergio');

  upperCase = signal(true);

 }
