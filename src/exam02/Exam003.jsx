import React, { useState } from 'react'

function Exam003() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleLogin = () => {
    if (email && password) {
      alert("로그인합니다");
    } else {
      setMessage('이메일과 비밀번호를 입력하세요');
    }
  };
  
  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"/>
      <button onClick={handleLogin}>로그인</button>
      <p style={{color:'red', fontSize:'0.8em'}}>{message}</p>
    </div>
  );
}

export default Exam003