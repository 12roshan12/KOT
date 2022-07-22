import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { PendingService } from './shared/services/pendingservice.service';
import { TranslateService } from '@ngx-translate/core';
import { NgIdleModule } from "@ng-idle/core";
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotFoundComponentComponent } from './shared/component/not-found-component/not-found-component.component';
import { BillComponent } from './modules/admin/pages/bill/bill.component';
import { InventoryComponent } from './modules/admin/pages/inventory/inventory.component';
import { KOTComponent } from './modules/admin/pages/kot/kot.component';
import { OrderComponent } from './modules/admin/pages/orders/orders.component';
import { CategoryComponent } from './modules/admin/pages/settings/category/category.component';
import { CustomerComponent } from './modules/admin/pages/settings/customer/customer.component';
import { HallComponent } from './modules/admin/pages/settings/hall/hall.component';
import { MenuComponent } from './modules/admin/pages/settings/menu/menu.component';
import { StaffComponent } from './modules/admin/pages/settings/staff/staff.component';
import { StatusComponent } from './modules/admin/pages/settings/status/status.component';
import { TableComponent } from './modules/admin/pages/settings/table/table.component';
import { TypeComponent } from './modules/admin/pages/settings/type/type.component';
import { SettingComponent } from './modules/admin/pages/settings/settings.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        BillComponent,
        InventoryComponent,
        KOTComponent,
        OrderComponent,
        CategoryComponent,
        CustomerComponent,
        HallComponent,
        MenuComponent,
        StaffComponent,
        StatusComponent,
        TableComponent,
        TypeComponent,
        SettingComponent,
        NotFoundComponentComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),
        NgIdleModule.forRoot(),
        NgIdleKeepaliveModule.forRoot(),
        // Core module of your application
        CoreModule,
        ModalModule.forRoot(),
        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    bootstrap   : [
        AppComponent
    ],
    providers:[PendingService]
})
export class AppModule
{
}
