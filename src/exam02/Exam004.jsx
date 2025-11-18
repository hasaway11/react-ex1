import React, { useState } from 'react'

function Exam004() {
  const [login, setLogin] = useState({email:'', password:''});
  const [message, setMessage] = useState('');

  const changeLogin=(e)=>{
    const {name, value} = e.target;
    setLogin(prev=>({...prev, [name]:value}));
  }
  
  const handleLogin = () => {
    if (login.email && login.password) {
      setMessage(`${login.email}/${login.password}로 로그인 시도!`);
    } else {
      setMessage('이메일과 비밀번호를 입력하세요');
    }
  };
  
  return (
    <div>
      <input type="email" value={login.email} onChange={changeLogin} placeholder="이메일" name='email'/>
      <input type="password" value={login.password} onChange={changeLogin} placeholder="비밀번호" name='password' />
      <button onClick={handleLogin}>로그인</button>
      <p style={{color:'red', fontSize:'0.8em'}}>{message}</p>
    </div>
  );
}

export default Exam004