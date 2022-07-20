
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable, throwError} from "rxjs";

import {catchError, delay, map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Injectable, Injector} from "@angular/core";
// import {NotificationService} from "@app/core/services/notification.service";
// import {LoadingService} from "@app/core/services/loading.service";

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { apiConfig } from '../api-config';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

export class GenericApiService<T> {
     url: string;

    // static notificationService: NotificationService;
    // static  loadingService: LoadingService;
    constructor(protected http: HttpClient, protected config: string, protected router: Router,) {
        this.url = config;
        // if (!GenericApiService.notificationService){
        //     //try inject my api service which use the HttpClient
        //     const injector: any = Injector.create([{ provide: NotificationService, useClass: NotificationService, deps: [] }]);
        //     GenericApiService.notificationService = injector.get(NotificationService);
        // }

        // //try inject my api service which use the HttpClient
        // const injectorLoader: any = Injector.create([{ provide: LoadingService, useClass: LoadingService, deps: [] }]);
        // GenericApiService.loadingService = injectorLoader.get(LoadingService);
    }



    public findById(id: any): Observable<T> {
        console.log(id);
        return this.http.get<T>(apiConfig.API_URL + this.url + '/getById/' + id)
            .pipe(
                delay(100),
                catchError((error) => this.handleError(error))
            );
    }
    public printById(id: any): Observable<T> {
        return this.http.get<T>(apiConfig.API_URL + this.url + '/print/' + id)
            .pipe(
                delay(100),
                catchError((error) => this.handleError(error))
            );
    }

    public findAll(): Observable<any> {

        return this.http.get<T[]>(apiConfig.API_URL+ this.url +'/index' )
            .pipe(
               catchError((error) => this.handleError(error))
            );
    }
    getAll(): Observable<any> {
        return this.http.get<T[]>(apiConfig.API_URL+ this.url +'/all' )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    getPostAll(data): Observable<any> {
        return this.http.post<T[]>(apiConfig.API_URL+ this.url +'/all', data )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    // API get
    public getAllList(params?): Observable<any> {
        return this.http.get<any>(apiConfig.API_URL+ this.url , {params: params})
            .pipe(
               catchError((error) => this.handleError(error))
            );
    }
    // API get create
    public getIndexList(): Observable<any> {
        return this.http.get<T[]>(apiConfig.API_URL+ this.url + '/index')
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    // API get create
    public getLoadValuesList(): Observable<any> {
        return this.http.get<T[]>(apiConfig.API_URL+ this.url + '/loadValues')
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    // API post create
    public post(data: T, checkMethod?): Observable<T> {
        var url;
        if(checkMethod == 'post'){
            url = '/create'
        }else{
            url = '/edit'
        }
        return this.http.post<T>(apiConfig.API_URL+ this.url + url, (data), {headers: this.getHttpHeaders()})
            .pipe(
               catchError((error) => this.handleError(error))
            );
    }
    approveProcess(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ this.url+'/approve' , (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    nikasaProcess(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ this.url+'/generateNikasaVoucher' , (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    generateRefundReverseVoucherProcess(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ this.url+'/generateNikasaVoucher' , (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    reversePaymentOrderProcess(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ this.url+'/generateReversePaymentOrder' , (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    resendProcess(data): Observable<any> {
        return this.http.post<any>(apiConfig.API_URL+ this.url+'/resend' , (data), {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    getDateAndTime(): Observable<any> {
        return this.http.get<any>(apiConfig.API_URL+  'resource/getDate', {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }




    public delete(id): Observable<T> {
        return this.http.delete<T>(apiConfig.API_URL + this.url + '/delete/' + id)
            .pipe(
               catchError((error) => this.handleError(error))
            );
    }



    public deletePost(data): Observable<T> {
        return this.http.post<T>(apiConfig.API_URL + this.url + '/delete', data,{headers: this.getHttpHeaders()} )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public deletePostAll(data): Observable<T> {
        return this.http.post<T>(apiConfig.API_URL + this.url + '/delete/all', data,{headers: this.getHttpHeaders()} )
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    public insert(data: T): Observable<T> {
        return this.http.post<T>(apiConfig.API_URL+ this.url , (data), {headers: this.getHttpHeaders()})
            .pipe(
               catchError((error) => this.handleError(error))
            );
    }


    public update(id: string, data: T): Observable<T> {
        return this.http.put<T>(apiConfig.API_URL+ this.url + '/' + id , (data), {headers: this.getHttpHeaders()})
            .pipe(
               catchError((error) => this.handleError(error))
            );
    }

    public formattedDate(date: Date): string {
        const datePart = date.getDate();
        const monthPart = date.getMonth() + 1;
        const yearPart = date.getFullYear();

        return (yearPart) + '/' + (monthPart < 10 ? '0' + monthPart : monthPart) + '/' + (datePart < 10 ? '0' + datePart : datePart);

    }

    /**
     * Get the common HttpHeaders
     */
    public getHttpHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var id =  JSON.parse(sessionStorage.getItem('warehouseId'));
        if(id){

                headers = headers.set('warehouseId', id);

        }

        return headers;
    }
    public getuploadFileHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('enctype', 'multipart/form-data');
        headers = headers.set('Accept', 'application/json');

        return headers;
    }

    public exportAsExcelFile(json: any[], excelFileName: string): void {

        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        console.log('worksheet',worksheet);
        const workbook: XLSX.WorkBook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    getMonth(): Observable<any> {
        return this.http.get<any>(apiConfig.API_URL+ apiConfig.API_CGAS_LOOKUP_MONTH, {headers: this.getHttpHeaders()})
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }
    typeTextAndNumber(event){
        if(event){
            var ew = event.which;
            if(48 <= ew && ew <= 57)
                return true;
            if(65 <= ew && ew <= 90)
                return true;
            if(97 <= ew && ew <= 122)
                return true;
            return false;
        }

    };

    convert_to_unicode(modified_substring) {
        if(modified_substring){
            var array_one = new Array(
                "ç", "˜", ".", "'m", "]m", "Fmf", "Fm",
                ")", "!", "@", "#", "$", "%", "^", "&", "*", "(",
                "k|m", "em", "km", "Qm", "qm", "Nf",
                "¡", "¢", "1", "2", "4", ">", "?", "B", "I", "Q", "ß",
                "q", "„", "‹", "•", "›", "§", "°", "¶", "¿", "Å",
                "Ë", "Ì", "Í", "Î", "Ý", "å",
                "6«", "7«", "8«", "9«",
                "Ø", "|",
                "8Þ", "9Þ",
                "S", "s", "V", "v", "U", "u", "£", "3", "ª",
                "R", "r", "5", "H", "h", "‰", "´", "~", "`",
                "6", "7", "8", "9", "0",
                "T", "t", "Y", "y", "b", "W", "w", "G", "g",
                "K", "k", "ˆ", "A", "a", "E", "e", "D", "d",
                "o", "/", "N", "n", "J", "j", "Z", "z", "i", ":", ";", "X", "x",
                "cf‘", "c‘f", "cf}", "cf]", "cf", "c", "O{", "O", "pm", "p", "C", "P]", "P",
                "f‘", "\"", "'", "+", "f", "[", "\\", "]", "}", "F", "L", "M",
                "्ा", "्ो", "्ौ", "अो", "अा", "आै", "आे", "ाो", "ाॅ", "ाे",
                "ंु", "ेे", "अै", "ाे", "अे", "ंा", "अॅ", "ाै", "ैा", "ंृ",
                "ँा", "ँू", "ेा", "ंे") // Remove typing mistakes in the original file

            //"_","Ö","Ù","Ú","Û","Ü","Þ","Æ","±","-","<","=")    // Punctuation marks

            var array_two = new Array(
                "ॐ", "ऽ", "।", "m'", "m]", "mfF", "mF",
                "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",
                "फ्र", "झ", "फ", "क्त", "क्र", "ल",
                "ज्ञ्", "द्घ", "ज्ञ", "द्द", "द्ध", "श्र", "रु", "द्य", "क्ष्", "त्त", "द्म",
                "त्र", "ध्र", "ङ्घ", "ड्ड", "द्र", "ट्ट", "ड्ढ", "ठ्ठ", "रू", "हृ",
                "ङ्ग", "त्र", "ङ्क", "ङ्ख", "ट्ठ", "द्व",
                "ट्र", "ठ्र", "ड्र", "ढ्र",
                "्य", "्र",
                "ड़", "ढ़",
                "क्", "क", "ख्", "ख", "ग्", "ग", "घ्", "घ", "ङ",
                "च्", "च", "छ", "ज्", "ज", "झ्", "झ", "ञ्", "ञ",
                "ट", "ठ", "ड", "ढ", "ण्",
                "त्", "त", "थ्", "थ", "द", "ध्", "ध", "न्", "न",
                "प्", "प", "फ्", "ब्", "ब", "भ्", "भ", "म्", "म",
                "य", "र", "ल्", "ल", "व्", "व", "श्", "श", "ष्", "स्", "स", "ह्", "ह",
                "ऑ", "ऑ", "औ", "ओ", "आ", "अ", "ई", "इ", "ऊ", "उ", "ऋ", "ऐ", "ए",
                "ॉ", "ू", "ु", "ं", "ा", "ृ", "्", "े", "ै", "ँ", "ी", "ः",
                "", "े", "ै", "ओ", "आ", "औ", "ओ", "ो", "ॉ", "ो",
                "ुं", "े", "अ‍ै", "ो", "अ‍े", "ां", "अ‍ॅ", "ौ", "ौ", "ृं",
                "ाँ", "ूँ", "ो", "ें") // Remove typing mistakes in the original file


            var array_one_length = array_one.length;


            if (modified_substring != "") // if stringto be converted is non-blank then no need of any processing.
            {
                for (let input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++) {
                    var idx = 0;
                    while (idx != -1) {
                        modified_substring = modified_substring.replace(array_one[input_symbol_idx], array_two[input_symbol_idx])
                        idx = modified_substring.indexOf(array_one[input_symbol_idx])
                    }
                }
                var position_of_i = modified_substring.indexOf("l")

                while (position_of_i != -1) {
                    var charecter_next_to_i = modified_substring.charAt(position_of_i + 1)
                    var charecter_to_be_replaced = "l" + charecter_next_to_i
                    modified_substring = modified_substring.replace(charecter_to_be_replaced, charecter_next_to_i + "ि")
                    position_of_i = modified_substring.search(/l/, position_of_i + 1)
                }
                var position_of_wrong_ee = modified_substring.indexOf("ि्")
                while (position_of_wrong_ee != -1) {
                    var consonent_next_to_wrong_ee = modified_substring.charAt(position_of_wrong_ee + 2)
                    var charecter_to_be_replaced = "ि्" + consonent_next_to_wrong_ee
                    modified_substring = modified_substring.replace(charecter_to_be_replaced, "्" + consonent_next_to_wrong_ee + "ि")
                    position_of_wrong_ee = modified_substring.search(/ि्/, position_of_wrong_ee + 2)
                }
                var position_of_wrong_ee = modified_substring.indexOf("िं्")
                while (position_of_wrong_ee != -1) //while-03

                {
                    var consonent_next_to_wrong_ee = modified_substring.charAt(position_of_wrong_ee + 3)
                    var charecter_to_be_replaced = "िं्" + consonent_next_to_wrong_ee
                    modified_substring = modified_substring.replace(charecter_to_be_replaced, "्" + consonent_next_to_wrong_ee + "िं")
                    position_of_wrong_ee = modified_substring.search(/िं्/, position_of_wrong_ee + 3) // search for 'wrong ee' ahead of the current position.

                } // end of while-03 loop


// Eliminating reph "Ô" and putting 'half - r' at proper position for this.
                var set_of_matras = "ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ"
                var position_of_R = modified_substring.indexOf("{")

                while (position_of_R > 0) // while-04
                {
                    var probable_position_of_half_r = position_of_R - 1;
                    var charecter_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r)


                    // trying to find non-maatra position left to current O (ie, half -r).

                    while (set_of_matras.match(charecter_at_probable_position_of_half_r) != null) // while-05

                    {
                        probable_position_of_half_r = probable_position_of_half_r - 1;
                        charecter_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r);

                    } // end of while-05


                    charecter_to_be_replaced = modified_substring.substr(probable_position_of_half_r, (position_of_R - probable_position_of_half_r));
                    var new_replacement_string = "र्" + charecter_to_be_replaced;
                    charecter_to_be_replaced = charecter_to_be_replaced + "{";
                    modified_substring = modified_substring.replace(charecter_to_be_replaced, new_replacement_string);
                    position_of_R = modified_substring.indexOf("{");

                } // end of while-04

                modified_substring = modified_substring.replace(/=/g, ".");
                modified_substring = modified_substring.replace(/_/g, ")");
                modified_substring = modified_substring.replace(/Ö/g, "=");
                modified_substring = modified_substring.replace(/Ù/g, ";");
                modified_substring = modified_substring.replace(/…/g, "‘");
                modified_substring = modified_substring.replace(/Ú/g, "’");
                modified_substring = modified_substring.replace(/Û/g, "!");
                modified_substring = modified_substring.replace(/Ü/g, "%");
                modified_substring = modified_substring.replace(/æ/g, "“");
                modified_substring = modified_substring.replace(/Æ/g, "”");
                modified_substring = modified_substring.replace(/±/g, "+");
                modified_substring = modified_substring.replace(/-/g, "(");
                modified_substring = modified_substring.replace(/</g, "?");

            }
            return modified_substring;
        }



    }
    public handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        // let errMsg = (error.message) ? error.message :
        //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // GenericApiService.loadingService.display(false);
        // alert(error)
            console.log('api erro', error)

        if(error.status == 401){

            this.router.navigate(["/authentication/signin"]);
        }else if(error.status == 403){

            // GenericApiService.notificationService.smartMessageBox(
            //     {
            //         title:
            //             ` <span class="" style=" font-size: 26px;"><i class="fa fa-times-circle text-danger "></i> Permission Denied</span>`,
            //         content:
            //             `<span >You don't have sufficient permission.</span>`,
            //         buttons: "[Close]"
            //     },
            //     ButtonPressed => {
            //         if (ButtonPressed == "Close") {

            //             GenericApiService.loadingService.display(false);
            //         }
            //     }

            // );

            return EMPTY;


        }else if(error.status == 500){
            // GenericApiService.notificationService.createNotification(
            //     "Error", //title
            //     "danger", //type
            //     5000, // time
            //     "500 ! Unexpected Error!" //body
            // )
            return EMPTY;
        }
        else{
            return throwError(error);
        }

    }

}
