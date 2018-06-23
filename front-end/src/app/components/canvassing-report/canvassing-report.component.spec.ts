import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvassingReportComponent } from './canvassing-report.component';

describe('CanvassingReportComponent', () => {
  let component: CanvassingReportComponent;
  let fixture: ComponentFixture<CanvassingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvassingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvassingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
