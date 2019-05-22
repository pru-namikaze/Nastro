import { TestBed } from '@angular/core/testing';

import { InfrastructureApiService } from './infrastructure-api.service';

describe('InfrastructureApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfrastructureApiService = TestBed.get(InfrastructureApiService);
    expect(service).toBeTruthy();
  });
});
