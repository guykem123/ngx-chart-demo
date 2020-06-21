import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedVertBarChartComponent } from './stacked-vert-bar-chart.component';

describe('StackedVertBarChartComponent', () => {
  let component: StackedVertBarChartComponent;
  let fixture: ComponentFixture<StackedVertBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedVertBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedVertBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
