import { combineReducers } from "redux";
import authReducer, { AuthState } from "./authReducer";

import { playerReducer } from "./playerReducer";
import { playlistReducer } from "../reducers/playlistReducer";

export interface RootReducerProps {
  auth: AuthState;
  player: any;
  playlist: any;
}

const RootReducer = combineReducers<RootReducerProps>({
  auth: authReducer,
  player: playerReducer,
  playlist: playlistReducer,
});

export default RootReducer;
