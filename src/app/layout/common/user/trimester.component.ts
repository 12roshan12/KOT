import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { TranslocoService } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'trimester',
    templateUrl: './trimester.component.html',

})
export class TrimesterComponent implements OnInit {

    trimester: any
    trimesterForm: FormGroup

    trimesterValue = sessionStorage.getItem('trimester')

    trimesterPeriod = [
        { "Trimesterid": "6", "nvalue": "पहिलो त्रैमासिक", "evalue": "1st Trimester" },
        { "Trimesterid": "9", "nvalue": "दोस्रो त्रैमासिक", "evalue": "2nd Trimester" },
        { "Trimesterid": "12", "nvalue": "तेस्रो त्रैमासिक", "evalue": "3rd Trimester" },
        { "Trimesterid": "3", "nvalue": "वार्षिक", "evalue": "Annual" },
    ]
    AmountDigit = [
        { id: 1, evalue: '-| RS.', nvalue: '-। रु' },
        { id: 10, evalue: '0| TEN ', nvalue: '0। रु. दसमा' },
        { id: 100, evalue: '00| HUNDRED', nvalue: '00। रु. सयमा ' },
        { id: 1000, evalue: '000| THOUSAND', nvalue: '000। रु. हजारमा ' },
        { id: 100000, evalue: '00000| LAKH', nvalue: '00000। रु. लाखमा ' },
        { id: 1000000, evalue: '0000000| TEN LAKH', nvalue: '000000। रु. दसलाखमा  ' },
        { id: 10000000, evalue: '00000000| CRORE', nvalue: '0000000। रु. करोडमा ' },
        { id: 100000000, evalue: '000000000| TEN CRORE', nvalue: '00000000। रु. दसकरोडमा ' },
        { id: 1000000000, evalue: '0000000000| ARAB', nvalue: '000000000। रु. दसअरबमा  ' },
        { id: 10000000000, evalue: '00000000000| TEN ARAB', nvalue: '0000000000। रु. दसअरबमा  ' },
    ]
    activeLang: string;
    fiscalYears: any;
    Provinces: any;
    filteredProvinces: any;
    annexprovinceId: any;
    fiscalyearId: any;

    constructor(private _authService: AuthService, private _translocoService: TranslocoService, private _changeDetectorRef: ChangeDetectorRef, private fb: FormBuilder, private dialogRef: MatDialogRef<TrimesterComponent>) {

    }

    ngOnInit(): void {
        const temp = sessionStorage.getItem('provinceId') ? sessionStorage.getItem('provinceId') : ''
        this.annexprovinceId = sessionStorage.getItem('annexprovinceId') ? sessionStorage.getItem('annexprovinceId') : temp

        // console.log(temp);
        // console.log(this.annexprovinceId);



        this.fiscalyearId = sessionStorage.getItem('fiscalYear');

        this._translocoService.langChanges$.subscribe((activeLang) => {


            this.activeLang = activeLang;

            this._changeDetectorRef.markForCheck();

        });

        this.trimesterForm = this.fb.group({
            trimester: [this.trimesterValue ? this.trimesterValue : ''],
            provinceId: [this.annexprovinceId ? this.annexprovinceId : ''],
            BudYearId: [this.fiscalyearId ? this.fiscalyearId : ''],
            AmountDigit: [Number(sessionStorage.getItem('AmountDigit')) ? Number(sessionStorage.getItem('AmountDigit')) : '']
        })
        // if (this.fiscalyearId !== null) {
        // }
        this.getFiscalyear();
        this.selectfiscal();




    }


    setTrimester(event) {

        sessionStorage.setItem('trimester', this.trimesterForm.controls.trimester.value)
    }

    amountchange(event) {
        sessionStorage.setItem('AmountDigit', this.trimesterForm.controls.AmountDigit.value)
    }

    close() {
        this.dialogRef.close(false)
    }
    getFiscalyear() {
        this._authService.getFiscalYears().subscribe(data => {
            this.fiscalYears = data.data.budYears;
        });
    }
    selectfiscal(val?) {
        const formObject = <any>{};
        formObject.budYear = sessionStorage.getItem('fiscalYear');
        // console.log(formObject.budYear);

        this._authService.getProvince(formObject).subscribe(data => {
            if ( Number(sessionStorage.getItem('userTypeId')) == 1) {
                this.Provinces = data.data.provinces;
                console.log("a");
                
            }
            else {
                if (this.trimesterForm.get('provinceId').value == -1 || this.trimesterForm.get('provinceId').value == '') {
                    this.Provinces = data.data.provinces;
                    console.log("b");
                    
                }
                else {
                    // alert(data.data.provinces);                
                    this.Provinces = data.data.provinces.filter((e: any) => {
                        console.log("c");                        
                        return e.code == this.trimesterForm.get('provinceId').value
                    })
                }
            }

        });

    }



    selectprovince(val) {
        const formObject = <any>{};
        sessionStorage.setItem('annexprovinceId', this.trimesterForm.value.provinceId)

    }

    save() {

        this.trimesterForm.markAllAsTouched()
        if (this.trimesterForm.invalid) {
            return
        }
        if (sessionStorage.getItem('userTypeId') == "1") {
            sessionStorage.setItem('provinceId',this.trimesterForm.value.provinceId)
        }

        sessionStorage.setItem('trimester', this.trimesterForm.controls.trimester.value);
        sessionStorage.setItem('annexprovinceId', (this.trimesterForm.value.provinceId));
        sessionStorage.setItem('fiscalYear', (this.trimesterForm.value.BudYearId));
        this.dialogRef.close(true)
        window.location.reload();
    }

}