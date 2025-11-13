import { useRef, useState } from "react"

function App() {
  const [val, setVal] = useState(1);

  // useRef는 렌더링과 무관하게 값이나 DOM 요소를 기억하기 위한 훅
  // 리액트는 setter를 통해 변경을 감지하고 재렌더링을 시작한다
  // ref는 setter가 제공되지 않아 재렌더링과 무관하다
  const valRef = useRef(1);
  return (
    <div>
      <div>
        {val} vs {valRef.current}
      </div>
      <button onClick={()=>setVal(val+1)}>상태 증가</button>
      <button onClick={()=>valRef.current=valRef.current+1}>ref 증가</button>
    </div>
  )
}

export default App