import { TestBed } from '@angular/core/testing';

import { GetReloadDataService } from './get-reload-data.service';

describe('GetReloadDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetReloadDataService = TestBed.get(GetReloadDataService);
    expect(service).toBeTruthy();
  });
});
