import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Route, RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { TranslocoModule } from '@ngneat/transloco';
import { UserComponent } from 'app/layout/common/user/user.component';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';

const profileRoutes: Route[] = [
    {
        path     : 'profile',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [
        UserComponent,
        ChangePasswordComponent,
        ProfileComponent,
    ],
    imports     : [
        RouterModule.forChild(profileRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule,
        MaterialModule,
        TranslocoModule,
        FuseLoadingBarModule,
        FuseAlertModule,
        ToastrModule.forRoot()
        
    ],
    exports     : [
        UserComponent
    ]
})
export class UserModule
{
}
