import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTakeComponent } from './create-take.component';

describe('CreateTakeComponent', () => {
  let component: CreateTakeComponent;
  let fixture: ComponentFixture<CreateTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
