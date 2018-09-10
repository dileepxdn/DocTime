import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AfService } from '../providers/af.service';
import { tap, map, take } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(private af:AfService, private router: Router,){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return  this.af.user$.pipe(
      take(1),
      map(user => user ? false : true),
      tap( islogout => {
        if(!islogout){
          this.router.navigate(['/dashboard']);
        }
      })
    );;
  }
}
