import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [PageComponent, ContactComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
