import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { FeaturesComponent } from './features/features.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RecentComponent } from './recent/recent.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [FeaturesComponent, ListComponent, DetailComponent, RecentComponent, CategoriesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
 
  ],
  exports:[
    FeaturesComponent,
   
  
  ] //export the component to the app root


  
})
export class CoursesModule { }
