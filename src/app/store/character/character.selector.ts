import { createSelector } from "@ngrx/store";
import { Character } from "src/models/character";
import { IwState } from "../state";
import { CharacterState } from "./character.state";

const characterManagement = (state: IwState): CharacterState => state.character;

export const selectWinners = createSelector(characterManagement, (state: CharacterState): Character[] => state.winners);
export const selectCurrentUsers = createSelector(characterManagement, (state: CharacterState): Character[] => state.currentUsers);
