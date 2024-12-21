import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any = {};
  editRequest: any = {};
  connectedUserId!: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {

    this.connectedUserId = this.tokenStorageService.getUser().connectedUserId;
    this.userService.getUserById(this.connectedUserId).subscribe(
      (response) => {
        this.user = response;
        console.log(this.user);
      }
    );
  }

  editUser() {
    this.editRequest.id = this.user.id;
    this.editRequest.firstName = this.user.firstName;
    this.editRequest.lastName = this.user.lastName;
    this.editRequest.phone = this.user.phone;
    this.editRequest.address = this.user.address;
    this.userService.editUser(this.editRequest).subscribe(
      (response) => {
        console.log('here obj after edit', response);
        this.router.navigate(['/user-details']);
      }
    );

  }
}
