import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'app/shared/services/alertify.service';
import { get } from 'lodash';
import { RoleService } from '../role.service';
import { FunctionInRole, RoleModel } from '../rolemodel';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  displayedColumns = [
    'Function',
    'AccessLevelType',
    'actions',
  ];
  roleform: FormGroup;
  RoleTypeList: any;
  selectedList: any;
  menu: any;
  modulesList: any;
  modSelectedList: any;
  functions: any;
  accessLevel: any;
  roleModel: RoleModel = new RoleModel();
  currentLang = 'np';
  arrayModList: any[] = [];
  arrayList: any[]=[];
  exampleDatabase: RoleService | null;
  dataSource: any;
  selection = new SelectionModel<any[]>(true, []);
  id: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger, { static: true }) contextMenu: MatMenuTrigger;
  @ViewChild('RoleNgForm') RoleNgForm: NgForm;
  contextMenuPosition = { x: '0px', y: '0px' };
  languagesup: any;
  menues: any[] = [];
  filteredMenu: any[] = [];

  constructor(public httpClient: HttpClient,private alertify: AlertifyService,
    public roleservice: RoleService,
    private route: ActivatedRoute,
    private _activateroute: ActivatedRoute,
    public dialog: MatDialog,
    private _router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.loadvalues();
    var routeId;
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      routeId = params["id"];
      console.log(routeId);
      if (routeId) {
        setTimeout(() => {
          this.roleservice.getByIdrole(routeId)
            .subscribe(value => {
              console.log(value);
              this.roleModel = value.data;
              this.buildForm();
              // permission array
              this.roleModel.functionInRole.forEach((value, int, array) => {
                value.accessLevel = this.accessLevel;
                var accessId;
                var acessMap = this.accessLevel.map((value1, i) => {
                  accessId = array[int].accessLevelTypeId.slice(i, i + 1)
                  return {
                    value: accessId,
                    formalName: value1.formalName

                  }
                })
                value.accessLevel = acessMap;
              });
              // modules array
              var modList = [];
              modList = this.modSelectedList.map(vals => {
                var filtData = value.data.roleInModule.filter(filtDat => {
                  if (filtDat.moduleId == vals.moduleId) {
                    return true;
                  }
                });
                var modId;
                for (let i = 0; filtData.length > i; i++) {
                  modId = filtData[i].id
                }
                if (filtData.length > 0) {
                  return {
                    id: modId,
                    moduleId: vals.moduleId,
                    name: vals.name,
                    checked: true,
                  }
                } else {
                  return {
                    moduleId: vals.moduleId,
                    name: vals.name,
                    checked: false,
                  }
                }
              });
              this.modSelectedList = modList;
              var modChecked = [];
              modList.map(value => {
                if (value.checked == true) {
                  modChecked.push(value);
                }
              });
              this.arrayModList = modChecked;
              // Role Menu
              var menuList = [];
              menuList = this.menu.map(vals => {

                var filtList = vals.item.map(menRol => {
                  var filtData = value.data.menuInRole.filter(filtDat => {
                    if (filtDat.menuId == menRol.menuId) {
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
                      menu: menRol.menu,
                      menuId: menRol.menuId,
                      checked: true,
                    }
                  } else {
                    return {
                      menu: menRol.menu,
                      menuId: menRol.menuId,
                      checked: false,
                    }
                  }
                });
                return {
                  moduleId: vals.moduleId,
                  moduleNames: vals.moduleNames,
                  item: filtList,
                }
              });
              this.selectedList = menuList;
              var itemChecked = [];
              for (let fil of menuList) {
                fil.item.map(value => {
                  if (value.checked == true) {
                    itemChecked.push(value);
                  }
                });
              }
              this.arrayList = itemChecked;
              console.log("array list", this.arrayList);
            },
              error => {
                console.log(error)
              })
        });
      }
    }
    )
  }
  createForm(): void {
    this.roleform = new FormGroup({
      roleName: new FormControl('', Validators.required),
      functionInRole: new FormControl('', Validators.required),
      name: new FormControl(''),
      menuInRole: new FormControl(''),
      status: new FormControl('', Validators.required),
      roleInRole: new FormControl('', Validators.required),
      userTypeId: new FormControl('', Validators.required)
    }
    );
  }

  buildForm() {
    this.roleform = new FormGroup({
      roleName: new FormControl(this.roleModel.roleName, Validators.required),
      roleId: new FormControl(this.roleModel.roleId),
      functionInRole: new FormControl(this.roleModel.functionInRole, Validators.required),
      menuInRole: new FormControl(this.roleModel.menuInRole, Validators.required),
      status: new FormControl(this.roleModel.status, Validators.required),
      roleInRole: new FormControl(this.roleModel.roleInModule, Validators.required),
      userTypeId: new FormControl(this.roleModel.userTypeId, Validators.required),
      createdBy: new FormControl(this.roleModel.createdBy, Validators.required),
      createdOn: new FormControl(this.roleModel.createdOn, Validators.required),
    });
  }

  loadvalues() {
    this.roleservice.getvalueAll()
      .subscribe((value: any) => {
        //this.countries = value
        console.log(value)
        this.RoleTypeList = value.data.userTypes;
        var filt = value.data.modules.filter((val: any) => {
          return (val)
        })

        var selectedList = filt;
        this.selectedList = value.data.menuItems;
        this.filteredMenu =this.selectedList;
        var result =  this.selectedList .map(a => a.moduleId);
        var result2 = this.selectedList .map(a => a.moduleId);

        var final_result = result.every(function (val) {

          return result2.indexOf(val) >= 0;

        });
        // console.log(final_result)
     
          // if (this.selectedList.has(this.selectedList.moduleId)) {
          //     this.selectedCheckboxes.delete(rowObj._autoId);
          //     this.selectedCheckList = this.selectedCheckList.filter(item => {
          //         return item._autoId != rowObj._autoId;
          //     });
          // }
          // else { 
          //     this.selectedCheckboxes.add(rowObj._autoId);
          //     this.selectedCheckList.push(rowObj);
          // }
          // this.checkboxClick.emit(this.selectedCheckList);
      
        //this.filteredMenu = Array.from(new Set(this.selectedList.map((itemInArray) => itemInArray)));
        //  for(let i=0;i<=this.selectedList.length;i++){
        //    if(this.selectedList[i] != )

        //  }


        console.log(this.selectedList)
        // this.menues = value.data.menues;
        // for(let i=0;i<=this.selectedList.length;i++){
        //   for(let j=0;j<=this.selectedList[i]?.item;j++){
        //     for(let k=0;k<=this.menues.length;k++){
        //       if(this.selectedList[i].item[j]?.menuId == this.menues[k]?.menuId ){
        //         console.log(this.menues[k])
        //       }
        //     }

        //   }

        // }

        this.menu = selectedList;

        this.modulesList = value.data.modules;

        this.modSelectedList = this.modulesList.map(retVal => {
          return {
            moduleId: retVal.moduleId,
            name: retVal.ename,
          }
        })
        this.functions = value.data.functions;
        this.accessLevel = value.data.accessLevelTypes;
        var routeId;
        this._activateroute.params.subscribe(params => {
          console.log(params) //log the entire params object
          routeId = (params['id']) //log the value of id
        });
        if (routeId) {
          setTimeout(() => {
            this.roleservice.getByIdrole(routeId)
              .subscribe(value => {
                console.log(value);
                this.roleModel = value.data;
                // permission array
                this.roleModel.functionInRole.forEach((value, int, array) => {
                  value.accessLevel = this.accessLevel;
                  var accessId;
                  var acessMap = this.accessLevel.map((value1, i) => {
                    accessId = array[int].accessLevelTypeId.slice(i, i + 1)
                    return {
                      value: accessId,
                      formalName: value1.formalName

                    }
                  })
                  value.accessLevel = acessMap;
                });
                // modules array
                var modList = [];
                modList = this.modSelectedList.map(vals => {
                  var filtData = value.data.roleInModule.filter(filtDat => {
                    if (filtDat.moduleId == vals.moduleId) {
                      return true;
                    }
                  });
                  var modId;
                  for (let i = 0; filtData.length > i; i++) {
                    modId = filtData[i].id
                  }
                  if (filtData.length > 0) {
                    return {
                      id: modId,
                      moduleId: vals.moduleId,
                      name: vals.name,
                      checked: true,
                    }
                  } else {
                    return {
                      moduleId: vals.moduleId,
                      name: vals.name,
                      checked: false,
                    }
                  }
                });
                this.modSelectedList = modList;
                var modChecked = [];
                modList.map(value => {
                  if (value.checked == true) {
                    modChecked.push(value);
                  }
                });
                this.arrayModList = modChecked;
                // Role Menu
                var menuList = [];
                menuList = this.menu.map(vals => {

                  var filtList = vals.item.map(menRol => {
                    var filtData = value.data.menuInRole.filter(filtDat => {
                      if (filtDat.menuId == menRol.menuId) {
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
                        menu: menRol.menu,
                        menuId: menRol.menuId,
                        checked: true,
                      }
                    } else {
                      return {
                        menu: menRol.menu,
                        menuId: menRol.menuId,
                        checked: false,
                      }
                    }
                  });
                  return {
                    moduleId: vals.moduleId,
                    moduleNames: vals.moduleNames,
                    item: filtList,
                  }
                });
                this.selectedList = menuList;
                var itemChecked = [];
                for (let fil of menuList) {
                  fil.item.map(value => {
                    if (value.checked == true) {
                      console.log(value, "value")
                      itemChecked.push(value);
                    }
                  });
                }
                this.arrayList = itemChecked;
                console.log("array list", this.arrayList);
              },
                error => {
                  console.log(error)
                })
          });
        }
      }
        ,
        error => {
          console.log(error);
        });
  }
  onCheck(theItem, $event) {
    console.log(this.arrayList, "array", theItem);
    if (this.arrayList.length == 0) {
      this.arrayList.push(theItem);
    } else {
      var checkBoolean = this.arrayList.some(value => {
        return (value.menuId == theItem.menuId)
      })
      if (!checkBoolean) {
        this.arrayList.push(theItem);
      } else {
        for (let i = 0; i < this.arrayList.length; i++) {
          if (this.arrayList[i].menuId == theItem.menuId) {
            this.arrayList.splice(i, 1);
          }
        }
      }

    }
    // this.roleModel.menuInRole = this.arrayList;
    this.roleform.get('menuInRole').setValue(this.arrayList);
  }

  onCheckModules(theItem, $event) {
    console.log(this.arrayModList);
    console.log(theItem);
    if (this.arrayModList.length == 0) {
      this.arrayModList.push(theItem);
    } else {
      var checkBoolean = this.arrayModList.some(value => {
        return (value.moduleId == theItem.moduleId)
      })
      if (!checkBoolean) {
        this.arrayModList.push(theItem);
      } else {
        for (let i = 0; i < this.arrayModList.length; i++) {
          if (this.arrayModList[i].moduleId == theItem.moduleId) {
            this.arrayModList.splice(i, 1);
          }
        }
      }

    }
    // this.roleModel.roleInModule = this.arrayModList;
    this.roleform.value.roleInModule = this.arrayModList;
  }
  addNewPermissions() {
    var access = this.accessLevel.map((retVal, i) => {
      var val = "10000";
      var id = val.slice(i, i + 1);
      return {
        value: id,
        formalName: retVal.name
      }
    })
    var functionRole = new FunctionInRole();
    functionRole.accessLevel = access;
    functionRole.accessLevelTypeId = "10000";
    console.log(this.roleModel)
    this.roleModel.functionInRole.push(functionRole);
    // this.roleform.value.functionInRole.push(functionRole);
    this.roleform.get('functionInRole').setValue(functionRole);

    // this.roleform.value.menuInRole=this.arrayModList;


  }
  removeItem(i) {
    if (this.roleModel.functionInRole.length > 1) {
      this.roleModel.functionInRole.splice(i, 1);
    }
  }
  checkAccessLevel(ind, rolInd, val) {
    this.roleModel.functionInRole.forEach((acessLevel, index, array) => {
      if (val == true) {
        array[rolInd].accessLevelTypeId = array[rolInd].accessLevelTypeId.substr(0, ind) + '1' + array[rolInd].accessLevelTypeId.substr(ind + 1);
      } else {
        array[rolInd].accessLevelTypeId = array[rolInd].accessLevelTypeId.substr(0, ind) + '0' + array[rolInd].accessLevelTypeId.substr(ind + 1);
      }
      console.log(array[rolInd].accessLevelTypeId, "accessType");
      this.roleform.get('roleInRole').setValue(array[rolInd].accessLevelTypeId);
      this.roleform.get('functionInRole').setValue(array[rolInd]);
    })


  }
  checkDuplicate(event) {
    console.log(event);
    console.log(this.roleModel.functionInRole);
  }
  Submit() {
    console.log(this.roleform.value)
    // if (this.roleform.invalid) {
    //   return;
    // }



    // Disable the form
    this.roleform.disable();

    this.roleservice.create(this.roleform.value)
      .subscribe((data:any) => {
        this.alertify.Success(data);
        this.RoleNgForm.resetForm();
        this._router.navigate(['/security/role/list']);
      }, error => {
        this.roleform.enable();
        this.RoleNgForm.resetForm();
        this.alertify.Error(error.message);
      });

  }
  Cancel() {
    this.RoleNgForm.resetForm();
    this._router.navigate(['/security/role/list']);
  }

}
