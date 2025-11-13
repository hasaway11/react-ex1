import { useRef, useState } from "react"

function App() {
  // { current: null }인 객체를 생성하여 훅 슬롯에 저장
  // 나중에 DOM에서 첫번째 ref를 연결한다
  const inputRef = useRef(null);
  const handleClick=()=>inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </div>
  )
}

export default App
