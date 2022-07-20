import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DashboardComponentService {
    titleName:Subject<Object> = new ReplaySubject<Object>(1);
    reportName:Subject<Object> = new ReplaySubject<Object>(1);
    public message :Subject<Object> = new ReplaySubject<Object>(1);
    public menuList :Subject<any> = new ReplaySubject<any>(1);
    public list :Subject<any> = new ReplaySubject<any>(1);
    public rolesDashboard :Subject<any> = new ReplaySubject<any>(1);
    public dashboardData :Subject<any> = new ReplaySubject<any>(1);
    public complaintStatus :BehaviorSubject<any> = new BehaviorSubject(0)
    setMenuList(value) {
        this.menuList.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }
    setList(value) {
        this.list.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }

    setMessage(value) {
        this.message.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }

    setTitleName(value) {
        this.titleName.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
    }
    setReportName(value) {
        this.reportName.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
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

    destroyAll(){
        // this.reportName.next(null);
        // Emit something to stop all Observables
        //
        this.reportName.complete()
        this.reportName  = new ReplaySubject<Object>(1);

        // Complete the notifying Observable to remove it
        //

    }

}
