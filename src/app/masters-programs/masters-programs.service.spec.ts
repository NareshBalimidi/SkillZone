import { TestBed } from '@angular/core/testing';

import { MastersProgramsService } from './masters-programs.service';

describe('MastersProgramsService', () => {
  let service: MastersProgramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastersProgramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
