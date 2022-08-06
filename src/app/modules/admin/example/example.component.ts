import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexChart,
    ApexPlotOptions,
    ApexLegend,
    ApexXAxis,
    ApexFill,
    ApexGrid,
    ApexMarkers,
    ApexStroke,
    ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
    plotOptions: ApexPlotOptions;
    legend: ApexLegend;
    colors: string[];
};

export type ChartOptions1 = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    fill: ApexFill;
    markers: ApexMarkers;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};

export type ChartOptions2 = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    fill: ApexFill;
    markers: ApexMarkers;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};

export type ChartOptions3 = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    fill: ApexFill;
    markers: ApexMarkers;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};



@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {

    public chartOptions: Partial<ChartOptions>;
    public chartOptions1: Partial<ChartOptions1>;
    public chartOptions2: Partial<ChartOptions2>;
    public chartOptions3: Partial<ChartOptions3>;

    numSequence(n: number): Array<number> {
        return Array(n);
    }
    ngOnInit(): void {
    }

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [
                        {
                            x: "New Delhi",
                            y: 218
                        },
                        {
                            x: "Kolkata",
                            y: 149
                        },
                        {
                            x: "Mumbai",
                            y: 184
                        },
                        {
                            x: "Ahmedabad",
                            y: 55
                        },
                        {
                            x: "Bangaluru",
                            y: 84
                        },
                        {
                            x: "Pune",
                            y: 31
                        },
                        {
                            x: "Chennai",
                            y: 70
                        },
                        {
                            x: "Jaipur",
                            y: 30
                        },
                        {
                            x: "Surat",
                            y: 44
                        },
                        {
                            x: "Hyderabad",
                            y: 68
                        },
                        {
                            x: "Lucknow",
                            y: 28
                        },
                        {
                            x: "Indore",
                            y: 19
                        },
                        {
                            x: "Kanpur",
                            y: 29
                        },
                        {
                            x: "Jaipur",
                            y: 29
                        }
                    ]
                }
            ],
            legend: {
                show: false
            },
            chart: {
                height: 350,
                type: "treemap"
            },
            title: {
                text: "",
                align: "center"
            },
            colors: [
                "#3B93A5",
                "#F7B844",
                "#ADD8C7",
                "#EC3C65",
                "#CDD7B6",
                "#C1F666",
                "#D43F97",
                "#1E5D8C",
                "#421243",
                "#7F94B0",
                "#EF6537",
                "#C0ADDB",
                "#C0ABBB"

            ],
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: false
                }
            }
        };

        this.chartOptions1 = {
            series: [
                {
                    name: "Likes",
                    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            stroke: {
                width: 7,
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "1/11/2000",
                    "2/11/2000",
                    "3/11/2000",
                    "4/11/2000",
                    "5/11/2000",
                    "6/11/2000",
                    "7/11/2000",
                    "8/11/2000",
                    "9/11/2000",
                    "10/11/2000",
                    "11/11/2000",
                    "12/11/2000",
                    "1/11/2001",
                    "2/11/2001",
                    "3/11/2001",
                    "4/11/2001",
                    "5/11/2001",
                    "6/11/2001"
                ]
            },
            title: {
                // text: "Social Media",
                align: "left",
                style: {
                    fontSize: "16px",
                    color: "#666"
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#FDD835"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                }
            },
            markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                    size: 7
                }
            },
            yaxis: {
                min: -10,
                max: 40,
                title: {
                    text: "Engagement"
                }
            }
        };

        this.chartOptions2 = {
            series: [
                {
                    name: "Likes",
                    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            stroke: {
                width: 7,
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "1/11/2000",
                    "2/11/2000",
                    "3/11/2000",
                    "4/11/2000",
                    "5/11/2000",
                    "6/11/2000",
                    "7/11/2000",
                    "8/11/2000",
                    "9/11/2000",
                    "10/11/2000",
                    "11/11/2000",
                    "12/11/2000",
                    "1/11/2001",
                    "2/11/2001",
                    "3/11/2001",
                    "4/11/2001",
                    "5/11/2001",
                    "6/11/2001"
                ]
            },
            title: {
                // text: "Social Media",
                align: "left",
                style: {
                    fontSize: "16px",
                    color: "#666"
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#FDD835"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                }
            },
            markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                    size: 7
                }
            },
            yaxis: {
                min: -10,
                max: 40,
                title: {
                    text: "Engagement"
                }
            }
        };

        this.chartOptions3 = {
            series: [
                {
                    name: "Likes",
                    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            stroke: {
                width: 7,
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "1/11/2000",
                    "2/11/2000",
                    "3/11/2000",
                    "4/11/2000",
                    "5/11/2000",
                    "6/11/2000",
                    "7/11/2000",
                    "8/11/2000",
                    "9/11/2000",
                    "10/11/2000",
                    "11/11/2000",
                    "12/11/2000",
                    "1/11/2001",
                    "2/11/2001",
                    "3/11/2001",
                    "4/11/2001",
                    "5/11/2001",
                    "6/11/2001"
                ]
            },
            title: {
                // text: "Social Media",
                align: "left",
                style: {
                    fontSize: "16px",
                    color: "#666"
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#FDD835"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                }
            },
            markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                    size: 7
                }
            },
            yaxis: {
                min: -10,
                max: 40,
                title: {
                    text: "Engagement"
                }
            }
        };
    }
    
}










