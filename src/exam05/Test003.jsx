import { Navigate, useNavigate } from "react-router-dom";
import useLoginStore from "./useLoginStore";

function Test003() {
  const {login, setLogin, setLogout} = useLoginStore();
  const navigate = useNavigate();

  return (
    <div>
      <h1>여기는 Test3입니다</h1>
      {login && <div>로그인하셨습니다<button onClick={setLogout}>로그아웃</button></div>}
      {!login && <div>로그인이 필요합니다<button onClick={setLogin}>로그인</button></div>}
      <button onClick={()=>navigate('/test2')}>돌아가기</button>
    </div>
  )
}

export default Test003