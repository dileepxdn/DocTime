import { Component, OnInit } from '@angular/core';
import instantsearch from 'instantsearch.js/dist/instantsearch'

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search: any;
  algolia=environment.algolia;


  constructor() { }

  ngOnInit() {
  }
  ionViewWillEnter(){
   

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
          <ion-card>
          <img src="{{image_url}}"/>
          <ion-card-content>
            <ion-card-title>
              {{name}}
              </ion-card-title>
            <p style="padding-top: 10px">
              {{_highlightResult.email.value}}
            </p>
            <p>
              <b>Phone:</b> 9874563210
            </p>
            <p>
              <b>About:</b>{{description}}
            </p>
        
            <b>Specializations:</b>
            <br>
            <div style="margin-bottom: 5px"></div>
            
            {{#specialization}}
              <ion-chip>
               <ion-label>{{specialist}}</ion-label>
              </ion-chip>
            {{/specialization}}
                  
            <br>
            <ion-button style="padding-top: 10px" color="dark" >View</ion-button>
                  
            
          </ion-card-content>
        </ion-card>
      
        





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


  route(){
    console.log("ok")
  }


}

