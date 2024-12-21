import { Component, OnInit } from '@angular/core';
import { ReservationComponent } from '../reservation/reservation.component';
import { ReservationService } from 'src/app/services/reservation.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  reservations: any = [];
  constructor(
    private reservationService: ReservationService,
    private tokenStorageService: TokenStorageService

  ) { }

  ngOnInit(): void {
    this.reservationService.getAllReservationsClient(this.tokenStorageService.getUser().connectedUserId).subscribe(
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
        this.reservationService.getAllReservationsClient(this.tokenStorageService.getUser().connectedUserId).subscribe(
          (response) => {
            this.reservations = response;
          }
        );
      }
    );
  }
}
