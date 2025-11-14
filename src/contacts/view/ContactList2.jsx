import { useEffect, useState } from "react";
import { readAll } from "../util/api"
import { Table } from "react-bootstrap";

function ContactList() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    readAll().then(res=>setData(res)).catch(err=>console.log(err));
  }, []);

  if(data==null)
    return;

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
          data.contacts.map(c=>{
            return (
              <tr key={c.no}>
                <td>{c.no}</td>
                <td>{c.name}</td>
                <td>{c.address}</td>
                <td>{c.tel}</td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    </>
  )
}

export default ContactList