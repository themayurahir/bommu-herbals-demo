import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // @Output() outputEvent = new EventEmitter()
  email:string;
  password: string;

  constructor(
    private router: Router,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
  }

  login(){
    const body = {
      email: this.email,
      password: this.password,
    }
    this.userService.loginUser(body).subscribe(async (response:any)=>{
      console.log('Login response', response);
      localStorage.setItem('user', JSON.stringify(response.Data));
      // this.outputEvent.emit(response);
      this.router.navigate(['/']);
    });
  }
}
