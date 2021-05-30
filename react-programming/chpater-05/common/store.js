import { combineReducers, createStore } from "redux";
import friendReducer from "../friend/state";
import timelineReducer from "../timeline/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default store;
