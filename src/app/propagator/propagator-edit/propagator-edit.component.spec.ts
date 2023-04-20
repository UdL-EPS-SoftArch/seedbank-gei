import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagatorEditComponent } from './propagator-edit.component';

describe('PropagatorEditComponent', () => {
  let component: PropagatorEditComponent;
  let fixture: ComponentFixture<PropagatorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagatorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropagatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
