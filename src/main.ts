import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {isDevMode} from '@angular/core';
import {linksReducer} from './app/domains/common/core/state/reducers/dv-links.reducer';
import {LinksEffects} from './app/domains/common/core/state/effects/dv-links.effects';

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
    provideStore({links: linksReducer}),
    provideEffects([LinksEffects]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})
  ]
})
  .catch(err => console.error(err));

/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
