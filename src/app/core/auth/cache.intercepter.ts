// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpRequest, HttpInterceptor, HttpHandler } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize, shareReplay } from 'rxjs/operators';


// // @Injectable()
// // export class CacheInterceptor implements HttpInterceptor {

// //   constructor(private cache: HttpRequestCache) {}

// //   public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// //     // processing only POST requests
// //     if (request.method !== 'POST') {
// //       return next.handle(request);
// //     }

// //     // if the request is not cached yet
// //     if (!this.cache.has(request)) {
// //       // we should create a new request
// //       const response = next.handle(request).pipe(
// //         // when the request is completed we should clean cache
// //         finalize(() => this.cache.delete(request)),
// //         // and don't forget to share the Observable between subscribers
// //         shareReplay({ refCount: true, bufferSize: 1 })
// //       );
// //       // after that we put the request into the cache
// //       this.cache.set(request, response);
// //     }

// //     return this.cache.get(request);
// //   }

// // }

// // @Injectable({ providedIn: 'root' })
// // export class HttpRequestCache {

// //   // Using the object gives more performance than a Map
// //   private readonly requests: Record<string, Observable<HttpEvent<any>>> = {};

// //   public has(request: HttpRequest<any>): boolean {
// //     return this.key(request) in this.requests;
// //   }  

// //   public get(request: HttpRequest<any>): Observable<HttpEvent<any>> {
// //     return this.requests[this.key(request)];
// //   }

// //   public set(request: HttpRequest<any>, response: Observable<HttpEvent<any>>): void {
// //     this.requests[this.key(request)] = response;
// //   }

// //   public delete(request: HttpRequest<any>): void {
// //     delete this.requests[this.key(request)];
// //   }

// //   private key(request: HttpRequest<any>): string {
// //     return [request.urlWithParams, request.responseType].join('#');
// //   }

// // }


// // import { Injectable } from '@angular/core';
// // import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';

// // import { startWith, tap } from 'rxjs/operators';
// // import { Observable, of } from 'rxjs';

// // import { RequestCache } from './cache.request';


// // @Injectable()
// // export class CachingInterceptor implements HttpInterceptor {
// //   constructor(private cache: RequestCache) {}

// //   intercept(req: HttpRequest<any>, next: HttpHandler) {
// //     const cachedResponse = this.cache.get(req);
// //     return cachedResponse ? Observable.of('cachedResponse'): this.sendRequest(req, next, this.cache)
// //   }

// //   sendRequest(
// //     req: HttpRequest<any>,
// //     next: HttpHandler,
// //     cache: RequestCache): Observable<HttpEvent<any>> {
// //     return next.handle(req).pipe(
// //       tap(event => {
// //         if (event instanceof HttpResponse) {
// //           cache.put(req, event);
// //         }
// //       })
// //     );
// //   }

// // }


import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import { EMPTY, Observable, of } from "rxjs";
import { filter, finalize, tap } from "rxjs/operators";
import { FuseLoadingService } from "@fuse/services/loading";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    inProgress: { [url: string]: boolean } = {};
    constructor(
        private _fuseLoadingService: FuseLoadingService
    ) {
        // Subscribe to the auto
    }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log(this.inProgress)

        if (req.url in this.inProgress) {
            // return next.handle(req).pipe(
            //     finalize(() => {
            //         // Set the status to false if there are any errors or the request is completed
            //         this._fuseLoadingService._setLoadingStatus(true, req.url);
            //     }));
            return EMPTY;
        }

        this.inProgress[req.url] = true;
        return next.handle(req).pipe(
            filter(v => v["type"] !== 0),
            tap(() => {
                delete this.inProgress[req.url];
            }, error => {
                delete this.inProgress[req.url];
            })
        );
    }
}
