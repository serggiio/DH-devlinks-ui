import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DvLinksNavbarComponent} from '../dv-links-navbar/dv-links-navbar.component';

@Component({
  selector: 'app-dv-links',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    DvLinksNavbarComponent
  ],
  templateUrl: './dv-links.component.html',
  styleUrl: './dv-links.component.scss'
})
export class DvLinksComponent {

}
