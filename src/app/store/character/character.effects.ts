import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { catchError, EMPTY, map, Observable, of, switchMap } from 'rxjs';

import { drawWinners, setWinners, updateCurrentUsers } from './character.action';
import { selectCurrentUsers } from './character.selector';

@Injectable()
export class CharacterEffects {

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}

  drawPlayers$: Observable<Action> = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(drawWinners),
          map((payload) => payload.quantity),
          concatLatestFrom(() => this.store.select(selectCurrentUsers)),
          switchMap(([num, currentUsers] )=> {
            const winners = [ ...currentUsers ].sort(() => 0.5 - Math.random()).slice(0, num);
            return [
              setWinners({winnersCharacters: winners}),
              updateCurrentUsers({characters: winners})
            ];
          }),
          catchError(() => EMPTY)
        )
    }
  );
 
}