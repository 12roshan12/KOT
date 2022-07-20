import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertifyService } from 'app/shared/services/alertify.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  listlength: any;
  recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentTransactionsTableColumns: string[] = ['ename', 'nname', 'edescription', 'menuId', 'actions', 'actionss'];
  menulist: any[] = [];
  public searchFilter: any = '';
  public query: any = '';
  public queryAgency: any = '';
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  totalRows = 0;
  pagesize = 5;
  currentPage = 1;
  size = 5;
  pageIndex = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  mainlist: any;
  constructor(private menuservice: MenuService, private router: Router, private alertify: AlertifyService,) { }

  ngOnInit(): void {
    this.loadmenu();
  }
  loadmenu() {
    this.menuservice.getAll(1, 'id', 'desc', 5).subscribe((data: any) => {
      // this.menulist = data.data.menu;
      this.mainlist = data.data.menu;
      this.menulist = this.mainlist.slice(0, 5);

    });
  }

  // applyFilter(filterValue: string) {
  //   this.menulist.filter = filterValue.trim().toLowerCase();
  //   console.log(this.menulist.filter);
  //   if (this.menulist.paginator) {
  //     this.menulist.paginator.firstPage();
  //   }
  // }

  delete(id?) {
    this.alertify.Confirm('Are you sure want to delete this record ?', 'Delete', () => {
      this.menuservice.delete(id).subscribe((data: any) => {
        this.loadmenu();
        this.alertify.Success(data.message)

      },error=>{
        this.alertify.Error(error.message)
      });
    })
  }

  paginate(event: any) {
    console.log(event)
    this.pageIndex = event;
    this.menulist = this.mainlist.slice(event * this.size - this.size, event * this.size);
  }


}
