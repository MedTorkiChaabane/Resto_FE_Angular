import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesChefComponent } from './dishes-chef.component';

describe('DishesChefComponent', () => {
  let component: DishesChefComponent;
  let fixture: ComponentFixture<DishesChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
