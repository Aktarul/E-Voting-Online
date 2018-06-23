import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerNavbarComponent } from './inner-navbar.component';

describe('InnerNavbarComponent', () => {
  let component: InnerNavbarComponent;
  let fixture: ComponentFixture<InnerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
