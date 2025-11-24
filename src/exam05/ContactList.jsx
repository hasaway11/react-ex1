import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "./utils/api"
import Contacts from "./components/Contacts";
import Paginations from "./components/Paginations";
import LoadingSpinner from "./components/LoadingSpinner";
import { Alert } from "react-bootstrap";

function ContactList() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [searchParams] = useSearchParams();
  const pageno = searchParams.get('pageno')==null? 1:searchParams.get('pageno');

  useEffect(()=>{
    setLoading(true);
    api.get(`?pagesize=10&pageno=${pageno}`).then(res=>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      if(err.status===404)
        setMessage("서버를 찾을 수 없습니다");
      setLoading(false);
    });
  }, [pageno]);

  if(isLoading)
    return <LoadingSpinner />
  if(message)
    return <Alert variant='danger'>{message}</Alert>
  if(data===null)
    return null;

  return (
    <>
      <Contacts contacts={data.contacts} />
      <Paginations pageno={data.pageno} totalcount={data.totalcount} />
    </>
  )
}

export default ContactList