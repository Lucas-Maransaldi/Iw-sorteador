import { createAction, props } from "@ngrx/store";
import { Character } from "src/models/character";

export const SET_CURRENT_Characters = '[Character] set current characters';
export const SET_WINNERS = '[Character] set winners characters';
export const SET_ALL_CHARACTERS = '[Character] set all characters';
export const ADD_CHARACTERS = '[Character] add characters';
export const RESET_CHARACTERS = '[Character] reset current characters';

export const setCurrentCharacters = createAction(SET_CURRENT_Characters, props<{currentCharacters: Character[]}>());
export const setWinners = createAction(SET_WINNERS, props<{winnersCharacters: Character[]}>());
export const setAllCharacters = createAction(SET_ALL_CHARACTERS, props<{allCharacters: Character[]}>());
export const resetCharacters = createAction(SET_ALL_CHARACTERS);
export const addCharacters = createAction(ADD_CHARACTERS, props<{allCharacters: Character}>());