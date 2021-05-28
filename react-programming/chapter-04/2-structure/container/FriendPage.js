import React, { useState } from "react";
import FriendList from "./component/FriendList";
import NumberSelect from "./component/NumberSelect";
import { getNextFriend } from "./data";

export default function FriendPage() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const friendWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label="세 이하만 보기"
        onChange={setAgeLimit}
      />
      <FriendList friends={friendWithAgeLimit} />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
