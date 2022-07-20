import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { menuIconList } from 'app/shared/data-utils';
import { AlertifyService } from 'app/shared/services/alertify.service';
import { MenuService } from '../menu.service';
import { menuInModule } from './modulemenu';

@Component({
  selector: 'app-add-edit-menu',
  templateUrl: './add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.scss']
})
export class AddEditMenuComponent implements OnInit {
  @ViewChild('MenuNgForm') MenuNgForm: NgForm;
  MenuForm: FormGroup;
  menuInModule: menuInModule[]
  roleList: any[] = [];
  iconList: { id: string; formalName: string; }[];
  menulist: any;
  constructor(private menuservice: MenuService, private route: ActivatedRoute, private alertify: AlertifyService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iconList = menuIconList;
    this.createForm();
    this.loadvalues();
    var routeId;
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      routeId = params["id"];
      console.log(routeId);
      if (routeId) {
        this.getbyid(routeId)
      }
    }
    )
    // this.getbyid(1);
  }
  createForm(): void {
    this.MenuForm = new FormGroup({
      edescription: new FormControl('', Validators.required),
      displayOrder: new FormControl('', Validators.required),
      nname: new FormControl('', Validators.required),
      ename: new FormControl('', Validators.required),
      ShowInDashboard: new FormControl(false),
      url: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),

      iconUrl: new FormControl('', Validators.required),
      menuInModules: new FormControl(),
    }
    );
  }
  buildForm(): void {
    this.MenuForm = new FormGroup({
      menuId: new FormControl(this.menulist.menuId, Validators.required),
      edescription: new FormControl(this.menulist.edescription, Validators.required),
      displayOrder: new FormControl(this.menulist.displayOrder, Validators.required),
      nname: new FormControl(this.menulist.nname, Validators.required),
      ename: new FormControl(this.menulist.ename, Validators.required),
      ShowInDashboard: new FormControl(this.menulist.showInDashboard),
      url: new FormControl(this.menulist.url, Validators.required),
      status: new FormControl(this.menulist.status, Validators.required),
      menuInModule: new FormControl(this.menulist.menuInModules, Validators.required),
      iconUrl: new FormControl(this.menulist.iconUrl, Validators.required),
    }
    );
  }
  get menuFormControl() {
    return this.MenuForm.controls;
  }
  Submit() {
    // if (this.MenuForm.invalid) {
    //   return;
    // }
    // console.log(this.menuInModule);
    // this.MenuForm.get('menuInModules').setValue(this.menuInModule);

    console.log(this.MenuForm.value);
    // Disable the form
    this.MenuForm.disable();

    console.log(this.MenuForm.value);
    if (!this.MenuForm.invalid) {
      this.menuservice.create(this.MenuForm.value)
        .subscribe(data => {
          console.log(data);
          this.MenuNgForm.resetForm();
    

          this.alertify.Success(data.message);
          this.router.navigate(['/security/menu/list'])
        }, error => {
          console.log(error);
          this.MenuForm.enable();
          this.MenuNgForm.resetForm();
          this.alertify.Error(error.message);
        });
    }


  }

  loadvalues() {
    this.menuservice.getvalueAll()
      .subscribe((value: any) => {
        //this.countries = value
        console.log(value);
        this.roleList = value.data.modules;
        this.roleList = this.roleList.map(val => {
          return {
            nname: val.nname,
            moduleId: val.moduleId,
            ename: val.ename,
            parentId: val.parentId,
            edescription: val.edescription,
          }
        })
      },
        error => {
          console.log(error);
        });
  }
  getbyid(id) {
    this.menuservice.getById(id)
      .subscribe((value: any) => {


        this.menulist = value.data.menu;
        console.log(this.menulist);
        this.buildForm();
      

      },
        error => {
          console.log(error);
        });
  }


  Cancel() {
    this.MenuNgForm.resetForm();
    this.router.navigate(['/security/menu/list'])
  }
}
