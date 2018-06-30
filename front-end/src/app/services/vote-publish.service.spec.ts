import { TestBed, inject } from '@angular/core/testing';

import { VotePublishService } from './vote-publish.service';

describe('VotePublishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotePublishService]
    });
  });

  it('should be created', inject([VotePublishService], (service: VotePublishService) => {
    expect(service).toBeTruthy();
  }));
});
