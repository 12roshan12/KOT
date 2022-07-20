import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { EncryptionService } from 'app/shared/services/encryption.service';

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private encrypt: EncryptionService,
        private ngZone: NgZone
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        sessionStorage.setItem('accessToken', this.encrypt.encryptionAES(token));
    }

    get accessToken(): string {
        return this.encrypt.decryptionAES(sessionStorage.getItem('accessToken') ?? '');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(body: any): Observable<any> {
        return this._httpClient.post(`${environment.Main_API}security/user/forgetPassword`, body);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { usernameOrEmail: string; password: string }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post(environment.Main_API + 'auth/login', credentials).pipe(
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                // this._userService.user = response.user;

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Renew token
        return this._httpClient.post('api/auth/refresh-access-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        // Remove the access token from the local storage
        sessionStorage.removeItem('accessToken');
        sessionStorage.clear();
        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any> {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }
    getLastAction() {
        return localStorage.getItem('lastAction');
    }
    lastAction(value) {
        localStorage.setItem('lastAction', JSON.stringify(value))
      }
    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
       
     
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        // Check the access token expire date
        // if (AuthUtils.isTokenExpired(this.accessToken)) {
        //     return of(false);
        // }

        // If the access token exists and it didn't expire, sign in using it
        // return this.signInUsingToken();
        return of(true);
    }


    getministry(data: any) {
        return this._httpClient
            .post<any>(environment.Main_API + `security/user/GetMinistries`, data)
            .pipe(

            );
    }
    getdepartment(data: any) {
        return this._httpClient
            .post<any>(environment.Main_API + `auth/GetDepartments`, data)
            .pipe(

            );
    }
    ChangePassword(data: any) {
        return this._httpClient
            .post<any>(environment.Main_API + `security/user/changepassword`, data)
            .pipe(
            );
    }

    getFiscalYears() {
        return this._httpClient.get<any>(environment.Main_API + `auth/login`);
    }

    getProvince(data) {
        return this._httpClient.post<any>(environment.Main_API + `resources/getProvinces `, data);
    }
    getMinistry(data) {
        return this._httpClient.post<any>(environment.Main_API + `resources/getReportDialogData `, data);
    }
    getAgency(data) {
        return this._httpClient.post<any>(environment.Main_API + `resources/getAgencies `, data);
    }

    getDepartment(data) {
        return this._httpClient.post<any>(environment.Main_API + `resources/getDepartments`, data);
    }

    findAll(): Observable<any> {
        return this._httpClient.get<any>(environment.Main_API + 'resources/index')
            .pipe(

            );
    }

    checkOtp(data) {
        return this._httpClient.post<any>(environment.Main_API + `security/user/resetPassword`, data);
    }

    getChartData(data){
        return this._httpClient.post<any>(environment.Main_API +`resources/getCharts`, data)
    }

    getMinistryData(data) {
        return this._httpClient.post<any>(environment.Main_API + `resources/getReportDialogData `, data);
    }
}
