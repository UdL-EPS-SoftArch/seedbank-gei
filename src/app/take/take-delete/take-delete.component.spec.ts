import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeDeleteComponent } from './take-delete.component';

describe('TakeDeleteComponent', () => {
  let component: TakeDeleteComponent;
  let fixture: ComponentFixture<TakeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
