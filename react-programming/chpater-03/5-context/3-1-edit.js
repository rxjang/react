import React, { createContext } from "react";

const UserContext = createContext({ userName: "unKnown", helloCount: 0 });
const SetUserContext = createContext(() => {});

export default function App() {
  const [user, setUser] = useState({ username: "Felix", helloCount: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext value={user}>
          <Profile />
        </UserContext>
      </SetUserContext.Provider>
    </div>
  );
}
