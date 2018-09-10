import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//firebase Auth,Firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as  firebase from 'firebase/app';
import { AngularFirestoreModule} from "angularfire2/firestore";


import { ReactiveFormsModule } from '@angular/forms';
//google login
//import { GooglePlus } from '@ionic-native/google-plus';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

//environment
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { LoggedinGuard } from './guards/loggedin.guard';
import { LoggedoutGuard } from './guards/loggedout.guard';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
const firebaseConfig=environment.firebase;

//algolia with angular code

import { NgAisModule } from 'angular-instantsearch';
import { ViewComponent } from './search-text/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  entryComponents: [],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    NgAisModule,
    ReactiveFormsModule

  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,GooglePlus,LoggedinGuard,LoggedoutGuard,AdminGuard,SubscriberGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
