import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dish-info',
  templateUrl: './dish-info.component.html',
  styleUrls: ['./dish-info.component.css']
})
export class DishInfoComponent implements OnInit {
  dish: any = {};
  dishId!: number;
  constructor(
    private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dishId = this.activatedRoute.snapshot.params['id'];
    this.dishService.getDishById(this.dishId).subscribe(
      (response)=>{
        this.dish = response;
      }
    );
  }
  goToDashboard(){
    this.router.navigate(['/dashboard-chef'])
  }

}
