import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, finalize, Observable, of, share, tap, throwError } from 'rxjs';
import { HttpService } from './shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  // headers = new HttpHeaders();

  constructor(public http: HttpClient, private httpService: HttpService) {
    // this.headers = this.headers.append('Accept','*/*;charset=utf-8')
  }




  // {headers: this.headers, observe: 'response', responseType: 'blob'}




  getPdf(body) {

    return this.http.post(`${environment.Main_API}reports/getReport`, body, { headers: { 'Content-Type': 'application/json' }, responseType: "blob" }).pipe(
      catchError((error) => throwError(error))
    )
  }

  //   getPdf(body) {
  //     return this.httpService.post(`${environment.Main_API}reports/getReport`, body, { headers: { 'Content-Type': 'application/json' }, responseType: "blob" }).pipe()
  // }
  private cache: any;
  private cachedObservable: Observable<any>;

  // ...

  // getPdf(body){
  //   let observable: Observable<any>;
  //   if (this.cache) {
  //     observable = of(this.cache);
  //   } else if (this.cachedObservable) {
  //     observable = this.cachedObservable;
  //   } else {
  //     this.cachedObservable = this.http.post<any>(`${environment.Main_API}reports/getReport`, body, { headers: { 'Content-Type': 'application/json' ,responseType: "blob"} })
  //       .pipe(
  //         tap(res => {
  //           console.log(res)
  //           this.cache = res}),
  //         share(),
  //         finalize(() => this.cachedObservable = null)
  //       );
  //     observable = this.cachedObservable;
  //   }
  //   console.log(observable)
  //   return observable;
  // }

  getDistrict() {
    return this.http.get(`${environment.Main_API}getDistrict`).pipe(
      
    )
  }



  getWord() {
    return this.http.get(environment.Main_API + ``).pipe(   catchError((error) => throwError(error)))
  }

  dialogData() {
    return this.http.get(environment.Main_API + `api/resources/getReportDialogData`).pipe()
  }

  esewa(data: any) {
    return this.http
      .post<any>('http://rc.esewa.com.np/epay/main', data)
      .pipe(

      );
  }
}