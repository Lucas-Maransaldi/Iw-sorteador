import { Action, createReducer, on } from "@ngrx/store";
import { resetCharacters, setAllCharacters, setCurrentCharacters, setWinners } from "./character.action";
import { characterInitialState, CharacterState } from "./character.state";

const reducer = createReducer(characterInitialState,
    on(setCurrentCharacters, (state, action): CharacterState => {
        return { ...state, currentUsers: action.currentCharacters };
    }),
    on(setWinners, (state, action): CharacterState => {
        return { ...state, winners: action.winnersCharacters };
    }),
    on(setAllCharacters, (state, action): CharacterState => {
        return { ...state, allUsers: action.allCharacters };
    }),
    on(resetCharacters, (state): CharacterState => {
        return { ...state, currentUsers: state.allUsers }
    })
);

export function characterReducer(state: CharacterState, action: Action): CharacterState {
    return reducer(state, action);
}