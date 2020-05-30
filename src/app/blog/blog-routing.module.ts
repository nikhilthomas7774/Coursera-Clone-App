import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './page/page.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path:'page/:slug' ,component:PageComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
