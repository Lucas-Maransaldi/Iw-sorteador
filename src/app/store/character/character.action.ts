import { createAction, props } from "@ngrx/store";
import { Character } from "src/models/character";

export const SET_CURRENT_CHARACTERS = '[Character] set current characters';
export const SET_WINNERS = '[Character] set winners characters';
export const SET_ALL_CHARACTERS = '[Character] set all characters';
export const ADD_CHARACTERS = '[Character] add characters';
export const RESET_CHARACTERS = '[Character] reset current characters';
export const DRAW_WINNERS = '[Character] draw winners';

export const UPDATE_CURRENT_USERS = '[Character] update current users by winners';
export const UPDATE_CURRENT_WINNERS = '[Character] update current winners';

export const ALL_CHARACTER_REVELED = '[Character] when All characters have been reveled'


export const setCurrentCharacters = createAction(SET_CURRENT_CHARACTERS, props<{currentCharacters: Character[]}>());
export const setWinners = createAction(SET_WINNERS, props<{winnersCharacters: Character[]}>());
export const updateWinners = createAction(UPDATE_CURRENT_WINNERS, props<{character: Character}>());
export const setAllCharacters = createAction(SET_ALL_CHARACTERS, props<{allCharacters: Character[]}>());
export const resetCharacters = createAction(RESET_CHARACTERS);
export const reveledAllCharacters = createAction(ALL_CHARACTER_REVELED);
export const addCharacters = createAction(ADD_CHARACTERS, props<{allCharacters: Character}>());
export const drawWinners = createAction(DRAW_WINNERS, props<{quantity: number}>());
export const updateCurrentUsers = createAction(UPDATE_CURRENT_USERS, props<{characters: Character[]}>());