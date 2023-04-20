import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagatorDeleteComponent } from './propagator-delete.component';

describe('PropagatorDeleteComponent', () => {
  let component: PropagatorDeleteComponent;
  let fixture: ComponentFixture<PropagatorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagatorDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropagatorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
