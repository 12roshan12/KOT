import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root',
})
export class FunctionService {



    constructor(private http: HttpClient, private router: Router,) {
    }
    getAll() {
        return this.http.get<any[]>(`${environment.Main_API}/security/function/index`);
    }
    getvalueAll() {
        return this.http.get<any[]>(`${environment.Main_API}/security/function/loadValues`);
    }
    create(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}/security/function/create`, data)
            .pipe(
                map((user) => {
                })
            );
    }
    update(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}/security/function/edit`, data)
            .pipe(
                map((user) => {
                })
            );
    }
    createentity(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}/security/entity/create`, data)
            .pipe(
                map((user) => {

                })
            );
    }

    getByIdFunction(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}/security/function/getbyid/${id}`).pipe();
    }
    getByIdentity(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}/security/entity/getbyid/${id}`).pipe();
    }
    getResourcesById(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}/security/resources/index/${id}`).pipe();
    }
    delete(id: number) {
        return this.http.delete(`${environment.Main_API}/security/function/delete/${id}`);
    }
    edit(id: number, data: any): Observable<Object> {
        return this.http.put(`${environment.Main_API}/services/app/MenuItem/UpdateMenuItem?inputId=${id}`, data);
    }

}
