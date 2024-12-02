import {DvLinkTypes} from '../enums/DvLinkTypes.enum';

export interface DvLink {
  id: string;
  created_at: Date;
  updated_at: Date;
  link: string;
  platform: DvLinkTypes;
}
