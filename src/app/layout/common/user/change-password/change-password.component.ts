import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { CustomvalidationService } from 'app/shared/Customvalidation.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmedValidator } from './confirm.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild("passMin", { static: true }) passMin: any;
  @ViewChild("passMax", { static: true }) passMax: any;
  @ViewChild("passUpper", { static: true }) passUpper: any;
  @ViewChild("passLower", { static: true }) passLower: any;
  @ViewChild("passNum", { static: true }) passNum: any;
  @ViewChild("passChar", { static: true }) passChar: any;
  @ViewChild("allowPassUserName") allowPassUserName: any;
  passMinboolean: boolean;
  passMaxboolean: boolean;
  upperBoolean: boolean;
  lowerBoolean: boolean;
  numBoolean: boolean;
  specialBoolean: boolean;
  hideUpper: boolean = false;
  hideNum: boolean = false;
  changeColor: any;
  changePasswordForm: any;
  passwordvalidator: any;
  emailId: any;

  alert: { type: FuseAlertType; message: string }
  showAlert: boolean = false;
  constructor(private customValidator: CustomvalidationService, private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router, private dialogRef: MatDialogRef<ChangePasswordComponent>) {




  }

  ngOnInit(): void {

    // this.getEmail();
    this.emailId = sessionStorage.getItem('email');
    console.log(this.emailId)
    this.changePasswordForm = this._formBuilder.group({
      // email: [sessionStorage.getItem('email') ? sessionStorage.getItem('email') : ''],
      password: ['', Validators.required],
      oldPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: ConfirmedValidator('password', 'confirmPassword')
      });
  }
  countUpperCaseChars(str) {
    if (str) {
      var count = 1, len = str.length, smallcount = 1;
      var countNum = 1;
      for (var i = 0; i < len; i++) {
        if (/[A-Z]/.test(str.charAt(i))) count++;
        if (/[a-z]/.test(str.charAt(i))) smallcount++;
        if (/[0-9]/.test(str.charAt(i))) countNum++;
      }
      var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      if (str.match(format)) {
        this.specialBoolean = true;
        this.passChar.nativeElement.setAttribute("style", "color:green");
      } else {
        this.specialBoolean = false;
        this.passChar.nativeElement.setAttribute("style", "color:red");
      }
      if (count > 1) {
        this.upperBoolean = true;
        this.passUpper.nativeElement.setAttribute("style", "color:green");
      } else {
        this.upperBoolean = false;
        this.passUpper.nativeElement.setAttribute("style", "color:red");
      }
      if (smallcount > 1) {
        this.lowerBoolean = true;
        this.passUpper.nativeElement.setAttribute("style", "color:green");
      } else {
        this.lowerBoolean = false;
        this.passUpper.nativeElement.setAttribute("style", "color:red");
      }


      if (countNum > 1) {
        this.numBoolean = true;
        this.passNum.nativeElement.setAttribute("style", "color:green");
      } else {
        this.numBoolean = false;
        this.passNum.nativeElement.setAttribute("style", "color:red");
      }
    }
  }
  validationCheck(value) {
    this.changeColor = this.passMin.nativeElement;
    this.countUpperCaseChars(value);
    if (value.length >= 16) {
      this.changeColor.setAttribute("style", "color:green");
      this.passMaxboolean = true;
      this.passMax.nativeElement.setAttribute("style", "color:green");

    } else {
      this.passMaxboolean = false;
      this.changeColor.setAttribute("style", "color:red");
      this.passMax.nativeElement.setAttribute("style", "color:red");
    }
    if (value.length >= 6) {
      this.changeColor.setAttribute("style", "color:green");
      this.passMinboolean = true;
      this.passMax.nativeElement.setAttribute("style", "color:green");

    } else {
      this.passMinboolean = false;
      this.changeColor.setAttribute("style", "color:red");
      this.passMax.nativeElement.setAttribute("style", "color:red");
    }
  }

  createForm(): void {

    // this.changePasswordForm = new FormGroup({
    //   usernameOrEmail: new FormControl(''),
    //   oldPassword: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required),
    //   confirmPassword: new FormControl('', Validators.required),
    // },

    // );
  }

  get userFormControl() {
    return this.changePasswordForm.controls;
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  // getEmail(){
  //   this._authService.getEmail().subscribe(data =>{
  //     this.changePasswordForm.email = data.email
  //     console.log(this.changePasswordForm.email );

  //   })

  // }

  Submit() {
    this.showAlert = false;

    this.changePasswordForm.markAllAsTouched()
    if (this.changePasswordForm.invalid) {
      return
    }


    if (this.passMinboolean && this.upperBoolean && this.lowerBoolean && this.numBoolean && this.specialBoolean) {
      this._authService.ChangePassword(this.changePasswordForm.value)
        .subscribe((data: any) => {
          console.log(data);
          // this.dialogRef.close();
          this.showAlert = true
          this.alert = {
            type: 'success',
            message: 'Your password has been reset.'
          };
          this.toastr.success('Your password has been reset.');
          this.dialogRef.close()

        }, (error) => {
          this.showAlert = true
          this.alert = {
            type: 'error',
            message: error.error.message
          };
        }
        );

    } else {
      this.showAlert = true
      this.alert = {
        type: 'error',
        message: 'Password requirement doesnot match'
      };

      // Show the alert
      // this.showAlert = true;
      // this.alertify.Error('Password Invalid')
    }
  }

}

