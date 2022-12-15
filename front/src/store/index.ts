import { combineReducers } from "redux";
import token from "./token";

const rootReducer = combineReducers({
  token,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
