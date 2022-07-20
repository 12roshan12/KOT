import {Component, EventEmitter, OnInit} from '@angular/core';
import {languages} from '../languages.model'
import {I18nService} from "../i18n.service";

@Component({
  selector: 'sa-language-selector',
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent implements OnInit {

  public languages: Array<any>;
  public currentLanguage: any;
  constructor(private i18n: I18nService) {
  }

  ngOnInit() {
      this.languages = languages;
      var theLanguage = localStorage.getItem('currentLanguage');
      if(theLanguage !== null)
      {
          this.currentLanguage = JSON.parse(theLanguage);
      }
      else
          this.currentLanguage = this.i18n.currentLanguage;
  }

  setLanguage(language){
    this.currentLanguage = language;
      I18nService.langLocale.next(language);
    this.i18n.setLanguage(language);
  }

}
