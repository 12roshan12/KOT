import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import {
    FuseNavigationService,
    FuseVerticalNavigationComponent,
} from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { User } from 'app/core/user/user.types';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment.prod';
import * as moment from 'moment';
import { AuthService } from 'app/core/auth/auth.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'classy-layout',
    templateUrl: './classy.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean;
    navigation: Navigation;
    // user: User;
    user: any;
    roles: string;
    email: any;
    imagepath :any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    Role: any;
    updateList: any;
    provinceName: any = '';
    ministryName: any = '';
    departmentName: any = '';
    activeLang: any;
    fiscalYeardata: any = '';
 

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _userService: UserService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        private _authService : AuthService,
        private _translocoService: TranslocoService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {
        this.imagepath = environment.logoimage;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to navigation data

        this._translocoService.langChanges$.subscribe((activeLang) => {

            // Get the active lang
            this.activeLang = activeLang;

            this._changeDetectorRef.markForCheck();
            // Update the navigation
            // this._updateNavigation(activeLang);
        });

        const tempa = (sessionStorage.getItem('username')?sessionStorage.getItem('username'):'');
        // console.log(tempa);
        // tempa = tempa?.substring(1, tempa.length-1);
        this.user = tempa;
         let Role = JSON.parse(sessionStorage.getItem('roles'));
         this.Role = Role[0]
         let User = JSON.parse(sessionStorage.getItem('user'));
         var provinceId = User.provinceId;
         var ministryId = User.ministryId;
         var departmentId = User.departmentId
         console.log(departmentId)
         const formObject = <any>{};
         formObject.budYear = sessionStorage.getItem('fiscalYear');
         this._authService.getProvince(formObject).subscribe(data => {
             var provinceList = data.data.provinces
             this.provinceName = provinceList.filter((e: any) => {
                 if (provinceId == -1) {
                     return e.code == 0
                 }
                 else {
                     return e.code == provinceId
                 }
             })
            console.log(this.provinceName)
             this.provinceName = this.provinceName[0]
 
         })
         formObject.provinceId = provinceId == -1 ? 0 : provinceId

         this._authService.getMinistry(formObject).subscribe(data => {
            var ministryList = data.data.ministries
            this.ministryName = ministryList.filter((e:any)=>{
                return e.code == ministryId
            })
            console.log(this.ministryName)
            this.ministryName = this.ministryName[0]
         })

         formObject.ministryId = ministryId
         formObject.districtId = 0;
         formObject.departmentId = 0; 
         this._authService.getDepartment(formObject).subscribe(data => {
             var departmentList = data.data.departmetns
             console.log(departmentList)
            this.departmentName = departmentList.filter((e:any)=>{
                return e.code == departmentId
            })
            console.log(this.departmentName)
            this.departmentName = this.departmentName[0]

         })
         var fiscalYear = sessionStorage.getItem('fiscalYear')

         this._authService.getFiscalYears().subscribe((data) => {
            var fiscalYearList = data.data.budYears;
            this.fiscalYeardata = fiscalYearList.filter((e:any)=>{
                return e.code == fiscalYear 
            })
            this.fiscalYeardata = this.fiscalYeardata[0]
         })
        
        




        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });

        // Subscribe to the user service
        // this._userService.user$
        //     .pipe((takeUntil(this._unsubscribeAll)))
        //     .subscribe((user: User) => {
        //         this.user = user;
        //     });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name
            );

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    downloadPdf(){
        console.log("a");
        
        if(environment.serverType == 'FMIS')
        {
            window.open('assets/FMIS.pdf',"_blank")
        }
        else{
            window.open('assets/MFMIS.pdf',"_blank")

        }
    }
}
