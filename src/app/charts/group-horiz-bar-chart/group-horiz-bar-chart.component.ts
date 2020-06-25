import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { NgxValue } from 'src/app/services/dataService/data.service';
import { ChartService } from 'src/app/services/chartService/chart.service';
import { NgxChartSelectData } from 'src/app/models/stackedAreaSelectData';
import { DatePipe } from '@angular/common';
import { NgxGroupBarChart } from 'src/app/models/ngxChart';
import { BehaviorSubject, Subject } from 'rxjs';
import { LegendPosition } from 'src/app/models/legendPosition';
import { ScrollerItem } from 'src/app/models/scrollerItem';

@Component({
  selector: 'app-group-horiz-bar-chart',
  templateUrl: './group-horiz-bar-chart.component.html',
  styleUrls: ['./group-horiz-bar-chart.component.css'],
  providers: [ChartService]
})
export class GroupHorizBarChartComponent implements OnInit {

  @ViewChild("chart") chartElem: ElementRef
  @Input() parent: HTMLElement;
  @Input() chartData: NgxGroupBarChart
  @Input() data: BehaviorSubject<NgxValue[]>
  @Input() canSelect: boolean
  view$: BehaviorSubject<number[]>
  scrollerItems: ScrollerItem[]

  constructor(private chartService: ChartService) {
    this.view$ = new BehaviorSubject<number[]>([])
  }

  ngOnInit(): void {
    this.setScrollerItem();
    let { parentWidth, parentHeight } = this.chartService.GetWidthAndHeight(this.chartData, this.parent);
    this.view$.value.unshift(parentWidth, parentHeight)
  }

  private setScrollerItem() {
    this.scrollerItems = this.data.value[0].series.map(serie => ({ name: serie.name, color: "" }));
    for (let i = 0; i < this.scrollerItems.length; i++) {
      this.scrollerItems[i].color = this.chartData.colorScheme.domain[i];
    }
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
    if (this.canSelect) {
      this.chartService.onSelect(value, this.data)
      console.log(this.chartElem)
      window.dispatchEvent(new Event("data-change"))
      this.setScrollerItem();
    }

  }
  selectScrollerEmmited(item: ScrollerItem) {
    this.onSelect(item.name)
  }

}
