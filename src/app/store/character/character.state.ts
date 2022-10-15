import { Character } from "src/models/character";

export interface CharacterState {
    allUsers: Character[];
    currentUsers: Character[];
    winners: Character[];
}

export const characterInitialState: CharacterState = {
    allUsers: [],
    currentUsers: [],
    winners: []
}