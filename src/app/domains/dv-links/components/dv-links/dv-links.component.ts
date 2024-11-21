import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DvLinksNavbarComponent} from '../dv-links-navbar/dv-links-navbar.component';

@Component({
  selector: 'app-dv-links',
  standalone: true,
  imports: [
    RouterOutlet,
    DvLinksNavbarComponent
  ],
  templateUrl: './dv-links.component.html',
  styleUrl: './dv-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvLinksComponent {

}
