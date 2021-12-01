import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGraduationProgramsComponent } from './post-graduation-programs.component';

describe('PostGraduationProgramsComponent', () => {
  let component: PostGraduationProgramsComponent;
  let fixture: ComponentFixture<PostGraduationProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGraduationProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGraduationProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
