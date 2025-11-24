import React, { useEffect } from 'react'

// 리액트 부수효과의 정의
// 1. props, state 만으로 결과가 완결되지 않고, 외부 환경과 상호작용해야 하는 작업
// 2. 렌더링 이외의 외부 상태나 시스템을 변경하거나 의존하는 작업(대표적으로 DOM 조작, 라우팅)

function Test01() {
  console.log("11111111111111111");
  useEffect(()=>console.log("222222222222222"), []);
  console.log("33333333333333333");
  
  return (
    <div>Test01</div>
  )
}

export default Test01