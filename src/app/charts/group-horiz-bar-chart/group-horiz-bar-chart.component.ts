import { Component, OnInit, Input } from '@angular/core';
import { NgxValue } from 'src/app/services/dataService/data.service';
import { ChartService } from 'src/app/services/chartService/chart.service';
import { NgxChartSelectData } from 'src/app/models/stackedAreaSelectData';
import { DatePipe } from '@angular/common';
import { NgxGroupBarChart } from 'src/app/models/ngxChart';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-group-horiz-bar-chart',
  templateUrl: './group-horiz-bar-chart.component.html',
  styleUrls: ['./group-horiz-bar-chart.component.css'],
  providers: [ChartService]
})
export class GroupHorizBarChartComponent implements OnInit {

  @Input() chartData: NgxGroupBarChart
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
