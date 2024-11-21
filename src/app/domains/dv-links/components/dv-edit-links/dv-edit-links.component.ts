import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DvLinksEditElementComponent} from '../dv-links-edit-element/dv-links-edit-element.component';
import {NgForOf, NgIf} from '@angular/common';
import {DvLink} from '../../../common/utils/models/DvLink.model';
import {DvLinkTypes} from '../../../common/utils/enums/DvLinkTypes.enum';

@Component({
  selector: 'app-dv-edit-links',
  standalone: true,
  imports: [
    DvLinksEditElementComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './dv-edit-links.component.html',
  styleUrl: './dv-edit-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvEditLinksComponent {
  public links: DvLink[] = [
    /*{
      id: '1',
      link: '',
      created_at: '',
      platform: DvLinkTypes.Facebook,
      updated_at: ''
    },
    {
      id: '2',
      link: '',
      created_at: '',
      platform: DvLinkTypes.Facebook,
      updated_at: ''
    }*/];

  public removeLink(id: string): void {
    let index = this.links.findIndex((link: DvLink) => link.id === id);
    this.links.splice(index, 1);
  }

  public addNewLink(): void {
    this.links.push(
      {
        id: this.links.length.toString(),
        link: '',
        updated_at: '',
        created_at: (new Date()).toDateString(),
        platform: DvLinkTypes.Facebook
      }
    );
  }
}
