import { ChangeDetectorRef, Component, OnInit, ViewChild, DoCheck, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { TranslocoService } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { SwiperComponent } from 'swiper/angular';
import { RSAHelper } from "../../../services/RSAHelper";
import Forge from "node-forge";
import { DatePipe } from '@angular/common';
import * as moment from 'moment'; 
import { environment } from 'environments/environment.prod';
import { MatInput } from '@angular/material/input';
import SwiperCore, { A11y, Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import { Location } from '@angular/common';


SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DatePipe]
})
export class AuthSignInComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;
  @ViewChild('formusername') nameInput: MatInput;

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  slidesMfmis = [
    'assets/images/banner/banner6.jpeg',
    'assets/images/banner/banner2.jpg',   
  ];
  slidesFmis = [
    'assets/images/banner/banner11.jpg',    
    'assets/images/banner/banner1.jpg',    
  ];
  signInForm: FormGroup;
  showAlert: boolean = false;
  fiscalYears: any;
  provinces: any;
  filteredList1: any;
  enddate: any;
  lastenddate: any;
  provincesName: any;
  ministries: any;
  filteredList2: any;
  ministryName: any;
  department: any;
  bannerImage: any;
  mfmis:boolean = false;
  usertype = [
    {
      code: 5,
      id: 5,
      edescription: 'Ministry User'

    },
    {
      code: 6,
      id: 6,
      edescription: 'Department User'

    }

  ];
  myDate: any
  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
    private _translocoService: TranslocoService,
    private datePipe: DatePipe,
    private loc: Location
  ) {
    this.bannerImage = environment.BannerLogo;
  }

  language: any;
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
   
    var swiper = environment.serverType
    if(swiper == 'FMIS')
    {
      this.mfmis = false
    }
    if(swiper == 'MFMIS')
    {
      this.mfmis = true
    }

    this.myDate = moment(new Date(Date.now())).format('YYYY.MM.DD');
    console.log(this.myDate);

    this._translocoService.langChanges$.subscribe((activeLang) => {

      // Get the active lang
      this.language = activeLang;


      this._changeDetectorRef.markForCheck();
      // Update the navigation
      // this._updateNavigation(activeLang);
    });



    //       let publicKey = `-----BEGIN RSA PUBLIC KEY-----
    // MIICCgKCAgEAjqk54qdOXEZpgL3uMPPjKU6ZGqxWnho0sf7/xTwfVAcOaBbdVgIG
    // 8VOoUJHs2WHMMMZ1rkK+LKaiTaWcWSBbDudzOffT0hgvjgsp8MOkO/247jZuz2Y2
    // YRwzngrYpJv1m7wqL8kNcBtp4KGvfvRUG4A2nhFBJzc9tIFbKlua6yJEOcis3FNA
    // knNH2UafR57y/bVsKQBOnG+x90pfA64OdZADVEbxHxmrB8TCyQQ0fxqb22/7txmA
    // /lEb/KxaRljpA9nELBkEcudcKp21aUL4X/cgegZuee7/9oC7J3nkBtEVZLuhC0o2
    // FlF3w3w1R6Dw9mHYEdpDFkMqNkUlHQysidp874aGGZ+wlz7kLdjhClRAYBugMQj6
    // lMWTe45kxfIMl3rLPq1lZJkvFNSA0IUCeUUIY9emwUetP/Z+hudjY3hhHacYiCvN
    // lu9j9Jw9QycoxeXcjpJK6u9MZoISeRSXYH678JJFnsb35n/fENfA68IHSdK0JQEQ
    // YPPxOy0cA2majEQNOTiXVOR4lgVgu0MOE7iI/E8kV3M2WzFNnEwpVDBOUx3yozXg
    // qa/OKRxYzC7cnLsyzuBscaSTqAuOBmowDr51SvhRCfO6TM125tGYaPgpOC7ODYGv
    // 8q8YfFLPJrJ+Pgt1INvvnYsqaFCjk9YpPXE3daeDNyAj7ScQesxpMusCAwEAAQ==
    // -----END RSA PUBLIC KEY-----`;

    //       const rsa = Forge.pki.publicKeyFromPem(publicKey);
    //       let _u=window.btoa(rsa.encrypt("admin"));
    //       let _p=window.btoa(rsa.encrypt("P@ssw0rd"));
    //       let _t=window.btoa(rsa.encrypt("123"));



    // Create the form
    this._authService.signOut();
    this.signInForm = this._formBuilder.group({
      usernameOrEmail: ['', [Validators.required]],
      password: ['', Validators.required],
      authToken: [this.myDate],

      fiscalYear: [
        '', Validators.required

      ]
    });



    this._authService.getFiscalYears().subscribe((data) => {
      this.fiscalYears = data.data.budYears;
      this.provinces = data.data.provinces;
       this.signInForm.get('fiscalYear').setValue(this.fiscalYears[0].code ? this.fiscalYears[0].code : "");
        sessionStorage.setItem(
            'fiscalYear',
            this.fiscalYears[0].code
        );
    });


  }

  ngAfterViewInit() {
    this.nameInput.focus();
  }

  


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
  signIn(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    // Disable the form
    this.signInForm.disable();

    // Hide the alert
    this.showAlert = false;


    //       let publicKey = `-----BEGIN PUBLIC KEY-----
    // MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCEKfugJmnCR4hvQdF59dOUKyW/
    // 5TpNcN1p2dNqtDbEYM9od3/K0MmnN4wk5IGnkaejT1BISRjAIQ7LVUorr/c0UoPQ
    // AWdAXsX12DYxZIpaAQ/J+GMOHXNTcT3bWmZuZXUoR+usP1rlwYwlsimuPmdCXpNn
    // IZGLTEVLs5rFeafNbQIDAQAB
    // -----END PUBLIC KEY-----
    // `;
    //
    //       const rsa = Forge.pki.publicKeyFromPem(publicKey);
    //       let _u=window.btoa(rsa.encrypt("admin"));
    //       let _p=window.btoa(rsa.encrypt("P@ssw0rd"));


    // Sign in
    let publicKey = `-----BEGIN RSA PUBLIC KEY-----
      MIICCgKCAgEAjqk54qdOXEZpgL3uMPPjKU6ZGqxWnho0sf7/xTwfVAcOaBbdVgIG
      8VOoUJHs2WHMMMZ1rkK+LKaiTaWcWSBbDudzOffT0hgvjgsp8MOkO/247jZuz2Y2
      YRwzngrYpJv1m7wqL8kNcBtp4KGvfvRUG4A2nhFBJzc9tIFbKlua6yJEOcis3FNA
      knNH2UafR57y/bVsKQBOnG+x90pfA64OdZADVEbxHxmrB8TCyQQ0fxqb22/7txmA
      /lEb/KxaRljpA9nELBkEcudcKp21aUL4X/cgegZuee7/9oC7J3nkBtEVZLuhC0o2
      FlF3w3w1R6Dw9mHYEdpDFkMqNkUlHQysidp874aGGZ+wlz7kLdjhClRAYBugMQj6
      lMWTe45kxfIMl3rLPq1lZJkvFNSA0IUCeUUIY9emwUetP/Z+hudjY3hhHacYiCvN
      lu9j9Jw9QycoxeXcjpJK6u9MZoISeRSXYH678JJFnsb35n/fENfA68IHSdK0JQEQ
      YPPxOy0cA2majEQNOTiXVOR4lgVgu0MOE7iI/E8kV3M2WzFNnEwpVDBOUx3yozXg
      qa/OKRxYzC7cnLsyzuBscaSTqAuOBmowDr51SvhRCfO6TM125tGYaPgpOC7ODYGv
      8q8YfFLPJrJ+Pgt1INvvnYsqaFCjk9YpPXE3daeDNyAj7ScQesxpMusCAwEAAQ==
      -----END RSA PUBLIC KEY-----`;

    const rsa = Forge.pki.publicKeyFromPem(publicKey);

    let _u = window.btoa(rsa.encrypt(this.signInForm.controls.usernameOrEmail.value));
    let _p = window.btoa(rsa.encrypt(this.signInForm.controls.password.value));
    let _t = window.btoa(rsa.encrypt(this.signInForm.controls.authToken.value));

    const temp = this.signInForm.value

    temp.usernameOrEmail = _u
    temp.password = _p
    temp.authToken = _t

    console.log(temp);

    this._authService.signIn(temp)
      .subscribe(
        (e) => {
          this._authService.findAll().subscribe(
            (result) => {

              const now = Date.now();
              sessionStorage.setItem('fiscalYear',this.signInForm.controls.fiscalYear.value)
              this._authService.lastAction(now);
              sessionStorage.setItem(
                'monthId',
                result.data.monthId
              );
              sessionStorage.setItem('AmountDigit', '1')
              sessionStorage.setItem(
                'defaultDate',
                result.data.defaultDate
              );
              sessionStorage.setItem('ministryId',result.data.user.ministryId)
              sessionStorage.setItem(
                'roles',
                JSON.stringify(result.data.roles)
              );
              sessionStorage.setItem(
                'user',
                JSON.stringify(result.data.user)
              );
              sessionStorage.setItem(
                'provinceId',
                JSON.stringify(result.data.user.provinceId)
              );
              sessionStorage.setItem(
                'userTypeId',
                JSON.stringify(result.data.user.userTypeId
                )
              );
              sessionStorage.setItem(
                'username',
                result.data.user.username
              );
              sessionStorage.setItem(
                'items',
                JSON.stringify(result.data.items)
              );
              sessionStorage.setItem(
                'modules',
                JSON.stringify(result.data.modules)
              );

              if (result.data.notices.length > 0) {
                sessionStorage.setItem('newsletter', '0');
              }
              sessionStorage.setItem('newslist', JSON.stringify(result.data.notices));
              sessionStorage.setItem('syncStatus', JSON.stringify(result.data.synchStatus));
              // Set the redirect url.
              // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
              // to the correct page after a successful sign in. This way, that url can be set via
              // routing file and we don't have to touch here.
              const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

              // Navigate to the redirect url
              this._router.navigateByUrl(redirectURL);

            }
          );

          // console.log(e)
          // sessionStorage.setItem("username", e.user.name)





        },
        (response) => {

          // Re-enable the form
          this.signInForm.enable();

          // Reset the form




          // Set the alert
          this.alert = {
            type: 'error',
            message: 'Wrong email or password'
          };

          // Show the alert
          this.showAlert = true;

        }
      );
  }


  selectfiscal(val) {
    sessionStorage.setItem(
      'fiscalYear',
      val.value
    );
  }
  selectministry(provinces?) {
    console.log(provinces);
    if (provinces) {
      this.provincesName = this.provinces.find(value => value.id === provinces.value);
      this.signInForm.get('provinceId').setValue(provinces.value);
      sessionStorage.setItem(
        'provincesName',
        this.provincesName.ndescription
      );
    } else {
      this.provincesName = this.provinces.find((value) => {
        if (this.signInForm.value.provinceId) {
          value.id === this.signInForm.value.provinceId;
          sessionStorage.setItem(
            'provincesName',
            this.provincesName.ndescription
          );
        }

      }
      );

    }



    const formObject = <any>{};


    formObject.provinceId = this.signInForm.value.provinceId;
    formObject.fiscalyearId = this.signInForm.value.fiscalYear;
    console.log(formObject);
    this._authService.getministry(formObject).subscribe((data: any) => {
      this.ministries = data.data.ministries;
      this.filteredList2 = this.ministries.slice();
    });


  }
  selectdepartment(ministryId?) {
    if (ministryId) {
      this.ministryName = this.ministries.find(value =>


        value.code === ministryId?.value

      );
      console.log(this.ministryName);
      this.signInForm.get('ministryId').setValue(ministryId.value);
      sessionStorage.setItem(
        'ministryName',
        this.ministryName.ndescription
      );
    } else {
      if (this.signInForm.value.ministryId) {
        this.ministryName = this.ministries.find((value) => {
          if (this.signInForm.value.ministryId) {
            value.code === this.signInForm.value.ministryId;
            sessionStorage.setItem(
              'ministryName',
              this.ministryName.ndescription
            );
          }

        }
        );
      }


    }




    console.log(this.ministryName);
    const formObject = <any>{};
    formObject.ministryId = Number(ministryId?.value);
    formObject.provinceId = this.signInForm.value.provinceId;
    formObject.fiscalyearId = this.signInForm.value.fiscalYear;
    console.log(formObject);
    this._authService.getdepartment(formObject).subscribe((data: any) => {
      this.department = data.data.departments;

    });

  }



  selectusertype(usertype) {
    if (usertype.value === 6) {
      this.signInForm.controls['departmentId'].setValidators([Validators.required]);
    } else {
      this.signInForm.controls['departmentId'].clearValidators();
      this.signInForm.get('departmentId').setValue('');
    }
    this.signInForm.controls['departmentId'].updateValueAndValidity();
  }

  get f() {
    return this.signInForm.controls;
  }



}
