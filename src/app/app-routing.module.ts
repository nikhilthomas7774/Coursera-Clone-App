import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes:Routes=[
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
  ];


@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})



export class AppRoutingModule { }
