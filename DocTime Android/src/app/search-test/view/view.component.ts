import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { DataService} from '../../services/data.service';
import { Doctor } from "../../interfaces/doctor";
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { NavController } from '@ionic/angular';

// import 'firebase/firestore';
// import { firestore } from 'firebase';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  // doctorDoc:AngularFirestoreDocument<Doctor>;
  // doctors: Observable<Doctor>;
  id:string;
  // doctor$ ;
   user:User;
  doctorDoc:AngularFirestoreDocument<Doctor>;
  doct:Observable<Doctor>;


  constructor( private auth:AuthService,private afs: AngularFirestore,private route: ActivatedRoute,private ds:DataService,private nav:NavController) {
    this.auth.user.subscribe(user => this.user = user);
    this.ds.currentMessage.subscribe( (id) => { 
      this.id=id;
    } );

   }

  ngOnInit() {
  }

   ionViewWillEnter(){
    
    
    console.log(this.id);
    // this.doctorDoc = this.afs.doc('doctors/'+this.id);
    // this.doctor = this.doctorDoc.valueChanges();

    this.doctorDoc = this.afs.doc('doctors/'+this.id);
    this.doct = this.doctorDoc.valueChanges();
  }


  delete(){
    this.afs.doc('doctors/'+this.id).delete();
    this.nav.goBack();
  }

}




