import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReucer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
