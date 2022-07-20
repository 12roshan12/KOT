import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormdialogComponent } from '../add-function/dialog/formdialog/formdialog.component';
import { EntityModel } from '../functionlist/function-model';
import { FunctionService } from '../functionlist/function.service';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.sass']
})
export class EditFunctionComponent implements OnInit {
  functionform: FormGroup;
  entityModel = new EntityModel();
  functionModel: any;
  userTypeList: any;
  modulesList: any;
  iconUrl: any;
  entities: any;
  moduleList: any;
  modules: any;
  menu: any;
  selectedList: any;
  arrayList: any[];
  routeId: any;
  actionLevel = [
    { id: 1, name: 'Read' },
    { id: 2, name: 'Create' },
    { id: 3, name: 'Edit' },
    { id: 4, name: 'Delete' },
    { id: 5, name: 'Report' }

  ];
  
  constructor(private route: ActivatedRoute, public httpClient: HttpClient,  private router: Router, private functionservice: FunctionService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.createForm();

    this.route.params.subscribe(params => {
      this.routeId = (params['id']) //log the value of id
    });

    this.loadfunction();

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

  buildForm() {
    this.functionform = new FormGroup({
      description: new FormControl(this.functionModel.description, Validators.required),
      name: new FormControl(this.functionModel.name),
      status: new FormControl(this.functionModel.status, Validators.required),
      createdBy: new FormControl(this.functionModel.createdBy, Validators.required),
      createdOn: new FormControl(this.functionModel.createdOn, Validators.required),
      functionId: new FormControl(this.functionModel.functionId, Validators.required),
      entityInFunction: new FormControl(this.functionModel.entityInFunction, Validators.required),
    });
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
      this.getfunction(this.routeId);
    }
    );

  }

  getfunction(id) {
    if (id) {
      this.functionservice.getByIdFunction(id)
        .subscribe(value => {
          this.functionModel = value.data;
          this.buildForm();
          var menuList = [];

          menuList = this.menu.map((vals, i) => {

            var filtList = vals.entity.map((menRol) => {
              var filtData = value.data.entityInFunction.filter(filtDat => {
                if (filtDat.entityId == menRol.entityId) {
                  return true;
                }

              });
              var id;
              for (let i = 0; filtData.length > i; i++) {
                id = filtData[i].id
              }
              if (filtData.length > 0) {
                return {
                  id: id,
                  name: menRol.name,
                  entityId: menRol.entityId,
                  checked: true,
                }
              } else {
                return {
                  name: menRol.name,
                  entityId: menRol.entityId,
                  checked: false,
                }
              }

            });
            return {
              moduleId: vals.id,
              moduleName: vals.name,
              entity: filtList,
            }
          });
          this.selectedList = menuList;
          var itemChecked = [];
          for (let fil of menuList) {
            fil.entity.map(value => {
              if (value.checked == true) {
                itemChecked.push(value);
              }
            });
          }
          this.arrayList = itemChecked;

        },
          error => {
            console.log(error)
          })
    }

  }

  Submit() {
    console.log(this.functionform.value);
    this.functionservice.update(this.functionform.value)
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
  getByEntitiesId(id) {
    this.functionservice.getByIdentity(id)
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

}
