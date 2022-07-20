import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './userlist/userlist.component';

const routes: Routes = [
   {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'new',
    component: AddUserComponent,
  },
  {
    path: 'edit/:id',
    component: EditUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
