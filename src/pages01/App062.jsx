import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(()=>{
    console.log("컴포넌트가 나타남");
    return () => {
      console.log('컴포넌트가 사라짐');
    };
  }, []);

  useEffect(()=>{
    console.log("모든 업데이트")
  });

  useEffect(()=>{
    console.log("지정된 의존성 업데이트")
  }, [count]);


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