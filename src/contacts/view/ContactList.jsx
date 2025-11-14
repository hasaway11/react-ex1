import { readAll } from "../util/api"
import { Alert, Table } from "react-bootstrap";
import LoadingSpinner from "../comp/LoadingSpinner";
import useSWR from "swr";
import { Link, useSearchParams } from "react-router-dom";
import Paginations from "../comp/Paginations";

const Contact=({contact})=>{
  const {no, name, address, tel} = contact;
  return (
    <tr>
      <td>{no}</td>
      <td><Link to={`/read?no=${no}`}>{name}</Link></td>
      <td>{address}</td>
      <td>{tel}</td>
    </tr>
  )
}

function ContactList() {
  const [searchParams] = useSearchParams();
  const pagenoInput = searchParams.get('pageno');
  
  // pageno가 없으면 null, pageno= 이면 ""
  // null 또는 ""를 parseInt하면 NaN, Number하면 0
  const pageno = isNaN(parseInt(pagenoInput))? 1 : parseInt(pagenoInput);

  const {data, error, isLoading } = useSWR(
    ['posts', pageno],    // 1. 캐시 키
    ()=>readAll(pageno),  // 2. 데이터 읽기 함수
    { revalidateOnFocus: false, shouldRetryOnError: false}  // 옵션
  );

  // revalidateOnFocus: false: 브라우저 탭에 다시 포커스해도 재검증 안 함
  // shouldRetryOnError: false: 에러 발생 시 자동 재시도 안 함

  if(isLoading)
    return <LoadingSpinner />
  if(!data)
    return;
  if(error)
    return <Alert variant="danger">{error}</Alert>

  return (
    <>
      <Table  hover>
        <thead>
          <tr>
            <th>번호</th><th>이름</th><th>주소</th><th>연락처</th>
          </tr>
        </thead>
        <tbody>
        {
          data.contacts.map(contact=><Contact key={contact.no} contact={contact} />)
        }
        </tbody>
      </Table>
      <Paginations pageno={pageno} pagesize={10} totalcount={data.totalcount} blocksize={5} />
    </>
  )
}

export default ContactList