import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-dishes-chef',
  templateUrl: './dishes-chef.component.html',
  styleUrls: ['./dishes-chef.component.css']
})
export class DishesChefComponent implements OnInit {
  myDishes: any = [];
  connectedChefId!: number;
  constructor(
    private dishService: DishService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.connectedChefId = this.tokenStorageService.getUser().connectedUserId;
    console.log(this.connectedChefId);

    this.dishService.getDishesByChefId(this.connectedChefId).subscribe(
      (response) => {
        this.myDishes = response;
      }
    );
  }

  displayDishById(id: number) {
    this.router.navigate([`/dish-info/${id}`]);
  }

  goToEdit(id: number) {
    this.router.navigate([`/dish-edit/${id}`]);
  }

  deleteDishById(id: number) {
    this.dishService.deleteDishById(id).subscribe(
      () => {
        this.dishService.getDishesByChefId(this.connectedChefId).subscribe(
          (response) => {
            this.myDishes = response;
          }
        );
      }
    );
  }

}
