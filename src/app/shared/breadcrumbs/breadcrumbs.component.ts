import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public icon: string;
  @Input() public path: any;
  @Input() public items: Array<any>;
  clockHandle: any;
  clock: string;
  constructor(private router: Router) {
    this.clockHandle = setInterval(()=>{
      this.clock = new Date().toLocaleString();
    },1000);
   }

  ngOnInit(): void {
  
  }
  gotoDashBoard(val?) {
    //console.log(val);
    this.router.navigate(['/dashboard'])
  }
  gotoPath(path?, i?) {
 
      if (path) {
        this.router.navigate(['/' + path])
      
    }
  }

}
