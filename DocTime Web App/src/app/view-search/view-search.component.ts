import { Component, OnInit } from '@angular/core';
import {FirestoreobjService} from '../providers/firestoreobj.service';
import { Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


interface Doctor{
  name:string;
  email:string;
  id:number;
  area:string;
  image_url:string;
  experience:number;
  description:string;
  phones:[number],
  specialization:[string],
  onLeave:boolean;
  degrees:[string]
}

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {

  doctorDoc:AngularFirestoreDocument<Doctor>;
  doctor: Observable<Doctor>;

  id:string;

  constructor(private afs:AngularFirestore,private firestoreobj:FirestoreobjService,public router:Router) { }

  ngOnInit() {
    this.firestoreobj.currentMessage.subscribe( (id) => { 
      this.id=id;
    } );

    this.doctorDoc = this.afs.doc('doctors/'+this.id);
    this.doctor = this.doctorDoc.valueChanges();
  }

  select(){
    this.router.navigate(['/search']);
  }


}