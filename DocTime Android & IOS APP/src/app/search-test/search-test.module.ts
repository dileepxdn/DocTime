import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchTestPage } from './search-test.page';

import { NgAisModule } from 'angular-instantsearch';
import { ViewComponent } from './view/view.component';
// import { NgAisInstantSearch } from "angular-instantsearch";


const routes: Routes = [
  {
    path: '',
    component: SearchTestPage
  },
  {
    path:':id',
    component:ViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgAisModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchTestPage, ViewComponent,]
})
export class SearchTestPageModule {}
