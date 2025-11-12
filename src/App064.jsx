import { useRef, useState } from "react";
import data from "./data";

function User({user, handleDelete}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={()=>handleDelete(user.id)}>삭제</button>
    </div>
  );
}

function UserList({users, handleDelete}) {
  return (
    <div>
      { users.map(user=><User user={user} key={user.id} handleDelete={handleDelete} />) }
    </div>
  );
}

function CreateUser({handleChange, handleCreate}) {
  return (
    <div>
      <input name="username" placeholder="계정명" onChange={handleChange}/>
      <input name="email" placeholder="이메일" onChange={handleChange}/>
      <button onClick={handleCreate}>등록</button>
    </div>
  );
}

function App() {
  const nextId = useRef(4);
  const [users, setUsers] = useState(data);
  const [inputs, setInputs] = useState({username: '', email: ''});
  const { username, email } = inputs;

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setInputs(prev=>({...prev, [name]:value}));
  }

  const handleCreate=()=>{
    const newUser = {id:nextId.current, username, email};
    setUsers(prev=>[...prev, newUser])
  }

  const handleDelete=(id)=>setUsers(prev=>prev.filter(u=>u.id!==id));

  return (
    <>
      <CreateUser handleChange={handleChange} handleCreate={handleCreate} />
      <UserList users={users} handleDelete={handleDelete} />
    </>
  )
}

export default App