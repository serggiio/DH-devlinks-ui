import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DvAuthenticationRoutingModule} from './dv-authentication-routing.module';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DvAuthenticationRoutingModule,
        RouterModule
    ]
})
export class DvAuthenticationModule {
}
