import { TestBed, inject } from '@angular/core/testing';

import { ImageListServiceService } from './image-list-service.service';

describe('ImageListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageListServiceService]
    });
  });

  it('should be created', inject([ImageListServiceService], (service: ImageListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
