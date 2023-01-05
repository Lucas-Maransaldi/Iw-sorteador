import { Character, defaultCharacters } from "src/models/character";

export interface CharacterState {
    allUsers: Character[];
    currentUsers: Character[];
    winners: Character[];
    reveled: boolean;
}

export const characterInitialState: CharacterState = {
    allUsers: defaultCharacters,
    currentUsers: defaultCharacters,
    winners: [],
    reveled: false
}