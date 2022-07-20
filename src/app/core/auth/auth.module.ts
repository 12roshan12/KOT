import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthInterceptor } from 'app/core/auth/auth.interceptor';
import { CacheInterceptor } from './cache.intercepter';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { SafeHtmlPipe } from 'app/shared/pipes/sanitizer.pipe';



@NgModule({
    imports  : [
        HttpClientModule,
        MatIconModule,
        SharedModule
    ],
    declarations:[
        NewsletterComponent,
        SafeHtmlPipe

    ],
    providers: [
        AuthService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CacheInterceptor,
            multi: true
          }
    ]
})
export class AuthModule
{
}
