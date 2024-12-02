import {DvLink} from '../../utils/models/DvLink.model';

export interface AppState {
  links: DvLink[];
  editableLinks: DvLink[];
  profile: any;
}
