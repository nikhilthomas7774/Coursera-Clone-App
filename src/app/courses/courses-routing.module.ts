import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent}from './list/list.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [
  {path:'course',component:ListComponent},
  {path:'course/:id' ,component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
