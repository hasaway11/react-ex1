import { useState } from "react";

function App() {
  // 리액트는 내부적으로 상태를 관리
  // val이란 상태가 없으면 1을 할당해 생성, 상태가 있으면 그 상태값으로 val을 덮어쓴다
  let [val, setVal] = useState(1);

  const change1=()=> {
    // 리액트 상태 갱신
    setVal(val+1);
    // but 아직 상태 변수를 읽어오지 않았다(재렌더링이 되야 useState가 실행되어 상태 변수가 업데이트된다)
    console.log(val);
  }

  const change2=()=>{
    val++;
    console.log(val);
  }
  return (
    <div>
      <button onClick={change1}>setState</button>
      {val}
      <button onClick={change2}>증가</button>
    </div>
  )
}

export default App;