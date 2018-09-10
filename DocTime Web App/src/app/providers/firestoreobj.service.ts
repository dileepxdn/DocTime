import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreobjService {
  

  private messageSource = new BehaviorSubject<string>(null);
  currentMessage = this.messageSource.asObservable();



  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message);
  }


}
