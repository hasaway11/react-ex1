import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 리액트 컴포넌트는 선 렌더링 후 업데이트를 채택 -> 사용자 경험 향상
function Test03() {
  console.log("재 렌더링");
  const [value, setValue] = useState(1);

  useEffect(()=>{
    setTimeout(()=>setValue(100), 2000)
  }, []);

  // location.href는 리액트 외부의 네이티브 동작
  // 브라우저는 전체 문서를 교체하며 이 시점부터 기존 리액트 앱은 언마운트되며 더 이상 실행되지 
  // if(value===1)
  //   location.href = "https://www.naver.com";

  // 안되어야하지만 리액트는 예약하는 방식으로 처리한다
  const navigate = useNavigate();
  if(value===1)
    navigate("/list");

  return (
    <div>
      렌더링이 나타납니다 : {value}
    </div>
  )
}

export default Test03;
