import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';
import { Router} from '@angular/router'; //clean this

import { NavController,Nav,App } from '@ionic/angular';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user:User;

  constructor(private auth:AuthService,public router:Router,private nav:NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.auth.user.subscribe(user => this.user = user);

  }



  logout(){
    this.auth.signOut();
  }


  route(r){
    this.nav.navigateForward(r);
  }




}
