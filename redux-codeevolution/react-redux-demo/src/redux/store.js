import { createStore } from "redux";
import cakeReducer from "./cake/cakeReucer";

const store = createStore(cakeReducer);

export default store;
