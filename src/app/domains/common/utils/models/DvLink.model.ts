import {DvLinkTypes} from '../enums/DvLinkTypes.enum';

export interface DvLink {
  id: string;
  created_at: string;
  updated_at: string;
  link: string;
  platform: DvLinkTypes;
}
