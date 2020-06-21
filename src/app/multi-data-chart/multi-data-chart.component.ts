import { Component, OnInit, Input } from '@angular/core';
import { DataChart } from '../models/dataChart';

@Component({
  selector: 'app-multi-data-chart',
  templateUrl: './multi-data-chart.component.html',
  styleUrls: ['./multi-data-chart.component.css']
})
export class MultiDataChartComponent implements OnInit {

  @Input() chartsData: DataChart[]
  constructor() { }

  ngOnInit(): void {
    if (!this.chartsData)
      throw new Error("multi-data-chart-component must have chartsData input from parent")
  }

}
