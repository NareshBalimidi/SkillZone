import { TestBed } from '@angular/core/testing';

import { MastersProgramService } from './masters-program.service';

describe('MastersProgramService', () => {
  let service: MastersProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastersProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
