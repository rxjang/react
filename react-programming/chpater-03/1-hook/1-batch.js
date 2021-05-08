import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  /*
  초기값 지정
  useState 는 배열을 반환
  첫 번째: 상태 값
  두 번째: 상태 값 변경 함수
  */
  function onClick() {
    // setCount(count + 1);
    // setCount(count + 1);
    // 상태값 함수는 비동기이면서 배치로 처리 됨 -> 의도한 대로 동작하지 않음
    // 동기로 처리시 하나의 상태를 변경할 때마다 화면을 다시 그림 -> 성능이슈가 생길 수 있음
    // 제대로된 방법
    setCount((v) => v + 1);
    setCount((v) => v + 1);
  }
  console.log("render called");
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
