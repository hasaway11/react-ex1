import { useRef, useState } from "react";
import data from "../data";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      { users.map(user=><User user={user} key={user.id} />) }
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

  return (
    <>
      <CreateUser handleChange={handleChange} handleCreate={handleCreate} />
      <UserList users={users} />
    </>
  )
}

export default App