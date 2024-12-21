import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: any = [];
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
        
      }
    );
  }
  goToDisplay(id: number) {
    this.router.navigate(['/user-info/' + id]);
  }
  deleteUserById(id: number) {
   // Afficher la popup de confirmation
   Swal.fire({
    title: 'Are you sure?',
    text: "User ID: "+id+" will be deleted!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      // Si l'utilisateur confirme, procéder à la suppression
      this.userService.deleteUserById(id).subscribe(() => {
        // Rafraîchir la liste des utilisateurs après suppression
        this.userService.getAllUsers().subscribe((response) => {
          this.users = response;
        });
        // Afficher un message de confirmation
        Swal.fire(
          'Supprimé !',
          'User ID: '+id+' was deleted ',
          'success'
        );
      });
    }
  });
  }
  unBlockUser(id: number) {
    this.userService.unBlockUser(id).subscribe(
      () => {
        console.log("User unblocked successfully!");
        this.userService.getAllUsers().subscribe(
          (response)=>{
              this.users = response;
          }
        );
      }
    );
  }
  blockUser(id: number) {
    this.userService.blockUser(id).subscribe(
      () => {
        console.log("User blocked successfully!");
        this.userService.getAllUsers().subscribe(
          (response)=>{
              this.users = response;
          }
        );
      }
    );
  }
}
