import React from "react";
import store from "../../common/store";
import { getNextFriends } from "../../common/mockData";
import FriendList from "../component/FriendList";
import { addFriend } from "../state";
import { useSelector } from "react-redux";

export default function FriendMain() {
  const friends = useSelector((state) => state.friend.friends);
  function onAdd() {
    const friend = getNextFriends();
    store.dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  return (
    <div>
      <button onClick={onAdd}>Add friend</button>
      <FriendList friends={friends} />
    </div>
  );
}
