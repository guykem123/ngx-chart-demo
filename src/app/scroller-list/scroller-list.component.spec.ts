import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerListComponent } from './scroller-list.component';

describe('ScrollerListComponent', () => {
  let component: ScrollerListComponent;
  let fixture: ComponentFixture<ScrollerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
