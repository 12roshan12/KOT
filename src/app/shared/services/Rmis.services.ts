import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import { apiConfig } from "app/api-config";
import { GenericApiService } from "./generic-api.service";

@Injectable({
    providedIn:'root'
})
export class RmisService extends GenericApiService<any>{
    constructor( http: HttpClient,protected router: Router) {
        super(http, apiConfig.API_RMIS_AGENCY,router)
    }
 
   
    public getrmisAgency(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_RMIS_AGENCY + '/getAgencies', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getrmisbank(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ apiConfig.API_RMIS_AGENCY + '/getBanks', (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getAllrmisbank(): Observable<any> {
        return this.http.get<any>(apiConfig.API_URL+ apiConfig.API_RMIS_AGENCY + '/getAllBanks', {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
   
}
