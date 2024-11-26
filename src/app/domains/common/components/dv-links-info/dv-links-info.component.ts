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
      created_at: '',
      platform: DvLinkTypes.GitHub,
      updated_at: ''
    },
    {
      id: '2',
      link: 'https://www.dvlinks.com',
      created_at: '',
      platform: DvLinkTypes.LinkedIn,
      updated_at: ''
    },
    {
      id: '3',
      link: 'https://www.dvlinks.com',
      created_at: '',
      platform: DvLinkTypes.YouTube,
      updated_at: ''
    },
    {
      id: '3',
      link: 'https://www.dvlinks.com',
      created_at: '',
      platform: DvLinkTypes.Facebook,
      updated_at: ''
    },
    {
      id: '3',
      link: 'https://www.dvlinks.com',
      created_at: '',
      platform: DvLinkTypes.GitLab,
      updated_at: ''
    }
  ];
  protected readonly DvLinkIcons = DvLinkIcons;
  protected readonly DvLinkColors = DvLinkColors;
}
