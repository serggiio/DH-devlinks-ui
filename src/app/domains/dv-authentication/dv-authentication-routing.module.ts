import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AUTH_ROUTES} from './dv-authentication.routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class DvAuthenticationRoutingModule { }
