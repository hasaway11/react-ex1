import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import "./paginations.css"

function Paginations({pageno, totalcount, pagesize=10, blocksize=5}) {
  const navigate = useNavigate();
  const [pages, setPages] = useState(null);

  useEffect(()=>{
    const 페이지의개수 = Math.floor((totalcount-1)/pagesize + 1);
    const prev = Math.floor((pageno-1)/blocksize) * blocksize;
    const start = prev + 1;
    let end = prev + blocksize;
    let next = end + 1;
    if(end>=페이지의개수) {
      end = 페이지의개수;
      next = 0;
    }
    const pageItem = [];
    for(let i=start; i<=end; i++) 
      pageItem.push(i);
    setPages({prev, next, pageItem});
  }, []);

  if(pages===null) return;

  return (
    <Pagination className="pagination">
    {
      pages.prev>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pages.prev}`)}>이전으로</Pagination.Item>
    }
    {
      pages.pageItem.map(p=><Pagination.Item key={p} active={pageno==p} onClick={()=>navigate(`/?pageno=${p}`)}>{p}</Pagination.Item>)
    }
    {
      pages.next>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pages.next}`)}>다음으로</Pagination.Item>
    }
    </Pagination>
  )
}

export default Paginations