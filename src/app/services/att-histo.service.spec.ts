import { TestBed } from '@angular/core/testing';

import { AttHistoService } from './att-histo.service';

describe('AttHistoService', () => {
  let service: AttHistoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttHistoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
