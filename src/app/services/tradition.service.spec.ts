import { TestBed } from '@angular/core/testing';

import { TraditionService } from './tradition.service';

describe('TraditionService', () => {
  let service: TraditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
