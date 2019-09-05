import { combineReducers } from "redux";
import { mainReducer } from "./matchs";

export const rootReducer = combineReducers({
  matches: mainReducer
});
