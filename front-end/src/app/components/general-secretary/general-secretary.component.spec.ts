import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSecretaryComponent } from './general-secretary.component';

describe('GeneralSecretaryComponent', () => {
  let component: GeneralSecretaryComponent;
  let fixture: ComponentFixture<GeneralSecretaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSecretaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
