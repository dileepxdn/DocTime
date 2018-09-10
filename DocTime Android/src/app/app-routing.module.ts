import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedinGuard } from './guards/loggedin.guard';
import { LoggedoutGuard } from './guards/loggedout.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate:[LoggedoutGuard] },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate:[LoggedoutGuard] },

  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule', canActivate:[LoggedinGuard]  },
  
  { path: 'user', loadChildren: './user/user.module#UserPageModule',canActivate:[SubscriberGuard] },

  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule',canActivate:[AdminGuard] },
  // { path: 'search-old', loadChildren: './search/search.module#SearchPageModule', canActivate:[LoggedinGuard] },
  { path: 'manage-doctors', loadChildren: './manage-doctors/manage-doctors.module#ManageDoctorsPageModule' },
  { path: 'search', loadChildren: './search-test/search-test.module#SearchTestPageModule', canActivate:[LoggedinGuard] },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  // { path: 'search-test2', loadChildren: './search-test2/search-test2.module#SearchTest2PageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
