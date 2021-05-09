import React, { useState, useEffect } from "react";
import Profile from "./Profile";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Profile />
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
}
