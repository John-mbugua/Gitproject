import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise041Component } from './exercise041.component';

describe('Exercise041Component', () => {
  let component: Exercise041Component;
  let fixture: ComponentFixture<Exercise041Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise041Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
