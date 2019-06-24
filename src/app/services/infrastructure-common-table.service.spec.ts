import { TestBed } from '@angular/core/testing';

import { InfrastructureCommonTableService } from './infrastructure-common-table.service';

describe('InfrastructureCommonTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfrastructureCommonTableService = TestBed.get(InfrastructureCommonTableService);
    expect(service).toBeTruthy();
  });
});
