import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { TranslocoService } from "@ngneat/transloco";
import { AuthService } from "app/core/auth/auth.service";


@Component({
    selector: 'trimester',
    templateUrl: './ministry.component.html',

})
export class MinistryComponent implements OnInit {
    ministryForm: FormGroup;
    Provinces: any;
    filteredProvinces: any;
    Ministry: any;
    filteredMinistry: any;
    provinceId: number;
    ministryId: any;
    activeLang:any
    fiscalYears: any;
    rolesType: any;
    username: string;

    constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<MinistryComponent>,private _authService: AuthService,private _translocoService: TranslocoService,private _changeDetectorRef: ChangeDetectorRef,) {

             
    }
    ngOnInit(): void {

        this.getFiscalyear()
        this.provinceId = Number(sessionStorage.getItem('provinceId'));
        this._translocoService.langChanges$.subscribe((activeLang) => {

            // Get the active lang
            this.activeLang = activeLang;

            this._changeDetectorRef.markForCheck();
            // Update the navigation
            // this._updateNavigation(activeLang);
        });
        this.ministryForm = this.fb.group({
            budYear:['',Validators.required],
           ministryId:[sessionStorage.getItem('ministryId') ? sessionStorage.getItem('ministryId') : "" ,Validators.required],
           provinceId:[sessionStorage.getItem('provinceId') ? sessionStorage.getItem('provinceId') :'',Validators.required]
        })
        
        this.ministryForm.get('budYear').setValue(sessionStorage.getItem('fiscalYear') ? sessionStorage.getItem('fiscalYear') : "");
        this.selectfiscal();     
        console.log(this.ministryForm.controls.ministryId.value);
        this.selectprovince()
        
        

    }   

    close(){
        this.dialogRef.close()
    }

    save(){
        sessionStorage.setItem('ministryId',this.ministryForm.controls.ministryId.value)
        sessionStorage.setItem('provinceId',this.ministryForm.controls.provinceId.value)
        sessionStorage.setItem('fiscalYear',this.ministryForm.controls.budYear.value)
        this.dialogRef.close()
        window.location.reload();

    }

    selectfiscal(val?) {
        const formObject = <any>{};
        formObject.budYear = val ? val.value : sessionStorage.getItem('fiscalYear');
        this._authService.getProvince(formObject).subscribe(data => {
            
            var temp = Number(sessionStorage.getItem('userTypeId'))
            if ( temp == 1) {
                this.Provinces = data.data.provinces;
                this.filteredProvinces = this.Provinces.slice()
                console.log("a");                
            }
            else {
                if (this.ministryForm.get('provinceId').value == -1 || this.ministryForm.get('provinceId').value == '') {
                    this.Provinces = data.data.provinces;
                    console.log("b");
                    
                }
                else {                            
                    this.Provinces = data.data.provinces.filter((e: any) => {
                        console.log("c");                        
                        return e.code == this.ministryForm.get('provinceId').value
                    })
                    
                }
            }
        })

    }


    selectprovince(val?) {
        // this.dialogForm.get('agencyId').setValue(-1);
        // this.ministryForm.get('ministryId').setValue(-1);
        console.log(val);
        
        const formObject = <any>{};
        formObject.budYear = this.ministryForm.controls.budYear.value;
        formObject.provinceId = Number(val ? val.value : this.ministryForm.value.provinceId);
        console.log("triggered");

        this._authService.getMinistry(formObject).subscribe(data => {
            this.Ministry = data.data.ministries;
            if (this.ministryId != null) {
                this.Ministry = this.Ministry.filter(element => {
                    if (this.ministryId.toString() == element.code) {
                        return element;
                    }
                })
            }
            this.filteredMinistry = this.Ministry.slice();
            if (this.filteredMinistry.length == 1) {
                this.ministryForm.get('ministryId').setValue(this.ministryId.toString());

            }
        
        });
    }
    getFiscalyear() {
        this._authService.getFiscalYears().subscribe(data => {
            this.fiscalYears = data.data.budYears;
        });
    }

}