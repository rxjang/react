import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriends } from "../../common/mockData";
import FriendList from "../component/FriendList";
import { addFriend } from "../state";

export default function FriendMain() {
  const [, foreceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscirbe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if (prevFriends !== friends) {
        foreceUpdate();
      }
      prevFriends = friends;
    });
    return () => unsubscirbe();
  }, []);
  function onAdd() {
    const friend = getNextFriends();
    store.dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  const friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>Add friend</button>
      <FriendList friends={friends} />
    </div>
  );
}
