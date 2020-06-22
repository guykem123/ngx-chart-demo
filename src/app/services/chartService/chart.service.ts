import { Injectable } from '@angular/core';
import { isString } from 'util';
import { NgxValue } from '../dataService/data.service';
import { NgxChartSelectData } from 'src/app/models/stackedAreaSelectData';
import { BehaviorSubject } from 'rxjs';
import { LegendPosition } from 'src/app/models/legendPosition';
import { NgxChart } from 'src/app/models/ngxChart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  data: NgxValue[]
  isDataFiltered: boolean = false;

  constructor() {
  }

  onSelect(value: NgxChartSelectData | string, data: BehaviorSubject<NgxValue[]>) {
    this.data = this.data || data.value;
    let filterByName

    if (isString(value))
      filterByName = value
    else {
      if (this.data.find(data => data.name == (<NgxChartSelectData>value).series))
        filterByName = (<NgxChartSelectData>value).series
      else
        filterByName = (<NgxChartSelectData>value).name
    }

    if (this.isDataFiltered) {
      data.next(this.data)
    }
    else {
      if (this.data.find(data => data.name == filterByName)) {
        const newData = this.data.filter(data => data.name == filterByName)
        data.next(newData)
      }
      else {
        const newData = this.data.map(ngxValue => ({
          ...ngxValue,
          series: ngxValue.series.filter(serie => serie.name == filterByName)
        }))
        data.next(newData)
      }
    }

    this.isDataFiltered = !this.isDataFiltered
  }

  GetWidthAndHeight(chartData: NgxChart, parent: HTMLElement) {
    let parentHeight = (chartData.showLegend
      && chartData.legendPosition == LegendPosition.Below) ?
      parent.clientHeight - 60 :
      parent.clientHeight;
    let parentWidth = parent.clientWidth;
    return { parentWidth, parentHeight };
  }
}
