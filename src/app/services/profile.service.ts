import {Injectable} from "@angular/core";
import {GenericApiService} from "./generic-api.service";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs/index";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import { apiConfig } from "../api-config";

@Injectable({
  providedIn:'root'
})
export class ProfileService extends GenericApiService<any>{
    constructor( _http: HttpClient,protected router: Router) {
        super(_http, "resource",router)
    }
    public changeProfilePassword(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ 'security/user/changepassword'  , (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getWarehouseSelectList(): Observable<any> {
        return this.http.get<any>(apiConfig.API_URL+ 'warehouse/whresource/index',{headers: this.getHttpHeaders()} )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getProfileDetails(): Observable<any> {
        return this.http.get<any>(apiConfig.API_URL+ 'account/profile' , {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getNotice(): Observable<any> {
        return this.http.get<any>(apiConfig.API_URL+ 'notice' , {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public getTreasuryOffices(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ 'resource/getTreasuryOffice',data , {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getAgencies(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ 'resource/getAgencies' ,data, {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public gettsaAgencies(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ 'tsa/getAgencies' ,data, {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }


    public getAccountChart(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ 'resource/getAccountChart' ,data, {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getTotalChart(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ 'resource/getTotalChart' ,data, {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }


}
