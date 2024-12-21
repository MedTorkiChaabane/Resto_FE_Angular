import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: any =[];
  searchName: string = '';
  searchPrice: number | null = null;
  constructor(
    private dishService: DishService
  ) { }

  ngOnInit(): void {
    this.dishService.getAllDishes().subscribe(
      (response)=>{
        this.dishes = response;
      }
    );
  }

  filteredDishes(): any[] {
    return this.dishes.filter((dish: any ) => {
      if (this.searchName) {
        // Filter by name only
        return dish.name.toLowerCase().includes(this.searchName.toLowerCase());
      } else if (this.searchPrice) {
        // Filter by price only
        return dish.price <= this.searchPrice;
      }
      // If no search criteria, return all dishes
      return true;
    });
  }

}
