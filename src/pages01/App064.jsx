import { useEffect, useState } from "react"
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null);
  const [count, setCount] = useState(1);

  // setUsers -> 리렌더링 -> 다시 setTimeout -> 다시 setUsers....
  const timer = setTimeout(() => {
    console.log("타이머 실행");
    setUsers([
      { id: 1, username: 'velopert', email: 'public.velopert@gmail.com', active:true },
      { id: 2, username: 'tester', email: 'tester@example.com', active:false},
      { id: 3, username: 'liz', email: 'liz@example.com', active:true }
    ]);
  }, 3000);

  if(users===null) {
    console.log("null check");
    return;
  }

  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>번호</th><th>이름</th><th>이메일</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(user=>{
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      {count}
      <button onClick={()=>setCount(count+1)}>증가</button>
    </>
  );
}

export default App