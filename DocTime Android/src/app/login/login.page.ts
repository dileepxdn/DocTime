import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User;

  loading:boolean=false;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  
 

  login(){
    this.loading=true;
    this.auth.googleLogin();
    this.loading=false;
  }

}
