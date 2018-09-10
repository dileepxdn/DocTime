import { Component, OnInit } from '@angular/core';
import {AfService} from '../providers/af.service';
import { User } from "../providers/user";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;

  constructor(public afService: AfService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user);
  }

  login(){
    this.afService.loginWithGoogle();
  }

}
