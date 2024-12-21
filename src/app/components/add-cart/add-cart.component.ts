import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  dish: any = {};
  reservation: any = {user:{}, dish:{}};
  dishId!: number;

  quantity: number = 1;  // Quantité initiale

  constructor(
    private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.dishId = this.activatedRoute.snapshot.params['id'];
    this.dishService.getDishById(this.dishId).subscribe(
      (response) => {
        this.dish = response;
      }
    );
  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addReservation() {
    this.reservation.dish.id = this.dish.id;
    this.reservation.user.id = this.tokenStorageService.getUser().connectedUserId;
    this.reservation.quantity = this.quantity;
    console.log(this.reservation);
    this.reservationService.addReservation(this.reservation).subscribe(
      (response)=>{
        console.log('here response from BE', response);
        this.router.navigate(['/cart-list']);
      }
    );
    
  }
}
