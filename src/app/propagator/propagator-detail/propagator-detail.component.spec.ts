import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagatorDetailComponent } from './propagator-detail.component';

describe('PropagatorDetailComponent', () => {
  let component: PropagatorDetailComponent;
  let fixture: ComponentFixture<PropagatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagatorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropagatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
