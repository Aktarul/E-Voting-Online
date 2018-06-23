import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicePresidentComponent } from './vice-president.component';

describe('VicePresidentComponent', () => {
  let component: VicePresidentComponent;
  let fixture: ComponentFixture<VicePresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicePresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicePresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
