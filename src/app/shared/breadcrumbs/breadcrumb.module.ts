import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { MaterialModule } from 'app/shared/material.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,

    ],
    imports: [
        MaterialModule,
        TranslocoModule
        
    ],
    exports:[
        BreadcrumbsComponent  
    ]
})
export class BreadCrumbModule {
}
