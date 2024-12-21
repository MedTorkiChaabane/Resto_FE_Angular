import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  dish: any = {
    'name':'',
    'description':'',
    'price':'',
    'user':{
      id:0,
    }
  };
  connectedUserId! : number;
  constructor(
    private tokenStorageService: TokenStorageService,
    private dishService: DishService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.connectedUserId = this.tokenStorageService.getUser().connectedUserId;
    this.dish.user.id = this.connectedUserId;
  }

  addDish(){  
    this.dishService.addDish(this.dish).subscribe(
      (response)=>{
       console.log("added with success", response);
       this.router.navigate(['/dashboard-chef']);
      }
    );
  }

}
