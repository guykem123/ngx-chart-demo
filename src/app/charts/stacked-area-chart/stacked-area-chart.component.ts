import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgxChartSelectData } from 'src/app/models/stackedAreaSelectData';
import { ChartService } from 'src/app/services/chartService/chart.service';
import { NgxStackChart } from 'src/app/models/ngxChart';
import { BehaviorSubject } from 'rxjs';
import { NgxValue } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.css'],
  providers: [ChartService]
})
export class StackedAreaChartComponent implements OnInit {

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
