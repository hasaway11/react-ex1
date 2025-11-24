import { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import api from "./utils/api";
import { Alert, Button, Table } from "react-bootstrap";
import LoadingSpinner from "./components/LoadingSpinner";

function ContactRead() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    api.get(`/${no}`).then(res=>{
      setContact(res.data);
      setLoading(false);
    }).catch(err=>{
      console.log(err);
      setError("오류가 발생했습니다");
      setLoading(false);
    })
  }, []);

  const deleteContact=()=>{
    api.delete(`${no}`).then(res=>navigate("/")).catch(err=>console.log(err));
  }

  if(no===null) return <Navigate to="/" />
  if(!contact) return;
  if(isLoading) return <LoadingSpinner />
  if(error) return <Alert variant="danger">{error}</Alert>

  return (
     <>
      <Table bordered>
        <tbody>
          <tr>
            <td colSpan={2}>
              <img src={contact.photo} />
            </td>
          </tr>
          <tr>
            <td>이름</td><td>{contact.name}</td>
          </tr>
          <tr>
            <td>주소</td><td>{contact.address}</td>
          </tr>
          <tr>
            <td>연락처</td><td>{contact.tel}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant='outline-primary' style={{marginRight:'20px'}} onClick={()=>navigate(`/update?no=${no}`)}>변경화면으로</Button>
      <Button variant='outline-danger' onClick={deleteContact}>삭제</Button>
    </>
  )
}

export default ContactRead