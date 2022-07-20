import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FunctionService } from '../functionlist/function.service';
import { EntityModel, FunctionModel } from "../functionlist/function-model";
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormdialogComponent } from './dialog/formdialog/formdialog.component';

@Component({
  selector: 'app-add-function',
  templateUrl: './add-function.component.html',
  styleUrls: ['./add-function.component.sass']
})
export class AddFunctionComponent implements OnInit {
  functionform: FormGroup;
  functionModel: FunctionModel = new FunctionModel();
  entityModel = new EntityModel();
  updatedBoolean = false;
  menu = [];
  userTypeList: any;
  modulesList: any;
  iconUrl: any;
  entities: any;
  moduleList: any;
  modules: any;
  selectedList: any;
  panelOpenState = false;
  arrayList = [];
  actionLevel = [
    { id: 1, name: 'Read' },
    { id: 2, name: 'Create' },
    { id: 3, name: 'Edit' },
    { id: 4, name: 'Delete' },
    { id: 5, name: 'Report' }

  ];

  constructor(public httpClient: HttpClient,
    public functionservice: FunctionService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.loadfunction()
  }
  createForm(): void {
    this.functionform = new FormGroup({
      description: new FormControl('', Validators.required),
      entityInFunction: new FormArray([], Validators.required),
      name: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    }
    );
  }
  loadfunction() {
    return this.functionservice.getvalueAll().subscribe((value: any) => {
      this.userTypeList = value.data.userTypes;
      this.modulesList = value.data.modules;
      this.iconUrl = value.data.iconUrl;
      this.entities = value.data.entities;
      var filt = value.data.module.filter(val => { return (val.entity.length > 0) });
      this.moduleList = value.data.module;
      this.modules = filt;
      this.menu = value.data.module;
      this.selectedList = value.data.module.map((module) => {
        return {
          moduleId: module.moduleId,
          moduleName: module.name,
          entity: module.entity,
        };
      });
    });
  }
  Submit() {
    console.log(this.functionform.value)
    this.functionservice.create(this.functionform.value)
      .subscribe(data => {
        this.router.navigate(['/security/function/all-function']);
      }, error => {
        console.log(error);
      });
  }

  addNew() {
    const dialogRef = this.dialog.open(FormdialogComponent, {
      data: {
        modulelist: this.moduleList,
        actionLevelList: this.actionLevel,
        action: 'add',
      },
    });
  }

  onCheck(theItem, $event) {
    if (this.arrayList.length == 0) {
      this.arrayList.push(theItem);
    } else {
      var checkBoolean = this.arrayList.some(value => {
        return (value.entityId == theItem.entityId)
      })
      if (!checkBoolean) {
        this.arrayList.push(theItem);
      } else {
        for (let i = 0; i < this.arrayList.length; i++) {
          if (this.arrayList[i].entityId == theItem.entityId) {
            this.arrayList.splice(i, 1);
          }
        }
      }

    }
    this.functionform.value.entityInFunction = this.arrayList;
  }

  getByEntitiesId(id) {
    this.updatedBoolean = false;
    this.functionservice.getByIdFunction(id)
      .subscribe(data => {
        this.entityModel = data.data;
        const dialogRef = this.dialog.open(FormdialogComponent, {
          data: {
            entityModel: data.data,
            modulelist: this.moduleList,
            actionLevelList: this.actionLevel,
            action: 'edit',
          },
        });
      }, error => {
      })

  }
  Cancel(){
    this.functionform.reset();
  }

}
