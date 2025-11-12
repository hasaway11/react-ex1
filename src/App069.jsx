import { useEffect, useMemo, useRef, useState } from "react"

// 이예제는 useMeme에 적절
function App() {
  const [sal, setSal] = useState(0);
  const rate = useRef(0.033);
  const [sample, setSample] = useState(1);
  // const tax = sal * rate.current;

  // 계산이 복잡하고 무거울 때만
  const tax = useMemo(() => {
    console.log('복잡한 세금 계산 중...');
    return sal * rate.current;
  }, [sal]);

  return (
    <>
      <div>급여 : {sal}원</div>
      <div>소득세 : {tax}원</div>
      <div>{sample}</div>
      <button onClick={()=>setSal(prev=>prev+1000000)}>증가</button>
      <button onClick={()=>setSample(prev=>prev+1)}>sample증가</button>
    </>
  )
}

export default App