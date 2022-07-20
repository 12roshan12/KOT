import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GenericApiService} from "./generic-api.service";
import {apiConfig} from "../api-config";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class JournalVoucherService extends GenericApiService<any>{
    constructor( http: HttpClient,protected router: Router) {
        super(http, apiConfig.API_CGAS_ACCOUNT_TREASURY_JV,router)
    }
    public getAccounts(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getAccount', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getAgency(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getAgencies', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getrmisAgency(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getAgencies', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getPayee(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getPayee', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getDueBills(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_PAYMENT_BOOK + '/getBills', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public generatePayeeOrder(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/generatePaymentOrder', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getAdvances(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getAdvance', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getCommitmentList(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/getPayee', (data), {headers: this.getHttpHeaders()})
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

    public adjustment(data):Observable<any>{
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/adjustment', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    verifyNoPoJV(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_CGAS_ACCOUNT_TREASURY_JV + '/verifyNoPoJV', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
}
