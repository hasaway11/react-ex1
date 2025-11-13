
import React, { useCallback, useRef, useState } from "react";
import data from "../data";

const User = React.memo(function User({user, handleDelete, handleToggle}) {
  console.log("User")
  return (
    <div>
      <b style={{cursor:'pointer', color:user.active?'green':'black'}} onClick={()=>handleToggle(user.id)}>{user.username}</b> <span>({user.email})</span>
      <button onClick={()=>handleDelete(user.id)}>삭제</button>
    </div>
  );
});

const UserList=React.memo(function UserList({users, handleDelete, handleToggle}) {
  return (
    <div>
      { users.map(user=><User user={user} key={user.id} handleDelete={handleDelete} handleToggle={handleToggle}/>) }
    </div>
  );
});

const CreateUser = React.memo(function CreateUser({handleChange, handleCreate}) {
  console.log("CreateUser");
  return (
    <div>
      <input name="username" placeholder="계정명" onChange={handleChange}/>
      <input name="email" placeholder="이메일" onChange={handleChange}/>
      <button onClick={handleCreate}>등록</button>
    </div>
  );
});

function App() {
  console.log("부모 렌더링");
  const nextId = useRef(4);
  const [users, setUsers] = useState(data);
  const [inputs, setInputs] = useState({username: '', email: ''});
  const { username, email } = inputs;

  const handleChange=useCallback((e)=>{
    const {name, value} = e.target;
    setInputs(prev=>({...prev, [name]:value}));
  }, []);

  const handleCreate=useCallback(()=>{
    const newUser = {id:nextId.current, username, email};
    setUsers(prev=>[...prev, newUser])
  },[]);

  const handleDelete=useCallback((id)=>setUsers(prev=>prev.filter(u=>u.id!==id)), []);

  const handleToggle=useCallback((id)=>setUsers(prev=>prev.map(u=>u.id!==id?u: {...u, active:!u.active})), []);

  return (
    <>
      <CreateUser handleChange={handleChange} handleCreate={handleCreate} />
      <UserList users={users} handleDelete={handleDelete} handleToggle={handleToggle} />
    </>
  )
}

export default App