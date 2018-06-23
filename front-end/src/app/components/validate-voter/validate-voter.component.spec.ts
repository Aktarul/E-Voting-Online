import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateVoterComponent } from './validate-voter.component';

describe('ValidateVoterComponent', () => {
  let component: ValidateVoterComponent;
  let fixture: ComponentFixture<ValidateVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateVoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
