import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

//services 
import { AfService } from './providers/af.service';

//algolia
import { NgAisModule } from 'angular-instantsearch';

//firebase
import { AngularFirestoreModule} from "angularfire2/firestore";
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';

//guards
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';

export const firebaseConfig = environment.firebase;


//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule, 
  MatInputModule, 
  MatSelectModule,
  MatFormFieldModule, 
  MatProgressSpinnerModule, 
  MatProgressBarModule, 
  MatIconModule, 
  MatCardModule, 
  MatDialogModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatTooltipModule,
  MatListModule,
  MatChipsModule,
  MatSnackBarModule,

} from '@angular/material';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';

import { LayoutModule } from '@angular/cdk/layout';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AddComponent } from './add/add.component';
import { SubmitSucessComponent } from './submit-sucess/submit-sucess.component';
import { ViewSearchComponent } from './view-search/view-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    ViewAdminComponent,
    AddComponent,
    SubmitSucessComponent,
    ViewSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAisModule.forRoot(),


    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    

    BrowserAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatChipsModule,
    MatSnackBarModule,

    MatTooltipModule,
  ],
  providers: [AfService,AdminGuard,SubscriberGuard,LoginGuard,LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
