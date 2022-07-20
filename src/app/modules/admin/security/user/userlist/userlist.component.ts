
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AuthService } from "app/core/auth/auth.service";
import { AlertifyService } from "app/services/alertify.service";

// import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";


import { UserService } from "../User.service";
var array;
@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.sass"],
})
export class UserListComponent implements OnInit {

  id;
  status = 1;
  currentLang = 'np';
  recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentTransactionsTableColumns: string[] = ['username', 'name', 'mobile', 'email', 'actions'];
  userList = new MatTableDataSource();
  public searchFilter: any = '';
  public query: any = '';
  public queryAgency: any = '';
  agencyId: any;
  resetPasswordForm: any;
  submitted = false;
  resetid: string;
  mainlist: any;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  totalRows = 0;
  pagesize = 5;
  currentPage = 1;
  size = 5;
  pages = 1;
userlistArray : any[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  paidArray: any[] = [];
  pageIndex = 5;
  p: number;
  activeLang: string;
  totalItems: any;
  disabled: boolean=false;
  totalPages: number;
  predisabled: boolean=false;
  // $('.deletebutton').on('click', () => {  //click event on button with class `buttonClass`
  //
  // });

  public deleteCust() {

    // this.userService.delete(this.id).subscribe(
    //   (data) => {
    //     this.options.ajax.reload(null, false);
    //   },
    //   (error) => {

    //   }
    // );
  }

  constructor(private userService: UserService, private dialog: MatDialog, private alertify: AlertifyService, private authService: AuthService) {

  }

  ngOnInit() {
    this.getdata(this.pages);

  }
  getdata(pageNo) {
    this.userService.getAll(pageNo, 'id', 'desc', this.pagesize).subscribe((value: any) => {
      this.userList = value.data;
      this.totalItems = value.totalItems;
      this.totalRows = value.totalPages;
      this.userlistArray = value.data;
      // this.size = this.userlistArray.length;
    })


  }


  public detailsFormat(d) {

    return ``;
  }

  applyFilter(filterValue: string) {
    this.userList.filter = filterValue.trim().toLowerCase();
    console.log(this.userList.filter);
    if (this.userList.paginator) {
      this.userList.paginator.firstPage();
    }
  }



  Delete(Id) {
    console.log(Id);
    this.alertify.Confirm('Are you sure want to delete this record ?', 'Delete', () => {
    this.userService.delete(Id)
      .subscribe((data: any) => {
        this.alertify.Success(data.message);
      }, error => {
        this.alertify.Error(error.message)
      });
    })
  }

  announceSortChange(sortState: Sort) {
    console.log(sortState)
    this.userService.getAll(this.pages, sortState.active, sortState.direction, this.pagesize).subscribe((value: any) => {
      this.totalItems = value.totalItems;
      this.totalRows = value.totalPages;
      this.recentTransactionsDataSource.data = value.data;
      this.userList = value.data;
    })
    

  }
  next() {
    if (this.pages < this.totalPages) {
      this.pages = this.pages + 1;

      this.getdata(this.pages);
      this.disabled = false;
      this.predisabled = false;
    } else {
      this.disabled = true;
    }

  }
  prevoius() {
    if (this.pages == this.totalPages || this.pages < this.totalPages && this.pages > 1) {
      this.pages = this.pages - 1;
      this.getdata(this.pages)
      this.predisabled = false;
    } else {
      this.predisabled = true;
    }

  }


  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pagesize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getdata(this.pages);
  }

  paginate(event: any) {
    console.log(event);
    this.currentPage = event;
    this.pages= event;
    this.userService.getAll(event, 'id', 'desc', this.pagesize).subscribe((value: any) => {
      this.totalItems = value.totalItems;
      this.totalRows = value.totalPages;
      this.recentTransactionsDataSource.data = value.data;
      this.userList = value.data;
    })

    console.log(this.totalPages)

    // this.dataSource = this.data.slice(event * this.size - this.size, event * this.size);
  }
  perpage(event: any) {
    console.log(event);
    this.pageIndex = event;
    this.pagesize = event;
    this.p = 1
    this.userService.getAll(this.pages, 'id', 'desc', this.pagesize).subscribe((value: any) => {
      this.totalItems = value.totalItems;
      this.totalRows = value.totalPages;
      this.recentTransactionsDataSource.data = value.data;
      this.userList = value.data;
    })
  }
}


