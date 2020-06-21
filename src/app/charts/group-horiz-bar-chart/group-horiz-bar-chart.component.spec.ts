import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHorizBarChartComponent } from './group-horiz-bar-chart.component';

describe('GroupHorizBarChartComponent', () => {
  let component: GroupHorizBarChartComponent;
  let fixture: ComponentFixture<GroupHorizBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupHorizBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupHorizBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
