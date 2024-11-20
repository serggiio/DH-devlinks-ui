import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LINKS_ROUTES} from './dv-links.routes';

@NgModule({
  imports: [RouterModule.forChild(LINKS_ROUTES)],
  exports: [RouterModule]
})
export class DvLinksRoutingModule {
}
