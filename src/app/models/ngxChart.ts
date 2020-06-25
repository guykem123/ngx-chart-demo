import { LegendPosition } from './legendPosition';
import { ColorScheme } from './colorScheme';

export interface NgxChart {
    colorScheme: ColorScheme,
    xAxis: boolean,
    yAxis: boolean,
    showLegend: boolean,
    legendPosition: LegendPosition,
    legendTitle: string,
    showGridLines: boolean,
    roundDomains: boolean,
}

export interface NgxGroupBarChart {
    noBarWhenZero: boolean,
    barPadding: number,
    groupPadding: number,
    showDataLabel: boolean,
}

export class NgxGroupBarChart implements NgxGroupBarChart, NgxChart {
    colorScheme: ColorScheme;
    legendPosition: LegendPosition;
    legendTitle: string;
    showGridLines: boolean;
    roundDomains: boolean;
    xAxis: boolean;
    yAxis: boolean;
    showLegend: boolean;
    noBarWhenZero: boolean;
    barPadding: number;
    groupPadding: number;
    showDataLabel: boolean
    constructor() {
        this.xAxis = false
        this.yAxis = false
        this.showLegend = false
        this.showGridLines = true
        this.roundDomains = false
        this.noBarWhenZero = true
        this.barPadding = 8
        this.groupPadding = 16
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.legendPosition = LegendPosition.Below
        this.legendTitle = "Legend"
        this.showDataLabel = false
    }
}

export class NgxStackChart implements NgxChart {
    colorScheme: ColorScheme;
    legendPosition: LegendPosition;
    legendTitle: string;
    showGridLines: boolean;
    roundDomains: boolean;
    xAxis: boolean;
    yAxis: boolean;
    showLegend: boolean;
    constructor() {
        this.xAxis = false
        this.yAxis = false
        this.showLegend = false
        this.showGridLines = true
        this.roundDomains = false
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.legendPosition = LegendPosition.Below
        this.legendTitle = "Legend"
    }
}

export class NgxVerBarChart implements NgxChart {
    colorScheme: ColorScheme;
    legendPosition: LegendPosition;
    legendTitle: string;
    showGridLines: boolean;
    roundDomains: boolean;
    xAxis: boolean;
    yAxis: boolean;
    showLegend: boolean;
    barPadding: number
    constructor() {
        this.xAxis = false
        this.yAxis = false
        this.showLegend = false
        this.showGridLines = true
        this.roundDomains = false
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.legendPosition = LegendPosition.Below
        this.legendTitle = "Legend"
        this.barPadding = 8;
    }
}