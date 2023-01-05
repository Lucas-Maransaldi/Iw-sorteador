import { Action, createReducer, on } from "@ngrx/store";
import { resetCharacters, reveledAllCharacters, setAllCharacters, setCurrentCharacters, setWinners, updateCurrentUsers, updateWinners } from "./character.action";
import { characterInitialState, CharacterState } from "./character.state";

const reducer = createReducer(characterInitialState,
    on(setCurrentCharacters, (state, action): CharacterState => {
        return { ...state, currentUsers: action.currentCharacters };
    }),
    on(setWinners, (state, action): CharacterState => {
        return { ...state, winners: action.winnersCharacters, reveled: false };
    }),
    on(setAllCharacters, (state, action): CharacterState => {
        return { ...state, allUsers: action.allCharacters };
    }),
    on(resetCharacters, (state): CharacterState => {
        localStorage.setItem('currentUsers', JSON.stringify(state.allUsers))
        return { ...state, currentUsers: state.allUsers }
    }),
    on(reveledAllCharacters, (state): CharacterState => {
        return { ...state, reveled: !state.reveled }
    }),
    on(updateWinners, (state, action): CharacterState => {
        const updatedWinners = [...state.winners].map((winner) => {
            const cleanWinner = {...winner};
            cleanWinner.isReveled = cleanWinner.isReveled || (cleanWinner.name === action.character.name);
            return cleanWinner;
        })
        const isAllWinnersReveled = updatedWinners.every((winner) => winner.isReveled);
        return { ...state, reveled: isAllWinnersReveled, winners: updatedWinners}
    }),
    on(updateCurrentUsers, (state, action): CharacterState => {
        const updatedCurrentUsers = state.currentUsers.filter(( user ) => !action.characters.includes(user));
        localStorage.setItem('currentUsers', JSON.stringify(updatedCurrentUsers))
        return { ...state, currentUsers: updatedCurrentUsers }
    })
);

export function characterReducer(state: CharacterState, action: Action): CharacterState {
    return reducer(state, action);
}