import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagatorListComponent } from './propagator-list.component';

describe('PropagatorListComponent', () => {
  let component: PropagatorListComponent;
  let fixture: ComponentFixture<PropagatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagatorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropagatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
