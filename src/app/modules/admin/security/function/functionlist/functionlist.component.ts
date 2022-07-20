import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FunctionService } from './function.service';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-functionlist',
  templateUrl: './functionlist.component.html',
  styleUrls: ['./functionlist.component.sass']
})
export class FunctionlistComponent implements OnInit {
  displayedColumns = [
    'id',
    'Functionname',
    'status',
    'actions',
  ];
  exampleDatabase: FunctionService | null;
  dataSource: any;
  selection = new SelectionModel<any[]>(true, []);
  id: number;
  functionlist: any;
  listlength: any;
  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public functionservice: FunctionService,
    private snackBar: MatSnackBar,
    private router: Router) { }


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger, { static: true }) contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };



  @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
  @ViewChild('addressTpl', { static: true }) addressTpl: TemplateRef<any>;
  FunctionList: any[] = [];
  public searchFilter: any = '';
  public query: any = '';
  public queryAgency: any = '';
  agencyId: any;
  resetPasswordForm: any;
  submitted = false;
  resetid: string;
  pageIndex: any;
  mainlist: any;
  totalRows = 0;
  pagesize = 5;
  currentPage = 1;
  size = 5;
  panelShow = true;
  data = [];
  dataBK = [];
  columns: any = {};
  columnsWithFeatures: any
  ngOnInit(): void {
    this.loadfunction();
  }

  loadfunction() {
    return this.functionservice.getAll().subscribe((data: any) => {
      this.functionlist = data.data;
      this.listlength = this.functionlist.length;
    });
  }
  public deletefunction(id) {
    this.functionservice.delete(id)
      .subscribe(
        data => {
          this.loadfunction();
        },
        error => {
        }
      )
  }

  edit(row) {
    this.router.navigateByUrl('/security/function/edit-function/'+row.functionId);
   
  }



}
