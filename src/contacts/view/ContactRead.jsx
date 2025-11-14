import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import useSWR from "swr";
import { read } from "../util/api";
import { Alert } from "react-bootstrap";

function ContactRead() {
  // 현 주소의 URLSearchParams와 업데이트 함수 리턴
  const [searchParams] = useSearchParams()
  // 주소 변경 함수를 리턴
  const navigate = useNavigate();

  const no = searchParams.get('no');

  // render 단계는 순수해야 한다(렌더링 과정에서 상태 변경이나 라우팅 변경과 같은 부수 효과를 허용하지 않는다)
  // if(!Number(no))
  //   navigate("/");

  if(no===null || no==='')
    return <Navigate to="/" />

  const {data, error, isLoading} = useSWR(['data', no], ()=>read(no), { revalidateOnFocus: false, shouldRetryOnError: false})

  if(!data)
    return;
  if(error)
    return <Alert variant="danger">{error}</Alert>
  return (
    <div>ContactRead</div>
  )
}

export default ContactRead