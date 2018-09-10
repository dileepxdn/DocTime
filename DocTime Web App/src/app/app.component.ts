import { Component } from '@angular/core';
import {AfService} from './providers/af.service';
import { User } from "./providers/user";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doc-time';
  user:User;


  

  constructor(public afService: AfService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user);
    
  }
 

  login(){
    this.afService.loginWithGoogle();
  }

  logout(){
    this.afService.logout();
  }


}
