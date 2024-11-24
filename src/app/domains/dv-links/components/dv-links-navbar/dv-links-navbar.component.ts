import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'dv-links-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dv-links-navbar.component.html',
  styleUrl: './dv-links-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvLinksNavbarComponent {

}
