import { TestBed } from '@angular/core/testing';

import { SujetService } from './sujet.service';

describe('SujetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SujetService = TestBed.get(SujetService);
    expect(service).toBeTruthy();
  });
});
