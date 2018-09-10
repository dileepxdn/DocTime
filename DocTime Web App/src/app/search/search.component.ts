import { Component, OnInit } from '@angular/core';
import {FirestoreobjService} from '../providers/firestoreobj.service';
import { Router} from '@angular/router'; 
import { environment } from 'src/environments/environment';

//testing
// import * as instantsearch from 'instantsearch.js';
import instantsearch from 'instantsearch.js/dist/instantsearch'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //testing
  search: any;


  algolia=environment.algolia;


  constructor(public router:Router,private firestoreobj:FirestoreobjService) { }

  ngOnInit() {
    //testing
    const options = environment.algolia;
    this.search = instantsearch(options);
    this.search.start();

    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'search for doctors',
        // poweredBy: true
      })
    );
  
    // initialize hits widget
    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates:{
          empty: 'No results',
          item:`
            <strong> Result : {{_highlightResult.name.value}}
          
          `
        },
      
      })
    );

    this.search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination',
        maxPages: 2,
      })
    );



  }
  view(id){
    this.firestoreobj.changeMessage(id);
    this.router.navigate(['/search/view']);

      
  }




  

 


}
