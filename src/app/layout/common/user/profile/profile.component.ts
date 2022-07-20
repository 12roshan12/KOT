import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { CustomvalidationService } from 'app/shared/Customvalidation.service';

@Component({
  selector: 'profile-password',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string;
  user: any;
  Roles: any;

  constructor() { }
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.Roles = this.user.roles[0];

  }

  onEdit() {

  }

}