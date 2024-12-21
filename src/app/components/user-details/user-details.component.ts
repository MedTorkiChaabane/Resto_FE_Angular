import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any = {};
  connectedUserId!: number;
  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.connectedUserId = this.tokenStorageService.getUser().connectedUserId;
    this.userService.getUserById(this.connectedUserId).subscribe(
      (response) => {
        this.user = response;
      }
    );
  }

  goToEdit() {
    this.router.navigate(['/user-edit']);
  }

}
