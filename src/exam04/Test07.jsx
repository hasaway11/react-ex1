import { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import axios from 'axios';
import { Alert, Table } from 'react-bootstrap';
import Paginations from './Paginations';
import { useSearchParams } from 'react-router-dom';

const Contact=({contact})=>{
  const {no, name, address, tel} = contact;
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{tel}</td>
    </tr>
  )
}

function Test07() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();
  const pagenoInput = searchParams.get('pageno');
  const pageno = isNaN(parseInt(pagenoInput))? 1 : parseInt(pagenoInput);

  useEffect(()=>{
    setLoading(true);
    axios.get(`https://contactsvc.bmaster.kro.kr/contacts?pageno=${pageno}&pagesize=10`).then(res=>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      console.log(err);
      console.log(err.status)
      if(err.status===404)
        setError("서버를 찾을 수 없습니다");
      setLoading(false);
    })
  }, [pageno]);    

  if(isLoading)
    return <LoadingSpinner />
  if(error)  
    return <Alert variant='danger' style={{textAlign:'center'}}>{error}</Alert>
  if(!data)  
    return null;

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
      <Paginations totalcount={data.totalcount} pageno={data.pageno} pagesize={data.pagesize} />
    </>
  )
}

export default Test07