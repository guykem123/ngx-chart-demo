import { Component, OnInit, Input } from '@angular/core';
import { NgxValue } from 'src/app/services/dataService/data.service';
import { ChartService } from 'src/app/services/chartService/chart.service';
import { DatePipe } from '@angular/common';
import { NgxChartSelectData } from 'src/app/models/stackedAreaSelectData';
import { NgxStackChart } from 'src/app/models/ngxChart';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-stacked-vert-bar-chart',
  templateUrl: './stacked-vert-bar-chart.component.html',
  styleUrls: ['./stacked-vert-bar-chart.component.css'],
  providers: [ChartService]
})
export class StackedVertBarChartComponent implements OnInit {

  @Input() chartData: NgxStackChart
  @Input() data: BehaviorSubject<NgxValue[]>

  constructor(private chartService: ChartService) {

  }

  ngOnInit(): void {
  }

  axisDate(val: string): string {
    return new DatePipe('en').transform(val, 'hh a');
  }

  onSelect(value: NgxChartSelectData | string) {
    this.chartService.onSelect(value, this.data)
  }
}