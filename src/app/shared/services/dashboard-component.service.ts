import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DashboardComponentService {
    public message :Subject<Object> = new ReplaySubject<Object>(1);
    public menuList :Subject<any> = new ReplaySubject<any>(1);
    public rolesDashboard :Subject<any> = new ReplaySubject<any>(1);
    public dashboardData :Subject<any> = new ReplaySubject<any>(1);
    public complaintStatus :BehaviorSubject<any> = new BehaviorSubject(0)
    setMenuList(value) {
        this.menuList.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }

    setMessage(value) {
        this.message.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }

    setRoles(value) {
        this.rolesDashboard.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }
    setDashboardData(value) {
        this.dashboardData.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }
    setComplaintStatus(value) {
        this.complaintStatus.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }

}