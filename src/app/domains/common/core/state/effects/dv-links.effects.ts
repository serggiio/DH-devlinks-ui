import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as LinksActions from '../actions/dv-links.actions';

@Injectable()
export class LinksEffects {
  /*loadLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LinksActions.loadLinks),
      mergeMap(() => this.linksService.getLinks()
        .pipe(
          map(links => LinksActions.loadLinksSuccess({links})),
          catchError(() => EMPTY)
        )
      )
    )
  );*/

  constructor(
    private actions$: Actions,
    //private linksService: LinksService
  ) {
  }
}
