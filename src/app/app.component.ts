import { Component } from '@angular/core';
import { NgxGroupBarChart, NgxStackChart } from './models/ngxChart';
import { BehaviorSubject } from 'rxjs';
import { NgxValue, DataService } from './services/dataService/data.service';
import { DataChart } from './models/dataChart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groupBarChartData: NgxGroupBarChart = new NgxGroupBarChart()
  groupBarData: BehaviorSubject<NgxValue[]>
  stackBarChartData: NgxStackChart = new NgxStackChart()
  stackBarData: BehaviorSubject<NgxValue[]>

  stackAreaChartData: NgxStackChart = new NgxStackChart()
  stackAreaData: BehaviorSubject<NgxValue[]>

  constructor(private dataService: DataService) {
    this.setGroupBarData();
    this.setStackBarData();
    this.setStackAreaChart();
  }

  private setStackAreaChart() {
    this.stackAreaData = this.dataService.GetData();
    this.stackAreaChartData = {
      ...this.stackAreaChartData,
      xAxis: true,
      yAxis: true,
      showLegend: true,
      chartSize: [300, 200],
    };
  }

  private setStackBarData() {
    this.stackBarData = this.dataService.GetData()
    this.stackBarChartData = {
      ...this.stackBarChartData,
      xAxis: true,
      yAxis: true,
      chartSize: [900, 200],
      showLegend: true
    };
  }

  private setGroupBarData() {
    this.groupBarData = this.dataService.GetData();
    this.groupBarChartData = {
      ...this.groupBarChartData,
      barPadding: 0,
      groupPadding: 4,
      xAxis: true,
      yAxis: true,
      showLegend: true,
      chartSize: [300, 200],
    }
  }

  chartsData: DataChart[] = [
    {
      title: "compute",
      amount: 131571,
      vartData: this.dataService.GetDataComputeVert(),
      horizData: this.dataService.GetDataComputeHoriz(),
      percentage: 7
    },
    {
      title: "compute",
      amount: 131571,
      vartData: this.dataService.GetDataComputeVert(),
      horizData: this.dataService.GetDataComputeHoriz(),
      percentage: 7
    },
    {
      title: "compute",
      amount: 131571,
      vartData: this.dataService.GetDataComputeVert(),
      horizData: this.dataService.GetDataComputeHoriz(),
      percentage: 7
    },
    {
      title: "compute",
      amount: 131571,
      vartData: this.dataService.GetDataComputeVert(),
      horizData: this.dataService.GetDataComputeHoriz(),
      percentage: 7
    },
    {
      title: "compute",
      amount: 131571,
      vartData: this.dataService.GetDataComputeVert(),
      horizData: this.dataService.GetDataComputeHoriz(),
      percentage: 7
    },
    {
      title: "compute",
      amount: 131571,
      vartData: this.dataService.GetDataComputeVert(),
      horizData: this.dataService.GetDataComputeHoriz(),
      percentage: 7
    },
    {
      title: "compute",
      amount: 131571,
      vartData: this.dataService.GetDataComputeVert(),
      horizData: this.dataService.GetDataComputeHoriz(),
      percentage: -7
    }
  ]
}
