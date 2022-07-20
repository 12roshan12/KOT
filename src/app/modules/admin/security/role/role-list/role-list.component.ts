import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AlertifyService } from 'app/shared/services/alertify.service';

import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentTransactionsTableColumns: string[] = ['id', 'name', 'nname', 'userTypeId', 'status', 'action', 'actions'];
  rolelist :any[]=[];
  totalItems: any;
  totalPages: any;
  pages = 1;
  disabled: boolean = false;
  predisabled: boolean = false;
  public searchFilter: any = '';
  public query: any = '';
  public queryAgency: any = '';
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();
  @ViewChild('empTbSort') empTbSort = new MatSort();
  totalRows = 0;
  pagesize = 5;
  size = 6;
  currentPage = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  paidArray: any[] = [];
  pageIndex= 1;
  p: number;

  listlength: any;
  mainlist: any;
  constructor(private _activatedRoute: ActivatedRoute,
    private roleservice: RoleService,
    private _liveAnnouncer: LiveAnnouncer,
    private _authService: AuthService,
    private alertify: AlertifyService,
    private _formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit(): void { 
    this.getdata(this.pages);
  }
  getdata(pageNo?) {
    this.roleservice.getAll().subscribe((data: any) => {
      this.rolelist = data.data.roles;
      this.mainlist = data.data.roles;
      // this.rolelist = this.mainlist.slice(0, 5);
     
    });


  }
  // applyFilter(filterValue: string) {
  //   this.rolelist.filter = filterValue.trim().toLowerCase();
  //   console.log(this.rolelist.filter);
  //   if (this.rolelist.paginator) {
  //     this.rolelist.paginator.firstPage();
  //   }
  // }

  paginate(event: any) {
    this.pageIndex=event;
    // this.rolelist = this.mainlist.slice(event * this.pagesize - this.pagesize, event * this.pagesize);
  }


  delete(id?){
    this.alertify.Confirm('Are you sure want to delete this record ?', 'Delete', () => {
    this.roleservice.delete(id).subscribe((data: any) => {
      this.getdata(this.pages);
      this.alertify.Success(data.message);

    },error=>{
      this.alertify.Error(error.message);
    });
  })
  }

}
