import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Sergio',
  gender: 'male',
  age: '32',
  address: 'Ottawa, Canadá'
}
const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: '25',
  address: 'Toronto, Canadá'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n Select
  client = signal(client1)

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeCliente(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1)
  }


  //i18n Plural
  clientsMap = signal(
    {
      '=0':   'no tenemos nigún cliente esperando',
      '=1':   'tenemos 1 cliente esperando',
      '=2':   'tenemos 2 clientes esperando',
      other:  'tenemos # clientes esperando',
    }
  )

  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Pepe',
    'Jimena',
    'Adrián',
    'Sergio',
    'Fernando',

  ])

  deleteClient(){
    this.clients.update( prev => prev.slice(1))
  }

}
