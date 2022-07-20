import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { SharedModule } from 'app/shared/shared.module';
import { RoleListComponent } from './role-list/role-list.component';



@NgModule({
  declarations: [
    AddRoleComponent,
    RoleListComponent,
    
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModule
  ]
})
export class RoleModule { }
