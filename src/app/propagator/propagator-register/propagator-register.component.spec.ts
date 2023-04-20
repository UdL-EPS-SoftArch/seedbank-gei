import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagatorRegisterComponent } from './propagator-register.component';

describe('PropagatorRegisterComponent', () => {
  let component: PropagatorRegisterComponent;
  let fixture: ComponentFixture<PropagatorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagatorRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropagatorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
