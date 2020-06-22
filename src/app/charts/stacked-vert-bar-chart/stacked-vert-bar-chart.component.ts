import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';
import { NgxValue } from 'src/app/services/dataService/data.service';
import { ChartService } from 'src/app/services/chartService/chart.service';
import { DatePipe } from '@angular/common';
import { NgxChartSelectData } from 'src/app/models/stackedAreaSelectData';
import { NgxStackChart, NgxVerBarChart } from 'src/app/models/ngxChart';
import { BehaviorSubject, Subject } from 'rxjs';
import { LegendPosition } from 'src/app/models/legendPosition';

@Component({
  selector: 'app-stacked-vert-bar-chart',
  templateUrl: './stacked-vert-bar-chart.component.html',
  styleUrls: ['./stacked-vert-bar-chart.component.css'],
  providers: [ChartService]
})
export class StackedVertBarChartComponent implements OnInit {

  @Input() chartData: NgxVerBarChart
  @Input() data: BehaviorSubject<NgxValue[]>
  @Input() parent: HTMLElement;
  @Input() canSelect: boolean
  view$: BehaviorSubject<number[]>

  constructor(private chartService: ChartService) {
    this.view$ = new BehaviorSubject<number[]>([])
  }

  ngOnInit(): void {
    let { parentWidth, parentHeight } = this.chartService.GetWidthAndHeight(this.chartData, this.parent);
    this.view$.value.unshift(parentWidth, parentHeight)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let { parentWidth, parentHeight } = this.chartService.GetWidthAndHeight(this.chartData, this.parent);
    this.view$.next([parentWidth, parentHeight])
  }

  axisDate(val: string): string {
    return new DatePipe('en').transform(val, 'hh a');
  }

  onSelect(value: NgxChartSelectData | string) {
    if (this.canSelect)
      this.chartService.onSelect(value, this.data)
  }
}