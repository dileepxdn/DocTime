import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {AuthService } from '../services/auth.service';
import { tap, map, take } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class LoggedoutGuard implements CanActivate {

constructor(private auth:AuthService,private router:Router,){}



  canActivate(  
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => user ? false : true),
      tap( islogout => {
        if(!islogout){
          this.router.navigate(['/dashboard']);
        }
      })
    )
  }
}
