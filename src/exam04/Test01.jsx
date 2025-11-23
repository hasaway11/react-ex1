import { useEffect, useState } from "react";

function Test01() {
  const [state1, setState1] = useState(100);
  const [state2, setState2] = useState(200);

  useEffect(()=>{
    // 빈 배열 []: 컴포넌트가 처음 마운트될 때만 실행
    console.log("컴포넌트 초기화");
  }, []);

  useEffect(()=>{
    // 의존성 배열
    console.log("state1이 변경되었습니다");
  }, [state1])

  return (
    <div>
      <button onClick={()=>setState1(prev=>prev+1)}>{state1}</button>
      <button onClick={()=>setState2(prev=>prev+1)}>{state2}</button>
    </div>
  )
}

export default Test01