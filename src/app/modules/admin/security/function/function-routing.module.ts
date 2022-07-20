import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFunctionComponent } from './add-function/add-function.component';
import { EditFunctionComponent } from './edit-function/edit-function.component';
import { FunctionlistComponent } from './functionlist/functionlist.component';

const routes: Routes = [
  {
    path: 'list',
    component: FunctionlistComponent,
  },
  {
    path: 'new',
    component: AddFunctionComponent,
  },
  {
    path: 'edit-function/:id',
    component: EditFunctionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionRoutingModule { }
