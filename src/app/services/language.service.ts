import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
// export class LanguageService {
//   public languages: string[] = ['en','np'];
//   public languagechange :Subject<Object> = new ReplaySubject<Object>(1);

//   constructor(public translate: TranslateService) {
//     let browserLang;
//     translate.addLangs(this.languages);

//     if (localStorage.getItem('lang')) {
//       browserLang = localStorage.getItem('lang');
//     } else {
//       browserLang = translate.getBrowserLang();
//     }
//     translate.use(browserLang.match(/en|np/) ? browserLang : 'np');
//   }

//   public setLanguage(lang) {
//     console.log(lang)
//     this.translate.use(lang);
//     localStorage.setItem('lang', lang);
//     this.languagechange.next(lang);
//   }

// }

export class LanguageService {
  public languages: string[] = ['en', 'np'];
  public office: string[] = ['MOFA', 'CTEVT','LUMBINI'];
  public currentLanguage = new BehaviorSubject('np');
  public currentoffice = new BehaviorSubject('MOFA');

  constructor(public translate: TranslateService) {
    let browserLang;
    translate.addLangs(this.languages);

    if (localStorage.getItem('lang')) {
      browserLang = localStorage.getItem('lang');
    } else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/en|np/) ? browserLang : 'en');
  }

  public setLanguage(lang) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLanguage.next(lang);
  }

  public setoffice(lang) {
    this.translate.use(lang);
    localStorage.setItem('office', lang);
    this.currentoffice.next(lang);
  }
}

