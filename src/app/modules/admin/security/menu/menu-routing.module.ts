import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditMenuComponent } from './add-edit-menu/add-edit-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: MenuListComponent,
  },
  {
    path: 'new',
    component: AddEditMenuComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditMenuComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
