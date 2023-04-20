import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagatorSearchComponent } from './propagator-search.component';

describe('PropagatorSearchComponent', () => {
  let component: PropagatorSearchComponent;
  let fixture: ComponentFixture<PropagatorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagatorSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropagatorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
