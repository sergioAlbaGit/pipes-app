import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

  localeService = inject(LocalService)

  currentLocale = signal(inject(LOCALE_ID))

  nameLower = signal<string>('sergio');
  nameUpper = signal<string>('SERGIO');
  fullName =  signal<string>('sERgIo aLBa');

  customDate = signal( new Date() )

  tickingDateEffect = effect((onCleanUp) => {

    const interval = setInterval(() => {
      this.customDate.set( new Date() )
      console.log('tick')
    }, 1000);

    onCleanUp(()=>{
      clearInterval(interval);
    })
  });


  changeLocale(locale: AvailableLocale){
    console.log({locale})
    this.localeService.changeLocale(locale);
  }


 }
