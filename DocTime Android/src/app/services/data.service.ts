import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Doctor} from '../interfaces/doctor'

@Injectable({
  providedIn: 'root'
})
export class DataService {




  private messageSource = new BehaviorSubject<string>("Loading....");
  currentMessage = this.messageSource.asObservable();



  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message);
  }


}
