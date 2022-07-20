import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector     : 'settings',
    templateUrl  : './settings.component.html',
    
    encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit
{

   ngOnInit(): void {
       
   }

}
