import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html'
})


export class NewsletterComponent implements OnInit {

    noticeList: any[] = []
    displayData = []
    test = '<b>Hello</b><br/><h1>Hello</h1>'
    constructor(private dialogref: MatDialogRef<NewsletterComponent>, private sanitizer: DomSanitizer) {

    }
    

    ngOnInit() {
        this.noticeList = JSON.parse(sessionStorage.getItem('newslist'))

        for (let i = 0; i < this.noticeList.length; i++) {
            console.log(this.noticeList[i]);
            this.displayData.push(this.noticeList[i])
        }
    
        



    }

    close() {
        this.dialogref.close()
    }

}