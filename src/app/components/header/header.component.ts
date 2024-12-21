import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connectedUser: any = {};
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  isLoggedIn() {
    if (this.tokenStorageService.getToken()) {
      let decoded = this.tokenStorageService.getUser();
    }
    return (!!this.tokenStorageService.getToken() && !this.tokenStorageService.getUser().isBlocked);
  }

  isClient(){
    if(this.tokenStorageService.getUser())
    return this.tokenStorageService.getUser().roles.includes('client');
    return false;
  }
  isChef(){
    if(this.tokenStorageService.getUser() && !this.tokenStorageService.getUser().isBlocked)
    return this.tokenStorageService.getUser().roles.includes('chef');
    return false;
  }
  isAdmin(){
    if(this.tokenStorageService.getUser())
    return this.tokenStorageService.getUser().roles.includes('admin');
    return false;
  }
  signout(){
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
  userName(){
    return this.tokenStorageService.getUser().firstName;
  }
}
