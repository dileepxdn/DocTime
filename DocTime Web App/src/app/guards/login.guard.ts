import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AfService } from '../providers/af.service';
import { tap, map, take } from "rxjs/operators"; 
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private af:AfService,private router:Router,public snackBar: MatSnackBar){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.user$.pipe(
      take(1),
      map(user => user  ? true : false),
      tap( isLogin => {
        if(!isLogin){
          this.snackBar.open('Acess Denied - You are not Logged In', 'ok', {
            duration: 5000
          });
          this.router.navigate(['/login']);
        }
      })
    );;
  }
}
