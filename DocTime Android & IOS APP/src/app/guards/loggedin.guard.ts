import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {AuthService } from '../services/auth.service';
import { tap, map, take } from "rxjs/operators"; 



@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
constructor(private auth:AuthService,private router:Router,){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => user  ? true : false),
      tap( isLogin => {
        if(!isLogin){
          // this.snackBar.open('Acess Denied - You are not Logged In', 'ok', {
          //   duration: 5000
          // });
          alert("not logged in")
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
