import {createAction, props} from '@ngrx/store';
import {DvLink} from '../../../utils/models/DvLink.model';


export const loadLinks = createAction('[DvLink] Load DvLinks');
export const loadLinksSuccess = createAction(
  '[DvLink] Load DvLinks Success',
  props<{ links: DvLink[] }>()
);
export const loadLinksFailure = createAction(
  '[DvLink] Load DvLinks Failure',
  props<{ error: string }>()
);

export const addLink = createAction(
  '[DvLink] Add DvLink',
  props<{ link: DvLink }>()
);

export const updateLink = createAction(
  '[DvLink] Update DvLink',
  props<{ link: DvLink }>()
);

export const removeLink = createAction(
  '[DvLink] Remove DvLink',
  props<{ id: string }>()
);
