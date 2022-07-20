
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { EMPTY, empty, Observable, throwError } from "rxjs";
import { catchError, delay, map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Injectable, Injector, ReflectiveInjector } from "@angular/core";
import { environment } from 'environments/environment';


export class GenericApiService<T>  {
    url: string;
    constructor(protected http: HttpClient, protected config: string, protected router: Router,) {
        this.url = config;
    }



    public findById(id: any): Observable<T> {
        return this.http.get<T>(environment.Main_API + this.url + '/getById/' + id)
            .pipe(
                delay(100),
                catchError((error) => this.handleError(error))
            );
    }

    public getById(id: any): Observable<T> {
        var data = { id: id }
        return this.http.post<T>(environment.Main_API + this.url + '/getbyid', data, { headers: this.getHttpHeaders() })
            .pipe(
                delay(100),
                catchError((error) => this.handleError(error))
            );
    }


    public findAll(): Observable<any> {
        return this.http.get<T[]>(environment.Main_API + this.url + '/index')
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    // API get
    public getAllList(params?): Observable<T[]> {
        return this.http.get<T[]>(environment.Main_API + this.url + '/getAll', { params: params })
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    // API get create
    public getIndexList(): Observable<any> {
        return this.http.get<T[]>(environment.Main_API + this.url + '/index')
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public searchIndexList(data): Observable<any> {
        return this.http.post<any>(environment.Main_API + this.url + '/index', data)
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    // API get create
    public getLoadValuesList(): Observable<any> {
        return this.http.get<T[]>(environment.Main_API + this.url + '/loadValues')
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public searchByCode(id): Observable<any> {
        return this.http.get<T[]>(environment.Main_API + this.url + '/code/' + id)
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    // API post create
    public post(data: T, checkMethod?): Observable<T> {
        var url;
        if (checkMethod == 'post') {
            url = '/create'
        } else {
            url = '/edit'
        }
        return this.http.post<T>(environment.Main_API + this.url + url, (data), { headers: this.getHttpHeaders() })
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public postData(data: T,): Observable<T> {

        return this.http.post<T>(environment.Main_API + this.url, (data), { headers: this.getHttpHeaders() })
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    public getByIdPost(data: T,): Observable<T> {

        return this.http.post<T>(environment.Main_API + this.url + '/getbyid', (data), { headers: this.getHttpHeaders() })
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }




    public delete(id): Observable<T> {
        var data = { id: id }
        return this.http.delete<T>(environment.Main_API + this.url + '/delete/' + id)
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public insert(data: T): Observable<T> {
        return this.http.post<T>(environment.Main_API + this.url, (data), { headers: this.getHttpHeaders() })
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public update(id: string, data: T): Observable<T> {
        return this.http.put<T>(environment.Main_API + this.url + '/' + id, (data), { headers: this.getHttpHeaders() })
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    getPdfReport(data): Observable<any> {
        return this.http.post(environment.Main_API + data.url, data, { observe: "response", responseType: "blob" }).pipe(
            catchError((error: HttpResponse<any>) => {

                // const blb    = new Blob([error], {type: "application/json"});

                return this.handleError(error);
            })
        );
    }

    /**
     * Get the common HttpHeaders
     */
    public getHttpHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return headers;
    }
    public getuploadFileHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('enctype', 'multipart/form-data');
        headers = headers.set('Accept', 'application/json');

        return headers;
    }
    public handleError(error: any) {

        if (error.status == 401) {
            this.router.navigate(["/sin-in"]);
        } else if (error.status == 403) {

            return EMPTY;


        }
        else {
            return throwError(error);
        }

    }

}