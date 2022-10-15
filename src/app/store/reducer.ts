import { ActionReducerMap } from "@ngrx/store";
import { characterReducer } from "./character/character.reducer";
import { IwState } from "./state";

export const IwReducers: ActionReducerMap<IwState> = {
    character: characterReducer
}
