import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../User.service';

import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { AlertifyService } from 'app/services/alertify.service';
import { LanguageService } from 'app/services/language.service';
import { CustomvalidationService } from 'app/shared/Customvalidation.service';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  userTypeList: any;
  localBodyList: any;
  banks: any;
  modulesList: any;
  roleList: any;
  members: any;
  warehouses: any;
  roleAllList: any;
  rcAgencyList: any;
  passwordvalidator: (formGroup: FormGroup) => any;
  agencyId: any;
  hide = true;
  currentLang = 'np';
  languagesup: any;
  provinces: any;
  Nfiscalyear: string;
  ministries: any;
  filteredList2: any;
  usertypeId: any;
  provincefilter: any;
  role: any;
  roleid: any;
  mainministryArry: any;
  provincemainarray: any;
  provinceId: number;
  userDetail: any;
  userTypeId: number;
  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public userservice: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private _location: Location,
    private alertify: AlertifyService,
    private authService: AuthService,
    private customValidator: CustomvalidationService,
    private languageService: LanguageService, public translate: TranslateService,
    private _formBuilder: FormBuilder) {
    this.userDetail = sessionStorage.getItem('user');
  }

  ngOnInit(): void {
    if (localStorage.getItem('lang')) {
      this.currentLang = localStorage.getItem('lang');
    } else {
      this.languageService.setLanguage(this.currentLang);
    }
    this.languagesup = this.languageService.currentLanguage.subscribe((lang: any) => {
      this.currentLang = lang;
    });
    this.role = JSON.parse(sessionStorage.getItem('roles'));
    console.log(this.role);
    this.roleid = this.role[0].id;
    this.provinceId = Number(sessionStorage.getItem('provinceId'));
    this.userTypeId = Number(sessionStorage.getItem('userTypeId'));
    console.log(this.roleid)
    this.createForm();
    this.loadvalues();
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
  get userFormControl() {
    return this.userForm.controls;
  }
  Submit() {
    this.userservice.create(this.userForm.value)
      .subscribe((data: any) => {
        this.alertify.Success(data.message);
        this.router.navigate(['/security/user/list'])
      }, error => {
        this.alertify.Error(error.message);
      });

  }

  selectministry(provinces?) {
    this.Nfiscalyear = sessionStorage.getItem('fiscalYear');
    const formObject = <any>{};
    if (provinces)
      this.userForm.get('provinceId').setValue(provinces.value);
    formObject.provinceId = this.userForm.value.provinceId;
    formObject.budYear = this.Nfiscalyear;

    
    this.authService.getMinistryData(formObject).subscribe((data: any) => {
      this.ministries = data.data.ministries;
      this.filteredList2 = this.ministries.slice();
    });
  }
  Cancel() {
    this.userForm.reset();
    // this._location.back();
    this.router.navigateByUrl['security/user/list']
  }

  loadvalues() {
    this.userservice.getvalueAll()
      .subscribe((value: any) => {
        //this.countries = value
        this.mainministryArry = value.data.userTypes;

        this.userTypeList = this.mainministryArry;
        // if (this.provinceId != -1) {
        //   this.userTypeList =value.data.userTypes.filter(element => {
        //     if (element.id == this.userTypeId)
        //       return element;
        //   });
        // } else {
        //   this.userTypeList = this.mainministryArry;
          
        // }
        if(this.roleid == 301){
          this.userTypeList =value.data.userTypes.filter(element => {
                if (element.id == 5 || element.id == 6 )
                  return element;
              });
        }else{
          this.userTypeList = this.mainministryArry;
        }
        this.localBodyList = value.data.districts;
        this.banks = value.data.banks;
        this.modulesList = value.data.modules;
        this.roleList = value.data.roles;
        this.members = value.data.members;
        this.warehouses = value.data.warehouses;
        this.roleAllList = value.data.roles;
        this.rcAgencyList = value.data.rcAgencies;
        this.provincemainarray = value.data.provinces;
        // this.provinces = value.data.provinces;
        
        if (this.provinceId == -1) {
          this.provinces = value.data.provinces;
        } else {
          this.provinces = value.data.provinces.filter(element => {
            if (element.code == this.provinceId.toString())
              return element;
          });
        }
        // this.provinces = value.data.provinces;
        this.provincefilter = this.provinces;

      },
        error => {
          console.log(error);
        });
  }

  getRoles(value) {
    console.log(value);

  }
  usertype(value) {

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
