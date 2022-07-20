import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(private http: HttpClient, private router: Router,) {
    }
    
    getAll(pNo: any,sortField?,sortDirection?,pageSize?): Observable<any> {
        return this.http.get(`${environment.Main_API}security/user/findAll?pageNo=${pNo}&&sortField=${sortField}&&sortDirection=${sortDirection}&&pageSize=${pageSize}`).pipe();
    }
    getvalueAll() {
        return this.http.get<any[]>(environment.Main_API+`security/user/loadValues`);
    }
    create(data: any) {
        return this.http
            .post<any>(environment.Main_API+`security/user/create`, data)
            .pipe(

            );
    }
    update(data: any) {
        return this.http
            .post<any>(environment.Main_API+`security/user/edit`, data)
            .pipe(

            );
    }
    createentity(data: any) {
        return this.http
            .post<any>(environment.Main_API+`security/entity/create`, data)
            .pipe(
                map((user) => {

                })
            );
    }

    getByIduser(id: any): Observable<any> {
        return this.http.get(environment.Main_API+`security/user/getById/${id}`).pipe();
    }
    getByIdentity(id: any): Observable<any> {
        return this.http.get(environment.Main_API+`security/entity/getbyid/${id}`).pipe();
    }
    getResourcesById(id: any): Observable<any> {
        return this.http.get(environment.Main_API+`security/resources/index/${id}`).pipe();
    }
    delete(id: number) {
        return this.http.delete(environment.Main_API+`security/user/delete/${id}`);
    }

}
