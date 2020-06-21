import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChartRowComponent } from './data-chart-row.component';

describe('DataChartRowComponent', () => {
  let component: DataChartRowComponent;
  let fixture: ComponentFixture<DataChartRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataChartRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChartRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
