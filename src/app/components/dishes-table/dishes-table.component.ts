import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dishes-table',
  templateUrl: './dishes-table.component.html',
  styleUrls: ['./dishes-table.component.css']
})
export class DishesTableComponent implements OnInit {
  dishes: any = [];
  constructor(
    private dishService: DishService,
  ) { }

  ngOnInit(): void {
    this.dishService.getAllDishes().subscribe(
      (response: any) => {
        this.dishes = response;
      }
    );
  }
  deleteDishById(id: number) {
    this.dishService.deleteDishById(id).subscribe(
      ()=>{
        this.dishService.getAllDishes().subscribe(
          (response)=>{
            this.dishes = response;
          }
        );
      }
    );
  }

}
