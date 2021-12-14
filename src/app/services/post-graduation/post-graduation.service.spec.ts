import { TestBed } from '@angular/core/testing';

import { PostGraduationService } from './post-graduation.service';

describe('PostGraduationService', () => {
  let service: PostGraduationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostGraduationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
