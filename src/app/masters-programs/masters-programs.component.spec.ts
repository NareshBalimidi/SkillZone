import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersProgramsComponent } from './masters-programs.component';

describe('MastersProgramsComponent', () => {
  let component: MastersProgramsComponent;
  let fixture: ComponentFixture<MastersProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastersProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
