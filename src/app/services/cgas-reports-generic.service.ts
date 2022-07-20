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
export class CgasReportsGenericService extends GenericApiService<any>{
    constructor( http: HttpClient,protected router: Router) {
        super(http, "account",router)
    }

    downloadGenericService(data, url): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ url, data )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    loadValuesUrl(url){
        return this.http.get<any>(apiConfig.API_URL+ url )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    loadVoucherNoList(data, url): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ url, data )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

}
