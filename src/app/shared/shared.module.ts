import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MaterialModule } from './material.module';
import { ReusabledialogComponent } from './component/reusabledialog/reusabledialog.component';
import { TranslocoModule } from '@ngneat/transloco';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { NewlineAsStringPipe } from './pipes/newline.pipe';
import { NpDatepickerModule } from 'angular-nepali-datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { BreadCrumbModule } from './breadcrumbs/breadcrumb.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { NepaliNumberPipe } from './pipes/nepali.pipe';
import { SearchPipe } from './pipes/matsearch.pipe';
import { NumbersOnlyDirective } from './directive/numbers-only.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { AwesomeTooltipComponent } from './tooltip/tooltip.component';
import { AwesomeTooltipDirective } from './tooltip/tooltip.directive';

import { E2nPipe } from './pipes/e2n.pipe';
import { E2nReportPipe } from './pipes/e2n-report.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { NgChartsModule } from 'ng2-charts';
import { NumdPipe } from './pipes/numd.pipe';
import { NgxCurrencyModule } from "ngx-currency";
import { NgxDatatableModule } from './ngx-datatable/component/ngx-datatable.module';

export const customCurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ".",
    precision: 2,
    prefix: "",
    suffix: "",
    thousands: ",",
    nullable: true,
    min: null,
    max: null
};

@NgModule({
    declarations: [
        ReusabledialogComponent,
        TitlecasePipe,
        NewlineAsStringPipe,
        SearchFilterPipe,
        NepaliNumberPipe,
        SearchPipe,
        NumbersOnlyDirective,
        AwesomeTooltipDirective,
        AwesomeTooltipComponent,
        E2nPipe,
        E2nReportPipe,
        NumdPipe
        
      ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgApexchartsModule,
        MaterialModule,
        BreadCrumbModule,
        NpDatepickerModule,
        NgSelectModule,
        NgxPaginationModule,
        TranslateModule.forRoot(),
        NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
        NgxDatatableModule
        
        
        
        
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgApexchartsModule,
        ReusabledialogComponent,
        MaterialModule,
        TranslocoModule,
        TitlecasePipe,
        NewlineAsStringPipe,
        NpDatepickerModule,
        NgSelectModule,
        BreadCrumbModule,
        SearchFilterPipe,
        NepaliNumberPipe,
        SearchPipe,
        E2nPipe,
        NumdPipe,
        E2nReportPipe,
        NumbersOnlyDirective,
        NgxPaginationModule,
        AwesomeTooltipDirective,
        AwesomeTooltipComponent,
        TranslateModule,
        NgChartsModule,
        NgxCurrencyModule,
        NgxDatatableModule

    ],
    
})
export class SharedModule
{
}
