import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexStroke,
    ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    stroke: ApexStroke;
    fill: ApexFill;
};

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {
    public chartOptions: Partial<ChartOptions>;

    numSequence(n: number): Array<number> {
        return Array(n);
    }

    constructor() {
        this.chartOptions = {
            series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
            chart: {
                type: "polarArea"
            },
            stroke: {
                colors: ["#fff"]
            },
            fill: {
                opacity: 0.8
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
    }


    ngOnInit(): void {

    }

}












