import React, { useState } from 'react'

function Exam005() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd=()=>{
    console.log(name);
    if(!name)
      setMessage("이름을 입력하세요");
    else {
      setNames([...names, name]);
      setName('');
    }
  }

  return (
    <div>
      <ul>
        {
          names && names.map(name=><li key={name}>{name}</li>)
        }
      </ul>
      이름:<input value={name} onChange={e=>setName(e.target.value)} placeholder="이름" name='email'/>
      <button onClick={handleAdd}>이름 추가</button>
      <p style={{color:'red', fontSize:'0.8em'}}>{message}</p>
    </div>
  )
}

export default Exam005