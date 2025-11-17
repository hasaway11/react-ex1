import { useState } from "react";

export default function Test02() {
  const [name, setName] = useState('');
  
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
      <p>안녕하세요, {name}님!</p>
    </div>
  );
}
