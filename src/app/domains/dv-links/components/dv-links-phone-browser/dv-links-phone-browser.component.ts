import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DvProfileInfoComponent} from '../../../common/components/dv-profile-info/dv-profile-info.component';
import {DvLinksInfoComponent} from '../../../common/components/dv-links-info/dv-links-info.component';

@Component({
  selector: 'dv-links-phone-browser',
  standalone: true,
  imports: [
    DvProfileInfoComponent,
    DvLinksInfoComponent
  ],
  templateUrl: './dv-links-phone-browser.component.html',
  styleUrl: './dv-links-phone-browser.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvLinksPhoneBrowserComponent {
  //TODO: get links
  //TODO: get profile data
}
