import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityModel } from '../../../functionlist/function-model';
import { FunctionService } from '../../../functionlist/function.service';

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.sass']
})
export class FormdialogComponent implements OnInit {
  action: any;
  dialogTitle: any;
  featureentity: any;
  entityform: FormGroup;
  entitymodule: any;
  actiontype: any;

  constructor(public dialogRef: MatDialogRef<FormdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modaldata: any,
    public functionservice: FunctionService,) {

  }

  ngOnInit(): void {
    this.createentityForm();
    console.log(this.modaldata);
    this.action = this.modaldata.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Entity';
      this.entitymodule = this.modaldata.modulelist;
      this.actiontype = this.modaldata.actionLevelList;
      this.entityform.value.name = this.modaldata.entityModel.name;
      this.entityform.value.actionType = this.modaldata.entityModel.actionType;
      this.entityform.value.clientUrl = this.modaldata.entityModel.clientUrl;
      this.entityform.value.moduleId = this.modaldata.entityModel.moduleId;

    } else {
      this.dialogTitle = 'New Entity';
      this.entitymodule = this.modaldata.modulelist;
      this.actiontype = this.modaldata.actionLevelList;
      this.featureentity = new EntityModel();
    }
  }
  createentityForm(): void {
    this.entityform = new FormGroup({
      actionType: new FormControl('', Validators.required),
      clientUrl: new FormControl('', Validators.required),
      moduleId: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    console.log(this.entityform.value)
  }

  save() {
    console.log(this.entityform.value);
    this.functionservice.createentity(this.entityform.value)
      .subscribe(data => {
        console.log(data);

      }, error => {
        console.log(error);
      });
  }

}
