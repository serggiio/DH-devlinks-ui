import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dv-authentication',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './dv-authentication.component.html',
  styleUrl: './dv-authentication.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvAuthenticationComponent {

}
