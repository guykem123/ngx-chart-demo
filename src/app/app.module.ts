import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupHorizBarChartComponent } from './charts/group-horiz-bar-chart/group-horiz-bar-chart.component';
import { StackedVertBarChartComponent } from './charts/stacked-vert-bar-chart/stacked-vert-bar-chart.component';
import { StackedAreaChartComponent } from './charts/stacked-area-chart/stacked-area-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CardComponent } from './card/card.component';
import { MultiDataChartComponent } from './multi-data-chart/multi-data-chart.component';
import { DataChartRowComponent } from './multi-data-chart/data-chart-row/data-chart-row.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupHorizBarChartComponent,
    StackedVertBarChartComponent,
    StackedAreaChartComponent,
    CardComponent,
    MultiDataChartComponent,
    DataChartRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
