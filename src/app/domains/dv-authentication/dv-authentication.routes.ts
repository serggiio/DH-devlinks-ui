import {Routes} from '@angular/router';
import {DvAuthenticationComponent} from './components/dv-authentication/dv-authentication.component';
import {DvLoginComponent} from './components/dv-login/dv-login.component';
import {DvRegisterComponent} from './components/dv-register/dv-register.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: DvAuthenticationComponent,
    children: [
      {
        path: 'login',
        component: DvLoginComponent
      },
      {
        path: 'register',
        component: DvRegisterComponent
      },
      /*{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }*/
    ]
  }
];
