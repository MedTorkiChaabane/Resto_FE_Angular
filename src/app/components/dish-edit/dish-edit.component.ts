import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  dish: any = {};
  editedDish: any = {user:{
    id:1
  }};
  dishId!: number;
  constructor(
    private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dishId = this.activatedRoute.snapshot.params['id'];
    this.dishService.getDishById(this.dishId).subscribe(
      (response) => {
        this.dish = response;
      }
    );
  }

  editDish() {
    console.log(this.dish);
    
    this.editedDish.id = this.dish.id;
    this.editedDish.name = this.dish.name;
    this.editedDish.description = this.dish.description;
    this.editedDish.price = this.dish.price;
    this.editedDish.user.id = this.dish.user.id;

    this.dishService.editDish(this.editedDish).subscribe(
      (response) => {
        console.log('Dish after editing', response);
        this.router.navigate(['/dashboard-chef']);
      }
    );

  }
}
