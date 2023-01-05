import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character, defaultCharacters } from 'src/models/character';
import { drawWinners, resetCharacters, setCurrentCharacters, updateWinners } from '../store/character/character.action';
import { selectAllUsers, selectCurrentUsers, selectReveled, selectWinners } from '../store/character/character.selector';

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

  public updateWinners(character: Character): void {
    this.store.dispatch(updateWinners({character: character}));
  };

  public resetUsers(): void {
    this.store.dispatch(resetCharacters());
  };

  public getReveled(): Observable<boolean> {
    return this.store.select(selectReveled);
  }

  public setCurrentUsers(): void {
    this.store.dispatch(setCurrentCharacters({currentCharacters: 
      (localStorage.getItem('currentUsers') !== 'undefined')
        ? JSON.parse(localStorage.getItem('currentUsers'))
        : defaultCharacters}))
    localStorage.getItem('currentUsers');
  }

  public getAllUsers(): Observable<Character[]> {
    return this.store.select(selectAllUsers)
  }

  public getcurrentUsers(): Observable<Character[]> {
    return this.store.select(selectCurrentUsers)
  }

}
