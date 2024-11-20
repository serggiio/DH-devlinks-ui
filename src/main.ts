import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'auth',
    loadChildren: () => import('./app/domains/dv-authentication/dv-authentication.module').then(m => m.DvAuthenticationModule),
  },
  {
    path: 'links',
    loadChildren: () => import('./app/domains/dv-links/dv-links.module').then(m => m.DvLinksModule),
  }
];

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
})
  .catch(err => console.error(err));

/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
