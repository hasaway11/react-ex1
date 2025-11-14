import { useEffect, useState } from "react";
import { readAll } from "../util/api"

function ContactList() {
  const [data, setData] = useState(null);

  // useEffect는 콜백 함수가 아무것도 반환하지 않거나 cleanup 함수를 반환하는 것으로 정의되어 있다
  // 비동기 함수는 Promise를 반환하기 때문에 useEffect의 동작과 충돌한다
  useEffect(()=>{
    const fetchData = async () => {
      const data = await readAll();
      setData(data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>ContactList</div>
  )
}

export default ContactList