import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxValue } from 'src/app/services/dataService/data.service';
import { NgxGroupBarChart, NgxStackChart, NgxVerBarChart } from 'src/app/models/ngxChart';
import { DataChart } from 'src/app/models/dataChart';

@Component({
  selector: 'app-data-chart-row',
  templateUrl: './data-chart-row.component.html',
  styleUrls: ['./data-chart-row.component.css']
})
export class DataChartRowComponent implements OnInit {

  width: string
  @Input() data: DataChart;
  title: string
  vartData: BehaviorSubject<NgxValue[]>
  horizData: BehaviorSubject<NgxValue[]>
  amount: number
  percentage: number
  isPercentagePositive: boolean
  vartChartData: NgxVerBarChart = new NgxVerBarChart()
  constructor() {
    this.vartChartData = {
      ...this.vartChartData,
      barPadding:2,
      colorScheme: {
        domain: ['#040404']
      }
    }
  }

  ngOnInit(): void {
    if (!this.data)
      throw new Error("data-chart-component must have data input from parent")
    const { title, vartData, horizData, amount, percentage } = this.data
    this.title = title;
    this.vartData = vartData;
    this.width = horizData + "px";
    this.amount = amount;
    this.percentage = percentage;
    this.isPercentagePositive = this.percentage > 0
  }

}
