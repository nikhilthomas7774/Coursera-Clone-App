import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RegistrationComponent} from './login/registration/registration.component';
import {CoursesModule} from './courses/courses.module';
import {AdminModule} from './admin/admin.module';
import {BlogModule} from './blog/blog.module';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from './app-routing.module';

import { EmplyeeserviceService } from './login/employeeservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CoursesModule,
    LoginModule,
    BlogModule,
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,                            

  ],
 providers:[EmplyeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
