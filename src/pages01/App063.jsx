import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  console.log("1. 렌더링 계산 시작");

  useEffect(() => {
    console.log("3. useEffect 실행 - 이제 DOM 조작 OK!");
    document.title = `클릭 ${count}번`;
  }, [count]);  // count가 변경될 때마다 실행

  console.log("2. 렌더링 계산 끝");

  return (
    <button onClick={() => setCount(count + 1)}>
      클릭: {count}
    </button>
  );
}

export default App