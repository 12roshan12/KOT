import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable()
export class PendingService {

    private pending = new Map<string, Observable<any>>();

    public intercept(url: string, request): Observable<any> {
        const pendingRequestObservable = this.pending.get(url);
        return pendingRequestObservable ? pendingRequestObservable : this.sendRequest(url, request);
    }

    public sendRequest(url, request): Observable<any> {
        this.pending.set(url, request);
        return request.pipe(tap(() => {
            this.pending.delete(url);
        }));
    }
    
}