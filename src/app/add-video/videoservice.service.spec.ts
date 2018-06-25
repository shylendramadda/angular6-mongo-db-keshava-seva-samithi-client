import { TestBed, inject } from '@angular/core/testing';

import { VideoserviceService } from './videoservice.service';

describe('VideoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoserviceService]
    });
  });

  it('should be created', inject([VideoserviceService], (service: VideoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
