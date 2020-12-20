import { TestBed } from '@angular/core/testing';

import { MlMaskDetectionService } from './ml-mask-detection.service';

describe('MlMaskDetectionService', () => {
  let service: MlMaskDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlMaskDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
