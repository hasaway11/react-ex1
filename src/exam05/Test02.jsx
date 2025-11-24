import { useState } from "react";

// 리액트 컴포넌트는 선 렌더링 후 업데이트를 채택 -> 사용자 경험 향상
function Test02() {
  console.log("재 렌더링");
  const [value, setValue] = useState(1);

  // React는 동일한 값으로 상태를 세팅하면 렌더링을 발생시키지 않음
  setTimeout(()=>setValue(100), 2000)

  return (
    <div>
      렌더링이 나타납니다 : {value}
    </div>
  )
}

export default Test02;


// 리액트는 사용자 경험 향상을 위해 선 렌더링 후 업데이트를 채택
// 작업이 끝날 때까지 화면 출력을 미루는 대신 일단 초기값으로 출력한 다음 업데이트하자
// UI 작업을 병렬처리하면 이러면 개발 난이도가 올라가니까 useEffect를 이용해 예약하는 방식을 채택