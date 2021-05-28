import React, { useState } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function onClick() {
    //순사대로 동작함
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }
  const result = count1 >= count2;
  console.log(result);
  return (
    <div>
      <h2>{count1}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
