import React from "react";

export default function App() {
  return (
    <div>
      <div>상단 메뉴</div>
      <Profile username="mike" />
      <div>하단 메뉴</div>
    </div>
  );
}

function Profile({ username }) {
  return (
    <div>
      <Greeting username={username} />
    </div>
  );
}

function Gretting({ username }) {
  return <p>{`${usename}님 안녕하세요`}</p>;
}
