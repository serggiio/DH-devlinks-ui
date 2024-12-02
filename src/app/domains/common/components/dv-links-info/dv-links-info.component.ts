import {Component, Input} from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';
import {DvLink} from '../../utils/models/DvLink.model';
import {DvLinkIcons} from '../../utils/constants/DvLinkIcons.constant';
import {DvLinkTypes} from '../../utils/enums/DvLinkTypes.enum';
import {DvLinkColors} from '../../utils/constants/DvLinkColors.constant';

@Component({
  selector: 'dv-links-info',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './dv-links-info.component.html',
  styleUrl: './dv-links-info.component.scss'
})
export class DvLinksInfoComponent {
  @Input() links: DvLink [] = [
    {
      id: '1',
      link: 'https://www.dvlinks.com',
      created_at: new Date(),
      platform: DvLinkTypes.GitHub,
      updated_at: new Date()
    },
    {
      id: '2',
      link: 'https://www.dvlinks.com',
      created_at: new Date(),
      platform: DvLinkTypes.LinkedIn,
      updated_at: new Date()
    },
    {
      id: '3',
      link: 'https://www.dvlinks.com',
      created_at: new Date(),
      platform: DvLinkTypes.YouTube,
      updated_at: new Date()
    },
    {
      id: '3',
      link: 'https://www.dvlinks.com',
      created_at: new Date(),
      platform: DvLinkTypes.Facebook,
      updated_at: new Date()
    },
    {
      id: '3',
      link: 'https://www.dvlinks.com',
      created_at: new Date(),
      platform: DvLinkTypes.GitLab,
      updated_at: new Date()
    }
  ];
  protected readonly DvLinkIcons = DvLinkIcons;
  protected readonly DvLinkColors = DvLinkColors;
}
