import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [RegistrationComponent, LogComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
   
  ],
  exports:
  [
    RegistrationComponent,
    LogComponent
  ]
  
})
export class LoginModule { }
