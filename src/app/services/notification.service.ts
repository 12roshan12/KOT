import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  alertSettings$ = new Subject<Alert>();
  constructor() {}

  smallBox(data, cb?) {
    $.smallBox(data, cb);
  }

  bigBox(data, cb?) {
    $.bigBox(data, cb);
  }

  smartMessageBox(data, cb?) {
    $.SmartMessageBox(data, cb);
  }

  createNotification(title: string, type: string, time: number, body: string) {
    console.log("alert", title, body);
    this.alertSettings$.next({
      title,
      type,
      time,
      body,
    });
  }
}

export interface Alert {
  title: string;
  type: string;
  time: number;
  body: string;
}
