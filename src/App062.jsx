import { useRef, useState } from "react";
import data from "./data";

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

function CreateUser() {
  return (
    <div>
      <input name="username" placeholder="계정명" />
      <input name="email" placeholder="이메일" />
      <button>등록</button>
    </div>
  );
}

function App() {
  const nextId = useRef(4);
  const [users, setUsers] = useState(data);
  const [inputs, setInputs] = useState({username: '', email: ''});
  const { username, email } = inputs;

  return (
    <>
      <CreateUser />
      <UserList users={users} />
    </>
  )
}

export default App