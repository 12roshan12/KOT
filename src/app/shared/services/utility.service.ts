import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent, ConfirmDialogModel } from '../conformation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  openConfirmDialog(msg){
    return this.dialog.open(ConfirmationDialogComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "10px" },
       data :{
         message : msg
       }
     });
   }
  confirmAction(type, message) {
    const dialogData = new ConfirmDialogModel(type, message);
    return  this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: '600px',
      minWidth: '400px',
      data: dialogData,
    });
  
    
  }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  success(msg: string) {
    this.config['panelClass'] = ['success', 'notification']
    this.snackBar.open(msg, '', this.config)
  }

  error(msg: string) {
    this.config['panelClass'] = ['error', 'notification']
    this.snackBar.open(msg, '', this.config)
  }

}

