import { useEffect, useState } from "react";

function Profile({ userId }) {
  const [use, setUser] = useState();
  //   useEffect(() => {
  //     fetchUser(userId).then((data) => setUser(data));
  //   }, []);
  // 빈 배열을 추가하여 마운트 된 후에 한 번만 호출되도록 함, but useId가 변경되도 새로운 유저를 가져오지 못함.
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, [userId]);
}
