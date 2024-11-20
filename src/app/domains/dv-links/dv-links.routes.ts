import {Routes} from '@angular/router';
import {DvLinksComponent} from './components/dv-links/dv-links.component';
import {DvEditLinksComponent} from './components/dv-edit-links/dv-edit-links.component';
import {DvProfileComponent} from './components/dv-profile/dv-profile.component';

export const LINKS_ROUTES: Routes = [
  {
    path: '',
    component: DvLinksComponent,
    children: [
      {
        path: 'edit-links',
        component: DvEditLinksComponent
      },
      {
        path: 'profile',
        component: DvProfileComponent
      },
      {
        path: '',
        redirectTo: 'edit-links',
        pathMatch: 'full'
      }
    ]
  }
];
