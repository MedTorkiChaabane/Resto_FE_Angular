import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsChefTableComponent } from './reservations-chef-table.component';

describe('ReservationsChefTableComponent', () => {
  let component: ReservationsChefTableComponent;
  let fixture: ComponentFixture<ReservationsChefTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsChefTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsChefTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
