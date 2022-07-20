import {Injectable, ApplicationRef, EventEmitter} from '@angular/core';


import {BehaviorSubject, config, Subject} from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class I18nService {

  public state;
  public data:{};
  public currentLanguage:any;
  static langLocale = new Subject<any>();
  changeLanguagesEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor( private ref:ApplicationRef) {
    this.state = new Subject();
      let defaultLocale = 'np';
      let theLanguage = localStorage.getItem('currentLanguage');

      if(theLanguage !== null)
      {
          var langObj = JSON.parse(theLanguage);
          defaultLocale = langObj.key;
      }
      this.initLanguage(defaultLocale);
    this.fetch(this.currentLanguage.key)
  }

  private fetch(locale: any) {
    // this.jsonApiService.fetch( `/langs/${locale}.json` )
    //   .subscribe((data:any)=> {
    //     this.data = data;
    //     this.state.next(data);
    //     this.ref.tick()
    //   })
  }

  private initLanguage(locale:string) {
    // let language = languages.find((it)=> {
    //   return it.key == locale
    // });
    // if (language) {
    //   this.currentLanguage = language
    // } else {
    //   throw new Error(`Incorrect locale used for I18nService: ${locale}`);

    // }
  }

  setLanguage(language){
    this.currentLanguage = language;
      localStorage.setItem('currentLanguage', JSON.stringify(language));
      this.changeLanguagesEmitter.emit(language);
      console.log(language);

    this.fetch(language.key)
  }


  subscribe(sub:any, err:any) {
    return this.state.subscribe(sub, err)
  }

  public getTranslation(phrase:string):string {
    return this.data && this.data[phrase] ? this.data[phrase] : phrase
  }
  public setLocale(value:string)
    {

    }

}
