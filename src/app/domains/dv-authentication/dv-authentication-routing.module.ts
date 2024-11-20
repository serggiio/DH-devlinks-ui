import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from './dv-authentication.routes';

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class DvAuthenticationRoutingModule {
}
