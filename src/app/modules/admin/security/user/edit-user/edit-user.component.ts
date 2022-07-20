import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AlertifyService } from 'app/services/alertify.service';
import { CustomvalidationService } from 'app/shared/services/Customvalidation.service';

import { UserService } from '../User.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  Userid: string;
  userdetail: any;
  agencyId: any;
  userTypeList: any;
  localBodyList: any;
  banks: any;
  modulesList: any;
  roleList: any;
  members: any;
  warehouses: any;
  roleAllList: any;
  rcAgencyList: any;
  hide = true;
  passwordvalidator: (formGroup: FormGroup) => any;
  Nfiscalyear: string;
  ministries: any;
  filteredList2: any;
  provinces: any;
  provincefilter: any;
  usertypeId: any;
  provincemainarray: any;
  mainministryArry: any;
  role: any;
  roleid: any;
  provinceId: number;
  constructor(private userservice: UserService, private authService: AuthService, private _location: Location, private router: Router, private activateroute: ActivatedRoute, private alertify: AlertifyService, private customValidator: CustomvalidationService,) { this.agencyId = JSON.parse(sessionStorage.getItem('agencies')); }

  ngOnInit(): void {
    const id = this.activateroute.snapshot.paramMap.get('id');
    this.role = JSON.parse(sessionStorage.getItem('roles'));
    console.log(this.role);
    this.roleid = this.role[0].id;
    this.provinceId = Number(sessionStorage.getItem('provinceId'));
    this.createForm();
    this.loadvalues();
    this.getbyUserId(id);
  }
  createForm(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      provinceId: new FormControl('', Validators.required),
      ministryId: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      userTypeId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      conformPassword: new FormControl('', Validators.required),
      roles: new FormControl([], Validators.required),
    },
      this.passwordvalidator = this.customValidator.MatchPassword('password', 'conformPassword'),
    );
  }
  buildForm(): void {
    this.userForm = new FormGroup({
      id: new FormControl(this.userdetail.id, Validators.required),
      email: new FormControl(this.userdetail.email, [Validators.required, Validators.email]),
      name: new FormControl(this.userdetail.name, Validators.required),
      mobile: new FormControl(this.userdetail.mobile, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      provinceId: new FormControl(this.userdetail.provinceId, Validators.required),
      ministryId: new FormControl(this.userdetail.ministryId, Validators.required),
      agencyId: new FormControl(this.userdetail.agencyId, Validators.required),
      status: new FormControl(this.userdetail.status, Validators.required),
      username: new FormControl(this.userdetail.username, Validators.required),
      userTypeId: new FormControl(this.userdetail.userTypeId, Validators.required),
      password: new FormControl(this.userdetail.password, Validators.required),
      conformPassword: new FormControl(this.userdetail.password, Validators.required),
      roles: new FormControl(this.userdetail.roles, Validators.required),
    },
    );
  }
  selectministry(provinces?) {
    this.Nfiscalyear = sessionStorage.getItem('fiscalYear');
    const formObject = <any>{};
    if (provinces)
      this.userForm.get('provinceId').setValue(provinces.value);
    formObject.provinceId = this.userForm.value.provinceId;
    formObject.fiscalyearId = this.Nfiscalyear;
    this.authService.getMinistryData(formObject).subscribe((data: any) => {
      this.ministries = data.data.ministries;
      this.filteredList2 = this.ministries.slice();
    });
  }
  loadvalues() {
    this.userservice.getvalueAll()
      .subscribe((value: any) => {
        //this.countries = value
        this.mainministryArry = value.data.userTypes;

        this.userTypeList = this.mainministryArry;
        if(this.roleid == 301){
          this.userTypeList =value.data.userTypes.filter(element => {
                if (element.id == 5 || element.id == 6 )
                  return element;
              });
        }else{
          this.userTypeList = this.mainministryArry;
        }
        console.log(this.userTypeList)
        this.localBodyList = value.data.districts;
        this.banks = value.data.banks;
        this.modulesList = value.data.modules;
        this.roleList = value.data.roles;
        this.members = value.data.members;
        this.warehouses = value.data.warehouses;
        this.roleAllList = value.data.roles;
        this.rcAgencyList = value.data.rcAgencies;
        this.provinces = value.data.provinces;
        this.provincemainarray = value.data.provinces;


        // this.provinces = value.data.provinces;
        this.provincefilter = this.provinces;

      },
        error => {
          console.log(error);
        });
  }
  getbyUserId(Id) {
    console.log(Id);
    this.userservice.getByIduser(Id)
      .subscribe(data => {
        console.log(data)
        this.userdetail = data.data.user;
        this.buildForm();
        this.selectministry({ value: this.userdetail.provinceId });

      }, error => {
        console.log(error)
      });
  }
  get userFormControl() {
    return this.userForm.controls;
  }
  Cancel() {
    this.userForm.reset();
    this._location.back();
  }

  Update() {
    console.log(this.userForm.value);
    this.userservice.update(this.userForm.value)
      .subscribe((data: any) => {
        console.log(data)
        this.alertify.Success(data.message);
        this.router.navigate(['/security/user/list'])
      }, error => {
        this.alertify.Error(error.message);
        console.log(error)
      });
  }

  compare(c1: { name: string }, c2: { name: string }) {
    return c1 && c2 && c1.name === c2.name;
  }

  usertype(value) {
    this.provinces = this.provincefilter;

    this.usertypeId = value.value;

    // if (this.usertypeId == 3) {
    //   this.provinces = this.provinces.filter(item => {
    //     if (item.id === 0) {
    //       return item;
    //     }
    //   })

    // } else if (this.usertypeId == 4) {
    //   this.provinces = this.provinces.filter(item => {
    //     if (item.id !== 0) {
    //       return item;
    //     }
    //   })

    // } else {
    //   this.provinces = this.provincefilter;

    // }

    this.roleList = this.roleAllList.filter(item => {
      return item.userTypeId == this.usertypeId
    })
  }


}
