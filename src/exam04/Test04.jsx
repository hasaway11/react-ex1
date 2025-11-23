import { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import axios from 'axios';
import { Alert } from 'react-bootstrap';


function Test04() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=>{
    setLoading(true);
    axios.get('https://contactsvc.bmaster.kro.kr/contacts1').then(res=>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      console.log(err);
      console.log(err.status)
      if(err.status===404)
        setError("서버를 찾을 수 없습니다");
      setLoading(false);
    })
  }, []);    

  if(isLoading)
    return <LoadingSpinner />
  if(error)  
    return <Alert variant='danger' style={{textAlign:'center'}}>{error}</Alert>
  if(!data)  
    return null;

  return (
    <div>{data.totalcount}</div>
  )
}

export default Test04