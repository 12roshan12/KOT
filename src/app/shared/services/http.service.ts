import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { PendingService } from './pendingservice.service';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private pendingService: PendingService,
                private http: HttpClient) {
    }

    public get(url: string, options): Observable<any> {
        return this.pendingService.intercept(url, this.http.get(url, options).pipe(share()));
    }

    public post(url: string, body: any, options): Observable<any> {
        return this.pendingService.intercept(url, this.http.post(url, body, options)).pipe(share());
    }

    public put(url: string, body: any, options): Observable<any> {
        return this.pendingService.intercept(url, this.http.put(url, body, options)).pipe(share());
    }

    public delete(url: string, options): Observable<any> {
        return this.pendingService.intercept(url, this.http.delete(url, options)).pipe(share());
    }
    
}