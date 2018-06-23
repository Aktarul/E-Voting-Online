import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterListComponent } from './voter-list.component';

describe('VoterListComponent', () => {
  let component: VoterListComponent;
  let fixture: ComponentFixture<VoterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
