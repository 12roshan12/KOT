import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RoleService {

    constructor(private http: HttpClient, private router: Router,) {
    }
    getAll() {
        return this.http.get<any[]>(`${environment.Main_API}security/role/index`);
    }
    getvalueAll() {
        return this.http.get<any[]>(`${environment.Main_API}security/role/loadValues`);
    }
    create(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}security/role/create`, data)
            .pipe(
                map((user) => {
                })
            );
    }
    update(data: any) {
        return this.http
            .post<any>(`${environment.Main_API}security/role/edit`, data)
            .pipe(
                map((user) => {
                })
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

    getByIdrole(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}security/role/getById/${id}`).pipe();
    }
    getByIdentity(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}security/entity/getById/${id}`).pipe();
    }
    getResourcesById(id: any): Observable<any> {
        return this.http.get(`${environment.Main_API}security/resources/index/${id}`).pipe();
    }
    delete(id: number) {
        return this.http.delete(`${environment.Main_API}security/role/delete/${id}`);
    }

}
