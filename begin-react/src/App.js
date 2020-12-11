import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name='react';
  const style={
    backgroundColor:'black',
    color:'aqua',
    fontSize:24,
    padding:'1rem'
  }
  return (
    <> 
    {/* 
      jsx 문법
      - return 문에는 반드시 하나의 최상위 태그가 있어야 함 ->fragments tag사용:<Fragment> or <>
    */}
        <Hello
          //태그 내 주석 쓰는 법
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </>

  );
}

export default App;
