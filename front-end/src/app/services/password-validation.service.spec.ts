import { TestBed, inject } from '@angular/core/testing';

import { PasswordValidationService } from './password-validation.service';

describe('PasswordValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordValidationService]
    });
  });

  it('should be created', inject([PasswordValidationService], (service: PasswordValidationService) => {
    expect(service).toBeTruthy();
  }));
});
