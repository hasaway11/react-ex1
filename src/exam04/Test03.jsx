import axios from "axios";
import { useEffect, useState } from "react";

function Test03() {
  const [data, setData] = useState(null);

  // useEffect는 콜백 함수가 아무것도 반환하지 않거나 cleanup 함수를 반환하는 것으로 정의되어 있다
  // 비동기 함수는 Promise를 반환하기 때문에 useEffect의 동작과 충돌한다
  useEffect(()=>{
    axios.get('https://contactsvc.bmaster.kro.kr/contacts?pageno=2&pagesize=4').then(res=>setData(res.data)).catch(err=>console.log(err));
  }, []);
  // 의존성 배열을 지정하지 않으면 useEffect->useState->useEffect 무한 반복된다

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const data = await readAll();
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);

  if(!data)
    return null;

  console.log(data);

  return (
    <div>{data.totalcount}</div>
  )
}

export default Test03