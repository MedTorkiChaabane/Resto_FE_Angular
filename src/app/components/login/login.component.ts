import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest: any = {};
  errorMsg: string = '';
  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  
  login() {
    this.userService.login(this.loginRequest).subscribe(
      (response: any) => {
        console.log('Here response after login', response.token);
        if (response.token) {
          this.tokenStorageService.saveToken(response.token);
          let decoded: any = jwtDecode(response.token);
          this.tokenStorageService.saveUser(decoded);
          console.log(decoded);

          if (decoded.roles.includes('admin')) {
            this.router.navigate(['/admin']);
            this.errorMsg = '';
          } else if (decoded.roles.includes('chef')){
            if(!decoded.isBlocked){
              this.router.navigate(['/dashboard-chef']);
              this.errorMsg = '';
            } else{
              this.errorMsg = 'Please contact admin! Account not activated Yet!';
            }
           
          }
          else {
            this.router.navigate(['/']);
            this.errorMsg = '';
          }

        }
      },
      (error) => {
        this.errorMsg = "Please check Email/Pwd!"
      }
    );
  }


}
