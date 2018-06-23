import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeasurerComponent } from './teasurer.component';

describe('TeasurerComponent', () => {
  let component: TeasurerComponent;
  let fixture: ComponentFixture<TeasurerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeasurerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeasurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
