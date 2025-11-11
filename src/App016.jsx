import React, { useState } from 'react'

function App() {
  const [val, setVal] = useState(0);

  const inc1=()=>{
    // 개발자에게 보이는 val을 읽어 1을 더한 다음 리액트 내부 상태를 업데이트
    // 하지만 개발자가 보는 val은 업데이트되지 않았다
    setVal(val+1);      
    setVal(val+1);      
    setVal(val+1);      
    console.log(val);   
  }

  const inc2=()=>{
    // 내부상태값을 직접 참조하는 방식
    setVal((prev)=>prev+1);
    setVal((prev)=>prev+1);
    setVal((prev)=>prev+1);
    console.log(val); 
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={inc1}>기본방식</button>
        <button onClick={inc2}>함수형 업데이트</button>
      </div>
    </div>
  )
}

export default App