import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'role',
    loadChildren: () =>
      import('./role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'function',
    loadChildren: () =>
      import('./function/function.module').then((m) => m.FunctionModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
