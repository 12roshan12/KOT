import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root',
})
export class MenuService {



    constructor(private http: HttpClient, private router: Router,) {

    }
    getAll(pNo: any,sortField?,sortDirection?,pageSize?): Observable<any> {
        return this.http.get(`${environment.Main_API}security/menu/index?pageNo=${pNo}&&sortField=${sortField}&&sortDirection=${sortDirection}&&pageSize=${pageSize}`).pipe();
    }
    // getAll() {
      
    //     // const myObject: any = {
    //     //     dom: "ltip",
    //     //     colReorder: true,
    //     //     processing: true,
    //     //     serverSide: true,
    //     //     searching: { "regex": true },
    //     //     searchable: true,
    //     //     search: { "regex": true },
    //     //     ordering: true,
    //     //     paging: true,
    //     //     "pageLength": 50,
    //     // };
    //     // const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

    //     // const options = { params: new HttpParams(httpParams) };
    //     return this.http.get<any[]>(`${environment.Main_API}security/menu/index`);
    // }
    getvalueAll() {
        return this.http.get<any[]>(`${environment.Main_API}security/menu/loadValues`);
    }
    create(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}security/menu/create`, data)
            .pipe(
                
            );
    }
    update(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}security/menu/edit`, data)
            .pipe(
               
            );
    }
    createentity(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}security/entity/create`, data)
            .pipe(
                map((user) => {

                })
            );
    }

    getById(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}security/menu/getById/${id}`).pipe();
    }
    getByIdentity(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}security/entity/getById/${id}`).pipe();
    }
    getResourcesById(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}security/resources/index/${id}`).pipe();
    }
    delete(id: number) {
        return this.http.delete(`${environment.Main_API}security/menu/delete/${id}`);
    }
    edit(id: number, data: any): Observable<Object> {
        return this.http.put(`${environment.Main_API}services/app/MenuItem/UpdateMenuItem?inputId=${id}`, data);
    }

}
