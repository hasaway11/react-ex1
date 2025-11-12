import users from "./data"

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
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
  return (
    <>
      <CreateUser />
      { users.map(user=><User user={user} key={user.id} />) }
    </>
  )
}

export default App