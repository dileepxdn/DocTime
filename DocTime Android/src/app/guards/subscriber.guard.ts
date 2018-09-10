import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService } from '../services/auth.service';
import { tap, map, take } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {
 
  constructor(private auth:AuthService,private router:Router,){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => user && user.roles.subscriber ? true : false),
      tap( isSubscriber => {
        if(!isSubscriber){
          alert("Acess Denied - You are not Allowed");
          this.router.navigate(['/login']);
        }
      })
    );
}
}
