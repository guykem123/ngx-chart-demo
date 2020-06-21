import { BehaviorSubject } from 'rxjs';
import { NgxValue } from '../services/dataService/data.service';

export interface DataChart {
    title: string,
    vartData: BehaviorSubject<NgxValue[]>,
    horizData: BehaviorSubject<NgxValue[]>,
    amount: number,
    percentage: number
}