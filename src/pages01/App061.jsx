import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  console.log('count:', count);
  console.log('value:', value);

  useEffect(()=>console.log(`count는 ${count}입니다`), [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        count 증가: {count}
      </button>
      <button onClick={() => setValue(value + 1)}>
        value 증가: {value}
      </button>
    </>
  );
}

export default App