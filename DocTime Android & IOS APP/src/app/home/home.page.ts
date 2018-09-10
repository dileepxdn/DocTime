import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { NavController } from '@ionic/angular';

import { LoginPage } from '../login/login.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(public router:Router,private nav:NavController){

}

  login(){
    // this.router.navigateByUrl('/login');
    this.nav.navigateForward('/login');
  }

}
