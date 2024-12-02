import {createReducer, on} from '@ngrx/store';
import {DvLink} from '../../../utils/models/DvLink.model';
import * as LinksActions from '../actions/dv-links.actions';

export interface State {
  links: DvLink[];
  editableLinks: DvLink[];
}

export const initialState: State = {
  links: [],
  editableLinks: []
};

export const linksReducer = createReducer(
  initialState,
  on(LinksActions.loadLinksSuccess, (state, {links}) => ({
    ...state,
    links: [...links],
  })),
  on(LinksActions.addLink, (state, {link}) => ({
    ...state,
    links: [...state.links, link],
  })),
  on(LinksActions.removeLink, (state, {id}) => ({
    ...state,
    links: state.links.filter(link => link.id !== id),
  })),
  on(LinksActions.updateLink, (state, {link}) => ({
    ...state,
    links: state.links.map(link => link.id === link.id ? link : link),
  }))
);
