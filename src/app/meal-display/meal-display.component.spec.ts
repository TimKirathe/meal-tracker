import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDisplayComponent } from './meal-display.component';

describe('MealDisplayComponent', () => {
  let component: MealDisplayComponent;
  let fixture: ComponentFixture<MealDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
