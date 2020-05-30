import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import {LogComponent} from './log/log.component';


const routes: Routes = [

  {path:'registration',component:RegistrationComponent},
  {path:'Log',component:LogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
