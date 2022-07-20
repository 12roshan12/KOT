import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionRoutingModule } from './function-routing.module';
import { FunctionlistComponent } from './functionlist/functionlist.component';
import { AddFunctionComponent } from './add-function/add-function.component';
import { EditFunctionComponent } from './edit-function/edit-function.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormdialogComponent } from './add-function/dialog/formdialog/formdialog.component';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';



@NgModule({
  declarations: [
    FunctionlistComponent,
    AddFunctionComponent,
    EditFunctionComponent,
    FormdialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTabsModule,

    MatMenuModule,
    MatProgressSpinnerModule,
    FunctionRoutingModule,
    NgSelectModule,
    MatExpansionModule,

    SharedModule,
    MaterialModule

  ]
})
export class FunctionModule { }
