import { Component, OnInit } from '@angular/core';
import {FirestoreobjService} from '../providers/firestoreobj.service';
import { Router} from '@angular/router'; 
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  algolia=environment.algolia;
  constructor(public router:Router,private firestoreobj:FirestoreobjService) { }

  ngOnInit() {
  }

  view(id){
    this.firestoreobj.changeMessage(id);
    this.router.navigate(['/admin/view']);
  }
}
