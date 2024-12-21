import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-reservations-chef-table',
  templateUrl: './reservations-chef-table.component.html',
  styleUrls: ['./reservations-chef-table.component.css']
})
export class ReservationsChefTableComponent implements OnInit {
  reservations: any = [];
  constructor(
    private reservationService: ReservationService,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.reservationService.getAllReservationsChef(this.tokenStorageService.getUser().connectedUserId).subscribe(
      (response) => {
        this.reservations = response;
      }
    );
  }

  calculateTotalReservations(): number {
    let total = 0;
    for (let reservation of this.reservations) {
      total += reservation.dish.price * reservation.quantity;
    }
    return total;
  }

  deleteReservationById(id: number) {
    this.reservationService.deleteRservationById(id).subscribe(
      () => {
        this.reservationService.getAllReservationsChef(this.tokenStorageService.getUser().connectedUserId).subscribe(
          (response) => {
            this.reservations = response;
          }
        );
      }
    );
  }

}
