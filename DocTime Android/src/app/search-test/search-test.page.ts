import { Component} from '@angular/core';
import { DataService} from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

import { Router} from '@angular/router'

// const translationTable = {
//   Apple: 'pomme',
// };

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.page.html',
  styleUrls: ['./search-test.page.scss'],
})
export class SearchTestPage  {
  user:User; 
  loading:boolean=false;
  
  constructor( private auth:AuthService,private ds: DataService,private router:Router){

  }


  filter:boolean=true;
  
  ionViewWillEnter(){
    this.auth.user.subscribe(user => this.user = user);

  }

  

  doRefresh(event) {
    
    this.loading=true;

    setTimeout(() => {
      this.loading=false;
      event.target.complete();
    }, 1500);
  }

  view(id){
    this.ds.changeMessage(id);
  }


}
