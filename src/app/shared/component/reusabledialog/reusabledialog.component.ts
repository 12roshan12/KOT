import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { ReportService } from 'app/report.service';
import { monthsArray } from 'app/shared/data-utils';
import { Console } from 'console';
import { DialogInterface } from '../interfaces/dialog.interface';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-reusabledialog',
  templateUrl: './reusabledialog.component.html',
  styleUrls: ['./reusabledialog.component.scss']
})
export class ReusabledialogComponent implements OnInit {
  checkboxvalue: any;
  @Output() selectFormat = new EventEmitter<any>();
  @Output() Submitvalue = new EventEmitter<any>();
  @Input() serviceOngoing: string
  activeLang: string;
  Role: any;
  roleadmin: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ReusabledialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public stateService: StateService,
    private _translocoService: TranslocoService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    let Role = JSON.parse(sessionStorage.getItem('roles'));
    this.Role = Role[0].name;
    console.log(this.Role)
    if (this.Role.includes('Admin')) {
      this.roleadmin = true;
    } else {
      this.roleadmin = false;
    }

  }
  ngOnInit(): void {

    console.log(this.serviceOngoing);

    this._translocoService.langChanges$.subscribe((activeLang) => {

      // Get the active lang
      this.activeLang = activeLang;

      this._changeDetectorRef.markForCheck();
      // Update the navigation
      // this._updateNavigation(activeLang);
    });



    this.selectedFormat();
  }

  

  handleDialogSubmit() {
    console.log(this.serviceOngoing);
    this.stateService.isAsyncOperationRunning$.next(true);
    setTimeout(() => {
      this.Submitvalue.emit(this.dialogData);
      this.stateService.isAsyncOperationRunning$.next(false);
    });


  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  selectedFormat(value?) {
    this.selectFormat.emit(value ? value.target.value : 'pdf');
  }



}
