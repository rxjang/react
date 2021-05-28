import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}
