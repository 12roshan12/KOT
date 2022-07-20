import { Component, OnInit, ViewChild } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { environment } from 'environments/environment';
import { AuthService } from './core/auth/auth.service';
import { Keepalive } from '@ng-idle/keepalive';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AlertifyService } from './shared/services/alertify.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;
    title = 'angular-idle-timeout';

    public modalRef: BsModalRef;

    @ViewChild('childModal', { static: false }) childModal: ModalDirective;

    /**
     * Constructor
     */
    constructor(private alertservice:AlertifyService, private router: Router,  private idle: Idle, private keepalive: Keepalive, private _authService: AuthService) {

      if(environment.production){
        window.console.log = () => { }
      }
    }
    }
