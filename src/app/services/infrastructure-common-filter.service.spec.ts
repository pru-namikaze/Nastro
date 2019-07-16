import { TestBed } from '@angular/core/testing';

import { InfrastructureCommonFilterService } from './infrastructure-common-filter.service';

describe('InfrastructureCommonFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfrastructureCommonFilterService = TestBed.get(InfrastructureCommonFilterService);
    expect(service).toBeTruthy();
  });
});
