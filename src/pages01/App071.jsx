import { useMemo, useRef, useState } from "react"

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

// useEffect와의 차이점
// - useEffect는 렌더링이 끝난 다음 실행
// - useMemo는 렌더링 과정 안에서 실행되어, 렌더링에 필요한 값을 즉시 계산하고 캐싱
//   즉, “이 계산을 이번 렌더링에서 다시 수행해야 하는가?”를 렌더링 전에 판단

// useMemo에서 API 통신을 한다면
// - 렌더링 도중 API 호출하면, 그 결과가 다시 렌더링을 트리거
// - side effect는 렌더링 도중 실행되면 안된다