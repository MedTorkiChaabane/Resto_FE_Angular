import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() dish : any ={};
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToCart(id: any){
    this.router.navigate(['/add-cart'+`/${id}`])
  }

}
