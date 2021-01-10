import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: number;

  constructor(
    private router: Router,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    const body = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      phone: this.phone,
    }
    this.userService.registerUser(body).subscribe(async (response:any)=>{
      if(response.Data) {
        this.router.navigate(['/login']);
      }
    });
  }

}
