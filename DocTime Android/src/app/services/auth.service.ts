import { Injectable } from '@angular/core';


import { NavController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';


import { User } from '../interfaces/user';

import { switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Router} from '@angular/router';

import { AngularFirestore,} from 'angularfire2/firestore';
import{AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from '../../environments/environment';



 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  

  constructor(private navCtrl:NavController,private afAuth: AngularFireAuth,public afs: AngularFirestore, public router:Router, private gplus: GooglePlus, private platform: Platform) {
    
    this.user = afAuth.authState.pipe(switchMap( user =>{
      if(user){
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }
      else{
        return of(null);
      }
    }
    ));

  }


  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<void> {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': environment.WebClientId,
        'offline': true,
      });
      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )
      .then(()=>{
        // this.router.navigateByUrl('/user');
        this.router.navigateByUrl('/dashboard');
        
       ////redirect to dashboard based on user
      });
  
    } catch(err) {
      alert("failed bro"+err);
    }
  }


  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider).then((sucess)=>{
        // alert("Sucessfully logged in");
        // this.navCtrl.goRoot('/user');
        this.router.navigateByUrl('/dashboard');
      });
  
    } catch(err) {
      console.log(err);
    }
  
  }

  
  
  signOut() {
    this.afAuth.auth.signOut();
    //redirect to home clear history
    //clear history
    this.router.navigateByUrl('/home');
  }





  

}
