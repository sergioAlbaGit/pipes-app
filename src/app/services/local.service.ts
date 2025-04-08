import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'en' | 'fr';

@Injectable({providedIn: 'root'})
export class LocalService {

  private currentLocale = signal<AvailableLocale>('en')

  constructor(){

    this.currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
    )

  }

  get getLocale(){
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale){
    if (locale === localStorage.getItem('locale')) return;
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}
