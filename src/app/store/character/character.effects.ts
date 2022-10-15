import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, EMPTY, Observable, of, switchMap } from "rxjs";
import { ADD_CHARACTERS } from "./character.action";

@Injectable()
export class CharacterEffects {

  constructor(
    private actions$: Actions,
  ) {}
 
  drawPlayers$: Observable<Action> = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(ADD_CHARACTERS),
          switchMap(() => of({type: ''})),
          catchError(() => EMPTY)
        )
    }
  );
 
}