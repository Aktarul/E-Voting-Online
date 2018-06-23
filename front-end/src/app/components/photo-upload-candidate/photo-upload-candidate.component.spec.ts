import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadCandidateComponent } from './photo-upload-candidate.component';

describe('PhotoUploadCandidateComponent', () => {
  let component: PhotoUploadCandidateComponent;
  let fixture: ComponentFixture<PhotoUploadCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUploadCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploadCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
