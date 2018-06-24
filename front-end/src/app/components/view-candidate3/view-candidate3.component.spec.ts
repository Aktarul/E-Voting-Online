import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandidate3Component } from './view-candidate3.component';

describe('ViewCandidate3Component', () => {
  let component: ViewCandidate3Component;
  let fixture: ComponentFixture<ViewCandidate3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCandidate3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCandidate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
