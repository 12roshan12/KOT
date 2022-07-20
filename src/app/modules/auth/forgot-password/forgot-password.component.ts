import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';
import Validation from './validation';
import Swal from 'sweetalert2';
import SwiperCore, { A11y, Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

@Component({
    selector     : 'auth-forgot-password',
    templateUrl  : './forgot-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthForgotPasswordComponent implements OnInit
{
    @ViewChild('forgotPasswordNgForm') forgotPasswordNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    slides = [
        'assets/images/banner/banner.jpg',
        'assets/images/banner/fmis2.jpg',
        'assets/images/banner/banner2.jpg',
        'assets/images/banner/banner1.jpg',
        'assets/images/banner/banner11.jpg',
        'assets/images/banner/banner3.png',
        'assets/images/banner/banner4.png',
        'assets/images/banner/banner5.png',
        'assets/images/banner/banner6.jpeg',
        'assets/images/banner/banner7.jpg',
      ];
    forgotPasswordForm: FormGroup;
    showAlert: boolean = false;
    OTPForm: FormGroup;
    otpReceived:boolean = false
    

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private route:Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        
        // Create the form
        this.forgotPasswordForm = this._formBuilder.group({
            userName: ['', [Validators.required]],
            mobileNo: ['', [Validators.required , Validators.maxLength(10),Validators.minLength(10)]]
        });
        

        this.OTPForm = this._formBuilder.group({
            token: ['', [Validators.required]],
            password: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
            confirmPassword:['',[Validators.required]]

            
            // OTP: ['', [Validators.required]],
        },
        {
            validators: [Validation.match('password', 'confirmPassword')]
        }
      );

        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Send the reset link
     */
    sendResetLink(): void
    {
        // Return if the form is invalid
        if ( this.forgotPasswordForm.invalid )
        {
            return;
        }

        // Disable the form
        this.forgotPasswordForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Forgot password
        this._authService.forgotPassword(this.forgotPasswordForm.value)
            .pipe(
                finalize(() => {

                    // Re-enable the form
                    this.forgotPasswordForm.enable();

                    // Reset the form
                    // this.forgotPasswordNgForm.resetForm();

                    // Show the alert
                    this.showAlert = true;
                })
            )
            .subscribe(
                (response) => {
                    console.log(response);
                    

                    // Set the alert
                    this.alert = {
                        type   : 'success',
                        message: 'Password reset sent! You\'ll receive an OTP if you are registered on our system.'
                    };
                    this.otpReceived = true

                    

                },
                (response) => {
                    console.log(response);


                    // // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Mobile does not found! Are you sure you are already a member?'
                    };
                }
            );
    }

    sendOtp():void{
        if ( this.OTPForm.invalid )
        {
            return;
        }
        this.forgotPasswordForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Forgot password

        var temp = this.forgotPasswordForm.value 
        temp['token'] = this.OTPForm.controls.token.value;
        temp['password'] = this.OTPForm.controls.password.value

        console.log(temp);
        
        this._authService.checkOtp(temp)
            .pipe(
                finalize(() => {

                    // Re-enable the form
                    this.OTPForm.enable();

                    // Reset the form
                    this.OTPForm.reset();

                    // Show the alert
                    this.showAlert = true;
                })
            )
            .subscribe(
                (response) => {
                    console.log(response);
                    

                    // Set the alert
                    // this.alert = {
                    //     type   : 'success',
                    //     message: 'Password Changed'
                    // };

                    Swal.fire('Success','Password Changed Successfully','success')
                    this.OTPForm.reset();

                    this.route.navigate(['/sign-in'])
                    

                },
                (response) => {
                    console.log(response);


                    // // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Invalid OTP'
                    };
                }
            );
    }

    change(){
        this.otpReceived = !this.otpReceived
        this.showAlert = ! this.showAlert
    }
}
