import { useCallback, useEffect, useState } from "react";

function Profile({ userId }) {
  const [user, setUser] = useState();
  const fetchAndSetUser = useCallback(
    async function (needDetail) {
      const date = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);

  if (!user) {
    return <h1>로딩...</h1>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`계정 생성일: ${user.createdAt}`}</p>
    </div>
  );
}

export default Profile;
