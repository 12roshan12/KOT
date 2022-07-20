import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,


    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        TranslocoModule

    ]
})
export class ExampleModule
{
}
