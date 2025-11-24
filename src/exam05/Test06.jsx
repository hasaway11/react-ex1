import { useNavigate } from "react-router-dom";
import useLoginStore from "./useLoginStore";

function Test06() {
  const {login, setLogin, setLogout} = useLoginStore();
  const navigate = useNavigate();

  const moveTo = ()=>navigate("/t6_1");
  
  return (
    <div>
      {login && <div>로그인하셨습니다<button onClick={setLogout}>로그아웃</button></div>}
      {!login && <div>로그인이 필요합니다<button onClick={setLogin}>로그인</button></div>}
      <button onClick={moveTo}>이동하기</button>
    </div>
  )
}

export default Test06