import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointSecretaryComponent } from './joint-secretary.component';

describe('JointSecretaryComponent', () => {
  let component: JointSecretaryComponent;
  let fixture: ComponentFixture<JointSecretaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointSecretaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
