import useAuthStore from './store/useAuthStore';

function ContactLogin() {
  const {setLogin} = useAuthStore();
  return (
    <div>
      <button onClick={setLogin}>로그인</button>
    </div>
  )
}

export default ContactLogin