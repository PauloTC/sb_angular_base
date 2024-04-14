import { TestBed } from '@angular/core/testing';

import { DaliComponentsService } from './dali-components.service';

describe('DaliComponentsService', () => {
  let service: DaliComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaliComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
