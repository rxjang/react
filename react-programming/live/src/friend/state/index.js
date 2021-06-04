import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../common/redux-helper";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

const ADD = "friend/ADD";
const REMOVE = "friend/REMOVE";
const EDIT = "friend/EDIT";
const SET_AGE_LIMIT = "friend/SET_AGE_LIMIT";
const SET_SHOW_LIMIT = "friend/SET_SHOW_LIMIT";
const SET_VALUE = "friend/SET_VALUE";

export const actions = {
  addFriend: (friend) => ({ type: ADD, friend }),
  removeFriend: (friend) => ({ type: REMOVE, friend }),
  editFriend: (friend) => ({ type: EDIT, friend }),
  setValue: createSetValueAction(SET_VALUE),
};

const INTIAL_STATE = {
  friends: [],
  ageLimit: MAX_AGE_LIMIT,
  showLimit: MAX_SHOW_LIMIT,
};
const friendReducer = createReducer(INTIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter(
      (friend) => friend.id !== action.friend.id
    )),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex(
      (friend) => friend.id === action.friend.id
    );
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  },
  [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
  [SET_VALUE]: setValueReducer,
});

export default friendReducer;
