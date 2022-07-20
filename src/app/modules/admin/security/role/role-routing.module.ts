import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleListComponent } from './role-list/role-list.component';

const routes: Routes = [
  {
    path: 'new',
    component: AddRoleComponent,
  },
  {
    path: 'list',
    component: RoleListComponent,
  },
  {
    path: 'edit/:id',
    component: AddRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
