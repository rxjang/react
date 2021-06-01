import React from "react";
import { getNextFriends } from "../../common/mockData";
import FriendList from "../component/FriendList";
import { addFriend, setAgeLimit, setShowLimit } from "../state";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import {
  getAgeLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
  getShowLimit,
} from "./selector";

export default function FriendMain() {
  // const { ageLimit, showLimit, friendWithAgeLimit, friendWithAgeShowLimit } =
  //   useSelector(
  //     (state) => [
  //       getAgeLimit(state),
  //       getShowLimit(state),
  //       getFriendsWithAgeLimit(state),
  //       getFriendsWithAgeShowLimit(state),
  //     ],
  //     shallowEqual
  //   );
  const ageLimit = useSelector(getAgeLimit);
  const showLimit = useSelector(getShowLimit);
  const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
  const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriends();
    dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  return (
    <div>
      <button onClick={onAdd}>Add friend</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (인원 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
