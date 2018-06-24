import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandidate2Component } from './view-candidate2.component';

describe('ViewCandidate2Component', () => {
  let component: ViewCandidate2Component;
  let fixture: ComponentFixture<ViewCandidate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCandidate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCandidate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
