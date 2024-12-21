import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // Form ID
  signupForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', [Validators.required]],
      speciality: [''],
      experience: ['']
    });

    // Conditionally add required validators for speciality and experience based on role
    this.signupForm.get('role')?.valueChanges.subscribe(role => {
      if (role === 'chef') {
        this.signupForm.get('speciality')?.setValidators([Validators.required]);
        this.signupForm.get('experience')?.setValidators([Validators.required]);
      } else {
        this.signupForm.get('speciality')?.clearValidators();
        this.signupForm.get('experience')?.clearValidators();
      }
      this.signupForm.get('speciality')?.updateValueAndValidity();
      this.signupForm.get('experience')?.updateValueAndValidity();
    });
  }

  signup() {
    if (this.signupForm.value.role == 'client') {
      this.signupForm.value.speciality = null;
      this.signupForm.value.experience = null;
    }
    if (this.signupForm.value.role === 'chef') {
      this.signupForm.value.blocked = true;
    }
    
    this.signupForm.value.roles = [`${this.signupForm.value.role}`];

    this.userService.signup(this.signupForm.value).subscribe(
      (response) => {
        console.log("User added with success", response);
        this.router.navigate(['/login']);
      }
    );
  
  }

}
