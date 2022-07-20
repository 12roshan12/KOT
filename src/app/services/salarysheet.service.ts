import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import { GenericApiService } from "./generic-api.service";
import { apiConfig } from "app/api-config";

@Injectable({
    providedIn:'root'
})
export class SalarysheetService extends GenericApiService<any>{
    constructor( _http: HttpClient,protected router: Router) {
        super(_http, apiConfig.API_CGAS_HRIS_SALARYSHEET,router)
    }


    public getAccounts(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getAccount', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public getActivites(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getActivities' , (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public postEmployeeList(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_HRIS_SALARYSHEET + '/getEmployees', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public postDeductionPayment(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_HRIS_SALARYSHEET + '/paymentDeduction', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }


    public getDeductionList(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_HRIS_SALARYSHEET + '/getDeductionReportByJV', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public getSelectedDeductionType(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_HRIS_SALARYSHEET + '/getSelectedDeductionType', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public generateJvSalaryVoucher(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/generateJvSalaryVoucher', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getSalarySummary(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_HRIS_SALARYSHEET + '/summary', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public getSalaryExcel(data): Observable<any> {
      return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_HRIS_SALARYSHEET + '/summary', (data), {headers: this.getHttpHeaders()})
          .pipe(
              catchError((error) => this.handleError(error))
          );
  }


    //
    public getInvalidEmpList(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ 'hris/report/getInvalidEmployees', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    printBill(data):Observable<any>{
        let errorMessage;
        return this.http.post(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV+ '/print', data,{observe: "response", responseType: "blob" } ).pipe(
            catchError((error) =>{

                const blb    = new Blob([error.error], {type: "application/json"});
                console.log(errorMessage, "message");
                return this.handleError(blb);
            } )
        );
    }

}
