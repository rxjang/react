import React, { useState, createContext } from "react";

const UserContext = createContext("unknown");

export default function App() {
  const [name, setName] = useState("Feilx");
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </UserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return (
    <UserContext.Consumer>
      {(username) => <p>{`${username}님 안녕하세요`}</p>}
    </UserContext.Consumer>
  );
}
