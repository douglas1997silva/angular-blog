import { TestBed } from '@angular/core/testing';

import { ApiOnePieceService } from './api-one-piece.service';

describe('ApiOnePieceService', () => {
  let service: ApiOnePieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOnePieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
