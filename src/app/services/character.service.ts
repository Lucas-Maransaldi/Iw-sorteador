import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/models/character';
import { drawWinners } from '../store/character/character.action';
import { selectWinners } from '../store/character/character.selector';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private store: Store) { }

  public drawUsers(usersToBeDraw: number): void {
    this.store.dispatch(drawWinners({quantity: usersToBeDraw}));
  };

  public getWinners(): Observable<Character[]> {
    return this.store.select(selectWinners);
  }

}
