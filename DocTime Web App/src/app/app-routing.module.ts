import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AddComponent } from './add/add.component';
import { ViewSearchComponent } from './view-search/view-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[LogoutGuard] },
  { path: 'login', component:LoginComponent, canActivate:[LogoutGuard]},

  { path: 'dashboard', component:DashboardComponent,canActivate:[LoginGuard]},

  { path: 'search', component: SearchComponent , canActivate:[SubscriberGuard] },
  { path: 'search/view', component: ViewSearchComponent, canActivate:[SubscriberGuard] },

  { path: 'admin', component: AdminComponent , canActivate:[AdminGuard]},
  { path: 'admin/view', component: ViewAdminComponent,  canActivate:[AdminGuard]},
  { path: 'admin/add', component: AddComponent,  canActivate:[AdminGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
