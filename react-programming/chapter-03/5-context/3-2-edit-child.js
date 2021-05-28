import React, { useContext } from "react";

function Greeting() {
  const setUser = useContext(SetUserContext);
  const { username, helloCount } = useContext(UserContext);
  return (
    <React.Fragment>
      <p>{`Hello, ${username}`}</p>
      <p>{`Count Hello: ${helloCount}`}</p>
      <button onClick={() => setUser({ username, helloCount: helloCount + 1 })}>
        인사하기
      </button>
    </React.Fragment>
  );
}
