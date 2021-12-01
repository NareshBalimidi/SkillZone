import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerificationProgramsComponent } from './cerification-programs.component';

describe('CerificationProgramsComponent', () => {
  let component: CerificationProgramsComponent;
  let fixture: ComponentFixture<CerificationProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerificationProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerificationProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
