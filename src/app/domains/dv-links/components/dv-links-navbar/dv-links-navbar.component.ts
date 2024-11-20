import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'dv-links-navbar',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './dv-links-navbar.component.html',
  styleUrl: './dv-links-navbar.component.scss'
})
export class DvLinksNavbarComponent {

}
