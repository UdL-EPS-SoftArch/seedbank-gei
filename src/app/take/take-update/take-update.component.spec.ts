import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUpdateComponent } from './take-update.component';

describe('TakeUpdateComponent', () => {
  let component: TakeUpdateComponent;
  let fixture: ComponentFixture<TakeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
