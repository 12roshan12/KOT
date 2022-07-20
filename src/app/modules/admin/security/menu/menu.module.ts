import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AddEditMenuComponent } from './add-edit-menu/add-edit-menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MatcheckallComponent } from './matcheckall/matcheckall.component';


@NgModule({
  declarations: [
    AddEditMenuComponent,
    MenuListComponent,
    MatcheckallComponent
  ],
  imports: [
    MenuRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class MenuModule { }
