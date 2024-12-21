import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservations-table',
  templateUrl: './reservations-table.component.html',
  styleUrls: ['./reservations-table.component.css']
})
export class ReservationsTableComponent implements OnInit {
  reservations: any = [];
  constructor(
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.reservationService.getAllReservation().subscribe(
      (response) => {
        this.reservations = response;
      }
    );
  }

  deleteReservationById(id: number) {
    this.reservationService.deleteRservationById(id).subscribe(
      () => {
        this.reservationService.getAllReservation().subscribe(
          (response) => {
            this.reservations = response;
          }
        );
      }
    );
  }

}
